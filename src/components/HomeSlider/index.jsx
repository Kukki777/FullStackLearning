import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
// import './style.css'
import {Autoplay, Navigation} from 'swiper/modules'
import fashionSaleText from '../../assets/public/swiper-fashion-sale-text.png'
import deliveredJoy from '../../assets/public/swiper-delivered-joy.png'
import kidsSeasonSale from '../../assets/public/swiper-kids-season-sale.png'
import stayStylish from '../../assets/public/swiper-stay-stylish.png'

const slides = [
  { src: kidsSeasonSale, alt: 'Kids end of season sale banner' },
  { src: stayStylish, alt: 'Stay stylish fashion banner' },
  { src: deliveredJoy, alt: 'Happy customers receiving products banner' },
  { src: fashionSaleText, alt: 'Fashion sale text banner' },
]

const HomeSlider = () => {
  return (
    <Swiper
      navigation={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView="auto"
      spaceBetween={20}
      centeredSlides={true}
      initialSlide={1}
      modules={[Navigation, Autoplay]}
      className='home-hero-slider mySwiper w-full overflow-visible bg-transparent'
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.src} className='h-full overflow-hidden rounded-[18px] bg-white sm:rounded-[22px]'>
          <img
            src={slide.src}
            alt={slide.alt}
            className='block h-full w-full'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HomeSlider
