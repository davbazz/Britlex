import self from "../../public/assets/self.svg"
import classes from "../../public/assets/classes.svg"
import personal from "../../public/assets/personal.svg"


export default function Pricing() {
    return (
        <div id="pricing" className="pt-[40px] sm:pt-[100px] pb-[40px]">
            <div className="xl:max-w-[1320px] mx-auto">

                <h2 className="text-center text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[48px] font-semibold mb-[32px] lg:mb-[52px] xl:mb-[92px]">
                    Pricing
                </h2>

                <ul className="flex flex-col md:flex-row justify-between md:items-end gap-[70px] sm:gap-[90px] md:gap-[36px] xl:gap-[50px] mt-[60px] w-full">
                    <li className="flex flex-col justify-center items-center md:justify-between md:items-start gap-[25px] lg:gap-[20px] xl:gap-[30px] sm:gap-[30px] md:h-[484px] lg:h-[500px] xl:h-[680px] md:max-w-1/3">
                        <div className="md:h-[197px] lg:h-[241px] xl:h-[320px]">
                            <img src={self} alt="self" className="w-[248px] h-[248px] sm:w-[260px] sm:h-[260px] md:w-[197px] md:h-[197px] lg:w-[222px] lg:h-[241px] xl:w-[320px] xl:h-[311px] mx-auto"/>
                        </div>
                        <h3 className="text-[18px] sm:text-[24px] md:text-[20px] lg:text-[22px] xl:text-[30px] text-[#263238] font-semibold text-center md:text-left">
                            Self-study online course
                        </h3>
                        <p className="md:inline-block md:max-w-[260px] lg:max-w-[380px] text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[20px] text-[#8F95A5] text-center md:text-left">
                            Start learning English online in live classes with qualified EC teachers and students from all over the world.
                        </p>
                        <div className="flex justify-around items-center mx-auto md:mx-0 w-[170px] sm:w-[205px] xl:w-[240px] bg-[#EEEEEE] py-[5px] px-[10px] rounded-[5px] mt-[10px] cursor-pointer">
                            <p className="text-[18px] sm:text-[22px] lg:text-[24px] xl:text-[30px] text-[#263238]">
                                £5.99
                            </p>
                            <p className="text-[14px] sm:text-[16px] xl:text-[18px] text-[#546269]">
                                per month
                            </p>
                        </div>
                    </li>

                    <li className="flex flex-col justify-center items-center md:justify-between md:items-start gap-[25px] lg:gap-[20px] xl:gap-[30px] sm:gap-[30px] md:h-[484px] lg:h-[500px] xl:h-[680px] md:max-w-1/3">
                        <div className="md:h-[197px] lg:h-[241px] xl:h-[320px] md:flex md:flex-col md:items-end md:justify-end">
                            <img src={classes} alt="classes" className="w-[257px] h-[197px] sm:w-[314px] sm:h-[241px] md:w-[219px] md:h-[168px] lg:w-full lg:h-[195px] xl:w-[391px] xl:h-[283px] mx-auto"/>
                        </div>
                        <h3 className="text-[18px] sm:text-[24px] md:text-[20px] lg:text-[22px] xl:text-[30px] text-[#263238] font-semibold text-center md:text-left">
                            Live online classes
                        </h3>
                        <p className="md:inline-block md:max-w-[260px] lg:max-w-[380px] text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[20px] text-[#8F95A5] text-center md:text-left">
                            Interactive group classes with expert teachers. Free 7-day trial <span className="hidden md:inline-block text-transparent w-40"/>
                        </p>
                        <div className="flex justify-around items-center mx-auto md:mx-0  w-[170px] sm:w-[205px] xl:w-[240px] bg-[#EEEEEE] py-[5px] px-[10px] rounded-[5px] mt-[10px] cursor-pointer">
                            <p className="text-[18px] sm:text-[22px] lg:text-[24px] xl:text-[30px] text-[#263238]">
                                £12.99
                            </p>
                            <p className="text-[14px] sm:text-[16px] xl:text-[18px] text-[#546269]">
                                per month
                            </p>
                        </div>
                    </li>

                    <li className="flex flex-col justify-center items-center md:justify-between md:items-start gap-[25px] lg:gap-[20px] xl:gap-[30px] sm:gap-[30px] md:h-[484px] lg:h-[500px] xl:h-[680px] md:max-w-[calc(1/3-18px)]">
                        <div className="md:h-[197px] lg:h-[241px] xl:h-[320px]">
                            <img src={personal} alt="personal" className="w-[241px] h-[241px] sm:w-[253px] sm:h-[253px] md:w-[210px] md:h-[210px] lg:w-[242px] lg:h-[242px] xl:w-[340px] xl:h-[320px] mx-auto"/>
                        </div>
                        <h3 className="text-[18px] sm:text-[24px] md:text-[20px] lg:text-[22px] xl:text-[30px] text-[#263238] font-semibold text-center md:text-left">
                            Personal Tuition
                        </h3>
                        <p className="md:inline-block md:max-w-[260px] lg:max-w-[380px] text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[20px] text-[#8F95A5] text-center md:text-left">
                            Online one-to-one English tutoring – enjoy our first session for only $1 <span className="hidden md:inline-block text-transparent w-40"/>
                        </p>    
                        <div className="flex justify-around items-center mx-auto md:mx-0 w-[170px] sm:w-[205px] xl:w-[240px] bg-[#EEEEEE] py-[5px] px-[10px] rounded-[5px] mt-[10px] cursor-pointer">
                            <p className="text-[18px] sm:text-[22px] lg:text-[24px] xl:text-[30px] text-[#263238]">
                                £20.99
                            </p>
                            <p className="text-[14px] sm:text-[16px] xl:text-[18px] text-[#546269]">
                                per month
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}