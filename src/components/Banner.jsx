import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='bg-[url("https://i.ibb.co/XCJHxp6/vacation-rental.webp")] bg-no-repeat bg-cover rounded-2xl  bg-[#12132D] w-full h-[550px] '>
          <h1 className="text-4xl font-extrabold text-black text-center pt-32">
            Welcome to Nest Plaza
          </h1>
          <p className="text-xl font-semibold text-black text-center pt-8">
            The home you are dreaming of is waiting for you
          </p>
          <p className="text-xl font-semibold text-black text-center pt-8">
            WE BELIEVE Every person deserves more than a mud hut with a thatched
            roof. We believe that everyone should have a safe place to sleep and
            a strong door to lock. This special place we call home gives us
            dignity and hope.
          </p>
        </div>
        {/* <img className='w-full h-[550px] rounded-2xl  mx-auto' src="https://i.ibb.co/XCJHxp6/vacation-rental.webp" alt="" /> */}
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[550px] rounded-2xl  mx-auto"
          src="https://i.ibb.co/rHQn59d/homes-3.webp"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[550px] rounded-2xl  mx-auto"
          src="https://i.ibb.co/hRYLQ1q/apartment1.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[550px] rounded-2xl mx-auto"
          src="https://i.ibb.co/CJbGVYt/family-home.jpg"
          alt=""
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner;
