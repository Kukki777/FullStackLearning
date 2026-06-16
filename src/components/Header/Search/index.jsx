import Button from '@mui/material/Button'
import { IoSearch } from 'react-icons/io5'
import './style.css'

const Search = () => {
  return (
    <div className='searchbox relative h-11 w-full rounded-[7px] bg-[#e5e5e5]'>
        <input type="text" placeholder='Search for products....' className='h-full w-full rounded-[7px] bg-transparent px-5 pr-12 text-sm focus:outline-none' />
        <Button
          aria-label="Search"
          className="!absolute !right-1 !top-1/2 !min-w-0 !-translate-y-1/2 !rounded-md !p-2 !text-[#C69D5E]"
        >
          <IoSearch size={20} />
        </Button>
    </div>
  )
}

export default Search
