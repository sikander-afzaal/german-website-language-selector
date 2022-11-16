import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import useOutsideClick from "../hooks/useOutsideClick";

const Header = ({ setLanguage, language, content }) => {
  const handleClickOutside = () => {
    setmenuMobile("hidden");
  };
  const [menuMobile, setmenuMobile] = React.useState("hidden");
  const [openLanguage, setOpenLanguage] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const mobileMenu = useOutsideClick(handleClickOutside);

  const onOpenMenu = () => {
    document.body.classList.add("overflow-hidden");
    document.body.classList.remove("overflow-auto");
    setmenuMobile("flex flex-col");
  };

  const onCloseMenu = () => {
    document.body.classList.add("overflow-auto");
    document.body.classList.remove("overflow-hidden");
    setmenuMobile("hidden");
  };

  let addScrollBar = () => {
    document.body.classList.add("overflow-auto");
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <div ref={mobileMenu} className={`menu-mobile ${menuMobile}`}>
        <div className="block w-full h-full relative">
          <div className="flex flex-none" style={{ zIndex: "2" }}>
            <Link
              to="/"
              onClick={addScrollBar}
              className="flex flex-row items-center"
            >
              <img src="/img/logo.png" alt="logo" className="logo" />
              <span className="logo-title">Aktenplatz</span>
            </Link>
          </div>
          <div onClick={onCloseMenu} className="menu-close-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 1.6L14.4 0L8 6.4L1.6 0L0 1.6L6.4 8L0 14.4L1.6 16L8 9.6L14.4 16L16 14.4L9.6 8L16 1.6Z"
                fill="black"
              />
            </svg>
          </div>
          <ul className="main-mobile-menu" id="main-mobile-menu">
            <li onClick={onCloseMenu}>
              <Link to="/#funktionen">
                <button onClick={addScrollBar}>{content.link1}</button>
              </Link>
            </li>
            <li onClick={onCloseMenu}>
              <a onClick={addScrollBar} data-scroll href="#Vorteile">
                {content.mobLink1}
              </a>
            </li>
            <li onClick={onCloseMenu}>
              <a onClick={addScrollBar} data-scroll href="#Vertrauen">
                {content.mobLink2}
              </a>
            </li>
            <li onClick={onCloseMenu}>
              <Link onClick={addScrollBar} to="/preise">
                {content.link2}
              </Link>
            </li>
            <li onClick={onCloseMenu}>
              <Link onClick={addScrollBar} to="/steuerkanzleien">
                {content.link4}
              </Link>
            </li>
            <li onClick={onCloseMenu}>
              <Link onClick={addScrollBar} to="/kieferorthopaedie">
                {content.link5}
              </Link>
            </li>
            <li onClick={onCloseMenu}>
              <Link onClick={addScrollBar} to="/revisionssicher">
                {content.link6}
              </Link>
            </li>
            <li onClick={onCloseMenu}>
              <Link onClick={addScrollBar} to="/termin">
                {content.link7}
              </Link>
            </li>
          </ul>
          <a
            onClick={addScrollBar}
            href="https://app.Aktenplatz.de/register"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            {content.btnText}
          </a>
        </div>
      </div>
      <header className="header">
        <div
          className="flex gap-4 xl:min-w-0 min-w-[300px] xl:flex-none flex-1 justify-start items-center"
          style={{ zIndex: "2" }}
        >
          <Link
            onClick={addScrollBar}
            to="/"
            className="flex sm:w-[170px] lg:min-w-[240px] xl:min-w-0 flex-row items-center"
          >
            <img src="/img/logo.png" alt="logo" className="logo" />
            <span className="logo-title">Aktenplatz</span>
          </Link>
          <div
            onClick={() => {
              setOpenLanguage((prev) => !prev);
            }}
            className="gap-1 xl:hidden cursor-pointer relative h-full flex items-center justify-start"
          >
            <img className="w-6" src="/img/language.svg" />
            <img
              src="/img/chevron-down.svg"
              className={`w-4 transition-all ${
                openLanguage ? "rotate-180" : ""
              }`}
            />
            {openLanguage && (
              <div className="shadow-md dropdown rounded py-2 flex z-10 flex-col items-center bg-white w-[150px] absolute left-1/2 -translate-x-1/2 top-[130%]">
                <p
                  onClick={() => {
                    setLanguage("DE");
                    setSearchParams({ lang: "DE" });
                  }}
                  className={`py-[5px] ${
                    searchParams.get("lang") === "DE"
                      ? "bg-[#f4f5f6]"
                      : "bg-white"
                  } text-sm cursor-pointer hover:bg-[#f4f5f6] hover:text-[#192435] px-5 text-left  w-full`}
                >
                  German
                </p>
                <p
                  onClick={() => {
                    setLanguage("EN");
                    setSearchParams({ lang: "EN" });
                  }}
                  className={`py-[5px] ${
                    searchParams.get("lang") === "EN"
                      ? "bg-[#f4f5f6]"
                      : "bg-white"
                  } text-sm cursor-pointer hover:bg-[#f4f5f6] hover:text-[#192435] px-5 text-left  w-full`}
                >
                  English
                </p>
              </div>
            )}
            {/* <p>German</p> */}
          </div>
        </div>
        <div className="flex flex-row  justify-end items-center sm:flex lg:flex xl:hidden">
          <div onClick={onOpenMenu} className="menu-icon">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="-0.000976562" width="16" height="2" fill="#04060F" />
              <rect
                x="-0.000976562"
                y="8"
                width="24"
                height="2"
                fill="#04060F"
              />
              <rect x="7.99902" y="16" width="16" height="2" fill="#04060F" />
            </svg>
          </div>
        </div>
        <div className="hidden flex-row flex-1 justify-end items-center sm:hidden md:hidden xl:flex">
          <ul className="main-menu">
            <li>
              <Link to="/#funktionen">
                <button onClick={addScrollBar}>{content.link1}</button>
              </Link>
            </li>
            <li>
              <Link onClick={addScrollBar} to="/preise">
                {content.link2}
              </Link>
            </li>
            <li
              className={`z-50 relative  ${
                searchParams.get("lang") === "EN" ? "w-[130px]" : "w-[113px]"
              }`}
            >
              <details className="menu-details">
                <summary>{content.link3}</summary>
                <ul>
                  <li>
                    <Link onClick={addScrollBar} to="/steuerkanzleien">
                      {content.link4}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={addScrollBar} to="/kieferorthopaedie">
                      {content.link5}
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link onClick={addScrollBar} to="/revisionssicher">
                {content.link6}
              </Link>
            </li>
            <li>
              <Link onClick={addScrollBar} to="/termin">
                {content.link7}
              </Link>
            </li>
          </ul>
          <div
            onMouseEnter={() => {
              setOpenLanguage(true);
            }}
            onMouseLeave={() => {
              setOpenLanguage(false);
            }}
            className="flex mr-4 gap-1 cursor-pointer relative h-full"
          >
            <img className="w-6" src="/img/language.svg" />
            <img
              src="/img/chevron-down.svg"
              className={`w-5 transition-all ${
                openLanguage ? "rotate-180" : ""
              }`}
            />
            {openLanguage && (
              <div className="shadow-md dropdown rounded py-2 flex z-10 flex-col items-center bg-white w-[150px] absolute left-1/2 -translate-x-1/2 top-[90%]">
                <p
                  onClick={() => {
                    setLanguage("DE");
                    setSearchParams({ lang: "DE" });
                  }}
                  className={`py-[5px] ${
                    searchParams.get("lang") === "DE"
                      ? "bg-[#f4f5f6]"
                      : "bg-white"
                  } text-sm cursor-pointer hover:bg-[#f4f5f6] hover:text-[#192435] px-5 text-left  w-full`}
                >
                  German
                </p>
                <p
                  onClick={() => {
                    setLanguage("EN");
                    setSearchParams({ lang: "EN" });
                  }}
                  className={`py-[5px] ${
                    searchParams.get("lang") === "EN"
                      ? "bg-[#f4f5f6]"
                      : "bg-white"
                  } text-sm cursor-pointer hover:bg-[#f4f5f6] hover:text-[#192435] px-5 text-left  w-full`}
                >
                  English
                </p>
              </div>
            )}
            {/* <p>German</p> */}
          </div>
          <a
            onClick={addScrollBar}
            href="https://app.Aktenplatz.de/register"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            {content.btnText}
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
