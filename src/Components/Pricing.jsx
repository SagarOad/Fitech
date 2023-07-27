import { useState } from "react";
import PricingCard from "./PricingCard";
import Data from "../Data/PriceData";

const Pricing = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div id="pricing" className="px-8 pb-16 py-12 md:px-24 mx-auto">
      <div className="flex flex-wrap md:flex-auto my-12 justify-center px-4 md:px-24 mx-auto">
        <button
          className={
            toggleState === 1
              ? "tabs active-tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
              : "tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
          }
          onClick={() => toggleTab(1)}
        >
          Web Design
        </button>
        <button
          className={
            toggleState === 2
              ? "tabs active-tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
              : "tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
          }
          onClick={() => toggleTab(2)}
        >
          Ecommerce Website
        </button>
        <button
          className={
            toggleState === 3
              ? "tabs active-tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
              : "tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
          }
          onClick={() => toggleTab(3)}
        >
          Web Portal
        </button>
        <button
          className={
            toggleState === 4
              ? "tabs active-tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
              : "tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
          }
          onClick={() => toggleTab(4)}
        >
          Video Animation
        </button>
        <button
          className={
            toggleState === 5
              ? "tabs active-tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
              : "tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
          }
          onClick={() => toggleTab(5)}
        >
          Branding
        </button>
        <button
          className={
            toggleState === 6
              ? "tabs active-tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
              : "tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
          }
          onClick={() => toggleTab(6)}
        >
          Digital Marketing
        </button>
        <button
          className={
            toggleState === 7
              ? "tabs active-tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
              : "tabs border-2 text-white mx-2 px-4 py-2 text-[20px] font-medium"
          }
          onClick={() => toggleTab(7)}
        >
          Mobile App Development
        </button>
      </div>
      {/* Tab Content */}

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
          onClick={() => toggleTab(1)}
        >
          <PricingCard
            firstTitle="Basic Package"
            secondTitle="Business Package"
            thirdTitle="Business Plus"
            firstPrice="$499"
            firstDiscount="$799"
            secondPrice="$999"
            seoncdDiscount="$1999"
            thirdPrice="$3999"
            thirdDiscount="$1999"

            WebDesignMsg1="5 Pages Website"
            WebDesignMsg2="Custom Design"
            WebDesignMsg3="Mobile Responsive"
            WebDesignMsg4="Content Creation"
            WebDesignMsg5="Cross Browser Compatible"
            WebDesignMsg6="Unlimited Revisions"
            WebDesignMsg7="Dedicated Account Manager"
            WebDesignMsg8="Timeline 1 Month"

            WebDesignMsg9="10 Pages Website"
            WebDesignMsg10="Custom Design"
            WebDesignMsg11="Mobile Responsive"
            WebDesignMsg12="Free Google Friendly Sitemap"
            WebDesignMsg13="Cross Browser Compatible"
            WebDesignMsg14="Unlimited Revisions"
            WebDesignMsg15="Dedicated Account Manager"
            WebDesignMsg16="CMS / Admin Panel"

            WebDesignMsg17="20 Unique Pages Website"
            WebDesignMsg18="CMS / Admin Panel Support"
            WebDesignMsg19="Mobile Responsive"
            WebDesignMsg20="Contact/Query Form"
            WebDesignMsg21="Free Google Friendly Sitemap"
            WebDesignMsg22="Cross Browser Compatible"
            WebDesignMsg23="Unlimited Revisions"
            WebDesignMsg24="Dedicated Account Manager"
            WebDesignMsg25="Timeline 3 Months"
            WebDesignMsg26="Support 3 Months"
          />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
          onClick={() => toggleTab(2)}
        >
          <PricingCard
            firstTitle="Startup E-Commerce Package"
            secondTitle="Professional E-Commerce Package"
            thirdTitle="Elite E-Commerce Package"
            firstPrice="$999"
            firstDiscount="$1499"
            secondPrice="$1999"
            seoncdDiscount="$2499"
            thirdPrice="$4999"
            thirdDiscount="$3999"     
            
            WebDesignMsg1="Customized Design"
            WebDesignMsg2="Up-To 100 Products"
            WebDesignMsg3="Content Management System (CMS)"
            WebDesignMsg4="Mini Shopping Cart Integration"
            WebDesignMsg5="Payment Module Integration"
            WebDesignMsg6="Easy Product Search"
            WebDesignMsg7="Dedicated Designer & Developer"
            WebDesignMsg8="Unlimited Revisions"

            WebDesignMsg9="Customized Design"
            WebDesignMsg10="Up-To 500 Products"
            WebDesignMsg11="Content Management System (CMS)"
            WebDesignMsg12="Full Shopping Cart Integration"
            WebDesignMsg13="Payment Module Integration"
            WebDesignMsg14="Easy Product Search"
            WebDesignMsg15="Product Reviews"
            WebDesignMsg16="5 Promotional Banners"
            WebDesignMsg17="Team Of Expert Designers & Developers"
            WebDesignMsg18="Unlimited Revisions"

            WebDesignMsg19="Unlimited Pages Website With Unique Design"
            WebDesignMsg20="5 Custom Logo Design"
            WebDesignMsg21="CMS / Backend Adminstrative System"
            WebDesignMsg22="Unlimited Products With Unlimited Categories"
            WebDesignMsg23="FREE Unlimited Revisions"
            WebDesignMsg24="Custom Shopping Cart Integration"
            WebDesignMsg25="Multiple Payment Module Integration"
            WebDesignMsg26="Multiple Shipping Module Integration"
            WebDesignMsg27="Product Ratings & Reviews"
            WebDesignMsg28="Sales & Inventory Management System"
            WebDesignMsg29="Multiple Currency Support"
            WebDesignMsg30="Customer Login Area (Sign-Up & Sign-In)"
            WebDesignMsg31="Mobile Responsive"
            WebDesignMsg32="Social Media Designs (Facebook, Twitter, Youtube)"
            WebDesignMsg33="Dedicated Project Manager"
            WebDesignMsg34="News Letter Subscription"
          />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
          onClick={() => toggleTab(3)}
        >
          <PricingCard
            firstTitle="Basic Plan"
            secondTitle="Premimium Plan"
            thirdTitle="Customized Plan"
            firstPrice="$3500"
            firstDiscount="$4500"
            secondPrice="$5000"
            seoncdDiscount="$6000"

            WebDesignMsg1="All Type of Online Portals eg: Dating Portal, Job Portal, Social Network etc"
            WebDesignMsg2="Complete Deployment"
            WebDesignMsg3="100% Custom Designs - No Templates"
            WebDesignMsg4="Value-Added Services"
            WebDesignMsg5="Discounted Price"
            WebDesignMsg6="Dedicated Account Manager"
            WebDesignMsg7="Satisfaction Guarantee"
            WebDesignMsg8="30-Days Moneyback Guarantee"

            WebDesignMsg9="All Type of Online Portals"
            WebDesignMsg10="12 Unique Logo Concepts"
            WebDesignMsg11="Unlimited Revisions"
            WebDesignMsg12="100% Ownership Right"
            WebDesignMsg13="Complete Deployment"
            WebDesignMsg14="Logo Design"
            WebDesignMsg15="100% Custom Designs - No Templates"
            WebDesignMsg16="Stationery Design (Business Card, Letterhead, Envelope)"

            WebDesignMsg17="Comprehensive Web Portal (Any One Of Your Choice*)"
            WebDesignMsg18="Customized planning according to your needs"
          />
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
          onClick={() => toggleTab(4)}
        >
          <PricingCard
            firstTitle="Silver Plan"
            secondTitle="Gold Plan"
            thirdTitle="Platinum Plan"
            firstPrice="$99"
            firstDiscount="$200"
            secondPrice="$199"
            seoncdDiscount="$300"
            thirdPrice="$400"
            thirdDiscount="$299"

            WebDesignMsg1="15 Sec Video"
            WebDesignMsg2="Script Writing"
            WebDesignMsg3="Storyboard & Characters"
            WebDesignMsg4="Voiceover"
            WebDesignMsg5="Animation"
            WebDesignMsg6="Finalized & Published"
            WebDesignMsg7=""
            WebDesignMsg8=""

            WebDesignMsg9="30 Sec Video"
            WebDesignMsg10="Script Writing"
            WebDesignMsg11="Storyboard & Characters"
            WebDesignMsg12="Voiceover"
            WebDesignMsg13="Animation"
            WebDesignMsg14="Finalized & Published"
            WebDesignMsg15=""
            WebDesignMsg16=""

            WebDesignMsg17="60 Sec Video"
            WebDesignMsg18="Script Writing"
            WebDesignMsg19="Storyboard & Characters"
            WebDesignMsg20="Voiceover"
            WebDesignMsg21="Animation"
            WebDesignMsg22="Finalized & Published"
            WebDesignMsg23=""
            WebDesignMsg24=""
            WebDesignMsg25=""
            WebDesignMsg26=""
          />
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
          onClick={() => toggleTab(5)}
        >
          <PricingCard
            firstTitle="Stationery"
            secondTitle="Brochure / Flyer"
            thirdTitle="Poster Design"
            firstPrice="$79"
            firstDiscount="$149"
            secondPrice="$139"
            seoncdDiscount="$249"
            thirdPrice="$249"
            thirdDiscount="$149"

            WebDesignMsg1="1 Business Card Design"
            WebDesignMsg2="1 Letterhead Design"
            WebDesignMsg3="1 Envelope Design"
            WebDesignMsg4="Dedicated Designer"
            WebDesignMsg5="3 Design Revisions"
            WebDesignMsg6="Turnaround Time 24 - 48 Hours"
            WebDesignMsg7="100% Satisfaction Guaranteed"
            WebDesignMsg8="100% Ownership Rights"
            WebDesignMsg9="100% Unique Design Guarantee"
            WebDesignMsg10="100% Money Back Guarantee"
            WebDesignMsg11="Mobile Responsive"
            WebDesignMsg12="All Final File Formats"

            WebDesignMsg13="2 Design Concepts (Trifold / Bi-Fold)"
            WebDesignMsg14="Dedicated Designer"
            WebDesignMsg15="Dedicated Account Manager"
            WebDesignMsg16="Unlimited Revisions"


            WebDesignMsg17="100% Unique Design Guarantee"
            WebDesignMsg18="100% Money Back Guarantee"
            WebDesignMsg19="All Final File Formats"
            WebDesignMsg20="1 Unique Design"
            WebDesignMsg21="3 Design Concepts"
            WebDesignMsg22="2 Design Revisions"
            WebDesignMsg23="Turnaround Time - 48 - 72 Hours"
            WebDesignMsg24="100% Satisfaction Guaranteed"
            WebDesignMsg25="100% Ownership Rights"
            WebDesignMsg26="100% Unique Design Guarantee"
            WebDesignMsg27="100% Money Back Guarantee"
            WebDesignMsg28="All Final File Formats"
          />
        </div>

        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
          onClick={() => toggleTab(6)}
        >
          <PricingCard
            firstTitle="Basic Package"
            secondTitle="Premimum Package"
            thirdTitle="Ennterprice Package"
            firstPrice="$249"
            firstDiscount="$499"
            secondPrice="$399"
            seoncdDiscount="$799"
            thirdPrice="$1599"
            thirdDiscount="$799"

            WebDesignMsg1="2 Platforms"
            WebDesignMsg2="16 Posts Per Month"
            WebDesignMsg3="Analytics"
            WebDesignMsg4="Basic Ad Campaigns"
            WebDesignMsg5="Post Designs"
            WebDesignMsg6="Account Manager"
            WebDesignMsg7="Manage Campaign"
            WebDesignMsg8="Logo And Cover"

            WebDesignMsg9="3 Platforms"
            WebDesignMsg10="20 Posts Per Month"
            WebDesignMsg11="Analytics"
            WebDesignMsg12="Basic + Video Ads"
            WebDesignMsg13="Post Designs"
            WebDesignMsg14="Account Manager"
            WebDesignMsg15="Manage Campaign"
            WebDesignMsg16="Logo And Cover"

            WebDesignMsg17="4 Platforms"
            WebDesignMsg18="30 Posts Per Month"
            WebDesignMsg19="Analytics"
            WebDesignMsg20="Basic + Video Posts + Ads"
            WebDesignMsg21="Account Manager"
            WebDesignMsg22="Manage Campaign"
            WebDesignMsg23="Logo And Cover"
            WebDesignMsg24="Weekly Reports"
            WebDesignMsg25="Customer Support Services"
            WebDesignMsg26="Page Chat Support"
          />
        </div>

        <div
          className={toggleState === 7 ? "content  active-content" : "content"}
          onClick={() => toggleTab(7)}
        >
          <PricingCard
            firstTitle="Basic Package"
            secondTitle="Premimum Package"
            thirdTitle="Ennterprice Package"
            firstPrice="$6000"
            firstDiscount="$4500"
            secondPrice="$12000"
            seoncdDiscount="$8000"
            thirdPrice="$18000"
            thirdDiscount="$25000"

            WebDesignMsg1="Custom App Deevlopment (IOS/Android)"
            WebDesignMsg2="User Interface (UI) Design"
            WebDesignMsg3="User Experience (UX) Design"
            WebDesignMsg4="Push Notifications Integration"
            WebDesignMsg5="App Store Submission Assistance"
            WebDesignMsg6="Basic App Performance Optimization"
            WebDesignMsg7="Standard Security Measure"
            WebDesignMsg8="1 Platform (IOS or Android)"

            WebDesignMsg9="Everything included in the Basic Package"
            WebDesignMsg10="Cross-Platform App Development (iOS and Android)"
            WebDesignMsg11="App Store Optimization (ASO)"
            WebDesignMsg12="In-App Purchase Integration"
            WebDesignMsg13="Enhanced App Performance Optimization"
            WebDesignMsg14="Advanced Security Features"
            WebDesignMsg15="Backend Development and API Integration"
            WebDesignMsg16="User Authentication and Login"

            WebDesignMsg17="Everything included in the Premium Package"
            WebDesignMsg18="Custom Backend Development"
            WebDesignMsg19="Multi-platform Support (iOS, Android, Web)"
            WebDesignMsg20="Enhanced Security and Data Encryption"
            WebDesignMsg21="Advanced User Authentication and Permissions"
            WebDesignMsg22="Integration of Third-Party Services (e.g., Payment Gateways, Social Media APIs)"
            WebDesignMsg23="Real-time Analytics and Insights"
            WebDesignMsg24="Continuous Integration and Deployment (CI/CD)"
            WebDesignMsg25="Dedicated Project Manager"
            WebDesignMsg26="24/7 Technical Support"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
