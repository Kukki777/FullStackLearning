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
    <div className='top-strip border-t border-b border-gray-200 py-1'>
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

    <div className='header border-b border-gray-200 py-1'>
        <div className='container flex items-center justify-between '>
            <div className='col1 w-[25%]'>
                <Link to="/"><img src={logo} alt='Logo' className='h-25 w-auto' /></Link>
            </div>
            <div className='col2 w-[45%]'>
                <Search />
            </div>
            <div className='col3 w-[30%] flex items-center pl-10'>
                <ul className='flex items-center gap-7'>
                    <li className='mr-2 list-none'>
                        <Link to="/login" className='text-[16px] font-[500] transition link'>Login</Link> | <Link to="/register" className='text-[16px] font-[500] transition link'>Register</Link>
                    </li>
                    <li className='list-none'>
                        <Tooltip title="Compare" arrow>
                            <Badge badgeContent={0} showZero className='header-badge'>
                                <Link to="/compare" aria-label="Compare" className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-[22px] transition link'>
                                    <IoGitCompareOutline />
                                </Link>
                            </Badge>
                        </Tooltip>
                    </li>
                    <li className='list-none'>
                        <Tooltip title="Wishlist" arrow>
                            <Badge badgeContent={0} showZero className='header-badge'>
                                <Link to="/wishlist" aria-label="Wishlist" className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-[22px] transition link'>
                                    <IoHeartOutline />
                                </Link>
                            </Badge>
                        </Tooltip>
                    </li>
                    <li className='list-none'>
                        <Tooltip title="Cart" arrow>
                            <Badge badgeContent={0} showZero className='header-badge'>
                                <Link to="/cart" aria-label="Cart" className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-[22px] transition link'>
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
