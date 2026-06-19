import Rating from '@mui/material/Rating'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Link } from "react-router-dom"

const ProductItem = ({ product }) => {
  const rating = product?.rating || 5
  const swatches = product?.colors || ['#d7d7d7', '#9fc36f', '#ffc928']
  const actions = [
    { label: 'Add to wishlist', icon: FavoriteBorderIcon },
    { label: 'Compare product', icon: CompareArrowsIcon },
    { label: 'Quick view', icon: ZoomOutMapIcon },
    { label: 'Open product', icon: OpenInNewIcon },
  ]

  return (
    <div className='productItem group overflow-hidden rounded-md border border-[#eeeeee] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'>
      <div className='imageWrapper relative h-[230px] w-full overflow-hidden bg-[#fafafa] [perspective:900px] sm:h-[245px]'>
        <img
    src={product.image[0]}
    alt={product.title}
    className='absolute inset-0 h-full w-full object-cover opacity-100 transition-all duration-500 group-hover:opacity-0'
  />

  {/* Second Image */}
  <img
    src={product.image[1]}
    alt={product.title}
    className='absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100'
  />
       <span className='discount flex item-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-md'>1</span>

        <div className='absolute left-3 top-3 flex flex-col items-start gap-1.5'>
          {product.discount ? (
            <span className='rounded bg-[#ff5252] px-2 py-1 text-[11px] font-bold leading-none text-white'>
              -{product.discount}%
            </span>
          ) : null}
          {product.isNew ? (
            <span className='rounded bg-[#22b573] px-2 py-1 text-[11px] font-bold leading-none text-white'>
              NEW
            </span>
          ) : null}
        </div>

        <div className='absolute right-3 top-3 flex translate-x-4 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
          {actions.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type='button'
              aria-label={label}
              title={label}
              className='flex h-9 w-9 items-center justify-center rounded-full border border-[#eeeeee] bg-white text-[#333] shadow-sm transition hover:bg-[#ff5252] hover:text-white'
            >
              <Icon fontSize='small' />
            </button>
          ))}
        </div>

        <div className='absolute bottom-3 left-3 flex items-center gap-1.5'>
          {swatches.map((color) => (
            <span
              key={color}
              className='h-4 w-4 rounded-full border border-white shadow'
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className='p-4'>
        <h3 className='truncate text-[15px] font-semibold text-[#333] hover:text-[#d94b59]'>
          <Link to={`/product/${product.id}`}>
            {product.title}
          </Link>
        </h3>
        <p className='mt-2 text-[14px] font-semibold text-[#39a867]'>
          In Stock
        </p>
        <Rating
          name={`${product.title}-rating`}
          value={rating}
          precision={0.5}
          readOnly
          size="small"
          className="mt-2"
        />
        <div className='mt-3 flex items-center gap-2 text-[15px] font-semibold'>
          <span className='text-[#777] line-through'>Rs {product.oldPrice}</span>
          <span className='text-[#d94b59]'>Rs {product.price}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
