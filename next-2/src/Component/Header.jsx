"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/", title: "Home" },
  { href: "/support", title: "Support" },

  { href: "/store", title: "Store" },
  { href: "/about", title: "About" },
];

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="flex justify-between items-center p-4">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={pathname === link.href ? "active" : ""}
        >
          {link.title}
        </Link>
      ))}
    </header>
  );
}
