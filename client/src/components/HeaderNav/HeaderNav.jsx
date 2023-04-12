import React, { useState } from "react";
import "./HeaderNav.scss";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillLightningFill } from "react-icons/bs";
import vagitable from "../../assets/svg/vegetable.svg";
import cup from "../../assets/svg/cup.svg";
import meats from "../../assets/svg/meats.svg";
import breakfast from "../../assets/svg/breakfast (1).svg";
import frozen from "../../assets/svg/frozen.svg";
import biscuit from "../../assets/svg/biscuit.svg";
import grocery from "../../assets/svg/grocery.svg";
import Modal from "../Modal/Modal";
import product10 from "../../assets/images/vegetable/product/10.png";
import product11 from "../../assets/images/vegetable/product/11.png";
import product12 from "../../assets/images/vegetable/product/12.png";
import product13 from "../../assets/images/vegetable/product/13.png";

const HeaderNav = () => {
  const [dealToday, setDealToday] = useState(false);

  return (
    <>
      <div className="header-nav">
        <div className="wraper">
          <div className="category-btn">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-align-left"
              >
                <line x1="17" y1="10" x2="3" y2="10"></line>
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="14" x2="3" y2="14"></line>
                <line x1="17" y1="18" x2="3" y2="18"></line>
              </svg>
              <span>All Categories</span>
              <div className="category-dropdown">
                <ul className="category-list">
                  <li className="onhover-category-list">
                    <a href="#" className="category-name">
                      <img src={vagitable} alt="" />
                      <h6>Vegetables & Fruit</h6>
                      <IoIosArrowForward />
                      <div className="jhh"></div>
                    </a>
                    <div className="all-category">
                      <div className="all-category-left">
                        <h6>Organic Vagitables</h6>
                        <ul>
                          <li>
                            <a href="#">Potato & Tomato</a>
                          </li>
                          <li>
                            <a href="#">Cucumber & Capsicum</a>
                          </li>
                          <li>
                            <a href="#">Leafy Vegetables</a>
                          </li>
                          <li>
                            <a href="#">Root Vegetables</a>
                          </li>
                          <li>
                            <a href="#">Beans & Okra</a>
                          </li>
                          <li>
                            <a href="#">Cabbage & Cauliflower</a>
                          </li>
                          <li>
                            <a href="#">Gourd & Drumstick</a>
                          </li>
                          <li>
                            <a href="#">Specialty</a>
                          </li>
                        </ul>
                      </div>
                      <div className="all-category-right">
                        <h6>Fesh Fruit</h6>
                        <ul>
                          <li>
                            <a href="#">Banana & Papaya</a>
                          </li>
                          <li>
                            <a href="#">Kiwi, Citrus Fruit</a>
                          </li>
                          <li>
                            <a href="#">Apples & Pomegranate</a>
                          </li>
                          <li>
                            <a href="#">Seasonal Fruits</a>
                          </li>
                          <li>
                            <a href="#">Mangoes</a>
                          </li>
                          <li>
                            <a href="#">Fruit Baskets</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="onhover-category-list">
                    <a href="#" className="category-name">
                      <img src={cup} alt="" />
                      <h6>Beverages</h6>
                      <IoIosArrowForward />
                      <div className="jhh"></div>
                    </a>
                    <div className="all-category">
                      <div className="all-category-left energy-soft-drinks">
                        <h6>Energy & Soft Drinks</h6>
                        <ul>
                          <li>
                            <a href="#">Soda & Cocktail Mix</a>
                          </li>
                          <li>
                            <a href="#">Sports & Energy Drinks</a>
                          </li>
                          <li>
                            <a href="#">Non Alcoholic Drinks</a>
                          </li>
                          <li>
                            <a href="#">Packaged Water</a>
                          </li>
                          <li>
                            <a href="#">Flavoured Water</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="onhover-category-list">
                    <a href="#" className="category-name">
                      <img src={meats} alt="" />
                      <h6>Meats & Seafood</h6>
                      <IoIosArrowForward />
                      <div className="jhh"></div>
                    </a>
                    <div className="all-category">
                      <div className="all-category-left">
                        <h6>Meat</h6>
                        <ul>
                          <li>
                            <a href="#">Fresh Meat</a>
                          </li>
                          <li>
                            <a href="#">Frozen Meat</a>
                          </li>
                          <li>
                            <a href="#">Marinated Meat</a>
                          </li>
                          <li>
                            <a href="#">Fresh & Frozen Meat</a>
                          </li>
                        </ul>
                      </div>
                      <div className="all-category-right">
                        <h6>Seafood</h6>
                        <ul>
                          <li>
                            <a href="#">Fresh Water Fish</a>
                          </li>
                          <li>
                            <a href="#">Dry Fish</a>
                          </li>
                          <li>
                            <a href="#">Frozen Fish & Seafood</a>
                          </li>
                          <li>
                            <a href="#">Marine Water Fish</a>
                          </li>
                          <li>
                            <a href="#">Canned Seafood</a>
                          </li>
                          <li>
                            <a href="#">Prawans & Shrimps</a>
                          </li>
                          <li>
                            <a href="#">Other Seafood</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="onhover-category-list">
                    <a href="#" className="category-name">
                      <img src={breakfast} alt="" />
                      <h6>Breakfast & Dairy</h6>
                      <IoIosArrowForward />
                      <div className="jhh"></div>
                    </a>
                    <div className="all-category">
                      <div className="all-category-left">
                        <h6>Breakfast Cereals</h6>
                        <ul>
                          <li>
                            <a href="#">Oats & Porridge</a>
                          </li>
                          <li>
                            <a href="#">Kids Cereal</a>
                          </li>
                          <li>
                            <a href="#">Muesli</a>
                          </li>
                          <li>
                            <a href="#">Flakes</a>
                          </li>
                          <li>
                            <a href="#">Granola & Cereal Bars</a>
                          </li>
                          <li>
                            <a href="#">Instant Noodles</a>
                          </li>
                          <li>
                            <a href="#">Pasta & Macaroni</a>
                          </li>
                          <li>
                            <a href="#">Frozen Non-Veg Snacks</a>
                          </li>
                        </ul>
                      </div>
                      <div className="all-category-right">
                        <h6>Dairy </h6>
                        <ul>
                          <li>
                            <a href="#">Milk</a>
                          </li>
                          <li>
                            <a href="#">Curd</a>
                          </li>
                          <li>
                            <a href="#">Paneer, Tofu & Cream</a>
                          </li>
                          <li>
                            <a href="#">Butter & Margarine</a>
                          </li>
                          <li>
                            <a href="#">Condensed, Powdered Milk</a>
                          </li>
                          <li>
                            <a href="#">Buttermilk & Lassi</a>
                          </li>
                          <li>
                            <a href="#">Yogurt & Shrikhand</a>
                          </li>
                          <li>
                            <a href="#">Flavoured, Soya Milk</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="onhover-category-list">
                    <a href="#" className="category-name">
                      <img src={frozen} alt="" />
                      <h6>Frozen Foods</h6>
                      <IoIosArrowForward />
                      <div className="jhh"></div>
                    </a>
                    <div className="all-category">
                      <div className="all-category-left energy-soft-drinks">
                        <h6>Noodle, Pasta</h6>
                        <ul>
                          <li>
                            <a href="#">Instant Noodles</a>
                          </li>
                          <li>
                            <a href="#">Hakka Noodles</a>
                          </li>
                          <li>
                            <a href="#">Cup Noodles</a>
                          </li>
                          <li>
                            <a href="#">Vermicelli</a>
                          </li>
                          <li>
                            <a href="#">Instant Pasta</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="onhover-category-list">
                    <a href="#" className="category-name">
                      <img src={biscuit} alt="" />
                      <h6>Biscuits & Snacks</h6>
                      <IoIosArrowForward />
                      <div className="jhh"></div>
                    </a>
                    <div className="all-category">
                      <div className="all-category-left">
                        <h6>Biscuits & Cookies</h6>
                        <ul>
                          <li>
                            <a href="#">Salted Biscuits</a>
                          </li>
                          <li>
                            <a href="#">Marie, Health, Digestive</a>
                          </li>
                          <li>
                            <a href="#">Cream Biscuits & Wafers</a>
                          </li>
                          <li>
                            <a href="#">Glucose & Milk Biscuits</a>
                          </li>
                          <li>
                            <a href="#">Cookies</a>
                          </li>
                        </ul>
                      </div>
                      <div className="all-category-right">
                        <h6>Bakery Snacks </h6>
                        <ul>
                          <li>
                            <a href="#">Bread Sticks & Lavash</a>
                          </li>
                          <li>
                            <a href="#">Cheese & Garlic Bread</a>
                          </li>
                          <li>
                            <a href="#">Puffs, Patties, Sandwiches</a>
                          </li>
                          <li>
                            <a href="#">Breadcrumbs & Croutons</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="onhover-category-list">
                    <a href="#" className="category-name">
                      <img src={grocery} alt="" />
                      <h6>Grocery & Staples</h6>
                      <IoIosArrowForward />
                      <div className="jhh"></div>
                    </a>
                    <div className="all-category">
                      <div className="all-category-left">
                        <h6>Grocery</h6>
                        <ul>
                          <li>
                            <a href="#">Lemon, Ginger & Garlic</a>
                          </li>
                          <li>
                            <a href="#">Indian & Exotic Herbs</a>
                          </li>
                          <li>
                            <a href="#">Organic Vegetables</a>
                          </li>
                          <li>
                            <a href="#">Organic Fruits</a>
                          </li>
                        </ul>
                      </div>
                      <div className="all-category-right">
                        <h6>Organic Staples </h6>
                        <ul>
                          <li>
                            <a href="#">Organic Dry Fruits</a>
                          </li>
                          <li>
                            <a href="#">Organic Dals & Pulses</a>
                          </li>
                          <li>
                            <a href="#">Organic Millet & Flours</a>
                          </li>
                          <li>
                            <a href="#">Organic Sugar, Jaggery</a>
                          </li>
                          <li>
                            <a href="#">Organic Masalas & Spices</a>
                          </li>
                          <li>
                            <a href="#">Organic Rice, Other Rice</a>
                          </li>
                          <li>
                            <a href="#">Organic Flours</a>
                          </li>
                          <li>
                            <a href="#">Organic Edible Oil, Ghee</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </button>
          </div>
          <div className="menu-header">
            <ul>
              <li>
                <a href="#">
                  <span>Home</span>
                  <IoIosArrowDown />
                </a>
                <div className="header-category-aza">
                  <ul>
                    <li>
                      <a href="#">KartShop</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">SweetShop</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Organic</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">SuperShop</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">ClassicShop</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Furniture</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Search Oriented</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Category Focus</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Fashion</a>
                      <div class="jhh"></div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  <span>Shop</span> <IoIosArrowDown />
                </a>
                <div className="header-category-aza shop">
                  <ul>
                    <li>
                      <a href="#">Shop Category Slider</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Shop Category Sidebar</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Shop Banner</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Shop Left Sidebar</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Shop List</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Shop Right Sidebar</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Shop Top Filter</a>
                      <div class="jhh"></div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  <span>Product</span>
                  <IoIosArrowDown />
                </a>
                <div className="header-category-aza product">
                  <ul>
                    <li>
                      <a href="#">Product 4 Image</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Product Thumbnail</a>
                      <div class="jhh"></div>
                      <div className="product-thumbail">
                        <ul>
                          <li>
                            <a href="#">Left Thumbnail</a>
                            <div class="jhh"></div>
                          </li>
                          <li>
                            <a href="#">Right Thumbnail</a>
                            <div class="jhh"></div>
                          </li>
                          <li>
                            <a href="#">Bottom Thumbnail</a>
                            <div class="jhh"></div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">Product Bundle</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Product Slider</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Product Sticky</a>
                      <div class="jhh"></div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  <span>Mega Menu</span> <IoIosArrowDown />
                </a>
                <div className="header-category-aza mega bgaza">
                  <ul>
                    <h6>Daily Vegetables</h6>
                    <li>
                      <a href="#">Beans & Brinjals</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Broccoli & Cauliflowe</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Chilies, Garlic</a> <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Vegetables & Salads</a>{" "}
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Gourd, Cucumber</a> <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Herbs & Sprouts</a> <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Lettuce & Leafy</a> <div class="jhh"></div>
                    </li>
                  </ul>
                  <ul>
                    <h6 className="baby">Baby Tender</h6>
                    <li>
                      <a href="#">Beans & Brinjals</a> <div class="bt"></div>
                    </li>
                    <li>
                      <a href="#">Broccoli & Cauliflowe</a>
                      <div class="bt"></div>
                    </li>
                    <li>
                      <a href="#">Chilies, Garlic</a>
                      <div class="bt"></div>
                    </li>
                    <li>
                      <a href="#">Vegetables & Salads</a>
                      <div class="bt"></div>
                    </li>
                    <li>
                      <a href="#">Gourd, Cucumber</a>
                      <div class="bt"></div>
                    </li>
                    <li>
                      <a href="#">Potatoes & Tomatoes</a>
                      <div class="bt"></div>
                    </li>
                    <li>
                      <a href="#">Peas & Corn</a>
                      <div class="bt"></div>
                    </li>
                  </ul>
                  <ul>
                    <h6>Exotic Vegetables</h6>
                    <li>
                      <a href="#">Asparagus & Artichokes</a>{" "}
                      <div class="ev"></div>
                    </li>
                    <li>
                      <a href="#">Avocados & Peppers</a>
                      <div class="ev"></div>
                    </li>
                    <li>
                      <a href="#">Broccoli & Zucchini</a>
                      <div class="ev"></div>
                    </li>
                    <li>
                      <a href="#">Celery, Fennel & Leeks</a>
                      <div class="ev"></div>
                    </li>
                    <li>
                      <a href="#">Chilies & Lime</a>
                      <div class="ev"></div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  <span>Blog</span> <IoIosArrowDown />
                </a>
                <div className="header-category-aza blog">
                  <ul>
                    <li>
                      <a href="#">Blog Detail</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Blog Grid</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Blog List</a>
                      <div class="jhh"></div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  <span>Pages</span> <IoIosArrowDown />
                </a>
                <div className="header-category-aza pages">
                  <ul>
                    <li>
                      <div className="item">
                        <a href="#">
                          Email Template <BsFillLightningFill />
                        </a>
                        <IoIosArrowForward />
                      </div>
                      <div class="jhh"></div>
                      <div className="email-template">
                        <ul>
                          <li>
                            <a href="#">Abandonment</a>
                            <div class="jhh"></div>
                          </li>
                          <li>
                            <a href="#">Offer Template</a>
                            <div class="jhh"></div>
                          </li>
                          <li>
                            <a href="#">Order Success</a>
                            <div class="jhh"></div>
                          </li>
                          <li>
                            <a href="#">Reset Password</a>
                            <div class="jhh"></div>
                          </li>
                          <li>
                            <a href="#">Welcome template</a>
                            <div class="jhh"></div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <a href="#">
                          Invoice Template <BsFillLightningFill />
                        </a>
                        <IoIosArrowForward />
                      </div>
                      <div class="jhh"></div>
                      <div className="invoice-template">
                        <ul>
                          <li>
                            <a href="#">Invoice 1</a>
                            <div class="jhh"></div>
                          </li>
                          <li>
                            <a href="#">Invoice 2</a>
                            <div class="jhh"></div>
                          </li>
                          <li>
                            <a href="#">Invoice 3</a>
                            <div class="jhh"></div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">404</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Cart</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Checkout</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Coming Soon</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Compare</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Faq</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Order Success</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Order Tracking</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">OTP</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Search</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">User Dashboard</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Wishlist</a>
                      <div class="jhh"></div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  <span>Seller</span> <IoIosArrowDown />
                </a>
                <div className="header-category-aza seller">
                  <ul>
                    <li>
                      <a href="#">Become a Seller</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Seller Dashboard</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Seller Detail</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Seller Detail 2</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Seller Grid</a>
                      <div class="jhh"></div>
                    </li>
                    <li>
                      <a href="#">Seller Grid 2</a>
                      <div class="jhh"></div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="nav-righ">
            <button onClick={() => setDealToday(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-zap"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {dealToday && (
        <Modal setShow={setDealToday}>
          <div className="header deal-modal">
            <div className="title-section">
              <h6>Deal Today</h6>
              <p>Recommended deals for you.</p>
            </div>
            <div className="deal-today">
              <ul>
                <li>
                  <a href="#">
                    <img src={product10} alt="" />
                    <div className="des">
                      <h6>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h6>
                      <div className="price">
                        <span>$52.57</span>
                        <span>
                          <del>$52.57</del>500 G
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="two2">
                    <img src={product11} alt="" />
                    <div className="des">
                      <h6>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h6>
                      <div className="price">
                        <span>$52.57</span>
                        <span>
                          <del>$52.57</del>500 G
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="two3">
                    <img src={product12} alt="" />
                    <div className="des">
                      <h6>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h6>
                      <div className="price">
                        <span>$52.57</span>
                        <span>
                          <del>$52.57</del>500 G
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={product13} alt="" />
                    <div className="des">
                      <h6>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h6>
                      <div className="price">
                        <span>$52.57</span>
                        <span>
                          <del>$52.57</del>500 G
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default HeaderNav;
