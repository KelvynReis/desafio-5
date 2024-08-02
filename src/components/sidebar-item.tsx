import { Icon, IconProps } from "./icon";

type IconName = IconProps["name"];

export type SidebarIconProps = {
  href: string;
  iconName: IconName;
  text: string;
  child?: SidebarIconProps[];
};

export const SidebarITem = ({
  href,
  iconName,
  text,
  child,
}: SidebarIconProps) => {
  const ItemRender = ({ href, iconName, text, child }: SidebarIconProps) => {
    return (
      <a
        href={href}
        className={`flex items-center ml-4 ${
          child && "flex-col items-baseline gap-4"
        }`}
      >
        <div className="flex items-center gap-3">
          <Icon name={iconName} />
          <span className=" text-lg font-medium">{text}</span>
        </div>
        {child && (
          <div className="w-full flex flex-col items-end justify-end gap-3 pr-10">
            {child.map((item, index) => (
              <ItemRender
                key={index}
                href={item.href}
                iconName={item.iconName}
                text={item.text}
              />
            ))}
          </div>
        )}
      </a>
    );
  };

  return (
    <ItemRender href={href} iconName={iconName} text={text} child={child} />
  );
};
