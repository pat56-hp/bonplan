<div class="app-sidebar">
    <div class="logo">
        <a href="index-2.html" class="logo-icon" style="background: url({{ $setting->logo }})"><span class="logo-text">Les bons plans</span></a>
        <div class="sidebar-user-switcher user-activity-online">
            <a href="{{ route('dashboard') }}">
                <img src="{{asset('assets/images/avatars/avatar2.png')}}">
                <span class="activity-indicator"></span>
                <span class="user-info-text">{{ auth()->user()->name.' '.auth()->user()->lastname }}<br><span class="user-state-info">{{ auth()->user()->role }}</span></span>
            </a>
        </div>
    </div>
    <div class="app-menu">
        <ul class="accordion-menu">
            <li class="{{ $menu == 'dashboard' ? 'active-page' : '' }}">
                <a href="{{ route('dashboard') }}" class="{{ $menu == 'dashboard' ? 'active' : '' }}"><i class="material-icons-two-tone">dashboard</i> Tableau de bord</a>
            </li>
            <li class="{{ $menu == 'user' ? 'active-page' : '' }}">
                <a href="#" class="{{ $menu == 'user' ? 'active' : '' }}"><i class="material-icons-two-tone">person_add</i> Inscriptions <i class="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                <ul class="sub-menu">
                    <li>
                        <a href="{{ route('user.create') }}" class="{{ request()->routeIs('user.create') ? 'active' : '' }}">Ajouter un compte</a>
                    </li>
                    <li>
                        <a href="{{ route('user.index') }}" class="{{ request()->routeIs('user.index') ? 'active' : '' }}">Liste des inscriptions</a>
                    </li>
                </ul>
            </li>
            <li class="sidebar-title">
                Bons plans
            </li>
            <li class="{{ $menu == 'commune' ? 'active-page' : '' }}">
                <a href="{{ route('commune.index') }}" class="class="{{ $menu == 'commune' ? 'active' : '' }}""><i class="material-icons-two-tone">emoji_transportation</i>Communes</a>
            </li>
            <li class="{{ $menu == 'categorieplan' ? 'active-page' : '' }}">
                <a href="{{ route('bonplan.categorie.index') }}" class="{{ $menu == 'categorieplan' ? 'active' : '' }}"><i class="material-icons-two-tone">category</i>Catégories</a>
            </li>
            <li class="{{ $menu == 'bonplan' ? 'active-page' : '' }}">
                <a href="#" class="{{ $menu == 'bonplan' ? 'active' : '' }}"><i class="material-icons-two-tone">my_location</i> Divertissements <i class="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                <ul class="sub-menu">
                    <li>
                        <a href="{{ route('bonplan.create') }}" class="{{ request()->routeIs('bonplan.create') ? 'active' : '' }}">Ajouter un endroit</a>
                    </li>
                    <li>
                        <a href="{{ route('bonplan.index') }}" class="{{ request()->routeIs('bonplan.index') ? 'active' : '' }}">Liste des endroits</a>
                    </li>
                    <li>
                        <a href="{{ route('offer.index') }}" class="{{ request()->routeIs('offer.index') ? 'active' : '' }}">Liste des offres</a>
                    </li>
                    <li>
                        <a href="{{ route('deal.index') }}" class="{{ request()->routeIs('deal.index') ? 'active' : '' }}">Plans de la semaines</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#"><i class="material-icons-two-tone">shopping_cart</i>Réservations</a>
            </li>
            <li class="sidebar-title">
                Activités
            </li>
            <li class="{{ $menu == 'admin' ? 'active-page' : '' }}">
                <a href="#" class="{{ $menu == 'admin' ? 'active' : '' }}"><i class="material-icons-two-tone">newspaper</i> Articles<i class="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                <ul class="sub-menu">
                    <li>
                        <a href="{{ route('admin.create') }}" class="{{ request()->routeIs('admin.create') ? 'active' : '' }}">Ajouter un utilisateur</a>
                    </li>
                    <li>
                        <a href="{{ route('admin.index') }}" class="{{ request()->routeIs('admin.index') ? 'active' : '' }}">Liste des utilisateurs</a>
                    </li>
                </ul>
            </li>
            <li class="{{ $menu == 'event' ? 'active-page' : '' }}">
                <a href="#" class="{{ $menu == 'admin' ? 'active' : '' }}"><i class="material-icons-two-tone">event</i> Evênements<i class="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                <ul class="sub-menu">
                    <li>
                        <a href="{{ route('events.create') }}" class="{{ request()->routeIs('events.create') ? 'active' : '' }}">Ajouter un évènement</a>
                    </li>
                    <li>
                        <a href="{{ route('events.index') }}" class="{{ request()->routeIs('events.index') ? 'active' : '' }}">Liste des évènements</a>
                    </li>
                    <li>
                        <a href="{{ route('events.categorie.index') }}" class="{{ request()->routeIs('events.categorie.index') ? 'active' : '' }}">Liste des catégories</a>
                    </li>
                </ul>
            </li>
            <li class="sidebar-title">
                Configuration
            </li>
            <li class="{{ $menu == 'admin' ? 'active-page' : '' }}">
                <a href="#" class="{{ $menu == 'admin' ? 'active' : '' }}"><i class="material-icons-two-tone">account_circle</i> Utilisateurs <i class="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                <ul class="sub-menu">
                    <li>
                        <a href="{{ route('admin.create') }}" class="{{ request()->routeIs('admin.create') ? 'active' : '' }}">Ajouter un utilisateur</a>
                    </li>
                    <li>
                        <a href="{{ route('admin.index') }}" class="{{ request()->routeIs('admin.index') ? 'active' : '' }}">Liste des utilisateurs</a>
                    </li>
                </ul>
            </li>
            <li class="{{ $menu == 'admin' ? 'active-page' : '' }}">
                <a href="#" class="{{ $menu == 'admin' ? 'active' : '' }}"><i class="material-icons-two-tone">payments</i> Forfaits <i class="material-icons has-sub-menu">keyboard_arrow_right</i></a>
                <ul class="sub-menu">
                    <li>
                        <a href="{{ route('admin.create') }}" class="{{ request()->routeIs('admin.create') ? 'active' : '' }}">Ajouter un utilisateur</a>
                    </li>
                    <li>
                        <a href="{{ route('admin.index') }}" class="{{ request()->routeIs('admin.index') ? 'active' : '' }}">Liste des utilisateurs</a>
                    </li>
                </ul>
            </li>
            <li class="{{ $menu == 'setting' ? 'active-page' : '' }}">
                <a href="{{ route('setting.index') }}"><i class="material-icons-two-tone">settings</i>Paramètres</a>
            </li>
            <li class="{{ $menu == 'setting' ? 'active-page' : '' }}">
                <a href="{{ route('setting.index') }}"><i class="material-icons-two-tone">email</i>Newsletters</a>
            </li>
            <li>
                <a href="#"><i class="material-icons-two-tone">access_time</i>Historique d'activité</a>
            </li>
        </ul>
    </div>
</div>