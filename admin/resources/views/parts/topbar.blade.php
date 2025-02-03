<div class="search">
    <form>
        <input class="form-control" type="text" placeholder="Type here..." aria-label="Search">
    </form>
    <a href="#" class="toggle-search"><i class="material-icons">close</i></a>
</div>
<div class="app-header">
    <nav class="navbar navbar-light navbar-expand-lg">
        <div class="container-fluid">
            <div class="navbar-nav" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link hide-sidebar-toggle-button" href="#"><i class="material-icons">first_page</i></a>
                    </li>
                    <li class="nav-item dropdown hidden-on-mobile">
                        <a class="nav-link dropdown-toggle" href="#" id="exploreDropdownLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="material-icons-outlined">explore</i> Site web
                        </a>
                        <ul class="dropdown-menu dropdown-lg large-items-menu" aria-labelledby="exploreDropdownLink">
                            <li>
                                <h6 class="dropdown-header">Repositories</h6>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <h5 class="dropdown-item-title">
                                        Neptune iOS
                                        <span class="badge badge-warning">1.0.2</span>
                                        <span class="hidden-helper-text">switch<i class="material-icons">keyboard_arrow_right</i></span>
                                    </h5>
                                    <span class="dropdown-item-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <h5 class="dropdown-item-title">
                                        Neptune Android
                                        <span class="badge badge-info">dev</span>
                                        <span class="hidden-helper-text">switch<i class="material-icons">keyboard_arrow_right</i></span>
                                    </h5>
                                    <span class="dropdown-item-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </a>
                            </li>
                            <li class="dropdown-btn-item d-grid">
                                <button class="btn btn-primary">Create new repository</button>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
            <div class="d-flex">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link toggle-search" href="#"><i class="fas fa-search"></i></a>
                    </li>
                    {{-- <li class="nav-item hidden-on-mobile">
                        <a class="nav-link language-dropdown-toggle" href="#" id="languageDropDown" data-bs-toggle="dropdown"><img src="../../assets/images/flags/us.png" alt=""></a>
                            <ul class="dropdown-menu dropdown-menu-end language-dropdown" aria-labelledby="languageDropDown">
                                <li><a class="dropdown-item" href="#"><img src="../../assets/images/flags/germany.png" alt="">German</a></li>
                                <li><a class="dropdown-item" href="#"><img src="../../assets/images/flags/italy.png" alt="">Italian</a></li>
                                <li><a class="dropdown-item" href="#"><img src="../../assets/images/flags/china.png" alt="">Chinese</a></li>
                            </ul>
                    </li> --}}
                    <li class="nav-item hidden-on-mobile">
                        <a class="nav-link nav-notifications-toggle" id="notificationsDropDown" href="#" data-bs-toggle="dropdown">4</a>
                        <div class="dropdown-menu dropdown-menu-end notifications-dropdown" aria-labelledby="notificationsDropDown">
                            <h6 class="dropdown-header">Notifications</h6>
                            <div class="notifications-dropdown-list">
                                <a href="#">
                                    <div class="notifications-dropdown-item">
                                        <div class="notifications-dropdown-item-image">
                                            <span class="notifications-badge bg-info text-white">
                                                <i class="material-icons-outlined">campaign</i>
                                            </span>
                                        </div>
                                        <div class="notifications-dropdown-item-text">
                                            <p class="bold-notifications-text">Donec tempus nisi sed erat vestibulum, eu suscipit ex laoreet</p>
                                            <small>19:00</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="notifications-dropdown-item">
                                        <div class="notifications-dropdown-item-image">
                                            <span class="notifications-badge bg-danger text-white">
                                                <i class="material-icons-outlined">bolt</i>
                                            </span>
                                        </div>
                                        <div class="notifications-dropdown-item-text">
                                            <p class="bold-notifications-text">Quisque ligula dui, tincidunt nec pharetra eu, fringilla quis mauris</p>
                                            <small>18:00</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="notifications-dropdown-item">
                                        <div class="notifications-dropdown-item-image">
                                            <span class="notifications-badge bg-success text-white">
                                                <i class="material-icons-outlined">alternate_email</i>
                                            </span>
                                        </div>
                                        <div class="notifications-dropdown-item-text">
                                            <p>Nulla id libero mattis justo euismod congue in et metus</p>
                                            <small>yesterday</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="notifications-dropdown-item">
                                        <div class="notifications-dropdown-item-image">
                                            <span class="notifications-badge">
                                                <img src="../../assets/images/avatars/avatar1.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="notifications-dropdown-item-text">
                                            <p>Praesent sodales lobortis velit ac pellentesque</p>
                                            <small>yesterday</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="notifications-dropdown-item">
                                        <div class="notifications-dropdown-item-image">
                                            <span class="notifications-badge">
                                                <img src="../../assets/images/avatars/avatar7.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="notifications-dropdown-item-text">
                                            <p>Praesent lacinia ante eget tristique mattis. Nam sollicitudin velit sit amet auctor porta</p>
                                            <small>yesterday</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item hidden-on-mobile">
                        <a class="nav-link nav-notifications-toggle" id="notificationsDropDown" href="#" data-bs-toggle="dropdown"><i class="fas fa-cogs"></i></a>
                        <div class="dropdown-menu dropdown-menu-end notifications-dropdown" aria-labelledby="notificationsDropDown">
                            <h6 class="dropdown-header">Paramètre du profile</h6>
                            <div class="notifications-dropdown-list">
                                <a href="{{ route('profile')}}">
                                    <div class="notifications-dropdown-item">
                                        <div class="notifications-dropdown-item-image">
                                            <span class="notifications-badge bg-info text-white">
                                                <i class="fas fa-user"></i>
                                            </span>
                                        </div>
                                        <div class="notifications-dropdown-item-text">
                                            <p class="bold-notifications-text profile-setting">Mon profile</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="{{ route('password')}}">
                                    <div class="notifications-dropdown-item">
                                        <div class="notifications-dropdown-item-image">
                                            <span class="notifications-badge bg-danger text-white">
                                                <i class="fas fa-key"></i>
                                            </span>
                                        </div>
                                        <div class="notifications-dropdown-item-text">
                                            <p class="bold-notifications-text profile-setting">Modifier mon mot de passe</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" id="logout" onclick="document.getElementById('logout-form').submit()">
                                    <div class="notifications-dropdown-item">
                                        <div class="notifications-dropdown-item-image">
                                            <span class="notifications-badge bg-success text-white">
                                                <i class="material-icons-two-tone">logout</i>
                                            </span>
                                        </div>
                                        <div class="notifications-dropdown-item-text">
                                            <p class="profile-setting">Me déconnecter</p>
                                        </div>
                                    </div>
                                </a>

                                <form action="{{ route('logout')}}" method="post" id="logout-form">
                                    @csrf
                                </form>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>