import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as BurgerIcon } from "../../assets/navIcon/burgerMenu.svg";
import { ReactComponent as HomeIcon } from "../../assets/navIcon/home.svg";
import { ReactComponent as PigIcon } from "../../assets/navIcon/pig.svg";
import { ReactComponent as ArrowDown } from "../../assets/navIcon/arrowdown.svg";
import { ReactComponent as TestIcon } from "../../assets/navIcon/test.svg";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(true);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  function toggleNav() {
    setIsActive(!isActive);
  }

  const routes = [
    {
      name: t("account.current_farm"),
      icon: <PigIcon className="w-7 h-7 inline mr-2" />,
      path: "/test",
      subMenu: [
        {
          name: t("account.current_password"),
          path: "/test",
        },
        { name: t("account.email"), path: "/test/testtwo" },
      ],
    },
    // 테스트용
    // {
    //   name: t("account.farm_list"),
    //   icon: <TestIcon className="w-7 h-7 inline mr-2" />,
    //   path: "/test",
    //   subMenu: [
    //     {
    //       name: t("account.farm_identification_number"),
    //       path: "/test",
    //     },
    //     { name: t("account.zip_code"), path: "/test/testtwo" },
    //   ],
    // },
  ];

  return (
    <div
      className={
        "h-full pl-2 pt-2 overflow-hidden ease-out duration-100 border-r-2 " +
        (isActive ? "w-60" : "w-12")
      }
    >
      <nav>
        <div className="mb-3">
          <BurgerIcon
            className={
              "w-7 h-7 inline cursor-pointer hover:stroke-blue-500 " +
              (isActive ? "stroke-blue-500" : "stroke-gray-500")
            }
            onClick={toggleNav}
          />
        </div>
        <ul>
          <li className="mb-2">
            <div
              className={
                "cursor-pointer hover:text-blue-500 hover:fill-blue-500 " +
                (location === "/"
                  ? "fill-blue-500 text-blue-500"
                  : "fill-gray-500")
              }
              onClick={() => navigate("/")}
            >
              <HomeIcon className="w-7 h-7 inline mr-2" />
              <div
                className={
                  "whitespace-nowrap inline-block h-7 absolute " +
                  (isActive ? "" : "invisible")
                }
              >
                {t("account.farm_address")}
              </div>
            </div>
          </li>
          {routes.map((o) => (
            <li className="mb-2">
              <MainMenu
                key={o.name}
                name={o.name}
                path={o.path}
                icon={o.icon}
                subMenu={o.subMenu}
                location={location}
                isActive={isActive}
                setIsActive={setIsActive}
                navigate={navigate}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function MainMenu({
  name,
  path,
  icon,
  subMenu,
  isActive,
  setIsActive,
  location,
  navigate,
}) {
  const [toggleSub, setToggleSub] = useState(true);
  return (
    <div
      onClick={() => {
        setIsActive(true);
      }}
      key={name}
      className="h"
    >
      <div
        onClick={() =>
          isActive ? setToggleSub(!toggleSub) : setToggleSub(true)
        }
        className={
          "cursor-pointer hover:text-blue-500 hover:fill-blue-500 " +
          (location.includes(path)
            ? "fill-blue-500 text-blue-500 stroke-blue-500"
            : "fill-gray-500 stroke-gray-500")
        }
      >
        {icon}
        <div className={"inline fixed " + (isActive ? "" : "invisible")}>
          <div className="whitespace-nowrap inline-block h-7 absolute">
            {name}
          </div>
          <div className="w-7 h-7 ml-40 flex mr-2 items-center">
            <ArrowDown className="w-3 h-3 block" />
          </div>
        </div>
      </div>
      {toggleSub && isActive ? (
        <ul className={" cursor-pointer pl-9 " + (isActive ? "" : "invisible")}>
          <SubMenu navigate={navigate} subMenu={subMenu} location={location} />
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

function SubMenu({ navigate, location, subMenu }) {
  return (
    <>
      {subMenu.map((o) => (
        <li
          key={o.name}
          className={
            "hover:text-blue-500 " +
            (location === o.path ? "text-blue-500" : "")
          }
          onClick={() => navigate(o.path)}
        >
          <div className="h-9 leading-9">{o.name}</div>
        </li>
      ))}
    </>
  );
}
