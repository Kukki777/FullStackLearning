import Button from "@mui/material/Button";
import { useState } from "react";
import { IoChevronDownOutline, IoMenuOutline, IoRocket } from "react-icons/io5";
import { Link } from "react-router-dom";
import CategoryPanel from "./categorypanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [isOpenFashionMenu, setIsOpenFashionMenu] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  const closeCategoryPanel = () => {
    setIsOpenCatPanel(false);
  };

  return (
    <>
      <nav className="border-b border-gray-100 py-0 lg:py-1">
        <div className="container flex flex-wrap items-center gap-y-1 lg:flex-nowrap">
          <div className="col_1 flex w-[58%] items-center justify-start sm:w-[34%] lg:w-[25%]">
            <Button className="!min-w-0 !gap-2 !px-0 !text-black sm:!gap-3 lg:!gap-5" onClick={openCategoryPanel}>
              <IoMenuOutline size={22} className="mr-1" />
              <span className="whitespace-nowrap text-xs font-semibold sm:text-sm">SHOP BY CATEGORIES</span>
              <IoChevronDownOutline size={18} />
            </Button>
          </div>
          <div className="col_2 relative order-3 w-full overflow-visible lg:order-none lg:w-[55%]">
            <ul className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-1 lg:overflow-visible">
              <li className="list-none text-sm font-medium cursor-pointer">
                <Link
                  to="/"
                  className="link inline-flex rounded px-1.5 py-1 transition duration-300 hover:bg-black/10"
                >
                  Home
                </Link>
              </li>
              <li className="group relative list-none text-sm font-medium cursor-pointer">
                <button
                  type="button"
                  onClick={() => setIsOpenFashionMenu((isOpen) => !isOpen)}
                  className="link inline-flex rounded px-1.5 py-1 transition duration-300 hover:bg-black/10"
                >
                  Fashion
                </button>
                <div className="invisible absolute left-0 top-full z-50 hidden min-w-[180px] rounded bg-white py-2 opacity-0 shadow-md transition duration-200 group-hover:visible group-hover:opacity-100 lg:block">
                  <ul>
                    <li className="group/men relative list-none">
                      <Button className="!w-full !justify-start !px-4 !py-2 !text-[13px] !font-medium !text-[rgba(0,0,0,0.8)] hover:!bg-black/10">
                        Men
                      </Button>
                      <div className="invisible absolute left-full top-0 z-50 min-w-[180px] rounded bg-white py-2 opacity-0 shadow-md transition duration-200 group-hover/men:visible group-hover/men:opacity-100">
                        <ul>
                          {["T-Shirts", "Jeans", "Footwear","Watch","Trousers"].map(
                            (item) => (
                              <li key={item} className="list-none">
                                <Button className="!w-full !justify-start !px-4 !py-2 !text-[13px] !font-medium !text-[rgba(0,0,0,0.8)] hover:!bg-black/10">
                                  {item}
                                </Button>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </li>
                    {["Women", "Kids", "Girls", "Boys"].map((item) => (
                      <li key={item} className="list-none">
                        <Button className="!w-full !justify-start !px-4 !py-2 !text-[13px] !font-medium !text-[rgba(0,0,0,0.8)] hover:!bg-black/10">
                          {item}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="list-none text-sm font-medium cursor-pointer">
                <Link
                  to="/shop"
                  className="link inline-flex rounded px-1.5 py-1 transition duration-300 hover:bg-black/10"
                >
                  Electronics
                </Link>
              </li>
              <li className="list-none text-sm font-medium cursor-pointer">
                <Link
                  to="/shop"
                  className="link inline-flex rounded px-1.5 py-1 transition duration-300 hover:bg-black/10"
                >
                  Bags
                </Link>
              </li>
              <li className="list-none text-sm font-medium cursor-pointer">
                <Link
                  to="/shop"
                  className="link inline-flex rounded px-1.5 py-1 transition duration-300 hover:bg-black/10"
                >
                  Footwear
                </Link>
              </li>
              <li className="list-none text-sm font-medium cursor-pointer">
                <Link
                  to="/shop"
                  className="link inline-flex rounded px-1.5 py-1 transition duration-300 hover:bg-black/10"
                >
                  Groceries
                </Link>
              </li>
              <li className="list-none text-sm font-medium cursor-pointer">
                <Link
                  to="/shop"
                  className="link inline-flex rounded px-1.5 py-1 transition duration-300 hover:bg-black/10"
                >
                  Beauty
                </Link>
              </li>
              <li className="list-none text-sm font-medium cursor-pointer">
                
              </li>
              <li className="list-none text-sm font-medium cursor-pointer">
                <Link
                  to="/shop"
                  className="link inline-flex rounded px-1.5 py-1 transition duration-300 hover:bg-black/10"
                >
                  Jewellary
                </Link>
              </li>
            </ul>
            {isOpenFashionMenu && (
              <div className="absolute left-3 right-3 z-50 mt-1 rounded bg-white py-2 shadow-lg lg:hidden">
                <div className="grid grid-cols-2 gap-1 px-2">
                  {["Men", "Women", "Kids", "Girls", "Boys"].map((item) => (
                    <Link
                      key={item}
                      to="/shop"
                      className="link rounded px-3 py-2 text-sm font-medium hover:bg-black/10"
                      onClick={() => setIsOpenFashionMenu(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
                <div className="mt-1 border-t border-gray-100 px-2 pt-2">
                  <p className="px-3 pb-1 text-xs font-semibold text-gray-500">Men</p>
                  <div className="grid grid-cols-2 gap-1">
                    {["T-Shirts", "Jeans", "Footwear", "Watch", "Trousers"].map((item) => (
                      <Link
                        key={item}
                        to="/shop"
                        className="link rounded px-3 py-2 text-[13px] font-medium hover:bg-black/10"
                        onClick={() => setIsOpenFashionMenu(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col_3 flex w-[42%] items-center justify-end gap-1 sm:w-[66%] lg:w-[20%] lg:gap-2">
            <IoRocket size={19} className="text-[#C69D5E]" />
            <span className="whitespace-nowrap text-right text-[11px] font-medium sm:text-sm">
              Free International Delivery
            </span>
          </div>
        </div>
      </nav>

      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        closeCategoryPanel={closeCategoryPanel}
      />
    </>
  );
};

export default Navigation;
