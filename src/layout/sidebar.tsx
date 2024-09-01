import { IonIcon, IonLabel, IonRouterLink } from "@ionic/react";
import clsx from "clsx";
import { menuOutline, sparklesOutline } from "ionicons/icons";
import { useLocation } from "react-router";

type SidebarLink = {
  label?: string;
  href?: string;
  icon: string;
  activeIcon?: string;
  className?: string;
};

type SidebarItem = SidebarLink & {
  id?: string;
  pathname?: string;
  onClick?: (e: any) => void;
};

interface SidebarProps {
  items: SidebarLink[];
}

const LinkButton = ({
  label,
  icon,
  href,
  pathname = "",
  className,
  ...rest
}: SidebarItem) => {
  const isRoute = pathname && href;

  return (
    <div
      className={clsx(
        "relative w-full after-full flex items-center p-4 my-2 rounded-md cursor-pointer",
        isRoute
          ? pathname.includes(href)
            ? "color-primary bg-link" : ""
          : "hover:color-primary",
        className,
      )}
      {...rest}
    >
    <IonIcon className="size-6" aria-hidden="true" size="large" icon={icon} />
    <IonLabel className="pl-4 text-base font-medium whitespace-nowrap hidden lg:block">
      {label}
    </IonLabel>
    {isRoute && (
      <IonRouterLink
        className="absolute inset-0"
        routerLink={href}
        routerDirection="none"
      />
    )}
    </div>
  );
};

const NavLinks = ({ items }: SidebarProps) => {
  const { pathname } = useLocation();
  return (
    <div className="grow-h">
      {items.map(({ label, icon, href }) => (
        <LinkButton
          key={label}
          label={label}
          icon={icon}
          href={href}
          pathname={pathname}
        />
      ))}
    </div>
  );
};

const BottomButtons = () => (
  <div className="pt-3 flex flex-col">
    <LinkButton label="Pricing" icon={sparklesOutline} />
    <LinkButton label="More" icon={menuOutline} />
  </div>
);

const Sidebar = ({ items }: SidebarProps) => {
  return (
    <aside className="h-full shrink-0 z-50 hidden md:flex flex-col">
      <div className="w-sidebar grow-h px-3 pt-12 pb-3 flex flex-col bg-main border-r border-color">
        <NavLinks items={items} />
        <BottomButtons />
      </div>
    </aside>
  );
};

export { Sidebar };
export type { SidebarLink, SidebarProps };

