import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

import smartTablet from '../../assets/public/home-categories/smart-tablet.png'
import crepeTshirt from '../../assets/public/home-categories/crepe-tshirt.png'
import leatherWatch from '../../assets/public/home-categories/leather-watch.png'
import rollingDiamond from '../../assets/public/home-categories/rolling-diamond.png'
import woodenChair from '../../assets/public/home-categories/wooden-chair.png'
import sneakersShoes from '../../assets/public/home-categories/sneakers-shoes.png'
import purse from '../../assets/public/home-categories/purse.png'
import xboxController from '../../assets/public/home-categories/xbox-controller.png'

const categories = [
  { title: 'Smart Tablet', image: smartTablet },
  { title: 'Crepe T-Shirt', image: crepeTshirt },
  { title: 'Leather Watch', image: leatherWatch },
  { title: 'Rolling Diamond', image: rollingDiamond },
  { title: 'Wooden Chair', image: woodenChair },
  { title: 'Sneakers Shoes', image: sneakersShoes },
  { title: 'Purse', image: purse },
  { title: 'Xbox Controller', image: xboxController },
]

const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider py-5'>
      <div className='container'>
        <Swiper
          navigation={true}
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={12}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 14 },
            640: { slidesPerView: 4, spaceBetween: 16 },
            768: { slidesPerView: 5, spaceBetween: 20 },
            1024: { slidesPerView: 6, spaceBetween: 26 },
          }}
          modules={[Navigation]}
          className='mySwiper'
        >
          {categories.map((category) => (
            <SwiperSlide key={category.title}>
              <div className='item flex h-[150px] flex-col items-center justify-center gap-3 rounded-sm bg-white p-3 shadow-sm  hover:shadow-md sm:h-[166px]'>
               <img
  src={category.image}
  alt={category.title}
  className="h-[92px] w-full object-contain sm:h-[105px] transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2"
/>
                <h3 className='w-full truncate text-center text-sm font-bold text-[#2d2d2d] sm:text-base'>
                  {category.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider;
