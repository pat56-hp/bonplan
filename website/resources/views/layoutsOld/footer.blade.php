<!--=============================
        FOOTER START
    ==============================-->
<footer style="background: url({{ asset('uploads/website-images/footer_background-2022-12-13-12-06-33-5633.jpg') }});">
    <div class="footer_overlay pt_100 xs_pt_70 pb_100 xs_pb_70">
        <div class="container wow fadeInUp" data-wow-duration="1s">
            <div class="row justify-content-between">
                <div class="col-lg-4 col-sm-8 col-md-6">
                    <div class="wsus__footer_content">
                        <a class="footer_logo" href="index.html">
                            <img src="uploads/website-images/footer_logo-2022-12-13-05-17-08-5906.png" alt="UniFood" class="img-fluid w-100">
                        </a>
                        <span>There are many variations of Lorem Ipsum available, but the majority have suffered.</span>
                        <p class="info"><i class="far fa-map-marker-alt"></i> 7232 Broadway 308, United States</p>
                        <a class="info" href="callto:+1347-430-9510"><i class="fas fa-phone-alt"></i>
                            +1347-430-9510</a>
                        <a class="info" href="mailto:websolutionus1@gmail.com"><i class="fas fa-envelope"></i>
                            websolutionus1@gmail.com</a>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-4 col-md-6">
                    <div class="wsus__footer_content">
                        <h3>Important Link</h3>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="contact-us.html">Contact Us</a></li>
                            <li><a href="our-chef.html">Our Chef</a></li>
                            <li><a href="our-chef.html">Dashboard</a></li>

                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-4 col-md-6 order-sm-4 order-lg-3">
                    <div class="wsus__footer_content">
                        <h3>Help Link</h3>
                        <ul>
                            <li><a href="blogs.html">Our Blogs</a></li>
                            <li><a href="testimonial.html">Testimonial</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="privacy-policy.html">Privacy and Policy</a></li>
                            <li><a href="terms-and-condition.html">Terms anc Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-8 col-md-6 order-lg-4">
                    <div class="wsus__footer_content">
                        <h3>Subscribe to Newsletter</h3>
                        <form id="subscribe_form">
                            <input type="hidden" name="_token" value="pOxp7lY6a346IhrzD4npZQdFitioSmqvYROEEGe5">                                <input type="email" placeholder="Email" name="email">
                            <button id="subscribe_btn" type="submit"><i class="fas fa-paper-plane"></i></button>
                        </form>
                        <div class="wsus__footer_social_link">
                            <h5>Follow us:</h5>
                            <ul class="d-flex flex-wrap">
                                <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="wsus__footer_bottom d-flex flex-wrap">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="wsus__footer_bottom_text d-flex flex-wrap justify-content-between">
                        <p>©2023 websolutionus All rights reserved</p>
                        <ul class="d-flex flex-wrap">
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Payment</a></li>
                            <li><a href="login.html">Checkout</a></li>
                            <li><a href="login.html">Dashboard</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!--=============================
    FOOTER END
==============================-->


<!--=============================
    SCROLL BUTTON START
==============================-->
<div class="wsus__scroll_btn">
    Go to top
</div>
<!--=============================
    SCROLL BUTTON END
==============================-->

<!--jquery library js-->
<script src="{{ asset('user/js/jquery-3.6.3.min.js') }}"></script>
<script src="{{ asset('user/js/sweetalert2%4011.js') }}"></script>

{{--<script>--}}
{{--    window.addEventListener("load",function(){window.wpcc.init({"border":"thin","corners":"normal","colors":{"popup":{"background":"#184dec","text":"#fafafa !important","border":"#0a58d6"},"button":{"background":"#fffceb","text":"#222758"}},"content":{"href":"#","message":"This website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only upon approval.","link":"More Info","button":"Yes"}})});--}}
{{--</script>--}}


<!--bootstrap js-->
<script src="{{asset('user/js/bootstrap.bundle.min.js')}}"></script>
<!--font-awesome js-->
<script src="{{asset('user/js/Font-Awesome.js')}}"></script>
<!-- slick slider -->
<script src="{{asset('user/js/slick.min.js')}}"></script>
<!-- isotop js -->
<script src="{{asset('user/js/isotope.pkgd.min.js')}}"></script>
<!-- simplyCountdownjs -->
<script src="{{asset('user/js/simplyCountdown.js')}}"></script>
<!-- counter up js -->
<script src="{{asset('user/js/jquery.waypoints.min.js')}}"></script>
<script src="{{asset('user/js/jquery.countup.min.js')}}"></script>
<!-- nice select js -->
<script src="{{asset('user/js/jquery.nice-select.min.js')}}"></script>
<!-- venobox js -->
<script src="{{asset('user/js/venobox.min.js')}}"></script>
<!-- sticky sidebar js -->
<script src="{{asset('user/js/sticky_sidebar.js')}}"></script>
<!-- wow js -->
<script src="{{asset('user/js/wow.min.js')}}"></script>
<!-- ex zoom js -->
<script src="{{asset('user/js/jquery.exzoom.js')}}"></script>

