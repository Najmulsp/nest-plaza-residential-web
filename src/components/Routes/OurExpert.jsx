import { FcHome } from "react-icons/fc";
import { TfiRulerPencil } from "react-icons/tfi";
import { FaPaintRoller } from "react-icons/fa6";
import { LuPaintbrush2 } from "react-icons/lu";

const OurExpert = () => {
  return (
    <div className="container mx-auto my-10  w-[95%]">
      <section className="dark:bg-gray-100 rounded-2xl dark:text-gray-800">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                Our expert will help you make the renovation
              </h3>
              <div className="mt-12 space-y-12">
                <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1400"

                className="flex">
                  <div className="flex-shrink-0">
                    <FcHome className="text-5xl" />
                  </div>
                  <div 
                  
                  className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      Find inspiration
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                    Our experienced and results-driven team is here to guide you through every step of your real estate journey.
                    </p>
                  </div>
                </div>
                <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="1800"
                className="flex">
                  <div className="flex-shrink-0">
                    <TfiRulerPencil className="text-4xl text-rose-600" />
                  </div>
                  <div 
                  
                  className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      Find architect/designer
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                    We understand that buying or selling a home can be stressful. That is why our experienced and local real estate professionals are here to represent your interests and guide you through the process seamlessly. 
                    </p>
                  </div>
                </div>
                <div 
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="2200"
                className="flex">
                  <div className="flex">
                    <FaPaintRoller className="text-3xl text-orange-600" />
                    <LuPaintbrush2 className="text-3xl text-amber-800" />
                  </div>
                  <div 
                  
                  className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      Begin renovation
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                    Connect with our dedicated real estate professionals who are passionate about exceeding your expectations. Search our comprehensive listings to find your dream home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <div className="flex justify-between items-center gap-4 ">
                <div className="flex-1 w-3/5 ">
                  <img
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                    src="https://i.ibb.co/6PSVwQG/expert-of-Real-Estate.png"
                    alt=""
                    className="mx-auto h-72 rounded-md shadow-lg dark:bg-gray-500"
                  />
                </div>

                <div className="flex w-2/5 flex-col gap-4 h-96">
                  <img
                    data-aos="fade-down-left"
                    data-aos-duration="1000"
                    data-aos-delay="1500"
                    src="https://i.ibb.co/FJhMvbY/real-estate-expert-team.jpg"
                    className="h-48 rounded-md"
                    alt=""
                  />
                  <img
                    data-aos="fade-up-left"
                    data-aos-duration="1000"
                    data-aos-delay="2000"
                    className="h-48 rounded-md"
                    src="https://i.ibb.co/8zPrVvh/real-estate-agent-meeting.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurExpert;
