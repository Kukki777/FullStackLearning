import Rating from '@mui/material/Rating'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Link } from "react-router-dom"

const ProductItem = ({ product, compact = false }) => {
  const rating = product?.rating || 5
  const swatches = product?.colors || ['#d7d7d7', '#9fc36f', '#ffc928']
  const actions = [
    { label: 'Add to wishlist', icon: FavoriteBorderIcon },
    { label: 'Compare product', icon: CompareArrowsIcon },
    { label: 'Quick view', icon: ZoomOutMapIcon },
    { label: 'Open product', icon: OpenInNewIcon },
  ]
  const images = Array.isArray(product.image) ? product.image : [product.image, product.image]

  return (
    <div className='productItem group overflow-hidden rounded-md border border-[#eeeeee] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'>
      <div className={`imageWrapper relative w-full overflow-hidden bg-[#fafafa] [perspective:900px] ${compact ? 'aspect-square' : 'h-[230px] sm:h-[245px]'}`}>
        <img
    src={images[0]}
    alt={product.title}
    className={`absolute inset-0 h-full w-full opacity-100 transition-all duration-500 group-hover:opacity-0 ${compact ? 'object-contain p-2' : 'object-cover'}`}
  />

  {/* Second Image */}
  <img
    src={images[1]}
    alt={product.title}
    className={`absolute inset-0 h-full w-full opacity-0 transition-all duration-500 group-hover:opacity-100 ${compact ? 'object-contain p-2' : 'object-cover'}`}
  />

        <div className={`absolute flex flex-col items-start gap-1.5 ${compact ? 'left-1.5 top-1.5' : 'left-3 top-3'}`}>
          {product.discount ? (
            <span className={`rounded bg-[#ff5252] font-bold leading-none text-white ${compact ? 'px-1.5 py-0.5 text-[9px]' : 'px-2 py-1 text-[11px]'}`}>
              -{product.discount}%
            </span>
          ) : null}
          {!compact && product.isNew ? (
            <span className='rounded bg-[#22b573] px-2 py-1 text-[11px] font-bold leading-none text-white'>
              NEW
            </span>
          ) : null}
        </div>

        <div className={`absolute flex translate-x-4 flex-col opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${compact ? 'right-1.5 top-1.5 gap-1' : 'right-3 top-3 gap-2'}`}>
          {actions.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type='button'
              aria-label={label}
              title={label}
              className={`flex items-center justify-center rounded-full border border-[#eeeeee] bg-white text-[#333] shadow-sm transition hover:bg-[#ff5252] hover:text-white ${compact ? 'h-6 w-6' : 'h-9 w-9'}`}
            >
              <Icon sx={{ fontSize: compact ? 14 : 20 }} />
            </button>
          ))}
        </div>

        <div className={`absolute flex items-center ${compact ? 'bottom-1.5 left-1.5 gap-1' : 'bottom-3 left-3 gap-1.5'}`}>
          {swatches.map((color) => (
            <span
              key={color}
              className={`rounded-full border border-white shadow ${compact ? 'h-2.5 w-2.5' : 'h-4 w-4'}`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className={compact ? 'p-2' : 'p-4'}>
        <h3 className={`truncate font-semibold text-[#333] hover:text-[#d94b59] ${compact ? 'text-[11px]' : 'text-[15px]'}`}>
          <Link to={`/product/${product.id}`}>
            {product.title}
          </Link>
        </h3>
        <p className={`font-semibold text-[#39a867] ${compact ? 'mt-1 text-[10px]' : 'mt-2 text-[14px]'}`}>
          In Stock
        </p>
        <Rating
          name={`${product.title}-rating`}
          value={rating}
          precision={0.5}
          readOnly
          size={compact ? 'small' : 'small'}
          className={compact ? 'mt-1 scale-75 origin-left' : 'mt-2'}
        />
        <div className={`flex items-center font-semibold ${compact ? 'mt-1 gap-1 text-[10px]' : 'mt-3 gap-2 text-[15px]'}`}>
          <span className='text-[#777] line-through'>Rs {product.oldPrice}</span>
          <span className='text-[#d94b59]'>Rs {product.price}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
