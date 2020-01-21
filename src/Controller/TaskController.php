<?php

namespace App\Controller;

use App\Repository\TaskRepository;
use App\Service\TaskService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class TaskController
 * @package App\Controller
 * @Route("/api/task", name="api_task_")
 */
class TaskController extends AbstractController
{
    /**
     * @Route("/create", name="create")
     * @param Request $request
     * @return JsonResponse
     */
    public function createTask(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $entityManager = $this->getDoctrine()->getManager();
        $service = new TaskService($entityManager);
        $response = $service->create($data);

        return $this->json($response);
    }

    /**
     * @Route("/get", name="get")
     * @param TaskRepository $taskRepository
     * @return array|string
     */
    public function getTask(TaskRepository $taskRepository)
    {
        $tasks = $taskRepository->findAll();
        $response = [];

        foreach ($tasks as $task) {
            $response[] = [
                'id' => $task->getId(),
                'name' => $task->getDescription(),
                'isCompleted' => $task->getIsCompleted(),
                'isBlocked' => $task->getIsBlocked(),
            ];
        }

        return $this->json($response);
    }

    /**
     * @Route("/complete", name="complete")
     * @param Request $request
     * @param TaskRepository $taskRepository
     * @return JsonResponse
     */
    public function completeTask(Request $request, TaskRepository $taskRepository)
    {
        $data = json_decode($request->getContent(), true);
        $entityManager = $this->getDoctrine()->getManager();
        $service = new TaskService($entityManager);
        $response = $service->complete($data, $taskRepository);

        return $this->json($response);
    }

    /**
     * @Route("/block", name="block")
     * @param Request $request
     * @param TaskRepository $taskRepository
     * @return JsonResponse
     */
    public function blockTask(Request $request, TaskRepository $taskRepository)
    {
        $data = json_decode($request->getContent(), true);
        $entityManager = $this->getDoctrine()->getManager();
        $service = new TaskService($entityManager);
        $response = $service->block($data, $taskRepository);

        return $this->json($response);
    }

    /**
     * @Route("/unblock", name="unblock")
     * @param Request $request
     * @param TaskRepository $taskRepository
     * @return JsonResponse
     */
    public function unblockTask(Request $request, TaskRepository $taskRepository)
    {
        $data = json_decode($request->getContent(), true);
        $entityManager = $this->getDoctrine()->getManager();
        $service = new TaskService($entityManager);
        $response = $service->unblock($data, $taskRepository);

        return $this->json($response);
    }
}
