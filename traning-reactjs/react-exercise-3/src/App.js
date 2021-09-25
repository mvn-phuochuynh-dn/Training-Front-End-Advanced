import './scss/styles.scss';
import { FaArrowRight, FaHeart, FaSearch, FaUser, FaShoppingCart, FaEye, FaDumbbell, FaTrophy, FaChevronLeft, FaChevronRight, FaTruck, FaHeadset, FaDonate, FaPlus, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterestP, FaStoreAlt, FaChevronUp } from "react-icons/fa";
import { Header, Header_Banner, Main, Page_Footer } from './components'

function App() {
  return (
    <>
      <Header_Banner />
      <Header />
      <Main />
      <Page_Footer />
      <a className="btn-move-top"><i className="m-15"><FaChevronUp /></i></a>
      {/* <main className="page-main">
        <section className="section-clothe-types mt-30 mb-30">
          <div className="container">
            <ul className="clothe-type-list flex-between row">
              <li className="clothe-type-item col-4 col-small-12 col-medium-4 col-wide-4 col-large-4">
                <div className="clothe-type-img">
                  <a href className="img-type">
                    <img src="./template/asset/img/accessories-for-man.jpg" alt="accessories-for-man" />
                  </a>
                </div>
                <div className="type-content color-white">
                  <h4 className="banner-sub-title">ACCESSORIES</h4>
                  <h3 className="block-title">FOR MEN</h3>
                </div>
              </li>
              <li className="clothe-type-item col-4 col-small-12 col-medium-4 col-wide-4 col-large-4">
                <div className="clothe-type-img">
                  <a href className="img-type">
                    <img src="./template/asset/img/training-clothing-for-women.jpg" alt="training-clothing-for-women" />
                  </a>
                </div>
                <div className="type-content color-white">
                  <h4 className="banner-sub-title">TRAINING CLOTHING</h4>
                  <h3 className="block-title">FOR WOMEN</h3>
                </div>
              </li>
              <li className="clothe-type-item col-4 col-small-12 col-medium-4 col-wide-4 col-large-4">
                <div className="clothe-type-img">
                  <a href className="img-type">
                    <img src="./template/asset/img/summer-sale.jpg" alt="summer-sale" />
                  </a>
                </div>
                <div className="type-content color-white">
                  <h2 className="section-title mt-20 mb-20">-50% OFF</h2>
                  <h4 className="banner-sub-title">SUMMER SALE</h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="section-products mt-70 mb-70">
          <div className="container">
            <div className="product-tab-list mt-20 mb-20">
              <ul className="product-tab-menu">
                <li className="tab-item color-black ml-20 pb-5">FEATURED</li>
                <li className="tab-item color-black ml-20 pb-5">NEW ARRIVALS</li>
                <li className="tab-item color-black ml-20 pb-5">ON SALE</li>
              </ul>
            </div>
            <ul className="product-list flex-around row mt-20 mb-20">
              <li className="product-item col-3 col-small-6 col-wide-3 col-large-3">
                <div className="product-item-img">
                  <a href="#">
                    <img src="./template/asset/img/pr-04.jpg" alt="product-item" />
                  </a>
                  <div className="btn-view-cart bottom-right display-none">
                    <a className="top"><i><FaEye/></i></a>
                    <a className="bottom"><i><FaShoppingCart/></i></a>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name m-10"><a href> Nike As Dri-Fit Training</a></h3>
                  <p className="product-price">$65.00</p>
                  <ul className="product-color flex-center-X pt-10 pb-10">
                    <li className="product-color-black ml-5 mr-5" />
                    <li className="product-color-blue ml-5 mr-5" />
                    <li className="product-color-pink ml-5 mr-5" />
                  </ul>
                </div>
              </li>
              <li className="product-item col-3 col-small-6 col-wide-3 col-large-3">
                <div className="product-item-img">
                  <a href="#" className="product-item-img">
                    <img src="./template/asset/img/pr-08.jpg" alt="product-item" />
                  </a>
                  <div className="btn-view-cart bottom-right display-none">
                    <a className="top"><i><FaEye/></i></a>
                    <a className="bottom"><i><FaShoppingCart/></i></a>
                  </div>
                </div>
                <div className="top-right btn-sale">35%</div>
                <div className="product-info">
                  <h3 className="product-name m-10"><a href>Body Trimmer</a></h3>
                  <p className="product-price">
                    <span>$99.00</span>
                    <span>$65.00</span>
                  </p>
                </div>
              </li>
              <li className="product-item col-3 col-small-6 col-wide-3 col-large-3">
                <div className="product-item-img">
                  <a href="#" className="product-item-img">
                    <img src="./template/asset/img/pr-10.jpg" alt="product-item" />
                  </a>
                  <div className="btn-view-cart bottom-right display-none">
                    <a className="top"><i><FaEye/></i></a>
                    <a className="bottom"><i><FaShoppingCart/></i></a>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name m-10"><a href>Nike Trophy Training Shorts</a></h3>
                  <p className="product-price">$29.00</p>
                  <ul className="product-color flex-center-X pt-10 pb-10">
                    <li className="product-color-blue ml-5 mr-5" />
                    <li className="product-color-black ml-5 mr-5" />
                  </ul>
                </div>
              </li>
              <li className="product-item col-3 col-small-6 col-wide-3 col-large-3">
                <div className="product-item-img">
                  <a href="#" className="product-item-img">
                    <img src="./template/asset/img/pr-13.jpg" alt="product-item" />
                  </a>
                  <div className="btn-view-cart bottom-right display-none">
                    <a className="top"><i><FaEye/></i></a>
                    <a className="bottom"><i><FaShoppingCart/></i></a>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name m-10"><a href>Calvin Clein Training Shorts</a></h3>
                  <p className="product-price">$29.00</p>
                  <ul className="product-color flex-center-X pt-10 pb-10">
                    <li className="product-color-red ml-5 mr-5" />
                    <li className="product-color-black ml-5 mr-5" />
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="section-sales-off mt-30 mb-30">
          <div className="sales-off-img">
            <img src="./template/asset/img/img-sales-off.jpg" alt="img-sales-off" />
            <img className="display-none" src="./template/asset/img/full-width-banner-mobile.jpg" alt="img-sales-off" />
          </div>
          <div className="sales-off-content">
            <p className="sub-title">BLACK FRIDAY</p>
            <h2 className="section-title mt-20 mb-20">SAVE 50% OFF</h2>
            <h3 className="block-title mb-20">FIRST ONLINE PURCHASE</h3>
            <a href="#" className="btn-primary btn-black">VIEW PROMOTION</a>
          </div>
        </section>
        <section className="section-top-selling">
          <div className="container">
            <div className="block-title-top">
              <h2 className="section-title mt-20 mb-20">TOP SELLING</h2>
              <i className="mt-20 mb-20"><FaDumbbell/></i>
              <p className="mt-10 mb-10">Whether your goals are to improve weight or body composition, increase
                strength and function, or
                improve overall</p>
              <p className="mt-10 mb-10">health, resistance training can help you get there.</p>
            </div>
            <ul className="product-list flex-around row mt-20 mb-20">
              <li className="product-item col-3 col-small-6 col-wide-3 col-large-3">
                <div className="product-item-img">
                  <a href="#">
                    <img src="./template/asset/img/pr-01.jpg" alt="product-item" />
                  </a>
                  <div className="btn-view-cart bottom-right display-none">
                    <a className="top"><i><FaEye/></i></a>
                    <a className="bottom"><i><FaShoppingCart/></i></a>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name m-10"><a href> Shoes Huarache – TT100</a></h3>
                  <p className="product-price">$145.00</p>
                  <ul className="product-color flex-center-X pt-10 pb-10">
                    <li className="product-color-blue ml-5 mr-5" />
                    <li className="product-color-cyan ml-5 mr-5" />
                  </ul>
                </div>
              </li>
              <li className="product-item col-3 col-small-6 col-wide-3 col-large-3">
                <div className="product-item-img">
                  <a href="#">
                    <img src="./template/asset/img/pr-03.jpg" alt="product-item" />
                  </a>
                  <div className="btn-view-cart bottom-right display-none">
                    <a className="top"><i><FaEye/></i></a>
                    <a className="bottom"><i><FaShoppingCart/></i></a>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name m-10"><a href>SwimZip Men's Long Sleeve Zipper</a></h3>
                  <p className="product-price">$65.00</p>
                </div>
              </li>
              <li className="product-item product-sale col-3 col-small-6 col-wide-3 col-large-3">
                <div className="product-item-img">
                  <a href="#">
                    <img src="./template/asset/img/pr-04.jpg" alt="product-item" />
                  </a>
                  <div className="btn-view-cart bottom-right display-none">
                    <a className="top"><i><FaEye/></i></a>
                    <a className="bottom"><i><FaShoppingCart/></i></a>
                  </div>
                </div>
                <div className="top-right btn-sale">35%</div>
                <div className="product-info">
                  <h3 className="product-name m-10"><a href>Men's Tops Long Sleeve Shirts</a></h3>
                  <p className="product-price">
                    <span>$99.00</span>
                    <span>$65.00</span>
                  </p>
                  <ul className="product-color flex-center-X pt-10 pb-10">
                    <li className="product-color-pink ml-5 mr-5" />
                    <li className="product-color-black ml-5 mr-5" />
                    <li className="product-color-blue ml-5 mr-5" />
                  </ul>
                </div>
              </li>
              <li className="product-item col-3 col-small-6 col-wide-3 col-large-3">
                <div className="product-item-img">
                  <a href="#">
                    <img src="./template/asset/img/pr-07.jpg" alt="product-item" />
                  </a>
                  <div className="btn-view-cart bottom-right display-none">
                    <a className="top"><i><FaEye/></i></a>
                    <a className="bottom"><i><FaShoppingCart/></i></a>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name m-10"><a href>Elip Power Max</a></h3>
                  <p className="product-price">$35.00</p>
                  <ul className="product-color flex-center-X pt-10 pb-10">
                    <li className="product-color-red ml-5 mr-5" />
                    <li className="product-color-black ml-5 mr-5" />
                  </ul>
                </div>
              </li>
              <li className="product-item col-3 col-small-6 col-wide-3 col-large-3">
                <div className="product-item-img">
                  <a href="#">
                    <img src="./template/asset/img/pr-09.jpg" alt="product-item" />
                  </a>
                  <div className="btn-view-cart bottom-right display-none">
                    <a className="top"><i><FaEye/></i></a>
                    <a className="bottom"><i><FaShoppingCart/></i></a>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name m-10"><a href>Men's Sports Jogging Workout Shorts</a></h3>
                  <p className="product-price">$29.00</p>
                  <ul className="product-color flex-center-X pt-10 pb-10">
                    <li className="product-color-black ml-5 mr-5" />
                    <li className="product-color-blue ml-5 mr-5" />
                  </ul>
                </div>
              </li>
              <li className="product-item product-sale col-3 col-small-6 col-wide-3 col-large-3">
                <div className="product-item-img">
                  <a href="#">
                    <img src="./template/asset/img/pr-11.jpg" alt="product-item" />
                  </a>
                  <div className="btn-view-cart bottom-right display-none">
                    <a className="top"><i><FaEye/></i></a>
                    <a className="bottom"><i><FaShoppingCart/></i></a>
                  </div>
                </div>
                <div className="top-right btn-sale">35%</div>
                <div className="product-info">
                  <h3 className="product-name m-10"><a href>Men's Long Sleeve Rash Guard</a></h3>
                  <p className="product-price">
                    <span>$99.00</span>
                    <span>$65.00</span>
                  </p>
                  <ul className="product-color flex-center-X pt-10 pb-10">
                    <li className="product-color-black ml-5 mr-5" />
                    <li className="product-color-blue ml-5 mr-5" />
                    <li className="product-color-pink ml-5 mr-5" />
                  </ul>
                </div>
              </li>
              <li className="product-item col-3 col-small-6 col-wide-3 col-large-3 ">
                <div className="product-item-img">
                  <a href="#">
                    <img src="./template/asset/img/pr-14.jpg" alt="product-item" />
                  </a>
                  <div className="btn-view-cart bottom-right display-none">
                    <a className="top"><i><FaEye/></i></a>
                    <a className="bottom"><i><FaShoppingCart/></i></a>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name m-10"><a href>Calvin Klein Workout Shorts</a></h3>
                  <p className="product-price">$29.00</p>
                  <ul className="product-color flex-center-X pt-10 pb-10">
                    <li className="product-color-red ml-5 mr-5" />
                    <li className="product-color-black ml-5 mr-5" />
                  </ul>
                </div>
              </li>
              <li className="product-item col-3 col-small-6 col-wide-3 col-large-3 ">
                <div className="product-item-img">
                  <a href="#">
                    <img src="./template/asset/img/pr-01.jpg" alt="product-item" />
                  </a>
                  <div className="btn-view-cart bottom-right display-none">
                    <a className="top"><i><FaEye/></i></a>
                    <a className="bottom"><i><FaShoppingCart/></i></a>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name m-10"><a href> Shoes Huarache</a></h3>
                  <p className="product-price">$145.00</p>
                  <ul className="product-color flex-center-X pt-10 pb-10">
                    <li className="product-color-cyan ml-5 mr-5" />
                    <li className="product-color-blue ml-5 mr-5" />
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <section className="section-latest-news">
          <div className="container">
          <div className="block-title-top">
              <h2 className="section-title mt-20 mb-20">Latest News</h2>
              <i className="mt-20 mb-20"><FaTrophy/></i>
              <p className="mt-10 mb-10">Increased caloric expenditure can result from resistance training both due to acute effects from
                training sessions</p>
              <p className="mt-10 mb-10">and long-term effects from increased muscle mass.</p>
            </div>
            <ul className="latest-news-list flex-around mt-30 mb-30 row">
              <li className="latest-news-item col-4 col-small-12 col-medium-4 col-largest-4">
                <div className="latest-news-img">
                  <a href>
                    <img src="./template/asset/img/blog-01.jpg" alt="accessories-for-man" />
                  </a>
                  <div className="btn-slide center-left display-none">
                    <a><i><FaChevronLeft/></i></a>
                  </div>
                  <div className="btn-slide center-right display-none">
                    <a><i><FaChevronRight/></i></a>
                  </div>
                </div>
                <div className="latest-news-content mt-20">
                  <h3 className="section-sub-title">
                    <a href="#">Tips At-home Cadio Workout</a>
                  </h3>
                  <p className="time-post mt-10 mb-10">on<time className="ml-5">September 1, 2020</time></p>
                  <p>Time to get your sweat on with this workout for a flat stomach! These are the 10 best
                    moves to tighten up that core..</p>
                </div>
              </li>
              <li className="latest-news-item col-4 col-small-12 col-medium-4 col-largest-4">
                <div className="latest-news-img">
                  <a href>
                    <img src="./template/asset/img/blog-02.jpg" alt="accessories-for-man" />
                  </a>
                </div>
                <div className="latest-news-content mt-20">
                  <h3 className="section-sub-title">
                    <a href="#">5 Tips To Stay Healthy At Home</a>
                  </h3>
                  <p className="time-post mt-10 mb-10">on<time className="ml-5">September 1, 2020</time></p>
                  <p>And now more than ever it’s so important to continue to take care of ourselves and make
                    sure we’re putting extra ca...</p>
                </div>
              </li>
              <li className="latest-news-item col-4 col-small-12 col-medium-4 col-largest-4">
                <div className="latest-news-img">
                  <a href>
                    <img src="./template/asset/img/blog-03.jpg" alt="accessories-for-man" />
                  </a>
                </div>
                <div className="latest-news-content mt-20">
                  <h3 className="section-sub-title">
                    <a href="#">10 minute Fat Burning Workout For Beginners</a>
                  </h3>
                  <p className="time-post mt-10 mb-10">on<time className="ml-5">September 1, 2020</time></p>
                  <p>I know sometimes it can be difficult to keep your healthy nutrition on track, so that’s
                    why Icreated the Hot Body ...
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <section className="section-services mt-30 mb-30">
          <div className="container">
            <ul className="service-list flex-around row">
              <li className="service-item col-4 col-small-12 col-medium-4 col-largest-4">
                <i><FaTruck/></i>
                <div className="service-item-info mt-10 mb-10">
                  <h4 className="section-sub-title pt-10 pb-10">FREE SHIPPING UK&amp;UK</h4>
                  <p>Free shipping on all orders above $100</p>
                </div>
              </li>
              <li className="service-item col-4 col-small-12 col-medium-4 col-largest-4">
                <i><FaHeadset/></i>
                <div className="service-item-info mt-10 mb-10">
                  <h4 className="section-sub-title pt-10 pb-10">SUPPORT 24/7</h4>
                  <p>Contact us 24 hours a day, 7 days a week</p>
                </div>
              </li>
              <li className="service-item col-4 col-small-12 col-medium-4 col-largest-4">
                <i><FaDonate/></i>
                <div className="service-item-info mt-10 mb-10">
                  <h4 className="section-sub-title pt-10 pb-10">30 DAYS MONEY BACK</h4>
                  <p>Simply return it within 30 days for an exchange.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main> */}
      {/* <footer className="page-footer"> */}
        {/* <section className="footer-top p-30">
          <div className="container">
            <ul className="footer-block-list flex-around row">
          <li className="block-child col-3 col-small-12 col-medium-6 col-large-6 col-largest-3">
                <div className="title-medium display-none row">
                  <h3 className="footer-title mb-20 col-10">Get in tounch</h3>
                  <a className="col-2" href><i><FaPlus/></i></a>
                </div>
                <div className="block-child-content">
                  <div className="logo-page-white">
                    <a href="#"><img src="./template/asset/img/logo-page-white.png" alt="logo-page" /></a>
                  </div>
                  <ul className="get-in-touch-list">
                    <li className="get-in-touch-item">
                      <i className="m-5"><FaMapMarkerAlt/></i>
                      <span>184 Main Rd E, St Albans</span>
                      <p className="pl-30"> VIC 3021, Australia</p>
                    </li>
                    <li className="get-in-touch-item">
                      <i className="m-5"><FaEnvelope/></i>
                      <a className="hover-blue" href>contact@company.com</a>
                    </li>
                    <li className="get-in-touch-item">
                      <i className="m-5"><FaPhoneAlt/></i>
                      <span>+001 2233 456</span>
                    </li>
                    <li className="get-in-touch-item">
                      <ul className="get-in-touch-icon-list flex-between">
                        <li><a className="hover-blue" href><i className="m-5"><FaFacebookF/></i></a></li>
                        <li><a className="hover-blue" href><i className="m-5"><FaTwitter/></i></a></li>
                        <li><a className="hover-blue" href><i className="m-5"><FaInstagram/></i></a></li>
                        <li><a className="hover-blue" href><i className="m-5"><FaLinkedin/></i></a></li>
                        <li><a className="hover-blue" href><i className="m-5"><FaPinterestP/></i></a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li> */}
        {/* <li className="block-child col-2 col-small-12 col-medium-6 col-large-6 col-largest-2">
                <div className="title-medium display-none row">
                  <h3 className="footer-title mb-20 col-10">Categories</h3>
                  <a className="col-2" href><i><FaPlus/></i></a>
                </div>
                <div className="block-child-content">
                  <h3 className="footer-title mb-20">Categories</h3>
                  <ul className="footer-list">
                    <li className="footer-item"><a className="hover-blue" href="#">Celebrations</a></li>
                    <li className="footer-item"><a className="hover-blue" href="#">Events</a></li>
                    <li className="footer-item"><a className="hover-blue" href="#">Home Decore</a></li>
                    <li className="footer-item"><a className="hover-blue" href="#">Seasonal Bouquet</a></li>
                    <li className="footer-item"><a className="hover-blue" href="#">Wending decor</a></li>
                  </ul>
                </div>
              </li>
              <li className="block-child col-2 col-small-12 col-medium-6 col-large-6 col-largest-2">
                <div className="title-medium display-none row">
                  <h3 className="footer-title mb-20 col-10">Usefull links</h3>
                  <a classname="col-2" href><i><faplus /></i></a>
                </div>
                <div className="block-child-content">
                  <h3 className="footer-title mb-20">Usefull links</h3>
                  <ul className="footer-list">
                    <li className="footer-item"><a className="hover-blue" href="#">Contact us</a></li>
                    <li className="footer-item"><a className="hover-blue" href="#">Pravacy Policy</a></li>
                    <li className="footer-item"><a className="hover-blue" href="#">Shipping &amp; Delivery</a></li>
                    <li className="footer-item"><a className="hover-blue" href="#">Terms &amp; Conditions</a></li>
                    <li className="footer-item"><a className="hover-blue" href="#">Return &amp; Exchanges</a></li>
                  </ul>
                </div>
              </li> */}
        {/* <li className="block-child col-5 col-small-12 col-medium-6 col-large-6 col-largest-5">
                <div className="newsletter-content">
                  <div className="title-medium display-none row">
                    <h3 className="footer-title mb-20 col-10">Newsletter Signup</h3>
                    <a className="col-2" href><i><FaPlus/></i></a>
                  </div>
                  <div className="block-child-content">
                    <h3 className="footer-title mb-20 ">Newsletter Signup</h3>
                    <p className="pt-10">Subscribe to our newsletter and get 10% off your first purchase</p>
                    <form action className="form-signup">
                      <input type="email" name="email" id="inpEmail" placeholder="Your email address" />
                      <button>Subscribe</button>
                    </form>
                    <form action className="form-signup-medium display-none">
                      <input type="email" name="email" id="inpEmail" placeholder="Your email address" />
                      <button>Subscribe</button>
                    </form>
                    <ul className="list-pay flex-around">
                      <li><img src="./template/asset/img/amazon.svg" alt="logo-pay" className="img-pay-logo" />
                      </li>
                      <li><img src="./template/asset/img/american_express.svg" alt="logo-pay" className="img-pay-logo" /></li>
                      <li><img src="./template/asset/img/apple_pay.svg" alt="logo-pay" className="img-pay-logo" />
                      </li>
                      <li><img src="./template/asset/img/bitcoin.svg" alt="logo-pay" className="img-pay-logo" />
                      </li>
                      <li><img src="./template/asset/img/paypal.svg" alt="logo-pay" className="img-pay-logo" />
                      </li>
                      <li><img src="./template/asset/img/f_pay.svg" alt="logo-pay" className="img-pay-logo" />
                      </li>
                      <li><img src="./template/asset/img/sofort.svg" alt="logo-pay" className="img-pay-logo" />
                      </li>
                      <li><img src="./template/asset/img/visa.svg" alt="logo-pay" className="img-pay-logo" />
                      </li>
                    </ul>
                  </div>
                </div>
              </li> 
      </ul>
    </div>
        </section >*/}
        {/* <section className="footer-bottom p-30">
          <div className="container">
            <ul className="footer-bottom-list flex-between flex-center-Y row">
              <li className="footer-bottom-left col-small-12 col-medium-12 col-large-8">
                <p>Copyright © 2021 <span className="logo-color">Kalles</span> all rights reserved.
                  Powered by
                  <a className="hover-blue" href="#">The4</a>
                </p>
              </li>
              <li className="footer-bottom-right col-small-12 col-medium-12 col-large-4">
                <ul className="footer-bottom-list flex-around">
                  <li className="p-10"><a className="hover-blue" href="#">Shop</a></li>
                  <li className="p-10"><a className="hover-blue" href="#">About Us</a></li>
                  <li className="p-10"><a className="hover-blue" href="#">Contact Us</a></li>
                  <li className="p-10"><a className="hover-blue" href="#">Blog</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </section> */}
        {/* <section className="footer-bottom-list-large display-none">
          <div className="container">
            <ul className="bottom-social-list flex-around mt-10 mb-10">
              <li className="bottom-social-item">
                <a href>
                  <div className="bottom-social-content">
                    <i><FaStoreAlt/></i>
                    <p>Shop</p>
                  </div>
                </a>
              </li>
              <li className="bottom-social-item">
                <a href>
                  <div className="bottom-social-content">
                    <i><FaHeart/></i>
                    <p>Wishlist</p>
                  </div>
                </a>
              </li>
              <li className="bottom-social-item">
                <a href>
                  <div className="bottom-social-content">
                    <i><FaShoppingCart/></i>
                    <p>Cart</p>
                  </div>
                </a>
              </li>
              <li className="bottom-social-item">
                <a href>
                  <div className="bottom-social-content">
                    <i><FaUser/></i>
                    <p>Account</p>
                  </div>
                </a>
              </li>
              <li className="bottom-social-item">
                <a href>
                  <div className="bottom-social-content">
                    <i><FaSearch/></i>
                    <p>Search</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer > */}
    {/* <a className="btn-move-top"><i className="m-15"><FaChevronUp /></i></a>
    </div > */}
    </>

  );
}

export default App;
