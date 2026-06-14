import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
// import './style.css'
import {Navigation} from 'swiper/modules'
import fashionHero from '../../assets/public/swiper-fashion-hero.png'
import marketplaceHero from '../../assets/public/swiper-marketplace-hero.png'

const HomeSlider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className='mySwiper h-[420px] w-full' >
        <SwiperSlide className='h-full w-full'>
          <img
            src={fashionHero}
            alt='Fashion sale banner'
            className='block h-full w-full object-cover'
          />
        </SwiperSlide>

        <SwiperSlide className='h-full w-full'>
          <img
            src={marketplaceHero}
            alt='Marketplace products banner'
            className='block h-full w-full object-cover'
          />
        </SwiperSlide>

    </Swiper>
  )
}

export default HomeSlider
