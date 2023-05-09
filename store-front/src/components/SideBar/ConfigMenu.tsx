import ConfigDropdown from "./components/Dropdowns/ConfigDropdown";
import MainItem from "./components/Items/MainItem";
import { configMenu } from "../../mocks/configMenu";

interface configMenuProps {
  handleConfigDropdown: (index: string) => void;
  configDropdown: string | null;

  handleConfigItem: (index: string) => void;
  configItem: string | null;
}

export default function ConfigMenu(props: configMenuProps) {
  const { menu } = configMenu;
  const { configItem, configDropdown, handleConfigItem, handleConfigDropdown } =
    props;

  return (
    <nav className="font-medium">
      <ul>
        {menu.map((dropdown: any, index) => {
          return (
            <li key={dropdown.key + index}>
              <ConfigDropdown
                changeFunc={handleConfigDropdown}
                item={dropdown}
                selected={configDropdown}
              />

              <ul
                className={`ml-6 ${
                  configDropdown === dropdown.key ? "list-item" : "hidden"
                }`}
              >
                {dropdown.options.map((item: any, index: number) => {
                  return (
                    <li key={item.key + index}>
                      <MainItem
                        changeFunc={handleConfigItem}
                        item={item}
                        selected={configItem}
                      />
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
