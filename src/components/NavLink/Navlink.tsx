import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const NavLink = ({ href, children, className }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center w-full px-3 py-2 text-gray-900 rounded-lg hover:bg-gray-100 ${
          isActive ? "bg-gray-100" : ""
        }
        ${className}
      `}
    >
      {children}
    </Link>
  );
};
