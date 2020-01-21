<?php

namespace App\Service;

use App\Entity\Task;
use App\Repository\TaskRepository;
use Doctrine\Persistence\ObjectManager;

class TaskService
{
    private $entityManager;

    /**
     * @var TaskRepository
     */
    protected $taskRepository;

    public function __construct(ObjectManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function create($data)
    {
        $task = new Task();
        $task->setDescription($data['description']);

        $this->entityManager->persist($task);
        $this->entityManager->flush();

        return array(
            'message' => 'Task was created successfully',
        );
    }

    public function complete($data, TaskRepository $taskRepository)
    {
        $task = $taskRepository->find($data['taskId']);
        $task->setIsCompleted(true);

        $this->entityManager->flush();

        return array(
            'message' => 'Task is now completed',
        );
    }

    public function block($data, TaskRepository $taskRepository)
    {
        $task = $taskRepository->find($data['taskId']);
        $task->setIsBlocked(true);

        $this->entityManager->flush();

        return array(
            'message' => 'Task was blocked successfully',
        );
    }

    public function unblock($data, TaskRepository $taskRepository)
    {
        $task = $taskRepository->find($data['taskId']);
        $task->setIsBlocked(false);

        $this->entityManager->flush();

        return array(
            'message' => 'Task was unblocked successfully',
        );
    }
}