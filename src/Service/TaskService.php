<?php

namespace App\Service;

use App\Entity\Task;
use Doctrine\ORM\EntityManagerInterface;

class TaskService
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function create($data)
    {
        $task = new Task();
        $task->setDescription($data['description']);

        $em = $this->em;
        $em->persist($task);
        $em->flush();

        return array(
            'message' => 'Task was created successfully',
        );
    }
}