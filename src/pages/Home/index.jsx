import { FaShippingFast } from "react-icons/fa";
import HomeCatSlider from "../../components/HomeCatSlider";
import HomeSlider from "../../components/HomeSlider";

const Home = () => {
  return (
    <>
      <section className="overflow-hidden px-3 py-3 sm:px-5">
        <HomeSlider />
      </section>

      <div className="py-3">
        <HomeCatSlider />
      </div>

      <section className="py-5 bg-white mt-3">
        <div className="container">
          <div className="freeShipping flex w-full flex-col items-center justify-between gap-4 border border-[#C88982] px-4 py-4 text-center sm:flex-row sm:px-6">
            <div className="flex items-center gap-4">
              <FaShippingFast className="text-4xl text-black sm:text-5xl" />
              <h3 className="text-xl font-extrabold uppercase text-black sm:text-2xl">
                Free Shipping
              </h3>
            </div>

            <span className="hidden h-10 w-px bg-[#E4D8D7] sm:block" />

            <p className="text-sm font-semibold text-[#4a4a4a] sm:text-base">
              Free Delivery Now On Your First Order and over $200
            </p>

            <span className="hidden h-10 w-px bg-[#E4D8D7] sm:block" />

            <h3 className="text-xl font-extrabold uppercase text-black sm:text-2xl">
              - Only $200*
            </h3>
          </div>
        </div>
      </section>

      <br />
    </>
  );
};

export default Home;
