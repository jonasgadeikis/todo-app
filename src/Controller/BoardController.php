<?php

namespace App\Controller;

use App\Service\BoardService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class BoardController
 * @package App\Controller
 * @Route("/api/board", name="api_board_")
 */
class BoardController extends AbstractController
{
    /**
     * @Route("/get", name="get")
     * @param BoardService $boardService
     * @return JsonResponse
     */
    public function getBoard(BoardService $boardService)
    {
        $response = $boardService->get();

        return $this->json($response);
    }
}
