import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import { IoCartOutline, IoGitCompareOutline, IoHeartOutline } from 'react-icons/io5'
import logo from '../../assets/public/logo.jpg'
import Search from './Search'
import Navigation from './Navigation'



const Header = () => {
  return (
    <header className='bg-white'>
    <div className='top-strip hidden border-t border-b border-gray-200 py-0.5 sm:block'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div className='col1 w-[50%]'>
                    <p className='text-[12px] font-[500]'>Get up to 50% off new season styles, limited time only</p>
                </div>

                <div className='col2 flex items-center justify-end'>
                    <ul className='flex items-center gap-3'>
                        <li className='list-none'>
                            <Link to="/help-center" className='text-[13px] font-[500] transition link'>Help Center</Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/order-tracking" className='text-[13px] font-[500] transition link'>Order Tracking</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className='header border-b border-gray-200 py-0'>
        <div className='container flex flex-wrap items-center justify-between gap-y-2 py-2 lg:flex-nowrap lg:py-0'>
            <div className='col1 w-[45%] sm:w-[28%] lg:w-[22%]'>
                <Link to="/"><img src={logo} alt='Logo' className='h-14 w-auto sm:h-16 lg:h-18' /></Link>
            </div>
            <div className='col2 order-3 w-full lg:order-none lg:w-[42%]'>
                <Search />
            </div>
            <div className='col3 flex w-[55%] items-center justify-end sm:w-[45%] lg:w-[36%] lg:pl-6'>
                <ul className='flex items-center gap-2 sm:gap-4 lg:gap-5'>
                    <li className='mr-1 list-none whitespace-nowrap'>
                        <Link to="/login" className='text-[13px] font-[500] transition link sm:text-[15px] lg:text-[16px]'>Login</Link> <span className='hidden sm:inline'>|</span> <Link to="/register" className='hidden text-[15px] font-[500] transition link sm:inline lg:text-[16px]'>Register</Link>
                    </li>
                    <li className='list-none'>
                        <Tooltip title="Compare" arrow>
                            <Badge badgeContent={0} showZero className='header-badge'>
                                <Link to="/compare" aria-label="Compare" className='flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[20px] transition link sm:h-9 sm:w-9 sm:text-[22px]'>
                                    <IoGitCompareOutline />
                                </Link>
                            </Badge>
                        </Tooltip>
                    </li>
                    <li className='list-none'>
                        <Tooltip title="Wishlist" arrow>
                            <Badge badgeContent={0} showZero className='header-badge'>
                                <Link to="/wishlist" aria-label="Wishlist" className='flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[20px] transition link sm:h-9 sm:w-9 sm:text-[22px]'>
                                    <IoHeartOutline />
                                </Link>
                            </Badge>
                        </Tooltip>
                    </li>
                    <li className='list-none'>
                        <Tooltip title="Cart" arrow>
                            <Badge badgeContent={0} showZero className='header-badge'>
                                <Link to="/cart" aria-label="Cart" className='flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[20px] transition link sm:h-9 sm:w-9 sm:text-[22px]'>
                                    <IoCartOutline />
                                </Link>
                            </Badge>
                        </Tooltip>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>

    <Navigation />
    </header>
  )
}
export default Header;
