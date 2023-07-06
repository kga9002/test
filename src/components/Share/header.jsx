import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import Logo from "../../assets/logo";
import { useNavigate } from "react-router-dom";
import KoreaIcon from "../../assets/langIcon/korea.svg";
import EngIcon from "../../assets/langIcon/england.svg";
import SpainIcon from "../../assets/langIcon/spain.svg";
import JapanIcon from "../../assets/langIcon/japan.svg";
import GlobeIcon from "../../assets/langIcon/globe.svg";
import { client } from "../../query/auth";

export default function Header() {
  const { i18n } = useTranslation();
  const [langOption, setLangOption] = useState(i18n.language);
  const [toggleSelect, setToggleSelect] = useState(false);
  const navigate = useNavigate();
  const selectRef = useRef();

  useEffect(() => {
    i18n.changeLanguage(langOption);
    localStorage.setItem("lng", langOption);
  }, [langOption]);

  // 외부 클릭시 select 닫히는 로직
  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  });

  const clickOutside = (event) => {
    if (!selectRef.current.contains(event.target)) {
      setToggleSelect(false);
    }
  };

  // langOption가져와서 현재 선택지 보여줄때 각각 언어로 보이게 설정
  function viewLangOption(lang) {
    switch (lang) {
      case "ko":
        return "한국어";
      case "en":
        return "English";
      case "ja":
        return "日本語";
      case "es":
        return "Español";
      default:
        break;
    }
  }

  function logout() {
    localStorage.removeItem("Auth");
    client.defaults.headers.common["Authorization"] = "";
    window.location.replace("/");
  }

  return (
    <header>
      <div className="p-5 border-b-2">
        {/* 로고 */}
        <div className="inline">
          <span onClick={() => navigate("/")} className="cursor-pointer inline">
            <Logo />
          </span>
        </div>
        <div className="float-right">
          {localStorage.getItem("Auth") === null ? null : (
            <div className=" float-left pr-2">
              <button
                className="cursor-pointer border-solid border-2 border-gray-300 rounded-lg px-3 py-1 w-32 hover:bg-gray-300"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          )}

          {/* 언어 select */}
          <div className="inline relative float-left" ref={selectRef}>
            <div className="top-full w-full overflow-hidden active:max-h-none ">
              <div
                onClick={() => setToggleSelect(!toggleSelect)}
                className="cursor-pointer border-solid border-2 border-gray-300 rounded-lg px-3 py-1 w-32 text-center"
              >
                <img
                  src={GlobeIcon}
                  alt="globe-icon"
                  className="w-7 h-5 inline mr-1"
                />
                {viewLangOption(langOption)}
              </div>
              {toggleSelect ? (
                <ul className="top-full w-32 overflow-hidden max-h-none mt-5 rounded-md border-solid border-2 border-gray-300 p-1 absolute z-50 bg-white">
                  <li
                    className="hover:bg-gray-200 p-1 text-center cursor-pointer"
                    onClick={() => {
                      setLangOption("ko");
                      setToggleSelect(false);
                    }}
                  >
                    <img
                      src={KoreaIcon}
                      className="w-7 h-5 inline mr-1"
                      alt="korea-flag"
                    />
                    한국어
                  </li>
                  <li
                    className="hover:bg-gray-200 p-1 text-center cursor-pointer"
                    onClick={() => {
                      setLangOption("en");
                      setToggleSelect(false);
                    }}
                  >
                    <img
                      src={EngIcon}
                      className="w-7 h-5 inline mr-1"
                      alt="eng-flag"
                    />
                    English
                  </li>
                  <li
                    className="hover:bg-gray-200 p-1 text-center cursor-pointer"
                    onClick={() => {
                      setLangOption("ja");
                      setToggleSelect(false);
                    }}
                  >
                    <img
                      src={JapanIcon}
                      alt="japan-flag"
                      className="w-7 h-5 inline mr-1"
                    />
                    日本語
                  </li>
                  <li
                    className="hover:bg-gray-200 p-1 text-center cursor-pointer"
                    onClick={() => {
                      setLangOption("es");
                      setToggleSelect(false);
                    }}
                  >
                    <img
                      src={SpainIcon}
                      alt="spain-flag"
                      className="w-7 h-5 inline mr-1"
                    />
                    Español
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
