"use client";
import "@/public/scss/header.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname()

  const handleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    setMenuOpened(false);
  }, [pathname]);
  
  return (
    <>
      <div className={`head-wrap ${menuOpened && "fixed"}`}>
        <div className="top-head"></div>
        <header className={menuOpened && "fixed"}>
          <div className="_container">
            <div className="header-wrap">
              <Link href="/" className="logo">
                <img src="/images/logo.svg"/>
              </Link>

              <nav className={menuOpened && "opened"}>
                <Link href="/business-accounts">Business Accounts</Link>
                <Link href="/tariffs">Tariffs</Link>
                <Link href="#">FAQ</Link>
                <Link href="/insights">Insights</Link>
                <Link href="/contacts">Contacts</Link>
              </nav>

              <span className="mobile-menu-btn" onClick={handleMenu}>
                {menuOpened ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 20L12 12L20 20M20 4L11.9985 12L4 4"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M12 18.4V12.6C12 12.4409 12.0632 12.2883 12.1757 12.1757C12.2883 12.0632 12.4409 12 12.6 12H18.4C18.5591 12 18.7117 12.0632 18.8243 12.1757C18.9368 12.2883 19 12.4409 19 12.6V18.4C19 18.5591 18.9368 18.7117 18.8243 18.8243C18.7117 18.9368 18.5591 19 18.4 19H12.6C12.4409 19 12.2883 18.9368 12.1757 18.8243C12.0632 18.7117 12 18.5591 12 18.4ZM1 18.4V12.6C1 12.4409 1.06321 12.2883 1.17574 12.1757C1.28826 12.0632 1.44087 12 1.6 12H7.4C7.55913 12 7.71174 12.0632 7.82426 12.1757C7.93679 12.2883 8 12.4409 8 12.6V18.4C8 18.5591 7.93679 18.7117 7.82426 18.8243C7.71174 18.9368 7.55913 19 7.4 19H1.6C1.44087 19 1.28826 18.9368 1.17574 18.8243C1.06321 18.7117 1 18.5591 1 18.4ZM12 7.4V1.6C12 1.44087 12.0632 1.28826 12.1757 1.17574C12.2883 1.06321 12.4409 1 12.6 1H18.4C18.5591 1 18.7117 1.06321 18.8243 1.17574C18.9368 1.28826 19 1.44087 19 1.6V7.4C19 7.55913 18.9368 7.71174 18.8243 7.82426C18.7117 7.93679 18.5591 8 18.4 8H12.6C12.4409 8 12.2883 7.93679 12.1757 7.82426C12.0632 7.71174 12 7.55913 12 7.4ZM1 7.4V1.6C1 1.44087 1.06321 1.28826 1.17574 1.17574C1.28826 1.06321 1.44087 1 1.6 1H7.4C7.55913 1 7.71174 1.06321 7.82426 1.17574C7.93679 1.28826 8 1.44087 8 1.6V7.4C8 7.55913 7.93679 7.71174 7.82426 7.82426C7.71174 7.93679 7.55913 8 7.4 8H1.6C1.44087 8 1.28826 7.93679 1.17574 7.82426C1.06321 7.71174 1 7.55913 1 7.4Z"
                      fill="#F6F6F6"
                      stroke="#F6F6F6"
                      stroke-width="1.5"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
