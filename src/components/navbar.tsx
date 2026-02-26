import { useTranslation } from "react-i18next";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  DocumentArrowDownIcon,
  ChevronDownIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";

import imgLogo from "../assets/logoSkinAndShape.svg";
import LanguageSelector from "./LanguageSelector";

// nav list menu
const navListMenuItems = [
  {
    title: "Dr. Javier Parada",
    href: "/dr-javier-parada",
  },
  {
    title: "Dra. Mariana León‑Quintero",
    href: "/dra-mariana-leon-quintero",
  },
];

function NavListMenu() {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === "en" ? "/en" : "";
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = navListMenuItems.map(({ title, href }) => (
    <a href={`${langPrefix}${href}`} key={title}>
      <MenuItem>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-1 font-normal"
        >
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-normal outline-none focus:outline-none"
          >
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              {t("nav.specialist")}{" "}
              <ChevronDownIcon className="h-[18px] w-[18px]" />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
        <a
          href="/menu-skin&shape.pdf"
          target="_blank"
          className="text-blue-gray-900 flex gap-1 items-center hover:rounded-full hover:bg-gray-100 py-2 px-3"
          style={{ fontSize: "14px" }}
        >
          {t("nav.download")}
          <DocumentArrowDownIcon className="h-[18px] w-[18px]" />
        </a>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        {t("nav.specialist")} <ChevronDownIcon className="h-[12px] w-[12px]" />
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

function NavList() {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === "en" ? "/en" : "";
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <a href={`${langPrefix}/`} className="text-blue-gray-900" style={{ fontSize: "14px" }}>
        {t("nav.home")}
      </a>
      <NavListMenu />
    </ul>
  );
}

export default function ComplexNavbar() {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === "en" ? "/en" : "";
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [shouldShowBorder, setShouldShowBorder] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShouldShowBorder(true);
      } else {
        setShouldShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar
      className={`sticky inset-0 z-10 mx-auto max-w-screen-2xl p-2 lg:pl-6 mt-4 transition-shadow ${shouldShowBorder ? "border-b border-gray-300 shadow-none" : ""
        }`}
    >
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="a"
          href={`${langPrefix}/`}
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          <img src={imgLogo.src} alt="logo" className="h-[35px]" />
        </Typography>
        <div className="hidden lg:flex ml-auto">
          <NavList />
        </div>
        <div className="ml-auto">
          <LanguageSelector />
        </div>
        <a href={`${langPrefix}/contacto`} className="hidden lg:block">
          <Button className="bg-[#8d5f5b] hover:bg-[#d2938c]">{t("nav.contact")}</Button>
        </a>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
        <a href={`${langPrefix}/contacto`}>
          <Button className="bg-[#8d5f5b] hover:bg-[#d2938c]">{t("nav.contact")}</Button>
        </a>
      </Collapse>
    </Navbar>
  );
}
