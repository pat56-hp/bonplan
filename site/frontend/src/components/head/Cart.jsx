import React from 'react'

export default function Cart() {
  return (
    <div className="dropdown-button">
        <div className="cart-button">
            <span>5</span>
            <i className="ri-shopping-cart-line text-white cart-bag"></i>
        </div>
        <div className="onhover-box">
            <ul className="cart-list">
                <li className="product-box-contain">
                    <div className="drop-cart">
                        <a href="#!" className="drop-image">
                            <img src="/assets/images/product/vp-3.png" className="blur-up lazyloaded" alt="" />
                        </a>
                        <div className="drop-contain">
                            <a href="#!">
                                <h5>Egg Sandwich</h5>
                            </a>
                            <h6><span>1 x </span> $80.58</h6>
                            <button className="close-button close_button">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="product-box-contain">
                    <div className="drop-cart">
                        <a href="#!" className="drop-image">
                            <img src="/assets/images/product/vp-2.png" className="blur-up lazyloaded" alt="" />
                        </a>
                        <div className="drop-contain">
                            <a href="#!">
                                <h5>Grilled Chicken Quesadilla</h5>
                            </a>
                            <h6><span>1 x </span> $25.64</h6>
                            <button className="close-button close_button">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="product-box-contain">
                    <div className="drop-cart">
                        <a href="#!" className="drop-image">
                            <img src="/assets/images/product/vp-4.png" className="blur-up lazyloaded" alt=""/>
                        </a>
                        <div className="drop-contain">
                            <a href="#!">
                                <h5>Spicy Ahi Roll</h5>
                            </a>
                            <h6><span>1 x </span> $12.00</h6>
                            <button className="close-button close_button">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="product-box-contain">
                    <div className="drop-cart">
                        <a href="#!" className="drop-image">
                            <img src="/assets/images/product/vp-5.png" className="blur-up lazyloaded" alt="" />
                        </a>
                        <div className="drop-contain">
                            <a href="#!">
                                <h5>Spicy Dumplings</h5>
                            </a>
                            <h6><span>1 x </span> $16.28</h6>
                            <button className="close-button close_button">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="product-box-contain">
                    <div className="drop-cart">
                        <a href="#!" className="drop-image">
                            <img src="/assets/images/product/vp-6.png" className="blur-up lazyloaded" alt="" />
                        </a>
                        <div className="drop-contain">
                            <a href="#!">
                                <h5>Chicken Nugget</h5>
                            </a>
                            <h6><span>1 x </span> $20.50</h6>
                            <button className="close-button close_button">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="price-box">
                <h5>Total :</h5>
                <h4 className="theme-color fw-semibold">$155.00</h4>
            </div>
            <div className="button-group">
                <a href="checkout.html" className="btn btn-sm theme-btn w-100 d-block rounded-2">View
                    Cart</a>
            </div>
        </div>
    </div>
  )
}
