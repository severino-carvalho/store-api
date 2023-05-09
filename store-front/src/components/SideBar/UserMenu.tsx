import { FaSuitcase } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { BsTranslate } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import UserItem from "./components/Items/UserItem";
import { HiChevronLeft } from "react-icons/hi";
import { useRef, useEffect } from "react";

interface userMenuProps {
  display: boolean;

  showLanguagesMenu: boolean;

  handleCloseAll: () => void;
  handleShowLanguagesMenu: () => void;
}

export default function UserMenu({
  display,
  showLanguagesMenu,
  handleCloseAll,
  handleShowLanguagesMenu,
}: userMenuProps) {
  const userMenuRef = useRef(null);
  useEffect(() => {
    function handleClickOutsideUserMenu(event: any) {
      // @ts-ignore
      if (userMenuRef.current && !userMenuRef.current?.contains(event.target)) {
        handleCloseAll();
      }
    }

    document.addEventListener("mousedown", handleClickOutsideUserMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideUserMenu);
    };
  }, [userMenuRef, handleCloseAll]);

  return (
    <div
      ref={userMenuRef}
      className={`flex flex-col absolute top-10 right-0 rounded-md bg-white-fff text-primary-0c66a4 mt-1.5 shadow-md
      ${display ? "visible" : "invisible pointer-events-none"}
      ${showLanguagesMenu ? "" : "overflow-hidden"}`}
    >
      <div className="flex flex-row-reverse relative">
        <button
          className="flex flex-row py-2 pl-3 pr-6 items-center hover:bg-primary-0c66a4 hover:text-white-fff capitalize justify-end"
          onClick={handleShowLanguagesMenu}
        ></button>
        <div
          className={`flex flex-col rounded-md shadow-md bg-white-fff absolute top-0 -left-28 overflow-hidden 
          ${showLanguagesMenu ? "visible" : "invisible pointer-events-none"} `}
        ></div>
      </div>
    </div>
  );
}
