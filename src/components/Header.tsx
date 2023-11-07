import capitaliseFirstLetter from "../lib/capitaliseFirstLetter";
import { navbar } from "../lib/navbar";

export default function Header() {
  const openMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    hamburger?.classList.remove("hidden");
    hamburger?.classList.add("flex");
  };

  return (
    <header id="header">
      <div className="flex justify-between items-center text-black mx-auto xl:max-w-[1320px]">
        <div className="text-[24px] sm:text-[30px] cursor-pointer">
          <a href="/">
            <p>
              Brit<span className="text-[#939393]">lex</span>
            </p>
          </a>
        </div>

        <nav className="block w-fit cursor-pointer">
          <div
            className="lg:hidden flex flex-col gap-[4px] sm:gap-[6px] md:gap-[4px] cursor-pointer"
            onClick={openMenu}
          >
            <span className="block w-[34px] sm:w-[42px] md:w-[30px] h-[3px] sm:h-[4px] md:h-[3px] bg-[#39515E] rounded-[1px]" />
            <span className="block w-[34px] sm:w-[42px] md:w-[30px] h-[3px] sm:h-[4px] md:h-[3px] bg-[#39515E] rounded-[1px]" />
            <span className="block w-[24px] sm:w-[30px] md:w-[21px] h-[3px] sm:h-[4px] md:h-[3px] bg-[#39515E] rounded-[1px]" />
          </div>

          <div className="hidden lg:block">
            <ul className="flex justify-between items-center gap-6">
              {navbar.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-[#263238] font-[500] text-[16px] xl:text-[20px] hover:text-[#939393] duration-100"
                >
                  <a href={`#${item}`}>{capitaliseFirstLetter(item)}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="hidden lg:block">
          <a href="#contacts">
            <button className="block w-[160px] h-[50px] border-2 border-[#263238] rounded-[5px] hover:bg-[#263238] hover:text-white duration-150">
              Let's Talk
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
