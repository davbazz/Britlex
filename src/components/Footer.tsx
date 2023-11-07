export default function Footer() {
    return (
        <footer id="footer" className="pt-[40px] sm:pt-[100px]">
            <div className="xl:max-w-[1320px] mx-auto">
                <span className="block w-full h-[1px] bg-[#C4C4C4] mb-[30px]"/>

                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-[15px] sm:gap-0 ">

                    <div className="text-[24px] sm:text-[30px] cursor-pointer mx-auto sm:mx-0">
                        <a href="/">
                            <p>Brit<span className="text-[#939393] sm:flex-row">lex</span></p>
                        </a>
                    </div>

                    <div>
                        <ul className="flex justify-between items-center sm:gap-[5px] md:gap-[7px] lg:gap-[10px] xl:gap-[15px] text-[11px] text-[#8F95A5] sm:text-[12px] md:text-[13px] lg:text-[16px] xl:text-[20px] font-[500] md:font-[400]">
                            <li>
                                <a href="/">Terms and Conditions</a>
                            </li>
                            <li>•</li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li>•</li>
                            <li>
                                <a href="/">Cookie Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}