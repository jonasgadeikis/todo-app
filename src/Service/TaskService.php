<?php

namespace App\Service;

use App\Entity\Task;
use App\Repository\TaskRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;

class TaskService
{
    /**
     * @var TaskRepository
     */
    private $taskRepository;

    public function __construct(TaskRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    /**
     * @param $data
     * @return array
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function create($data)
    {
        $task = new Task();
        $task->setName($data['name']);
        $task->setDescription($data['description']);
        $task->setPriority($data['priority']);

        return $this->taskRepository->save($task);
    }

    /**
     * @param $data
     * @return array
     */
    public function get($data)
    {
        $tasks = $this->taskRepository->findBy(['board' => $data]);
        $data = [];

        foreach ($tasks as $task) {
            $data[] = [
                'id' => $task->getId(),
                'name' => $task->getName(),
                'description' => $task->getDescription(),
                'priority' => $task->getPriority(),
                'isInProgress' => $task->getIsInProgress(),
                'isCompleted' => $task->getIsCompleted(),
                'isBlocked' => $task->getIsBlocked(),
            ];
        }

        return $data;
    }

    /**
     * @param $data
     * @return array
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function complete($data)
    {
        $task = $this->taskRepository->find($data['taskId']);
        $task->setIsCompleted(true);
        $task->setIsInProgress(false);

        return $this->taskRepository->save($task);
    }

    /**
     * @param $data
     * @return array
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function block($data)
    {
        $task = $this->taskRepository->find($data['taskId']);
        $task->setIsBlocked(true);
        $task->setIsInProgress(false);

        return $this->taskRepository->save($task);
    }

    /**
     * @param $data
     * @return array
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function unblock($data)
    {
        $task = $this->taskRepository->find($data['taskId']);
        $task->setIsBlocked(false);
        $task->setIsInProgress(true);

        return $this->taskRepository->save($task);
    }

    /**
     * @param $data
     * @return array
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function start($data)
    {
        $task = $this->taskRepository->find($data['taskId']);
        $task->setIsInProgress(true);

        return $this->taskRepository->save($task);
    }

    /**
     * @param $data
     * @return array
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function reopen($data)
    {
        $task = $this->taskRepository->find($data['taskId']);
        $task->setIsCompleted(false);

        return $this->taskRepository->save($task);
    }

    /**
     * @param $data
     * @return array
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function stop($data)
    {
        $task = $this->taskRepository->find($data['taskId']);
        $task->setIsInProgress(false);

        return $this->taskRepository->save($task);
    }
}