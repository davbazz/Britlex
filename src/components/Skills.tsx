import speaking from "../../public/assets/speaking.svg";
import writing from "../../public/assets/writing.svg";
import reading from "../../public/assets/reading.svg";
import listening from "../../public/assets/listening.svg";

export default function Skills() {
  return (
    <div id="skills" className="pt-[40px] xl:pt-[60px] pb-[40px]">
      <div className="xl:max-w-[1320px] mx-auto">
        <h2 className="text-center text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[48px] font-semibold mb-[32px] lg:mb-[52px] xl:mb-[92px]">
          Skills
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 gap-[21px] sm:gap-[30px] md:gap-[10px] xl:gap-[18px] w-full md:h-[700px] lg:h-[780px] xl:h-[900px]">
          <li className="sm:relative bg-[#F5F5F5] pt-[8px] pb-[45px] px-[13px] sm:px-[20px] rounded-[5px] w-full sm:h-[600px] md:h-full md:row-span-3">
            <img
              src={speaking}
              alt="speaking"
              className="w-[213px] h-[213px] lg:w-[260px] lg:h-[260px] xl:w-[390px] xl:h-[390px] mx-auto"
            />
            <h3 className="mt-[30px] md:mt-[10px] mb-[15px] text-[#263238] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[30px] font-semibold">
              Speaking
            </h3>
            <p className="text-[#8F95A5] text-[13px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]">
              Improve your English skills and confidence. Live classes and
              interactive lessons online. 20% extra free for a limited time only
            </p>
            <br />
            <p className="text-[#8F95A5] text-[13px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] mb-[25px]">
              Learn English online and improve your skills through our
              high-quality courses and resources – all designed for adult
              language learners
            </p>
            <a href="#contacts">
              <button className="sm:absolute sm:bottom-[45px] md:bottom-[30px] w-[178px] sm:w-[200px] md:w-[178px] xl:w-[230px] py-[14px] text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-white rounded-[5px] bg-[#263238] border-2 border-[#263238] hover:bg-transparent hover:text-[#263238] duration-100">
                Learn more
              </button>
            </a>
          </li>

          <li className="sm:relative bg-[#F5F5F5] pt-[8px] pb-[45px] px-[13px] sm:px-[20px] rounded-[5px] w-full md:row-span-2">
            <img
              src={writing}
              alt="writing"
              className="w-[213px] h-[213px]  lg:w-[260px] lg:h-[260px] xl:w-[293px] xl:h-[290px] mx-auto"
            />
            <h3 className="mt-[30px] md:mt-[10px] mb-[15px] text-[#263238] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[30px] font-semibold">
              Writing
            </h3>
            <p className="text-[#8F95A5] text-[13px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] mb-[25px]">
              One of the most important and extensive areas of natural science,
              the science that studies substances, also their composition
            </p>
            <a href="#contacts">
              <button className="sm:absolute sm:bottom-[45px] md:bottom-[30px] w-[178px] sm:w-[200px] md:w-[178px] xl:w-[230px] py-[14px] text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-white rounded-[5px] bg-[#263238] border-2 border-[#263238] hover:bg-transparent hover:text-[#263238] duration-100">
                Learn more
              </button>
            </a>
          </li>

          <li className="sm:relative bg-[#F5F5F5] pt-[8px] pb-[45px] px-[13px] sm:px-[20px] rounded-[5px] w-full md:row-span-2">
            <img
              src={reading}
              alt="reading"
              className="w-[213px] h-[213px] lg:w-[260px] lg:h-[260px] xl:w-[371px] xl:h-[290px] mx-auto"
            />
            <h3 className="mt-[30px] md:mt-[10px] mb-[15px] text-[#263238] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[30px] font-semibold">
              Reading
            </h3>
            <p className="text-[#8F95A5] text-[13px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] mb-[25px]">
              Perception and response actions of the user resulting from the use
              and or up coming use of the product, system or service
            </p>
            <a href="#contacts">
              <button className="sm:absolute sm:bottom-[45px] md:bottom-[30px] w-[178px] sm:w-[200px] md:w-[178px] xl:w-[230px] py-[14px] text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-white rounded-[5px] bg-[#263238] border-2 border-[#263238] hover:bg-transparent hover:text-[#263238] duration-100">
                Learn more
              </button>
            </a>
          </li>

          <li className="sm:relative bg-[#F5F5F5] pt-[8px] pb-[45px] px-[13px] sm:px-[20px] rounded-[5px] w-full md:col-span-2">
            <div className="md:flex justify-between items-start">
              <div className="order-2">
                <img
                  src={listening}
                  alt="listening"
                  className="w-[213px] h-[213px] md:w-[202px] md:h-[134px] lg:w-[260px] lg:h-[260px] xl:w-[382px] xl:h-[260px] mx-auto"
                />
              </div>
              <div className="md:max-w-[249px] lg:max-w-[50%]">
                <h3 className="mt-[30px] md:mt-[15px] mb-[15px] text-[#263238] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[30px] font-semibold">
                  Listening
                </h3>
                <p className="text-[#8F95A5] text-[13px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] mb-[25px]">
                  Here you can find activities to practise your listening
                  skills. Listening will help you to improve your understanding
                </p>
                <a href="#contacts">
                  <button className="sm:absolute sm:bottom-[45px] md:bottom-[30px] w-[178px] sm:w-[200px] md:w-[178px] xl:w-[230px] py-[14px] text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-white rounded-[5px] bg-[#263238] border-2 border-[#263238] hover:bg-transparent hover:text-[#263238] duration-100">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
