<?php


namespace App\Service;


use App\Repository\BoardRepository;

class BoardService
{
    /**
     * @var BoardRepository
     */
    private $boardRepository;

    public function __construct(BoardRepository $boardRepository)
    {
        $this->boardRepository = $boardRepository;
    }

    /**
     * @return array
     */
    public function get()
    {
        $boards = $this->boardRepository->findAll();
        $data = [];

        foreach ($boards as $board) {
            $data[] = [
                'id' => $board->getId(),
                'name' => $board->getName(),
            ];
        }

        return $data;
    }
}