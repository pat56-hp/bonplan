<div class="" id="preloader">
    <div class="img d-none">
        <img src="{{ asset('uploads/website-images/Spinner.gif') }}" alt="UniFood" class="img-fluid">
    </div>
</div>

<!--=============================
    TOPBAR START
==============================-->
<section class="wsus__topbar">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-md-8">
                <ul class="wsus__topbar_info d-flex flex-wrap">
                    <li><a href="mailto:websolutionus1@gmail.com"><i class="fas fa-envelope"></i> websolutionus1@gmail.com</a>
                    </li>
                    <li><a href="callto:+1347-430-9510"><i class="fas fa-phone-alt"></i> +1347-430-9510</a></li>
                </ul>
            </div>
            <div class="col-xl-6 col-md-4 d-none d-md-block">
                <ul class="topbar_icon d-flex flex-wrap">
                    <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
<!--=============================
    TOPBAR END
==============================-->


<!--=============================
    MENU START
==============================-->
<nav class="navbar navbar-expand-lg main_menu">
    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="{{ asset('uploads/website-images/logo-2022-12-13-05-18-57-4851.png') }}" alt="UniFood" class="img-fluid">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav m-auto">

                <li class="nav-item">
                    <a class="nav-link" href="{{ route('accueil') }}">Accueil</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="{{ route('bonplans') }}">Bons plans</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Actualiés</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Evènements</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Appels d'offres</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
            <ul class="menu_icon d-flex flex-wrap">
                <li>
                    <a href="javascript:;" class="menu_search"><i class="fas fa-search"></i></a>
                    <div class="wsus__search_form">
                        <form action="#">
                            <span class="close_search"><i class="fas fa-times"></i></span>
                            <input name="search" type="text" placeholder="Type your keyword">
                            <button type="submit">search</button>
                        </form>
                    </div>
                </li>
                <li>
                    <a href="#"><i class="fas fa-user"></i></a>
                </li>
                <li>
                    <a class="common_btn" href="#">reservation</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!--=============================
MENU END
==============================-->