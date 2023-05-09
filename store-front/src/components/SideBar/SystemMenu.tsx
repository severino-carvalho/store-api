import { systemMenu } from "../../mocks/systemMenu";
import SystemDropdown from "./components/Dropdowns/SystemDropdown";
import UpperSystemDropdown from "./components/Dropdowns/UpperSystemDropdown";
import MainItem from "./components/Items/MainItem";

interface systemMenuProps {
  handleUpperSystemDropdown: (index: string) => void;
  systemUpperDropdown: string | null;

  handleSystemDropdown: (index: string) => void;
  systemDropdown: string | null;

  handleSystemItem: (index: string) => void;
  systemItem: string | null;
}

export default function SystemMenu(props: systemMenuProps) {
  const { menu } = systemMenu;
  const {
    handleUpperSystemDropdown,
    handleSystemDropdown,
    handleSystemItem,
    systemUpperDropdown,
    systemDropdown,
    systemItem,
  } = props;

  return (
    <nav>
      {menu.map((upper, index) => {
        return (
          <ul className="font-inter" key={`upper - ${upper.key}`}>
            <li key={upper.key + index}>
              <UpperSystemDropdown
                changeFunc={handleUpperSystemDropdown}
                item={upper}
                selected={systemUpperDropdown}
              />
              <ul
                className={`ml-2 ${
                  systemUpperDropdown === upper.key ? "list-item" : "hidden"
                } `}
              >
                {upper.options.map((dropdown: any, index) =>
                  dropdown.options.some((option: any) => option.visible) ? (
                    <li key={dropdown.key + index}>
                      <SystemDropdown
                        changeFunc={handleSystemDropdown}
                        item={dropdown}
                        selected={systemDropdown}
                      />
                      <ul
                        className={`ml-6 ${
                          systemDropdown === dropdown.key
                            ? "list-item"
                            : "hidden"
                        } `}
                      >
                        {dropdown.options.map((item: any, index: number) => {
                          return (
                            <li key={item.key + index}>
                              <MainItem
                                changeFunc={handleSystemItem}
                                item={item}
                                selected={systemItem}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ) : (
                    <></>
                  )
                )}
              </ul>
            </li>
          </ul>
        );
      })}
    </nav>
  );
}
