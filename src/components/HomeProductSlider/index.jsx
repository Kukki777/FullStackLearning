import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem';
import Saree from '../../assets/public/home-categories/fashion2.jpg'
import Blazzer from '../../assets/public/home-categories/fashion1.webp'
import leatherWatch from '../../assets/public/home-categories/Fashion3.jpg'
import sneakersShoes from '../../assets/public/home-categories/fashion4.webp'
import shirt from '../../assets/public/home-categories/fashion5.webp'
import purse from '../../assets/public/home-categories/purse.png'

const products = [
  {
    title: 'Siril Georgette Saree',
    image: [Saree, shirt],
    oldPrice: 1450,
    price: 1300,
    rating: 5,
    discount: 8,
    isNew: true,
    colors: ['#8b1e16', '#d9b8a4', '#f2d7b5'],
  },
  {
    title: 'Crepe Fancy Blazzer',
    image: [Blazzer, shirt],
    oldPrice: 1350,
    price: 1200,
    rating: 3.5,
    discount: 10,
    isNew: true,
    colors: ['#1f2937', '#c89f65', '#efe5d4'],
  },
  {
    title: 'High Quality Leather Watch',
    image: [leatherWatch, shirt],
    oldPrice: 1200,
    price: 950,
    rating: 5,
    discount: 12,
    colors: ['#6f6c55', '#ffffff', '#f5c242'],
  },
  {
    title: 'Sneakers Shoes',
    image: [sneakersShoes, shirt],
    oldPrice: 995,
    price: 785,
    rating: 4,
    discount: 8,
    colors: ['#d7d7d7', '#9fc36f', '#ffc928'],
  },
  {
    title: 'Premium Shirt',
    image: [shirt, shirt],
    oldPrice: 899,
    price: 699,
    rating: 4,
    discount: 15,
    isNew: true,
    colors: ['#0f172a', '#ffffff', '#7c3aed'],
  },
  {
    title: 'Premium Hand Purse',
    image: [purse, purse],
    oldPrice: 1199,
    price: 899,
    rating: 4.5,
    discount: 18,
    isNew: true,
    colors: ['#c9a27f', '#f3dcc6', '#2f241d'],
  },
]

const HomeProductSlider = () => {
  return (
    <section className="productsSlider py-5">
        <div className='container'>
             <div className='grid grid-cols-3 gap-2 py-3 sm:hidden'>
              {products.slice(0, 6).map((product) => (
                <ProductItem key={product.title} product={product} compact />
              ))}
             </div>

             <div className='hidden w-full py-5 sm:block'>
                  <Swiper
                      navigation={true}
                      grabCursor={true}
                      slidesPerView={1}
                      spaceBetween={12}
                      breakpoints={{
                        480: { slidesPerView: 1, spaceBetween: 14 },
                        640: { slidesPerView: 2, spaceBetween: 16 },
                        768: { slidesPerView: 3, spaceBetween: 18 },
                        1024: { slidesPerView: 5, spaceBetween: 20 },
                      }}
                      modules={[Navigation]}
                      className='mySwiper'
                    >
                      {products.map((product) => (
                        <SwiperSlide key={product.title}>
                          <ProductItem product={product} />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
        </div>
      
    </section>
  )
}

export default HomeProductSlider
