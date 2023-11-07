import { useState } from "react";
import contact from "../../public/assets/contact.svg";
import emailValidation from "../lib/emailValidation";

export default function ContactUs() {
  const [showMessage, setShowMessage] = useState(false);
  const [email, setEmail] = useState("");

  const checkEmail = (email: string) => {
    if (emailValidation(email)) return setShowMessage(true);
  };

  return (
    <div id="contacts" className="pt-[40px] sm:pt-[100px] pb-[40px]">
      <div className="xl:max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[55px] xl:gap-[150px]">
          <div className="md:w-[35%] lg:w-[40%]">
            <h2 className="md:hidden text-center text-[24px] sm:text-[30px] font-semibold mb-[70px] sm:mb-[90px]">
              Contact Us
            </h2>
            <img
              src={contact}
              alt="contact"
              className="w-[253px] h-[228px] sm:w-[358px] sm:h-[322px] md:w-[233px] md:h-[210px] lg:w-[312px] lg:h-[281px] xl:w-[477px] xl:h-[429px] mx-auto"
            />
          </div>

          <div className="flex flex-col gap-[30px] sm:gap-[60px] md:gap-[30px] lg:gap-[50px] md:w-[65%] lg:w-[60%]">
            <h2 className="hidden md:inline-block text-center md:text-left text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[48px] font-semibold">
              Contact Us
            </h2>
            <p className="lg:inline-block lg:w-[420px] xl:w-[776px] text-[14px] sm:text-[16px] xl:text-[20px] text-[#8F95A5] text-center md:text-left">
              Discover your current English level by taking our free online
              English test. Sign up to our newsletter for learning tips and free
              resource
            </p>
            {showMessage ? (
              <p className="border-[1px] border-[#8F95A5] px-[26px] py-[16px] rounded-[5px] sm:rounded-[10px] md:rounded-[5px] lg:rounded-[10px] sm:w-[calc(100%-178px)] md:w-[calc(100%-150px)] lg:w-[calc(100%-208px)] xl:w-[calc(100%-276px)]">
                Thank you for your interest in our service. We will be in touch
                shortly.{" "}
              </p>
            ) : (
              <form className="flex flex-col sm:flex-row gap-[15px] sm:gap-0">
                <input
                  placeholder="Enter Your E-mail"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="placeholder:text-[#8F95A5] placeholder:text-[12px] sm:placeholder:text-[13px] md:placeholder:text-[12px] lg:placeholder:text-[14px] xl:placeholder:text-[16px] border-[1px] border-[#8F95A5] px-[26px] py-[16px] rounded-[5px] sm:rounded-[10px] md:rounded-[5px] lg:rounded-[10px] sm:w-[calc(100%-178px)] md:w-[calc(100%-150px)] lg:w-[calc(100%-208px)] xl:w-[calc(100%-276px)]"
                />
                <button
                  type="submit"
                  onClick={() => checkEmail(email)}
                  className="w-full bg-[#263238] text-white py-[20px] text-[14px] sm:text-[16px] md:text-[13px] lg:text-[16px] xl:text-[20px] rounded-[5px] sm:rounded-[10px] md:rounded-[5px] lg:rounded-[10px] sm:w-[193px] md:w-[145px] lg:w-[193px] xl:w-[264px] sm:ml-[-15px] md:ml-[5px] lg:ml-[15px] xl:ml-[12px] border-2 border-[#263238] hover:bg-transparent hover:text-[#263238] duration-100"
                >
                  Get In Touch
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
