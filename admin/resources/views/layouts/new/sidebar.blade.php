 <!-- sidebar -->
 <div class="nk-sidebar">
    <div class="nk-nav-scroll">
        <ul class="metismenu" id="menu">
            <li class="nav-label">Main</li>
            <li class="{{ $menu == 'dashboard' ? 'active' : '' }}"><a href="{{ route('dashboard') }}"><i class=" mdi mdi-view-dashboard"></i> <span class="nav-text">Tableau de bord</span></a>
            </li>


            <li class="nav-label">Inscriptions</li>

            <li class="{{ $menu == 'client' ? 'active' : '' }}">
                <a class="has-arrow" href="#" aria-expanded="false"><i class="icon-user-7"></i> <span class="nav-text">Inscriptions</span></a>
                <ul aria-expanded="false">
                    <li><a href="{{ route('clients.create') }}" class="{{ request()->routeIs('clients.create') ? 'active' : '' }}"><i class=" icon-plus-outline"></i> Ajouter un compte</a>
                    </li>
                    <li>
                        <a href="{{ route('clients.index') }}" class="{{ request()->routeIs('clients.index') ? 'active' : '' }}"><i class=" icon-database-2"></i>Liste des comptes</a>
                    </li>
                </ul>
            </li>
            
            <li class="nav-label">Divertissements</li>

            <li class="{{ $menu == 'categorieplan' ? 'active' : '' }}">
                <a class="has-arrow" href="#" aria-expanded="false"><i class=" icon-tag-6"></i> <span class="nav-text">Catégories</span></a>
                <ul aria-expanded="false">
                    <li>
                        <a href="#" data-toggle="modal" data-target="#modalAddCategorie" class="{{ request()->routeIs('etablissements.categorie.create') ? 'active' : '' }}"><i class=" icon-plus-outline"></i> Ajouter une catégorie</a>
                    </li>
                    <li>
                        <a href="{{ route('etablissements.categorie.index') }}" class="{{ request()->routeIs('etablissements.categorie.index') ? 'active' : '' }}"><i class=" icon-database-2"></i> Liste des catégories</a>
                    </li>
                </ul>
            </li>
            <li class="">
                <a class="has-arrow" href="#" aria-expanded="false"><i class=" icon-attach-6"></i> <span class="nav-text">Commodités</span></a>
                <ul aria-expanded="false">
                    <li>
                        <a href="#" data-toggle="modal" data-target="#modalAddCommodite" class="{{ request()->routeIs('etablissements.commodites.create') ? 'active' : '' }}"><i class=" icon-plus-outline"></i> Ajouter une commodité</a>
                    </li>
                    <li>
                        <a href="{{ route('etablissements.commodite.index') }}" class="{{ request()->routeIs('etablissements.commodites.index') ? 'active' : '' }}"><i class=" icon-database-2"></i> Liste des commodités</a>
                    </li>
                </ul>
            </li>
            <li class="{{ $menu == 'bonplan' ? 'active' : '' }}">
                <a class="has-arrow" href="#" aria-expanded="false"><i class=" icon-location-6"></i> <span class="nav-text">Etablissements</span></a>
                <ul aria-expanded="false">
                    <li>
                        <a href="{{ route('etablissements.create') }}" class="{{ request()->routeIs('etablissements.create') ? 'active' : '' }}"><i class=" icon-plus-outline"></i> Ajouter un établissement</a>
                    </li>
                    <li>
                        <a href="{{ route('etablissements.index') }}" class="{{ request()->routeIs('etablissements.index') ? 'active' : '' }}"><i class=" icon-database-2"></i> Liste des établissements</a>
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
@include('pages.etablissements.categorie.modal')
@include('pages.etablissements.commodite.modal')