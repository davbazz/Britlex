import bulb from "../../public/assets/bulb.svg";
import mainbg from "../../public/assets/mainbg.svg";

export default function Hero() {
  return (
    <div id="home">
      <div className="flex flex-col md:flex-row justify-between items-center md:pt-[70px] lg:pt-[90px] md:gap-6 lg:gap-4 mx-auto xl:max-w-[1320px] pb-[30px]">
        <div className="w-full md:w-1/2 md:order-2">
          <img
            src={mainbg}
            alt="main bg"
            className="mx-auto w-full sm:w-[84%] md:w-full md:max-w-[380px] lg:max-w-[460px] xl:max-w-[650px]"
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative w-fit mx-auto md:mx-0">
            <h1 className="inline-block w-[220px] md:w-[217px] lg:w-[290px] xl:w-[386px] sm:w-full text-center md:text-left text-[24px] md:text-[36px] lg:text-[48px] xl:text-[64px] md:leading-[45px] lg:leading-[64px] xl:leading-[80px] font-semibold">
              Learn{" "}
              <span className="hidden md:inline-block text-transparent w-9 lg:w-12 xl:w-14" />{" "}
              Any{" "}
              <span className="inline-block sm:hidden text-transparent w-1" />{" "}
              Foreign Language
            </h1>

            <div className="hidden md:inline-block absolute bottom-[-5px] right-[-76px] lg:bottom-[20px] lg:right-[-86px] xl:bottom-[20px] xl:right-[-150px]">
              <img
                src={bulb}
                alt="bulb"
                className="xl:w-[100px] xl:h-[100px]"
              />
            </div>
          </div>

          <p className="mt-[20px] md:mt-[25px] lg:mt-[27px] xl:mt-[40px] text-[#8F95A5] text-center md:text-left text-[13px] md:text-[16px] lg:text-[20px] xl:text-[24px] md:w-[337px] lg:w-[420px] xl:w-[530px]">
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </p>

          <a href="#contacts">
            <button className="block sm:w-[305px] md:w-[236px] lg:w-[292px] xl:w-[380px] mx-auto md:mx-0 mt-[35px] xl:mt-[60px] w-full bg-[#263238] text-white rounded-[5px] xl:rounded-[15px] py-[18px] lg:py-[22px] xl:py-[32px] md:text-[18px] lg:text-[24px] xl:text-[32px] border-2 border-[#263238] hover:bg-transparent hover:text-[#263238] duration-100">
              Get started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
