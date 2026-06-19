import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

import galaxyS24Ad from '../../assets/public/home-ads/galaxy-s24-smartphone.png'
import modernArmchairAd from '../../assets/public/home-ads/modern-armchair.png'
import wirelessHeadphonesAd from '../../assets/public/home-ads/wireless-headphones.png'

const ads = [
  {
    title: 'Galaxy S24 Smartphone',
    image: galaxyS24Ad,
    href: '/products/galaxy-s24-smartphone',
  },
  {
    title: 'Modern Armchair',
    image: modernArmchairAd,
    href: '/products/modern-armchair',
  },
  {
    title: 'Wireless Headphones',
    image: wirelessHeadphonesAd,
    href: '/products/wireless-headphones',
  },
]

const HomeAdsSlider = (props) => {
  return (
    <div className='container w-full py-5'>
      <Swiper
          navigation={true}
          grabCursor={true}
          slidesPerView={props.item || 1}
          spaceBetween={12}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 14 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: props.item || 3, spaceBetween: 24 },
          }}
          modules={[Navigation]}
          className='mySwiper'
        >
          {ads.map((ad) => (
            <SwiperSlide key={ad.title}>
              <a
                href={ad.href}
                aria-label={`Shop now: ${ad.title}`}
                className='block overflow-hidden rounded-md bg-white transition hover:-translate-y-0.5 hover:shadow-md'
              >
                <img
                  src={ad.image}
                  alt={`${ad.title} advertisement`}
                  className='block aspect-[2/1] w-full object-cover '
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default HomeAdsSlider
