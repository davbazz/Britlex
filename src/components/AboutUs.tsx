import about from "../../public/assets/about.svg";

export default function AboutUs() {
  return (
    <div id="about us" className="pt-[40px] md:pt-[140px] pb-[40px]">
      <div className="xl:max-w-[1320px] mx-auto">
        <div className="md:flex md:justify-between md:items-center md:gap-[50px]">
          <div className="mb-[25px] md:mb-0 md:order-2 md:w-[50%]">
            <h2 className="md:hidden text-center text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[48px] font-semibold mb-[50px]">
              About Us
            </h2>
            <img
              src={about}
              alt="about"
              className="w-[283px] h-[283px] sm:w-[352px] sm:h-[352px] lg:w-[336px] lg:h-[336px] xl:w-[500px] xl:h-[500px] mx-auto"
            />
          </div>

          <div className="flex flex-col justify-center items-center md:items-start gap-[50px] md:gap-[30px] md:w-[50%]">
            <h2 className="hidden md:inline-block sm:text-[30px] lg:text-[36px] xl:text-[48px] font-semibold text-left">
              About Us
            </h2>

            <p className="inline-block md:w-[321px] lg:w-[526px] xl:w-[635px] text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[20px] text-[#8F95A5] text-center md:text-left">
              The model offers a framework for discussing problems related to
              the user's experience, as well as possible ways and means of
              solving them. Application development begins at the top level
              (strategy), where the future software product is described quite
              abstractly from the point of view of the expectations of both
              users and the customer.
            </p>

            <ul className="flex flex-col md:flex-row gap-[40px] xl:gap-[80px] text-center">
              <li className="md:flex md:flex-col gap-[15px]">
                <p className="font-semibold text-[24px] lg:text-[30px] xl:text-[48px] text-[#2A3246]">
                  800
                </p>
                <p className="text-[15px] md:text-[13px] lg:text-[16px] xl:text-[20px] text-[#8F95A5]">
                  Pupils
                </p>
              </li>
              <li className="md:flex md:flex-col gap-[15px]">
                <p className="font-semibold text-[24px] lg:text-[30px] xl:text-[48px] text-[#2A3246]">
                  18
                </p>
                <p className="text-[15px] md:text-[13px] lg:text-[16px] xl:text-[20px] text-[#8F95A5]">
                  Teachers
                </p>
              </li>
              <li className="md:flex md:flex-col gap-[15px]">
                <p className="font-semibold text-[24px] lg:text-[30px] xl:text-[48px] text-[#2A3246]">
                  6
                </p>
                <p className="text-[15px] md:text-[13px] lg:text-[16px] xl:text-[20px] text-[#8F95A5]">
                  Foreign languages
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
