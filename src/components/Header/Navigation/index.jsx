import Button from "@mui/material/Button";
import { useState } from "react";
import { IoChevronDownOutline, IoMenuOutline, IoRocket } from "react-icons/io5";
import { Link } from "react-router-dom";
import CategoryPanel from "./categorypanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  const closeCategoryPanel = () => {
    setIsOpenCatPanel(false);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center">
          <div className="col_1 w-[25%] flex items-center justify-start">
            <Button className="!gap-7 !text-black" onClick={openCategoryPanel}>
              <IoMenuOutline size={22} className="mr-2" />
              <span>SHOP BY CATEGORIES</span>
              <IoChevronDownOutline size={18} />
            </Button>
          </div>
          <div className="col_2 w-[55%]">
            <ul className="flex items-center gap-2">
              <li className="list-none text-sm font-medium cursor-pointer">
                <Link
                  to="/"
                  className="link inline-flex rounded px-1.5 py-1 transition duration-300 hover:bg-black/10"
                >
                  Home
                </Link>
              </li>
              <li className="group relative list-none text-sm font-medium cursor-pointer">
                <Link
                  to="/shop"
                  className="link inline-flex rounded px-1.5 py-1 transition duration-300 hover:bg-black/10"
                >
                  Fashion
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-[180px] rounded bg-white py-2 opacity-0 shadow-md transition duration-200 group-hover:visible group-hover:opacity-100">
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
                <Link
                  to="/shop"
                  className="link inline-flex rounded px-1.5 py-1 transition duration-300 hover:bg-black/10"
                >
                  Wellness
                </Link>
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
          </div>
          <div className="col_3 flex w-[20%] items-center justify-end gap-2">
            <IoRocket size={19} className="text-[#C69D5E]" />
            <span className="whitespace-nowrap text-right text-sm font-medium">
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
