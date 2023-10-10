 <!-- sidebar -->
 <div class="nk-sidebar">
    <div class="nk-nav-scroll">
        <ul class="metismenu" id="menu">
            <li class="nav-label">Main</li>
            <li class="{{ $menu == 'dashboard' ? 'active' : '' }}"><a href="{{ route('dashboard') }}"><i class=" mdi mdi-view-dashboard"></i> <span class="nav-text">Tableau de bord</span></a>
            </li>


            <li class="nav-label">Inscriptions</li>

            <li class="{{ $menu == 'user' ? 'active' : '' }}">
                <a class="has-arrow" href="#" aria-expanded="false"><i class="icon-user-7"></i> <span class="nav-text">Inscriptions</span></a>
                <ul aria-expanded="false">
                    <li><a href="{{ route('user.create') }}" class="{{ request()->routeIs('user.create') ? 'active' : '' }}"><i class=" icon-plus-outline"></i> Ajouter un compte</a>
                    </li>
                    <li>
                        <a href="{{ route('user.index') }}" class="{{ request()->routeIs('user.index') ? 'active' : '' }}"><i class=" icon-database-2"></i>Liste des inscriptions</a>
                    </li>
                </ul>
            </li>
            
            <li class="nav-label">Divertissements</li>

            <li class="{{ $menu == 'categorieplan' ? 'active' : '' }}">
                <a class="has-arrow" href="#" aria-expanded="false"><i class=" icon-tag-6"></i> <span class="nav-text">Catégories</span></a>
                <ul aria-expanded="false">
                    <li>
                        <a href="#" data-toggle="modal" data-target="#modalAddCategorie" class="{{ request()->routeIs('bonplan.categorie.create') ? 'active' : '' }}"><i class=" icon-plus-outline"></i> Ajouter une catégorie</a>
                    </li>
                    <li>
                        <a href="{{ route('bonplan.categorie.index') }}" class="{{ request()->routeIs('bonplan.categorie.index') ? 'active' : '' }}"><i class=" icon-database-2"></i> Liste des catégories</a>
                    </li>
                </ul>
            </li>
            <li class="">
                <a class="has-arrow" href="#" aria-expanded="false"><i class=" icon-attach-6"></i> <span class="nav-text">Commodités</span></a>
                <ul aria-expanded="false">
                    <li>
                        <a href="#" data-toggle="modal" data-target="#modalAddCommodite" class="{{ request()->routeIs('bonplan.commodites.create') ? 'active' : '' }}"><i class=" icon-plus-outline"></i> Ajouter une commodité</a>
                    </li>
                    <li>
                        <a href="{{ route('bonplan.commodite.index') }}" class="{{ request()->routeIs('bonplan.commodites.index') ? 'active' : '' }}"><i class=" icon-database-2"></i> Liste des commodités</a>
                    </li>
                </ul>
            </li>
            <li class="{{ $menu == 'bonplan' ? 'active' : '' }}">
                <a class="has-arrow" href="#" aria-expanded="false"><i class=" icon-location-6"></i> <span class="nav-text">Endroits</span></a>
                <ul aria-expanded="false">
                    <li>
                        <a href="{{ route('bonplan.create') }}" class="{{ request()->routeIs('bonplan.create') ? 'active' : '' }}"><i class=" icon-plus-outline"></i> Ajouter un endroit</a>
                    </li>
                    <li>
                        <a href="{{ route('bonplan.index') }}" class="{{ request()->routeIs('bonplan.index') ? 'active' : '' }}"><i class=" icon-database-2"></i> Liste des endroits</a>
                    </li>
                    <li>
                        <a href="{{ route('deal.index') }}" class="{{ request()->routeIs('deal.index') ? 'active' : '' }}"><i class=" icon-database-2"></i> Prémiums</a>
                    </li>
                </ul>
            </li>
            {{--<li class="{{ $menu == 'specialite' ? 'active' : '' }}">
                <a class="has-arrow" href="#" aria-expanded="false"><i class="icon-food-1"></i> <span class="nav-text">Spécialités</span></a>
                <ul aria-expanded="false">
                    <li>
                        <a href="{{ route('offer.create') }}" class="{{ request()->routeIs('offer.create') ? 'active' : '' }}"><i class=" icon-plus-outline"></i> Ajouter une spécialité</a>
                    </li>
                    <li>
                        <a href="{{ route('offer.index') }}" class="{{ request()->routeIs('offer.index') ? 'active' : '' }}"><i class=" icon-database-2"></i> Liste des spécialités</a>
                    </li>
                </ul>
            </li>--}}
            <li class="nav-label">Paramètres</li>    
            <li class="{{ $menu == 'admin' ? 'active-page' : '' }}">
                <a class="has-arrow" href="#" aria-expanded="false"><i class=" icon-user-7"></i> <span class="nav-text">Utilisateurs</span></a>
                <ul aria-expanded="false">
                    <li>
                        <a href="{{ route('admin.create') }}" class="{{ request()->routeIs('admin.create') ? 'active' : '' }}"><i class=" icon-plus-outline"></i> Ajouter un utilisateur</a>
                    </li>
                    <li>
                        <a href="{{ route('admin.index') }}" class="{{ request()->routeIs('admin.index') ? 'active' : '' }}"><i class=" icon-database-2"></i> Liste des utilisateurs</a>
                    </li>
                </ul>
            </li>
            <li><a class="has-arrow" href="#" aria-expanded="false"><i class=" icon-cloud-5"></i> <span class="nav-text">Espace</span></a>
                <ul aria-expanded="false">
                    <li><a href="#"><i class=" icon-plus-outline"></i> Ajouter un espace</a></li>
                    <li><a href="#"><i class=" icon-database-2"></i> Liste des espaces</a></li>
                </ul>
            </li>
            <li><a class="has-arrow" href="#" aria-expanded="false"><i class=" icon-wallet"></i> <span class="nav-text">Forfaits</span></a>
                <ul aria-expanded="false">
                    <li><a href="#"><i class=" icon-plus-outline"></i> Ajouter un forfait</a></li>
                    <li><a href="#"><i class=" icon-database-2"></i> Liste des forfaits</a></li>
                </ul>
            </li>
            <li><a class="has-arrow" href="#" aria-expanded="false"><i class=" icon-globe-5"></i> <span class="nav-text">Site web</span></a>
                <ul aria-expanded="false">
                    <li><a href="#"><i class="icon_set_1_icon-64"></i> Accueil</a>
                    </li>
                    <li><a href="{{ route('banner.index') }}" class="{{ request()->routeIs('banner.index') ? 'active' : '' }}"><i class="icon-database-2"></i> Bannières</a>
                    </li>
                </ul>
            </li>
            <li class="#">
                <a href="#"><i class=" icon-mail-6"></i> <span class="nav-text">Newsletters</span></a>
            </li>
            <li class="#">
                <a href="#"><i class="fas fa-history"></i> <span class="nav-text">Historique d'activité</span></a>
            </li>
            <li class="{{ $menu == 'setting' ? 'active-page' : '' }}">
                <a href="{{ route('setting.index') }}"><i class="icon-cog-5"></i> <span class="nav-text">Configuration</span></a>
            </li>
        </ul>
    </div>
    <!-- #/ nk nav scroll -->
</div>
<!-- #/ sidebar -->
@include('pages.bonplan.categorie.modal')
@include('pages.bonplan.commodite.modal')