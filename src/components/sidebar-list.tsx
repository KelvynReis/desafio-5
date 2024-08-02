import { SidebarIconProps, SidebarITem } from "./sidebar-item";

const dataList: SidebarIconProps[] = [
  {
    href: "#",
    iconName: "FaCalendar",
    text: "Tarefas do dia",
    child: [
      {
        href: "#",
        iconName: "FaUser",
        text: "Tarefa 1",
      },
      {
        href: "#",
        iconName: "FaUser",
        text: "Tarefa 2",
      },
      {
        href: "#",
        iconName: "FaUser",
        text: "Tarefa 3",
      },
    ],
  },
  {
    href: "#",
    iconName: "FaUser",
    text: "Agenda",
  },
  {
    href: "#",
    iconName: "FaUser",
    text: "Configurações",
  },
];

export const SidebarList = () => {
  return (
    <div className="flex flex-col gap-4">
      {dataList.map((item, index) => (
        <SidebarITem
          key={index}
          href={item.href}
          iconName={item.iconName}
          text={item.text}
          child={item.child}
        />
      ))}
    </div>
  );
};
