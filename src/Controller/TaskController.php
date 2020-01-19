<?php

namespace App\Controller;

use App\Repository\TaskRepository;
use App\Service\TaskService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class TaskController extends AbstractController
{
    /**
     * @Route("/api/createTask", name="api_create_task")
     * @param Request $request
     * @return JsonResponse
     */
    public function createTask(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $em = $this->getDoctrine()->getManager();
        $service = new TaskService($em);
        $response = $service->create($data);

        return new JsonResponse($response);
    }

    /**
     * @Route("/api/getTask", name="api_get_task")
     * @param TaskRepository $taskRepository
     * @return JsonResponse
     */
    public function getTask(TaskRepository $taskRepository)
    {
        $tasks = $taskRepository->findAll();
        $data = [];

        foreach ($tasks as $task) {
            $data[] = [
                'id' => $task->getId(),
                'name' => $task->getDescription(),
                'completed' => $task->getCompleted(),
            ];
        }

        return new JsonResponse($data);
    }

    /**
     * @Route("/api/completeTask", name="api_complete_task")
     * @param Request $request
     * @param TaskRepository $taskRepository
     * @return JsonResponse
     */
    public function completeTask(Request $request, TaskRepository $taskRepository)
    {
        $data = json_decode($request->getContent(), true);
        $em = $this->getDoctrine()->getManager();
        $task = $taskRepository->find($data['taskId']);

        $task->setCompleted(true);
        $em->flush();

        return new JsonResponse([
            'message' => 'Task is now completed.',
        ]);
    }
}