{{--<script src="{{asset('backend/js/bootstrap-datepicker.min.js')}}"></script>--}}

<!--main/custom js-->
<script src="{{asset('user/js/main.js')}}"></script>

<script src="{{asset('toastr/toastr.min.js')}}"></script>
{{--<script src="{{asset('backend/js/select2.min.js')}}"></script>--}}

<script>
</script>


<script>
    (function($) {
        "use strict";
        $(document).ready(function () {
            $(".first_menu_product").click();

            $('.select2').select2();
            $('.modal_select2').select2({
                dropdownParent: $("#address_modal")
            });

            $('.datepicker').datepicker({
                format: 'yyyy-mm-dd',
                startDate: '-Infinity'
            });

            $(document).on('click', '.mini-item-remove', function () {
                let root_li = $(this).parents('li');
                let rowid = root_li.data('mini-item-rowid');
                root_li.remove();

                let is_cart_page = "no";
                if(is_cart_page == 'yes'){
                    $(".main-cart-item-"+rowid).remove();
                    calculate_total();
                }

                calculate_mini_total();

                $.ajax({
                    type: 'get',
                    url: "https://unifood.websolutionus.com/remove-cart-item" + "/" + rowid,
                    success: function (response) {
                        toastr.success(response.message);

                        let ready_to_reload = "no"
                        if(ready_to_reload == 'yes'){
                            window.location.reload();
                        }
                    },
                    error: function(response) {
                        if(response.status == 500){
                            toastr.error("Server error occured")
                        }

                        if(response.status == 403){
                            toastr.error("Server error occured")
                        }
                    }
                });
            });

            $("#subscribe_form").on('submit', function(e){
                e.preventDefault();
                var isDemo = "0"
                if(isDemo == 0){
                    toastr.error('This Is Demo Version. You Can Not Change Anything');
                    return;
                }

                $("#subscribe_btn").prop("disabled", true);
                $("#subscribe_btn").html(`<i class="fas fa-spinner"></i>`);

                $.ajax({
                    type: 'POST',
                    data: $('#subscribe_form').serialize(),
                    url: "https://unifood.websolutionus.com/subscribe-request",
                    success: function (response) {
                        toastr.success(response.message)
                        $("#subscribe_form").trigger("reset");
                        $("#subscribe_btn").prop("disabled", false);
                        $("#subscribe_btn").html(`<i class="fas fa-paper-plane"></i>`);
                    },
                    error: function(response) {
                        $("#subscribe_btn").prop("disabled", false);
                        $("#subscribe_btn").html(`<i class="fas fa-paper-plane"></i>`);

                        if(response.status == 403){
                            if(response.responseJSON.message)toastr.error(response.responseJSON.message)
                        }
                    }
                });
            })
        });
    })(jQuery);

    function calculate_mini_total(){
        let mini_sub_total = 0;
        let mini_total_item = 0;
        $(".mini-input-price").each(function () {
            let current_val = $(this).val();
            mini_sub_total = parseInt(mini_sub_total) + parseInt(current_val);
            mini_total_item = parseInt(mini_total_item) + parseInt(1);
        });

        $(".mini_sub_total").html(`$${mini_sub_total}`);
        $(".topbar_cart_qty").html(mini_total_item);
        $(".mini_cart_body_item").html(`Total Item(${mini_total_item})`);

        let mini_empty_cart = `<div class="wsus__menu_cart_header">
                <h5>Your shopping cart is empty!</h5>
                <span class="close_cart"><i class="fal fa-times"></i></span>
            </div>
            `;

        if(mini_total_item == 0){
            $(".wsus__menu_cart_boody").html(mini_empty_cart)
        }
    }

    function load_product_model(product_id){

        $("#preloader").addClass('preloader')
        $(".img").removeClass('d-none')

        $.ajax({
            type: 'get',
            url: "https://unifood.websolutionus.com/load-product-modal" + "/" + product_id,
            success: function (response) {
                $("#preloader").removeClass('preloader')
                $(".img").addClass('d-none')
                $(".load_product_modal_response").html(response)
                $("#cartModal").modal('show');
            },
            error: function(response) {
                toastr.error("Server error occured")
            }
        });
    }

    function add_to_wishlist(id){
        $.ajax({
            type: 'get',
            url: "https://unifood.websolutionus.com/add-to-wishlist" + "/" + id,
            success: function (response) {
                toastr.success("Wishlist added successfully");
            },
            error: function(response) {
                if(response.status == 500){
                    toastr.error("Server error occured")
                }

                if(response.status == 403){
                    toastr.error(response.responseJSON.message)
                }
            }
        });
    }
    function before_auth_wishlist(){
        toastr.error("Please login first")
    }

    function productReview(rating){
        $(".product_rat").each(function(){
            var product_rat = $(this).data('rating')
            if(product_rat > rating){
                $(this).removeClass('fas fa-star').addClass('fal fa-star');
            }else{
                $(this).removeClass('fal fa-star').addClass('fas fa-star');
            }
        })
        $("#product_rating").val(rating);
    }

</script>

@stack('js')

</body>

</html>