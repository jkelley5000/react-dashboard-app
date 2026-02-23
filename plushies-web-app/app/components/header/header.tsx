import { NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Plushies R Us", end: true },
  { to: "/reports", label: "Reports", end: false },
] as const;

export default function Header() {
  return (
    <header className="site-header theme-surface theme-shadow-sm">
      <div className="theme-container site-header-inner">
        <nav aria-label="Main navigation" className="site-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `site-nav-link ${isActive ? "site-nav-link-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
