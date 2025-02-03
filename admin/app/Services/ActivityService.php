<?php

namespace App\Services;

use App\Models\Activity;
use App\Domain\ActivityRepositoryInterface;

class ActivityService{
    private ActivityRepositoryInterface $activityRepository;

    public function __construct(ActivityRepositoryInterface $activityRepository){
        $this->activityRepository = $activityRepository;
    }


    /**
     * @param string $module
     * @param string $action
     * @return void
     */
    public function createActivity(string $module, string $action): void{
        $data = [
            'module' => $module,
            'action' => $action,
        ];  
        $this->activityRepository->save($data);
    }
}