import { useState } from "react";

import { AiOutlineMenuUnfold } from "react-icons/ai";

import ConfigMenu from "@/components/SideBar/ConfigMenu";
import SystemMenu from "@/components/SideBar/SystemMenu";

export default function MainLayout({ children }: any) {
  const [displayMenu, setDisplayMenu] = useState<boolean>(true);

  function changeDisplayMenu() {
    setDisplayMenu(!displayMenu);
  }

  const [configDropdown, setConfigDropdown] = useState<null | string>(null);
  const [configItem, setConfigItem] = useState<null | string>(null);

  const [systemUpperDropdown, setSystemUpperDropdown] = useState<null | string>(
    null
  );
  const [systemDropdown, setSystemDropdown] = useState<null | string>(null);
  const [systemItem, setSystemItem] = useState<null | string>(null);

  function handleSetConfigDropdown(index: string) {
    setConfigDropdown(index !== configDropdown ? index : null);
  }

  function handleSetConfigItem(index: string) {
    if (index !== configItem) {
      setConfigItem(index);
      setSystemUpperDropdown(null);
      setSystemDropdown(null);
      setSystemItem(null);
    } else {
      setConfigItem(null);
    }
  }
  function handleSetSystemBigDropdown(index: string) {
    setSystemUpperDropdown(index !== systemUpperDropdown ? index : null);
  }

  function handleSetSystemDropdown(index: string) {
    setSystemDropdown(index !== systemDropdown ? index : null);
  }

  function handleSetSystemItem(index: string) {
    if (index !== systemItem) {
      setSystemItem(index);
      setConfigDropdown(null);
      setConfigItem(null);
    } else {
      setSystemItem(null);
    }
  }

  return (
    <main className="flex h-[100vh] w-[100vw]">
      <div
        className={`flex flex-col p-4 fixed top-0 left-0 h-[100vh] bg-white-fff shadow-[2px_0px_2px_rgba(0,0,0,0.05)] transform-all duration-500 ease ${
          displayMenu ? "w-80" : "w-16"
        }`}
      >
        <div
          className={`flex ${
            displayMenu ? "flex-row" : "flex-col"
          } items-center justify-between`}
        >
          <div
            className={`flex ${
              displayMenu ? "flex-row" : "flex-col"
            }  items-center text-center`}
          >
            {!displayMenu ? (
              <span>Logo</span>
            ) : (
              <p
                className={`ml-1 text-primary-003c68 uppercase font-nunito font-extrabold text-2xl ${
                  displayMenu ? "" : "hidden"
                }`}
              >
                Store
              </p>
            )}
          </div>

          <AiOutlineMenuUnfold
            className={`cursor-pointer text-2xl text-neutral-a7a hover:text-neutral-900 transition duration-500 ${
              displayMenu
                ? "-scale-100 hover:-scale-110"
                : "scale-100 hover:scale-110 ml-1 mt-6"
            }`}
            onClick={() => changeDisplayMenu()}
          />
        </div>

        <div
          className={`flex flex-col h-[93vh] mt-5 font-inter transform-all duration-500 ease ${
            displayMenu ? "translate-x-0" : "-translate-x-96"
          }`}
        >
          <div>
            <ConfigMenu
              configDropdown={configDropdown}
              handleConfigDropdown={handleSetConfigDropdown}
              configItem={configItem}
              handleConfigItem={handleSetConfigItem}
            />
          </div>

          <div className="rounded bg-neutral-dfe w-72 h-[0.1rem] my-5" />
          <div
            className={`flex flex-col flex-1 overflow-y-auto overflow-x-hidden scroll-smooth`}
          >
            <p className="uppercase text-xs font-bold text-neutral-737">
              {"Menu"}
            </p>
            <SystemMenu
              systemUpperDropdown={systemUpperDropdown}
              handleUpperSystemDropdown={handleSetSystemBigDropdown}
              systemDropdown={systemDropdown}
              handleSystemDropdown={handleSetSystemDropdown}
              systemItem={systemItem}
              handleSystemItem={handleSetSystemItem}
            />
          </div>

          <div className="flex flex-col flex-grow-0 flex-shrink-0">
            <div className="rounded bg-neutral-dfe w-72 h-[0.1rem] my-5" />
            <p className="text-sm text-neutral-737 text-center">Version 0.1</p>
          </div>
        </div>
      </div>

      <div
        className={`overflow-x-auto overflow-y-auto transform-all duration-500 ease ${
          displayMenu
            ? "ml-[20.125rem] mt-[4rem] w-[calc(100%-20.125rem)] min-h-[calc(100vh-4rem)]"
            : "ml-[4rem] mt-0 w-[calc(100%-4rem)] min-h-[98%]"
        }`}
      >
        {children}
      </div>
    </main>
  );
}
