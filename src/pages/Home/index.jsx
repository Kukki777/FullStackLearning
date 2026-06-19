import { FaShippingFast } from "react-icons/fa";
import HomeCatSlider from "../../components/HomeCatSlider";
import HomeSlider from "../../components/HomeSlider";
import HomeAdsSlider from "../../components/HomeAdsSlider";
// @ts-ignore
import watchbanner from '../../assets/public/home-categories/image.png'
// @ts-ignore
// import {Swiper,SwiperSlide} from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation } from 'swiper/modules';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import HomeProductSlider from "../../components/HomeProductSlider";

const Home = () => {
  const[value,setValue]=useState(0);

  const handleChange=(_event,newValue)=>{
    setValue(newValue);
  }
  return (
    <>
      <section className="overflow-hidden px-3 py-3 sm:px-5">
        <HomeSlider />
      </section>

      <div className="py-3">
        <HomeCatSlider />
      </div>


      <section>
        <div className="bg-white py-6 sm:py-8">
          <div className="container">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="leftSec">
                <h2 className="text-xl font-semibold text-[#1f1f1f] sm:text-[22px]">
                  Popular Products
                </h2>
                <p className="mt-1 text-sm font-normal text-[#6b6b6b]">
                  Do not miss the current offers until the end of August
                </p>
              </div>

              <div className="rightSec w-full min-w-0 lg:w-[50%]">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                  aria-label="Popular product categories"
                  sx={{
                    minHeight: 40,
                    '& .MuiTabs-flexContainer': {
                      gap: { xs: '6px', sm: '10px' },
                    },
                    '& .MuiTab-root': {
                      minHeight: 40,
                      minWidth: 'auto',
                      px: { xs: 1.25, sm: 1.75 },
                      fontSize: { xs: '12px', sm: '14px' },
                      fontWeight: 600,
                      textTransform: 'none',
                    },
                  }}
                >
                  <Tab label="Fashion" />
                  <Tab label="Electronics" />
                  <Tab label="Bags" />
                  <Tab label="Footwear" />
                  <Tab label="Groceries" />
                  <Tab label="Beauty" />
                  <Tab label="Jewellery" />
                </Tabs>
              </div>
            </div>
          </div>
          <HomeProductSlider items={5} />
          <div className="container">
            <img
              src={watchbanner}
              alt="Watch collection banner"
              className="freeShipping flex w-[80%]h-[20%]  flex-col items-center justify-between  sm:flex-row "
            />
          </div>
        </div>
      </section>

      

      <br />

     <HomeAdsSlider item={3} className="!bg-white" />

     <section className="py-15 bg-white mt-3">
        <div className="container">
          <div className="freeShipping flex w-[80%] m-auto flex-col items-center justify-between gap-4 border border-[#C88982] px-4 py-4 text-center sm:flex-row sm:px-6">
            <div className="flex items-center gap-4">
              <FaShippingFast className="text-4xl text-black sm:text-5xl" />
              <h3 className="text-xl font-extrabold uppercase text-black sm:text-2xl">
                Free Shipping
              </h3>
            </div>

            <span className="hidden h-10 w-px bg-[#E4D8D7] sm:block" />

            <p className="text-sm font-semibold text-[#4a4a4a] sm:text-base">
              Free Delivery Now On Your First Order and over $200
            </p>

            <span className="hidden h-10 w-px bg-[#E4D8D7] sm:block" />

            <h3 className="text-xl font-extrabold uppercase text-black sm:text-2xl">
              - Only $200*
            </h3>
          </div>
        </div>

       
      </section>

       <section>
        <div className="bg-white ">
          <div className="container">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="leftSec">
                <h2 className="text-xl font-semibold text-[#1f1f1f] sm:text-[22px]">
                  Latest Product
                </h2>
              </div>

              <div className="rightSec w-full min-w-0 lg:w-[50%]">
              </div>
            </div>
          </div>
          <HomeProductSlider items={5} />
        </div>
      </section>

    <section className=" blogsection pt-8 bg-white">
      <div className="py-5">
         
         </div>

    </section>
      
      
    </>
  );
};

export default Home;
