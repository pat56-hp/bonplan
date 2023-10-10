@extends('layouts.app')
@section('content')
    @include('site.parts.breadcrumb')

    <section class="wsus__blog_details mt_120 xs_mt_90 mb_100 xs_mb_70">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-8">
                    <div class="wsus__blog_det_area">
                        <div class="wsus__blog_details_img wow fadeInUp" data-wow-duration="1s">
                            <img src="../uploads/custom-images/blog--2023-03-06-08-51-22-6826.jpg" alt="blog details" class="imf-fluid w-100">

                        </div>
                        <div class="wsus__blog_details_text wow fadeInUp" data-wow-duration="1s">
                            <ul class="details_bloger d-flex flex-wrap">
                                <li><i class="far fa-user"></i> <b>Responsable :</b> Patrick</li>
                                <li><i class="fas fa-phone"></i> (225) 0808080808</li>
                                <li><a href="#"><i class="fas fa-map"></i> Cocody Angré terminus 81 82</a></li>
                            </ul>
                            <h2 class="mb-1">The Best Ways to Cook Seafood at Home</h2>
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span>1</span>
                            </span>
                            <p>Sint dignissim consectetuer nec et, per ad probatus referrentur, vel cu consequat sententiae. Ad duis fugit dictas mea, et cum stet oratio cetero. Ne pri omittam fastidii. No per harum dicant neglegentur, sea ei esse volumus adolescens. Nulla argumentum at pri, vel apeirian principes in. An dicam dicant consul mea, ne per option appetere argumentum, vim legere senserit et.</p>
                            <p>Per ex vero nonumy. Ius eu doming nominavi mediocrem, aliquid efficiantur no vim, sanctus admodum mnesarchum ad pro. No sea invidunt partiendo. No postea numquam ocurreret duo, unum abhorreant cu nam, fugit fastidii percipitur nam id.</p>
                            <p>Id est maiorum volutpat, ad nominavi suscipit suscipiantur vix. Ut ius veri aperiam reprehendunt. Ut per unum sapientem consequuntur, usu ut quot scripta. Sea te nisl expetenda, ad quo congue argumentum, sit quis simul accusam cu. Usu ei perfecto repudiare tincidunt, ut quas malis erant vim. An mel vidit iudicabit.</p>
                            <p>In vim natum soleat nostro, pri in eloquentiam contentiones. Eu sit sapientem reprehendunt, omnis aliquid eu eos. No quot illum veniam est, ne pro iudico saperet mnesarchum. Ea pri nostro disputando contentiones, eu nec menandri qualisque, vis ex equidem invidunt. Et accusam detracto splendide per, congue meliore id sea. Has eu aeterno patrioque expetendis, mel ei dissentiet reformidans.</p>
                            <p>Pri tempor appareat no, eruditi repudiandae vix at. Eos at brute omnesque voluptaria, facer putent intellegam eu pri. Mei debitis ullamcorper eu, at quo idque mundi. Vis in suas porro consequat, nec ad dolor adversarium, ut praesent cotidieque sit. Veniam civibus omittantur duo ut, te his alterum complectitur. Mea omnis oratio impedit ne.</p>
                            <p>Per ex vero nonumy. Ius eu doming nominavi mediocrem, aliquid efficiantur no vim, sanctus admodum mnesarchum ad pro. No sea invidunt partiendo. No postea numquam ocurreret duo, unum abhorreant cu nam, fugit fastidii percipitur nam id.</p>

                            <div class="blog_tags_share d-flex flex-wrap justify-content-between align-items-center">
                                <div class="share d-flex flex-wrap align-items-center">
                                    <span>Partager :</span>
                                    <ul class="d-flex flex-wrap">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="wsus__comment mt_100 xs_mt_70 wow fadeInUp" data-wow-duration="1s">
                        <h4>0 Comments</h4>
                    </div>

                    <div class="comment_input mt_100 xs_mt_70 wow fadeInUp" data-wow-duration="1s">
                        <h4>Ecrire un commentaire</h4>
                        <p>Votre adresse email ne sera pas publiée. Les champs marqués par * sont obligatoires.</p>
                        <form id="blogCommentForm">
                            <input type="hidden" name="_token" value="pOxp7lY6a346IhrzD4npZQdFitioSmqvYROEEGe5">                            <div class="row">
                                <div class="col-xl-6 col-md-6">
                                    <label>Nom *</label>
                                    <div class="wsus__contact_form_input">
                                        <span><i class="fa fa-user-alt"></i></span>
                                        <input type="text" name="name" placeholder="Name">
                                    </div>
                                </div>
                                <div class="col-xl-6 col-md-6">
                                    <label>Email *</label>
                                    <div class="wsus__contact_form_input">
                                        <span><i class="fa fa-envelope"></i></span>
                                        <input type="email" placeholder="Email" name="email">
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <label>commentaire *</label>
                                    <div class="wsus__contact_form_input textarea">
                                        <span><i class="fa fa-comment-alt"></i></span>
                                        <textarea rows="5" placeholder="Your Comment" name="comment"></textarea>
                                    </div>
                                </div>

                                <input type="hidden" name="blog_id" value="4">

                                <div class="col-xl-12">
                                    <button type="submit" class="common_btn mt_20">Soumettre</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4">
                    <div id="sticky_sidebar">
                        <div class="wsus__blog_search blog_sidebar m-0 wow fadeInUp" data-wow-duration="1s">
                            <h3>Galerie </h3>
                            <div class="wsus__contact_map" style="height: 250px">
                                <div class="row add_slider_galerie wow fadeInUp" data-wow-duration="1s">
                                    <div class="col-xl-4">
                                        <a href="product/onion-rings.html" class="wsus__add_slider_single" style="background: url(../uploads/custom-images/advertisement-2023-03-05-04-00-30-5264.png);">
                                            <div class="galerie_heigth"></div>
                                        </a>
                                    </div>
                                    <div class="col-xl-4">
                                        <a href="product/onion-rings.html" class="wsus__add_slider_single" style="background: url(../uploads/custom-images/advertisement-2023-03-05-04-00-30-5264.png);">
                                            <div class="galerie_heigth"></div>
                                        </a>
                                    </div>
                                    <div class="col-xl-4">
                                        <a href="product/onion-rings.html" class="wsus__add_slider_single" style="background: url(../uploads/custom-images/advertisement-2023-03-05-04-00-30-5264.png);">
                                            <div class="galerie_heigth"></div>
                                        </a>
                                    </div>
                                    <div class="col-xl-4">
                                        <a href="product/onion-rings.html" class="wsus__add_slider_single" style="background: url(../uploads/custom-images/advertisement-2023-03-05-04-00-30-5264.png);">
                                            <div class="galerie_heigth"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wsus__blog_search blog_sidebar wow fadeInUp" data-wow-duration="1s">
                            <h3>Localisation </h3>
                            <div class="mb-2">
                                <a href="#"><i class="fas fa-map"></i> Cocody Angré terminus 81 82</a>
                            </div>
                            <div>
                                <div class="wsus__contact_map" style="height: 250px">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.681138843672!2d-73.89482218459395!3d40.747041279328165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f01328248b3%3A0x62300784dd275f96!2s7232%20Broadway%20%23%20308%2C%20Flushing%2C%20NY%2011372%2C%20USA!5e0!3m2!1sen!2sbd!4v1652467683397!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div class="blog_tags_share d-flex flex-wrap justify-content-between align-items-center">
                                <div class="share d-flex flex-wrap align-items-center">
                                    <span>Réseaux sociaux:</span>
                                    <ul class="d-flex flex-wrap">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="wsus__blog_search blog_sidebar wow fadeInUp" data-wow-duration="1s">
                            <h3>Nos horaires </h3>
                            <div class="horaires">
                                <ul>
                                    <li><span class="day">Lundi : </span> <span class="hours">08h00 - 18h30</span></li>
                                    <li><span class="day">Mardi : </span> <span class="hours">08h00 - 18h30</span></li>
                                    <li><span class="day">Mercredi : </span> <span class="hours">08h00 - 18h30</span></li>
                                    <li><span class="day">Jeudi : </span> <span class="hours">08h00 - 18h30</span></li>
                                    <li><span class="day">Vendredi : </span> <span class="hours">08h00 - 18h30</span></li>
                                    <li><span class="day">Samedi : </span> <span class="hours">08h00 - 18h30</span></li>
                                    <li><span class="day">Dimanche : </span> <span class="hours closed">Fermé</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="wsus__related_blog blog_sidebar wow fadeInUp" data-wow-duration="1s">
                            <h3>Nos spécialités</h3>
                            <ul>
                                <li>
                                    <img src="../uploads/custom-images/blog--2023-03-06-08-51-22-6826.jpg" alt="blog" class="img-fluid w-100">
                                    <div class="text">
                                        <a href="the-best-ways-to-cook-seafood-at-home.html">The Best Ways to Cook Seafood at Home</a>
                                        <p><i class="fa fa-money-bill"></i> 15.000 CFA</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../uploads/custom-images/blog--2023-03-05-05-36-09-3126.jpg" alt="blog" class="img-fluid w-100">
                                    <div class="text">
                                        <a href="the-science-of-pairing-wine-and-cheese.html">The Science of Pairing Wine and Cheese</a>
                                        <p><i class="fa fa-money-bill"></i> 15.000 CFA</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../uploads/custom-images/blog--2023-03-05-05-35-24-9694.jpg" alt="blog" class="img-fluid w-100">
                                    <div class="text">
                                        <a href="why-our-pasta-is-worth-the-visit.html">Why Our Pasta is Worth the Visit</a>
                                        <p><i class="fa fa-money-bill"></i> 15.000 CFA</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
{{--                        <div class="wsus__blog_categori blog_sidebar wow fadeInUp" data-wow-duration="1s">--}}
{{--                            <h3>Categories</h3>--}}
{{--                            <ul>--}}
{{--                                <li><a href="../blogsfe2b.html?category=chicken">Chicken <span>2</span></a></li>--}}
{{--                                <li><a href="../blogs246c.html?category=fresh-food">Fresh Food <span>1</span></a></li>--}}
{{--                                <li><a href="../blogs36dd.html?category=spicy">Spicy <span>2</span></a></li>--}}
{{--                                <li><a href="../blogsebde.html?category=grill">Grill <span>1</span></a></li>--}}
{{--                                <li><a href="../blogs0a0e.html?category=kabab">Kabab <span>0</span></a></li>--}}
{{--                            </ul>--}}
{{--                        </div>--}}

                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection