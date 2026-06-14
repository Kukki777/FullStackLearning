import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'
import { LuSquarePlus } from 'react-icons/lu'
import {
  IoBagHandleOutline,
  IoCloseOutline,
  IoFootstepsOutline,
  IoHeartOutline,
  IoLaptopOutline,
  IoLeafOutline,
  IoShirtOutline,
  IoSparklesOutline,
  IoStorefrontOutline,
} from 'react-icons/io5'
import { Link } from 'react-router-dom'

const categories = [
  { label: 'Fashion', icon: IoShirtOutline },
  { label: 'Electronics', icon: IoLaptopOutline },
  { label: 'Bags', icon: IoBagHandleOutline },
  { label: 'Footwear', icon: IoFootstepsOutline },
  { label: 'Groceries', icon: IoStorefrontOutline },
  { label: 'Beauty', icon: IoSparklesOutline },
  { label: 'Wellness', icon: IoLeafOutline },
  { label: 'Jewellary', icon: IoHeartOutline },
]

const CategoryPanel = ({ isOpenCatPanel, closeCategoryPanel }) => {
  const [isFashionOpen, setIsFashionOpen] = useState(false)
  const [isMenOpen, setIsMenOpen] = useState(false)

  const toggleDrawer = (newOpen) => () => {
    if (!newOpen) {
      closeCategoryPanel()
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation'>
      <div className='flex items-center justify-between px-5 py-4'>
        <h2 className='text-base font-semibold'>Shop By Categories</h2>
        <IconButton aria-label='Close categories' onClick={toggleDrawer(false)}>
          <IoCloseOutline size={22} />
        </IconButton>
      </div>

      <Divider />

      <List>
        {categories.map((category) => {
          const isFashion = category.label === 'Fashion'

          return (
            <ListItem key={category.label} disablePadding className='!block'>
              <ListItemButton
                component={isFashion ? 'button' : Link}
                to={isFashion ? undefined : '/shop'}
                onClick={isFashion ? () => setIsFashionOpen(!isFashionOpen) : undefined}
                className='!w-full'
              >
                <ListItemIcon className='!min-w-10 !text-[#C69D5E]'>
                  <category.icon size={20} />
                </ListItemIcon>
                <ListItemText
                  primary={category.label}
                  primaryTypographyProps={{
                    className: '!text-sm !font-medium',
                  }}
                />
                {isFashion && (
                  <LuSquarePlus
                    size={18}
                    className={`text-black transition duration-300 ${isFashionOpen ? 'rotate-45' : ''}`}
                  />
                )}
              </ListItemButton>

              {isFashion && isFashionOpen && (
                <ul className='submenu ml-10 border-l border-black/10 pl-3'>
                  <li className='list-none pr-4'>
                    <div className='flex items-center pl-4 justify-between'>
                      <Button
                        className='!w-full !justify-start !px-0 !text-left !text-sm !font-medium !text-black'
                        onClick={() => setIsMenOpen(!isMenOpen)}
                      >
                       Apparel
                      </Button>
                      <LuSquarePlus
                        size={18}
                        className={`text-black transition duration-300 ${isMenOpen ? 'rotate-45' : ''}`}
                      />
                    </div>

                    {isMenOpen && (
                      <ul className='ml-4'>
                        <li className='list-none'>
                          <Link className='block py-2 pl-3 text-sm font-medium text-black' to='/shop'>
                            Smart Tablet
                          </Link>
                        </li>
                        <li className='list-none'>
                          <Link className='block py-2 pl-3 text-sm font-medium text-black' to='/shop'>
                            Crepe T-Shirt
                          </Link>
                        </li>
                        <li className='list-none'>
                          <Link className='block py-2 pl-3 text-sm font-medium text-black' to='/shop'>
                            Leather Watch
                          </Link>
                        </li>
                        <li className='list-none'>
                          <Link className='block py-2 pl-3 text-sm font-medium text-black' to='/shop'>
                            Rolling Diamond
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </ListItem>
          )
        })}
      </List>
    </Box>
  )

  return (
    <>
      <Drawer open={isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default CategoryPanel
