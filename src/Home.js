import React from "react";
import { Fade } from "react-reveal";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <Fade bottom>
          <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
        </Fade>
        <Fade left>
          <div className="home_row">
            <Product
              id="12321341"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={19.99}
              image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
              rating={5}
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={700.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            <Product
              id="90829335"
              title="If you chose the image on the right, you're correct! Thats because the camera shown in that image is not"
              price={750.98}
              rating={4}
              image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-quiz.png"
            />
          </div>
          <div className="home_row">
            <Product
              id="90829305"
              title="The Best Approaches to Use good items to sell on amazon in Your Home.Nationwide University Network in Indonesia Website"
              price={200.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL._AC_UL320_SR320,320_.jpg"
            />
            <Product
              id="90829355"
              title="The product will be an excellent pick for you. It ensures an easy maintenance.
            Images may be subject to copyright. Learn More"
              price={300.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/815XYAY-e4L._SY450_.jpg"
            />
            <Product
              id="90829357"
              title="Top Rated in Adult Electric Bicycles & Helpful Customer Reviews - Amazon.com"
              price={250.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/71Z8nyT+ppS._AC_SX500_SY500_.jpg"
            />
            <Product
              id="90829365"
              title="Amazon.com: Electric Kettle 1.8L Stainless Steel Water Heater 110V with Fast Boil, Auto Shut-Off and Boil Dry Protection"
              price={50.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/51l+Wgx18YL._AC_SX466_.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id="90829371"
              title="New certified “Made for Amazon” accessories for Amazon devices are being released | AFTVnews"
              price={350.99}
              rating={4}
              image="https://i1.wp.com/www.aftvnews.com/wp-content/uploads/2018/11/Alexa-Remote-Case-iHome-Speaker-for-Echo-Input-800x450.jpg?resize=646%2C363&quality=100"
            />
            <Product
              id="90829372"
              title="Amazon.in Bestsellers: The most popular items in Accessories"
              price={150.99}
              rating={5}
              image="https://images-eu.ssl-images-amazon.com/images/I/61DKcGr12OL._AC_UL200_SR200,200_.jpg"
            />
            <Product
              id="90829373"
              title="Amazon.com | BELILENT Womens Walking Shoes Slip on Sneaker Socks Platform Nurse Mesh Breathable Lightweight Comfortable Socks Shoes | Walking..."
              price={220.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/81c0+7DnjBL._AC_UY395_.jpg"
            />
            <Product
              id="90829374"
              title="Amazon.com: Product Table"
              price={270.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/81Db0gkod2L._AC_UL320_.jpg"
            />
          </div>
        </Fade>
        <Fade top>
          <div className="home_row">
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
