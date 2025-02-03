<?php

namespace App\Providers;

use App\Models\Setting;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use App\Domain\{
    ActivityRepositoryInterface,
    EtablissementRepositoryInterface,
    ClientRepositoryInterface,
};
use App\Repositories\{
    ActivityRepository,
    EtablissementRepository,
    ClientRepository
};

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(ActivityRepositoryInterface::class, ActivityRepository::class);
        $this->app->bind(EtablissementRepositoryInterface::class, EtablissementRepository::class);
        $this->app->bind(ClientRepositoryInterface::class, ClientRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        View::share('setting', Setting::first());
    }
}
