"use client";
import "@/public/scss/header.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    setMenuOpened(false);
  }, [pathname]);

  return (
    <>
      <div className={`head-wrap ${menuOpened && "fixed"}`}>
        <div className="top-head">
          <div className="_container">
            <div className="top-icons">
              <div className="icons-wrap mob-hidden">
                <a href="mailto:info@clarity-solutions.io">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 9L12 12.5L17 9" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 17V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17Z" stroke="#282828" stroke-width="1.5"/>
                  </svg>
                  info@clarity-solutions.io
                </a>
                <a href="#" className="dt-hidden mob-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.118 14.702L14 15.5C11.218 14.104 9.49999 12.5 8.49999 10L9.26999 5.87L7.81499 2H4.06399C2.93599 2 2.04799 2.932 2.21699 4.047C2.63699 6.83 3.87699 11.877 7.49999 15.5C11.305 19.305 16.786 20.956 19.802 21.613C20.967 21.866 22 20.958 22 19.765V16.181L18.118 14.702Z" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Phone
                </a>
              </div>

              <div className="icons-wrap">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 3H3V6M18 3H21V6M6 21H3V18M7 18V17C7 15.6739 7.52678 14.4021 8.46447 13.4645C9.40215 12.5268 10.6739 12 12 12M12 12C13.3261 12 14.5979 12.5268 15.5355 13.4645C16.4732 14.4021 17 15.6739 17 17V18M12 12C12.7956 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9C9 9.79565 9.31607 10.5587 9.87868 11.1213C10.4413 11.6839 11.2044 12 12 12ZM18 21H21V18" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  Sign in
                </a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H12M12 12L15 15M12 12L15 9M19 6V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V18" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Sign up
                </a>
              </div>

            </div>
          </div>
        </div>
        <header className={menuOpened && "fixed"}>
          <div className="_container">
            <div className="header-wrap">
              <Link href="/" className="logo">
                <img src="/images/logo.svg" />
              </Link>

              <nav className={menuOpened && "opened"}>
                <Link href="/business-accounts">Business Accounts</Link>
                <Link href="/tariffs">Tariffs</Link>
                <Link href="/faq">FAQ</Link>
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
