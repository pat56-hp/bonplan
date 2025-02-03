<!-- header -->
<div class="header">
    <div class="nav-header">
        <div class="brand-logo"><a href="{{ route('dashboard')}}"><b><img src="{{ $setting->logo_black }}" alt="{{ $setting->name}}" style="max-width: 150px"> </b><span class="brand-title"><img src="../../assets/images/logo-text.png" alt=""></span></a>
        </div>
        <div class="nav-control">
            <div class="hamburger"><span class="line"></span> <span class="line"></span> <span class="line"></span>
            </div>
        </div>
    </div>
    <div class="header-content">
        <div class="header-left">
            <ul>
                <li class="icons position-relative"><a href="javascript:void(0)"><i class="fas fa-search f-s-16"></i></a>
                    <div class="drop-down animated bounceInDown">
                        <div class="dropdown-content-body">
                            <div class="header-search" id="header-search">
                                <form action="#">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search">
                                        <div class="input-group-append"><span class="input-group-text"><i class="icon-magnifier"></i></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="header-right">
            <ul>
                <li class="icons"><a href="javascript:void(0)"><i class="mdi mdi-bell f-s-18" aria-hidden="true"></i><div class="pulse-css"></div></a>
                    <div class="drop-down animated bounceInDown">
                        <div class="dropdown-content-heading"><span class="text-left">Recent Notifications</span>
                        </div>
                        <div class="dropdown-content-body">
                            <ul>
                                <li>
                                    <a href="#">
                                        <img class="pull-left m-r-10 avatar-img" src="../../assets/images/avatar/1.jpg" alt="">
                                        <div class="notification-content"><small class="notification-timestamp pull-right">02:34 PM</small>
                                            <div class="notification-heading">Mr. Saifun</div>
                                            <div class="notification-text">5 members joined today</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="pull-left m-r-10 avatar-img" src="../../assets/images/avatar/2.jpg" alt="">
                                        <div class="notification-content"><small class="notification-timestamp pull-right">02:34 PM</small>
                                            <div class="notification-heading">Mariam</div>
                                            <div class="notification-text">likes a photo of you</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="pull-left m-r-10 avatar-img" src="../../assets/images/avatar/3.jpg" alt="">
                                        <div class="notification-content"><small class="notification-timestamp pull-right">02:34 PM</small>
                                            <div class="notification-heading">Tasnim</div>
                                            <div class="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="pull-left m-r-10 avatar-img" src="../../assets/images/avatar/4.jpg" alt="">
                                        <div class="notification-content"><small class="notification-timestamp pull-right">02:34 PM</small>
                                            <div class="notification-heading">Ishrat Jahan</div>
                                            <div class="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="text-center"><a href="#" class="more-link">See All</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="icons"><a href="javascript:void(0)"><i class="mdi mdi-account f-s-20" aria-hidden="true"></i></a>
                    <div class="drop-down dropdown-profile animated bounceInDown">
                        <div class="dropdown-content-body">
                            <ul>
                                <li><a href="{{ route('profile')}}"><i class="mdi mdi-settings"></i> <span>Mon profile</span></a></li>
                                <li><a href="{{ route('password')}}"><i class="fas fa-key"></i> <span>Mot de passe</span></a></li>
                                <li><a href="#" id="logout" onclick="document.getElementById('logout-form').submit()">
                                    <i class="fas fa-sign-out"></i> <span>Déconnection</span></a>
                                    <form action="{{ route('logout')}}" method="post" id="logout-form">
                                        @csrf
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
<!-- #/ header -->