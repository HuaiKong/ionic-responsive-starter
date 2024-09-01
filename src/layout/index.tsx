import { PropsWithChildren } from "react";
import { Sidebar, type SidebarProps } from "./sidebar";

const AsideLayout = ({ items, children }: PropsWithChildren<SidebarProps>) => {
  return (
    <div className="h-full flex">
      <Sidebar items={items} />
      <section className="grow-w flex flex-col overflow-hidden">
        <main className="grow-h relative">{children}</main>
      </section>
    </div>
  );
};

export { AsideLayout };
