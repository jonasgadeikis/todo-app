<?php

namespace App\Controller;

use App\Service\TaskService;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
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
     * @param TaskService $taskService
     * @return JsonResponse
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function createTask(Request $request, TaskService $taskService)
    {
        $data = json_decode($request->getContent(), true);
        $response = $taskService->create($data);

        return $this->json($response);
    }

    /**
     * @Route("/get", name="get")
     * @param Request $request
     * @param TaskService $taskService
     * @return array|string
     */
    public function getTask(Request $request, TaskService $taskService)
    {
        $data = $request->query->get('board');
        $response = $taskService->get($data);

        return $this->json($response);
    }

    /**
     * @Route("/complete", name="complete")
     * @param Request $request
     * @param TaskService $taskService
     * @return JsonResponse
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function completeTask(Request $request, TaskService $taskService)
    {
        $data = json_decode($request->getContent(), true);
        $response = $taskService->complete($data);

        return $this->json($response);
    }

    /**
     * @Route("/block", name="block")
     * @param Request $request
     * @param TaskService $taskService
     * @return JsonResponse
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function blockTask(Request $request, TaskService $taskService)
    {
        $data = json_decode($request->getContent(), true);
        $response = $taskService->block($data);

        return $this->json($response);
    }

    /**
     * @Route("/unblock", name="unblock")
     * @param Request $request
     * @param TaskService $taskService
     * @return JsonResponse
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function unblockTask(Request $request, TaskService $taskService)
    {
        $data = json_decode($request->getContent(), true);
        $response = $taskService->unblock($data);

        return $this->json($response);
    }

    /**
     * @Route("/start", name="start")
     * @param Request $request
     * @param TaskService $taskService
     * @return JsonResponse
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function startTask(Request $request, TaskService $taskService)
    {
        $data = json_decode($request->getContent(), true);
        $response = $taskService->start($data);

        return $this->json($response);
    }

    /**
     * @Route("/reopen", name="reopen")
     * @param Request $request
     * @param TaskService $taskService
     * @return JsonResponse
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function reopenTask(Request $request, TaskService $taskService)
    {
        $data = json_decode($request->getContent(), true);
        $response = $taskService->reopen($data);

        return $this->json($response);
    }

    /**
     * @Route("/stop", name="stop")
     * @param Request $request
     * @param TaskService $taskService
     * @return JsonResponse
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function stopTask(Request $request, TaskService $taskService)
    {
        $data = json_decode($request->getContent(), true);
        $response = $taskService->stop($data);

        return $this->json($response);
    }
}
