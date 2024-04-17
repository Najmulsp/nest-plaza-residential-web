import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
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
      className="w-[95%] mx-auto"
    >
      <SwiperSlide
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
      >
        <div className='bg-[url("https://i.ibb.co/jMD5BRN/banner-image-1.jpg")] object-cover bg-no-repeat bg-cover rounded-2xl  bg-[#12132D] w-full h-[450px] lg:h-[550px]'>
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-4xl font-extrabold text-orange-500 text-center pt-24 lg:pt-32"
          >
            Welcome to Nest Plaza
          </h1>
          <p
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="2400"
          className="text-xl font-semibold text-orange-500 text-center pt-8">
            The home you are dreaming of is waiting for you
          </p>
          <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="2800"
          className="text-xl w-4/5 mx-auto font-semibold text-orange-400 text-center pt-8">
            WE BELIEVE Every person deserves more than a mud hut with a thatched
            roof. We believe that everyone should have a safe place to sleep and
            a strong door to lock. This special place we call home gives us
            dignity and hope.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[450px] lg:h-[550px] rounded-2xl  mx-auto"
          src="https://i.ibb.co/rHQn59d/homes-3.webp"
          alt="real estate image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[450px] lg:h-[550px] rounded-2xl  mx-auto"
          src="https://i.ibb.co/hRYLQ1q/apartment1.jpg"
          alt="real estate image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[450px] lg:h-[550px] rounded-2xl mx-auto"
          src="https://i.ibb.co/CJbGVYt/family-home.jpg"
          alt="real estate image"
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner;
