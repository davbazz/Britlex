import capitaliseFirstLetter from "../lib/capitaliseFirstLetter";
import { navbar } from "../lib/navbar";

export default function Hamburger() {
  const closeMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    hamburger?.classList.remove("flex");
    hamburger?.classList.add("hidden");
  };

  return (
    <aside className="hidden hamburger fixed flex-col gap-10 top-0 left-0 w-full h-[100svh] bg-white z-10 px-4 py-9 sm:px-10 sm:py-10 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="text-[24px] sm:text-[30px] cursor-pointer">
          <a href="/">
            <p>
              Brit<span className="text-[#939393]">lex</span>
            </p>
          </a>
        </div>
        <div
          className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 cursor-pointer"
          onClick={closeMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 160"
            className="w-full h-full fill-[#263238]"
          >
            <path d="M64,70.53,30.53,104a4.36,4.36,0,0,1-3.26,1.31A4.62,4.62,0,0,1,24,97.47L57.47,64,24,30.53a4.36,4.36,0,0,1-1.31-3.26,4.48,4.48,0,0,1,4.58-4.58A4.36,4.36,0,0,1,30.53,24L64,57.47,97.47,24a4.58,4.58,0,0,1,7.84,3.27A4.36,4.36,0,0,1,104,30.53L70.53,64,104,97.47A4.62,4.62,0,0,1,97.47,104Z" />
          </svg>
        </div>
      </div>
      <ul className="flex flex-col justify-between items-center gap-4">
        {navbar.map((item) => (
          <li
            key={item}
            onClick={closeMenu}
            className="cursor-pointer text-[#263238] font-[500] text-[16px] xl:text-[20px] hover:text-[#939393] duration-100 w-full block text-center py-1"
          >
            <a href={`#${item}`}>{capitaliseFirstLetter(item)}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
