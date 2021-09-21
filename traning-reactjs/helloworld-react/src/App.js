import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas);


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <body>
                    <a class="header-banner">
                        <div href="#" class="header-banner-content">
                            <span>Today deal sale off </span>
                            <b>70%</b>.End in
                            <b>126 days 13:18:00</b>
                            <span>.Hurry up</span>
                            <i><FontAwesomeIcon icon={["fas", "arrow-right"]} font-size="13px" /></i>
                        </div>
                        <button>close</button>
                    </a>
                    <header class="page-header">
                        <a href="#" class="logo-page-black col-2">
                            <img src="./img/logo-page-black.svg" alt="logo Kalle's black" />
                        </a>
                        <nav class="header-nav col-8">
                            <ul class="header-menu">
                                <li><a href="#">DEMO</a></li>
                                <li><a href="#">SHOP</a></li>
                                <li><a href="#">PRODUCT</a></li>
                                <li><a href="#">SALE</a></li>
                                <li><a href="#">PORTFOLIO</a></li>
                                <li><a href="#">LOOKBOOK</a></li>
                                <li><a href="#">BLOG</a></li>
                            </ul>
                        </nav>
                        <div class="header-social col-2">
                            <ul class="header-social-list">
                                <li><a href=""><i><FontAwesomeIcon icon={["fas", "search"]} /></i></a></li>
                                <li><a href=""><i><FontAwesomeIcon icon={["fas", "user"]} /></i></a></li>
                                <li><a href=""><i><FontAwesomeIcon icon={["fas", "heart"]} /></i></a></li>
                                <li><a href=""><i><FontAwesomeIcon icon={["fas", "shopping-cart"]} /></i></a></li>
                            </ul>
                        </div>
                    </header>
                    <main class="page-main">
                        <section class="section-carousels">
                            <ul class="crousel-list">
                                <li class="carousel-item">
                                    <div class="carousel-img-1">
                                        <img src="./img/carousel-1.jpg" alt="carousel-1" />
                                        <div class="adv-banner-content color-white">
                                            <h4 class="section-sub-title">PUSH HADER/RUN FASTER & GO FURTHER</h4>
                                            <h2 class="section-title">TRAINING'S CLOTHING </h2>
                                            <h2 class="section-title">LOOKBOOK</h2>
                                            <a href="#" class="btn-primary btn-yellow btn-left">SHOP NOW</a>
                                            <a href="#" class="btn-primary btn-none-color btn-right">VIEW THE LOOK</a>
                                        </div>
                                        <ul class="carousel-pagination">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section class="section-clothe-types">
                            <div class="container">
                                <ul class="clothe-type-list row">
                                    <li class="clothe-type-item col-4">
                                        <a href="" class="img-type">
                                            <img src="./img/accessories-for-man.jpg" alt="accessories-for-man" />
                                        </a>
                                        <div class="type-content">
                                            <h4 class="section-sub-title">ACCESSORIES</h4>
                                            <h3 class="block-title">FOR MEN</h3>
                                        </div>
                                    </li>
                                    <li class="clothe-type-item col-4">
                                        <a href="" class="img-type">
                                            <img src="./img/training-clothing-for-women.jpg" alt="training-clothing-for-women" />
                                        </a>
                                        <div class="type-content">
                                            <h4 class="section-sub-title">TRAINING CLOTHING</h4>
                                            <h3 class="block-title">FOR WOMEN</h3>
                                        </div>
                                    </li>
                                    <li class="clothe-type-item col-4">
                                        <a href="" class="img-type">
                                            <img src="./img/summer-sale.jpg" alt="summer-sale" />
                                        </a>
                                        <div class="type-content">
                                            <h2 class="section-title">-50%</h2>
                                            <h4 class="section-sub-title">SUMMER SALE</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>


                        <section class="section-products">
                            <div class="container">
                                <div class="product-tab-list">
                                    <ul class="product-tab-menu">
                                        <li class="tab-iterm">
                                            <h4 class="section-sub-title"><a href="">FEATURED</a></h4>
                                        </li>
                                        <li class="tab-iterm">
                                            <h4 class="section-sub-title"><a href="">NEW ARRIVALS</a></h4>
                                        </li>
                                        <li class="tab-iterm">
                                            <h4 class="section-sub-title"><a href="">ON SALE</a></h4>
                                        </li>
                                    </ul>
                                </div>
                                <ul class="product-list row">
                                    <li class="product-iterm col-3">
                                        <a href="#" class="product-iterm-img">
                                            <img src="./img/pr-04.jpg" alt="product-iterm" />
                                        </a>
                                        <div class="product-info">
                                            <h3 class="product-name"><a
                                                href="https://themes.the4.co/kalles-html/product-detail-layout-01.html"> Nike As
                                                Dri-Fit Training</a></h3>
                                            <p class="product-price">$65.00</p>
                                            <ul class="product-color">
                                                <li class="product-color-black"></li>
                                                <li class="product-color-blue"></li>
                                                <li class="product-color-pink"></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="product-iterm col-3 product-sale">
                                        <a href="#" class="product-iterm-img">
                                            <img src="./img/pr-08.jpg" alt="product-iterm" />
                                        </a>
                                        <div class="top-right btn-sale">35%</div>
                                        <div class="product-info">
                                            <h3 class="product-name"><a
                                                href="https://themes.the4.co/kalles-html/product-detail-layout-01.html">Body
                                                Trimmer</a></h3>
                                            <p class="product-price">
                                                <span>$99.00</span>
                                                <span>$65.00</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="product-iterm col-3">
                                        <a href="#" class="product-iterm-img">
                                            <img src="./img/pr-10.jpg" alt="product-iterm" />
                                        </a>
                                        <div class="product-info">
                                            <h3 class="product-name"><a
                                                href="https://themes.the4.co/kalles-html/product-detail-layout-01.html">Nike Trophy
                                                Training Shorts</a></h3>
                                            <p class="product-price">$29.00</p>
                                            <ul class="product-color">
                                                <li class="product-color-blue"></li>
                                                <li class="product-color-black"></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="product-iterm col-3">
                                        <a href="#" class="product-iterm-img">
                                            <img src="./img/pr-13.jpg" alt="product-iterm" />
                                        </a>
                                        <div class="product-info">
                                            <h3 class="product-name"><a
                                                href="https://themes.the4.co/kalles-html/product-detail-layout-01.html">Calvin Clein
                                                Training Shorts</a></h3>
                                            <p class="product-price">$29.00</p>
                                            <ul class="product-color">
                                                <li class="product-color-red"></li>
                                                <li class="product-color-black"></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>


                        <section class="section-sales-off">
                            <a href="#" class="img-full-width">
                                <img src="./img/img-sales-off.jpg" alt="img-sales-off" />
                            </a>
                            <div class="sales-off-content">
                                <h4 class="sub-title">BLACK FRIDAY</h4>
                                <h2 class="section-title">SAVE 50% OFF</h2>
                                <h3 class="block-title">FIRST ONLINE PURCHASE</h3>
                                <a href="#" class="btn-primary btn-black">VIEW PROMOTION</a>
                            </div>
                        </section>

                        <section class="section-top-selling">
                            <div class="container">
                                <div class="block-title-top">
                                    <h2 class="section-title">TOP SELLING</h2>
                                    <i><FontAwesomeIcon icon={["fas", "dumbbell"]} /></i>
                                    <p>Whether your goals are to improve weight or body composition, increase strength and function, or
                                        improve overall<br />
                                        health, resistance training can help you get there.</p>
                                </div>
                                <ul class="product-list row">
                                    <li class="product-iterm col-3">
                                        <a href="#" class="product-iterm-img">
                                            <img src="./img/pr-01.jpg" alt="product-iterm" />
                                        </a>
                                        <div class="product-info">
                                            <h3 class="product-name"><a
                                                href="https://themes.the4.co/kalles-html/product-detail-layout-01.html"> Shoes
                                                Huarache – TT100</a></h3>
                                            <p class="product-price">$145.00</p>
                                            <ul class="product-color">
                                                <li class="product-color-blue"></li>
                                                <li class="product-color-cyan"></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="product-iterm col-3">
                                        <a href="#" class="product-iterm-img">
                                            <img src="./img/pr-03.jpg" alt="product-iterm" />
                                        </a>
                                        <div class="product-info">
                                            <h3 class="product-name"><a
                                                href="https://themes.the4.co/kalles-html/product-detail-layout-01.html">SwimZip
                                                Men's Long Sleeve Zipper</a></h3>
                                            <p class="product-price">$65.00</p>
                                        </div>
                                    </li>
                                    <li class="product-iterm col-3 product-sale">
                                        <a href="#" class="product-iterm-img">
                                            <img src="./img/pr-04.jpg" alt="product-iterm" />
                                        </a>
                                        <div class="top-right btn-sale">35%</div>
                                        <div class="product-info">
                                            <h3 class="product-name"><a
                                                href="https://themes.the4.co/kalles-html/product-detail-layout-01.html">Men's Tops
                                                Long Sleeve Shirts</a></h3>
                                            <p class="product-price">
                                                <span>$99.00</span>
                                                <span>$65.00</span>
                                            </p>
                                            <ul class="product-color">
                                                <li class="product-color-pink"></li>
                                                <li class="product-color-black"></li>
                                                <li class="product-color-blue"></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="product-iterm col-3">
                                        <a href="#" class="product-iterm-img">
                                            <img src="./img/pr-07.jpg" alt="product-iterm" />
                                        </a>
                                        <div class="product-info">
                                            <h3 class="product-name"><a
                                                href="https://themes.the4.co/kalles-html/product-detail-layout-01.html">Elip Power
                                                Max</a></h3>
                                            <p class="product-price">$35.00</p>
                                            <ul class="product-color">
                                                <li class="product-color-red"></li>
                                                <li class="product-color-black"></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="product-iterm col-3">
                                        <a href="#" class="product-iterm-img">
                                            <img src="./img/pr-09.jpg" alt="product-iterm" />
                                        </a>
                                        <div class="product-info">
                                            <h3 class="product-name"><a
                                                href="https://themes.the4.co/kalles-html/product-detail-layout-01.html">Men's Sports
                                                Jogging Workout Shorts</a></h3>
                                            <p class="product-price">$29.00</p>
                                            <ul class="product-color">
                                                <li class="product-color-black"></li>
                                                <li class="product-color-blue"></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="product-iterm col-3 product-sale">
                                        <a href="#" class="product-iterm-img">
                                            <img src="./img/pr-11.jpg" alt="product-iterm" />
                                        </a>
                                        <div class="top-right btn-sale">35%</div>
                                        <div class="product-info">
                                            <h3 class="product-name"><a
                                                href="https://themes.the4.co/kalles-html/product-detail-layout-01.html">Men's Long
                                                Sleeve Rash Guard</a></h3>
                                            <p class="product-price">
                                                <span>$99.00</span>
                                                <span>$65.00</span>
                                            </p>
                                            <ul class="product-color">
                                                <li class="product-color-black"></li>
                                                <li class="product-color-blue"></li>
                                                <li class="product-color-pink"></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="product-iterm col-3">
                                        <a href="#" class="product-iterm-img">
                                            <img src="./img/pr-14.jpg" alt="product-iterm" />
                                        </a>
                                        <div class="product-info">
                                            <h3 class="product-name"><a
                                                href="https://themes.the4.co/kalles-html/product-detail-layout-01.html">Calvin Klein
                                                Workout Shorts</a></h3>
                                            <p class="product-price">$29.00</p>
                                            <ul class="product-color">
                                                <li class="product-color-red"></li>
                                                <li class="product-color-black"></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="product-iterm col-3">
                                        <a href="#" class="product-iterm-img">
                                            <img src="./img/pr-02.jpg" alt="product-iterm" />
                                        </a>
                                        <div class="product-info">
                                            <h3 class="product-name"><a
                                                href="https://themes.the4.co/kalles-html/product-detail-layout-01.html"> Shoes
                                                Huarache</a></h3>
                                            <p class="product-price">$145.00</p>
                                            <ul class="product-color">
                                                <li class="product-color-cyan"></li>
                                                <li class="product-color-blue"></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <hr />
                            </div>
                        </section>

                        <section class="section-latest-news">
                            <div class="container">
                                <div class="block-title-top">
                                    <h2 class="section-title">Latest News</h2>
                                    <i><FontAwesomeIcon icon={["fas", "trophy"]} /></i>
                                    <p>Increased caloric expenditure can result from resistance training both due to acute effects from
                                        training sessions<br />
                                        and long-term effects from increased muscle mass.</p>
                                </div>
                                <ul class="latest-news-list row">
                                    <li class="latest-news-iterm col-4">
                                        <a href="" class="img-3-col img-zoom">
                                            <img src="./img/blog-01.jpg" alt="accessories-for-man" />
                                        </a>
                                        <div class="latest-news-content">
                                            <h4 class="section-sub-title">
                                                <a href="#">Tips At-home Cadio Workout</a>
                                            </h4>
                                            <p class="time-post"><span>on</span><time>September 1, 2020</time></p>
                                            <p>Time to get your sweat on with this workout for a flat stomach! These are the 10 best
                                                moves
                                                to tighten up that core..</p>
                                        </div>

                                    </li>
                                    <li class="latest-news-iterm col-4">
                                        <a href="" class="img-3-col img-zoom">
                                            <img src="./img/blog-02.jpg" alt="accessories-for-man" />
                                        </a>
                                        <div class="latest-news-content">
                                            <h4 class="section-sub-title">
                                                <a href="#">5 Tips To Stay Healthy At Home</a>
                                            </h4>
                                            <p class="time-post"><span>on</span><time>September 1, 2020</time></p>
                                            <p>And now more than ever it’s so important to continue to take care of ourselves and make
                                                sure
                                                we’re putting extra ca...</p>
                                        </div>
                                    </li>
                                    <li class="latest-news-iterm col-4">
                                        <a href="" class="img-3-col img-zoom">
                                            <img src="./img/blog-03.jpg" alt="accessories-for-man" />
                                        </a>
                                        <div class="latest-news-content">
                                            <h4 class="section-sub-title">
                                                <a href="#">10 minute Fat Burning Workout For Beginners</a>
                                            </h4>
                                            <p class="time-post"><span>on</span><time>September 1, 2020</time></p>
                                            <p>I know sometimes it can be difficult to keep your healthy nutrition on track, so that’s
                                                why Icreated the Hot Body ...
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <hr />
                            </div>
                        </section>

                        <section class="section-services">
                            <div class="container">
                                <ul class="service-list row">
                                    <li class="col-4">
                                        <i class="fas fa-truck"></i>
                                        <div class="service-iterm-info">
                                            <h4 class="section-sub-title">FREE SHIPPING UK&UK</h4>
                                            <p>Free shipping on all orders above $100</p>
                                        </div>
                                    </li>
                                    <li class="col-4">
                                        <i class="fas fa-headset"></i>
                                        <div class="service-iterm-info">
                                            <h4 class="section-sub-title">SUPPORT 24/7</h4>
                                            <p>Contact us 24 hours a day, 7 days a week</p>
                                        </div>
                                    </li>
                                    <li class="col-4">
                                        <i class="fas fa-donate"></i>
                                        <div class="service-iterm-info">
                                            <h4 class="section-sub-title">30 DAYS MONEY BACK</h4>
                                            <p>Simply return it within 30 days for an exchange.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </main>

                    <footer class="page-footer">
                        <section class="footer-top">
                            <div class="container">
                                <ul class="footer-block-list row">
                                    <li class="block-child col-3">
                                        <a href="#" class="logo-page-white"><img src="./img/footer-logo.png" alt="footer-logo" /></a>
                                        <ul class="get-in-touch-list">
                                            <li class="get-in-touch-iterm">
                                                <i><FontAwesomeIcon icon={["fas", "map-marker-alt"]} /></i>
                                                <span>184 Main Rd E, St Albans</span><span> VIC 3021, Australia</span>
                                            </li>
                                            <li class="hover-blue get-in-touch-iterm">
                                                <i><FontAwesomeIcon icon={["fas", "envelope"]} /></i>
                                                <a href="">contact@company.com</a>
                                            </li>
                                            <li class="get-in-touch-iterm">
                                                <i><FontAwesomeIcon icon={["fas", "phone-alt"]} /></i>
                                                <span>+001 2233 456</span>
                                            </li>
                                            <li class="get-in-touch-iterm">
                                                <ul class="row get-in-touch-icon-list">
                                                    <li><a href=""><i><FontAwesomeIcon icon={["fab", "facebook-f"]} /></i></a></li>
                                                    <li><a href=""><i><FontAwesomeIcon icon={["fab", "twitter"]} /></i></a></li>
                                                    <li><a href=""><i><FontAwesomeIcon icon={["fab", "instagram"]} /></i></a></li>
                                                    <li><a href=""><i><FontAwesomeIcon icon={["fab", "linkedin-in"]} /></i></a></li>
                                                    <li><a href=""><i><FontAwesomeIcon icon={["fab", "pinterest-p"]} /></i></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="block-child col-2">
                                        <h3 class="footer-title">Categories</h3>
                                        <ul class="category-list">
                                            <li><a href="#">Celebrations</a></li>
                                            <li><a href="#">Events</a></li>
                                            <li><a href="#">Home Decore</a></li>
                                            <li><a href="#">Seasonal Bouquet</a></li>
                                            <li><a href="#">Wending decor</a></li>
                                        </ul>
                                    </li>
                                    <li class="block-child col-2">
                                        <h3 class="footer-title">Usefull links </h3>
                                        <ul class="link-list">
                                            <li><a href="#">Contact us</a></li>
                                            <li><a href="#">Pravacy Policy</a></li>
                                            <li><a href="#">Shipping & Delivery</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="#">Return & Exchanges</a></li>
                                        </ul>
                                    </li>
                                    <li class="block-child col-5">
                                        <div class="newsletter-content">
                                            <h3 class="footer-title">Newsletter Signup</h3>
                                            <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                                            <form action="">
                                                <input type="email" name="email" id="inpEmail" placeholder="Your email address" />
                                                <button class="btn-yellow">Subscribe</button>
                                            </form>
                                            <ul class="list-pay row">
                                                <li><img src="./img/amazon.svg" alt="logo-pay" class="img-pay-logo" /></li>
                                                <li><img src="./img/american_express.svg" alt="logo-pay" class="img-pay-logo" /></li>
                                                <li><img src="./img/apple_pay.svg" alt="logo-pay" class="img-pay-logo" /></li>
                                                <li><img src="./img/bitcoin.svg" alt="logo-pay" class="img-pay-logo" /></li>
                                                <li><img src="./img/paypal.svg" alt="logo-pay" class="img-pay-logo" /></li>
                                                <li><img src="./img/f_pay.svg" alt="logo-pay" class="img-pay-logo" /></li>
                                                <li><img src="./img/sofort.svg" alt="logo-pay" class="img-pay-logo" /></li>
                                                <li><img src="./img/visa.svg" alt="logo-pay" class="img-pay-logo" /></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section class="footer-bottom">
                            <div class="container">
                                <ul class="row">
                                    <li class="footer-bottom-left col-6">
                                        <p>Copyright © 2021 <span>Kalles</span> all rights reserved. Powered by
                                            <a href="#">The4</a>
                                        </p>
                                    </li>
                                    <li class="footer-bottom-right col-6">
                                        <nav class="footer-bottom-nav">
                                            <ul class="menu-footer-bottom">
                                                <li><a href="#">Shop</a></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><a href="#">Blog</a></li>
                                            </ul>
                                        </nav>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </footer>
                    <a class="btn-move-top"><i><FontAwesomeIcon icon={["fas", "chevron-up"]} /></i></a>
                </body>
            </header>
        </div>
    );
}

export default App;
