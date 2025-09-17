"use client";
import "@/public/scss/header.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ConnectForm from "./ConnectForm";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();
  const [popupOpened, setPopupOpened] = useState(false);
  const [signUpLink, setSignUpLink] = useState(false);

  useEffect(() => {
    fetch("/api/sumsub-link", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => setSignUpLink(res.url))
      .catch((err) => console.error(err));
  }, []);

  const handlePopup = () => {
    setPopupOpened(!popupOpened);
  };

  const handleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    setMenuOpened(false);
  }, [pathname]);

  return (
    <>
      <div className={`head-wrap ${menuOpened && "fixed"}`}>
        <div className={`sticky-head ${menuOpened && "fixed"}`}>
          <div className="top-head">
            <div className="_container">
              <div className="top-icons">
                <div className="icons-wrap mob-hidden">
                  <a
                    href="mailto:info@clarity-solutions.io"
                    className="link-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 9L12 12.5L17 9"
                        stroke="#282828"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 17V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17Z"
                        stroke="#282828"
                        stroke-width="1.5"
                      />
                    </svg>
                    info@clarity-solutions.io
                  </a>
                  <a href="#" className="dt-hidden mob-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.118 14.702L14 15.5C11.218 14.104 9.49999 12.5 8.49999 10L9.26999 5.87L7.81499 2H4.06399C2.93599 2 2.04799 2.932 2.21699 4.047C2.63699 6.83 3.87699 11.877 7.49999 15.5C11.305 19.305 16.786 20.956 19.802 21.613C20.967 21.866 22 20.958 22 19.765V16.181L18.118 14.702Z"
                        stroke="#282828"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Phone
                  </a>
                </div>

                <div className="icons-wrap">
                  <Link
                    href="/download-the-app"
                    className="download-app mob-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M6 8.68125C5.9 8.68125 5.80625 8.66575 5.71875 8.63475C5.63125 8.60375 5.55 8.5505 5.475 8.475L2.775 5.775C2.625 5.625 2.553 5.45 2.559 5.25C2.565 5.05 2.637 4.875 2.775 4.725C2.925 4.575 3.10325 4.497 3.30975 4.491C3.51625 4.485 3.69425 4.55675 3.84375 4.70625L5.25 6.1125V0.750003C5.25 0.537503 5.322 0.359503 5.466 0.216003C5.61 0.0725027 5.788 0.000502586 6 2.5862e-06C6.212 -0.000497414 6.39025 0.0715027 6.53475 0.216003C6.67925 0.360503 6.751 0.538503 6.75 0.750003V6.1125L8.15625 4.70625C8.30625 4.55625 8.4845 4.48425 8.691 4.49025C8.8975 4.49625 9.0755 4.5745 9.225 4.725C9.3625 4.875 9.4345 5.05 9.441 5.25C9.4475 5.45 9.3755 5.625 9.225 5.775L6.525 8.475C6.45 8.55 6.36875 8.60325 6.28125 8.63475C6.19375 8.66625 6.1 8.68175 6 8.68125ZM1.5 12C1.0875 12 0.7345 11.8533 0.441 11.5598C0.1475 11.2663 0.0005 10.913 0 10.5V9C0 8.7875 0.0720001 8.6095 0.216 8.466C0.36 8.3225 0.538 8.2505 0.75 8.25C0.962 8.2495 1.14025 8.3215 1.28475 8.466C1.42925 8.6105 1.501 8.7885 1.5 9V10.5H10.5V9C10.5 8.7875 10.572 8.6095 10.716 8.466C10.86 8.3225 11.038 8.2505 11.25 8.25C11.462 8.2495 11.6402 8.3215 11.7847 8.466C11.9292 8.6105 12.001 8.7885 12 9V10.5C12 10.9125 11.8533 11.2658 11.5597 11.5598C11.2662 11.8538 10.913 12.0005 10.5 12H1.5Z"
                        fill="white"
                      />
                    </svg>
                    <span>Download the App</span>
                  </Link>

                  {/**<button className="link-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 3H3V6M18 3H21V6M6 21H3V18M7 18V17C7 15.6739 7.52678 14.4021 8.46447 13.4645C9.40215 12.5268 10.6739 12 12 12M12 12C13.3261 12 14.5979 12.5268 15.5355 13.4645C16.4732 14.4021 17 15.6739 17 17V18M12 12C12.7956 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9C9 9.79565 9.31607 10.5587 9.87868 11.1213C10.4413 11.6839 11.2044 12 12 12ZM18 21H21V18"
                        stroke="#282828"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Sign in
                  </button> */}
                  <a
                    href="https://in.sumsub.com/websdk/p/uni_vljdIxrbsRuzxwYB"
                    className="link-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 12H12M12 12L15 15M12 12L15 9M19 6V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V18"
                        stroke="#282828"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
          <header>
            <div className="_container">
              <div className="header-wrap">
                <Link href="/" className="logo" aria-label="Logo">
                  <img src="/images/logo.svg" alt="Logo" />
                </Link>

                <nav className={menuOpened && "opened"}>
                  <Link href="/use-cases">Use Cases</Link>
                  <Link href="/tariffs">Tariffs</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/insights">Insights</Link>

                  <Link href="/contacts">Contacts</Link>
                  <div>
                    <Link
                      href="/download-the-app"
                      className="download-app"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M9 11.6813C8.9 11.6813 8.80625 11.6658 8.71875 11.6348C8.63125 11.6038 8.55 11.5505 8.475 11.475L5.775 8.775C5.625 8.625 5.553 8.45 5.559 8.25C5.565 8.05 5.637 7.875 5.775 7.725C5.925 7.575 6.10325 7.497 6.30975 7.491C6.51625 7.485 6.69425 7.55675 6.84375 7.70625L8.25 9.1125V3.75C8.25 3.5375 8.322 3.3595 8.466 3.216C8.61 3.0725 8.788 3.0005 9 3C9.212 2.9995 9.39025 3.0715 9.53475 3.216C9.67925 3.3605 9.751 3.5385 9.75 3.75V9.1125L11.1562 7.70625C11.3063 7.55625 11.4845 7.48425 11.691 7.49025C11.8975 7.49625 12.0755 7.5745 12.225 7.725C12.3625 7.875 12.4345 8.05 12.441 8.25C12.4475 8.45 12.3755 8.625 12.225 8.775L9.525 11.475C9.45 11.55 9.36875 11.6033 9.28125 11.6348C9.19375 11.6663 9.1 11.6818 9 11.6813ZM4.5 15C4.0875 15 3.7345 14.8533 3.441 14.5598C3.1475 14.2663 3.0005 13.913 3 13.5V12C3 11.7875 3.072 11.6095 3.216 11.466C3.36 11.3225 3.538 11.2505 3.75 11.25C3.962 11.2495 4.14025 11.3215 4.28475 11.466C4.42925 11.6105 4.501 11.7885 4.5 12V13.5H13.5V12C13.5 11.7875 13.572 11.6095 13.716 11.466C13.86 11.3225 14.038 11.2505 14.25 11.25C14.462 11.2495 14.6402 11.3215 14.7847 11.466C14.9292 11.6105 15.001 11.7885 15 12V13.5C15 13.9125 14.8533 14.2658 14.5598 14.5598C14.2663 14.8538 13.913 15.0005 13.5 15H4.5Z"
                          fill="#F85C3A"
                        />
                      </svg>
                      <span>Download the App</span>
                    </Link>
                  </div>
                </nav>

                <span
                  className={`mobile-menu-btn ${menuOpened ? "opened" : ""}`}
                  onClick={handleMenu}
                >
                  <div>
                    <span className="squere"></span>
                    <span className="vertical"></span>
                    <span className="squere"></span>
                    <span className="horizontal"></span>
                    <span className="squere"></span>
                    <span className="vertical"></span>
                    <span className="squere"></span>
                  </div>
                </span>
              </div>
            </div>
          </header>
        </div>
      </div>

      {popupOpened && (
        <div className="popup-wrap">
          <div className="popupOverlay" onClick={() => handlePopup()}></div>
          <div className="popup">
            <h2>Quick Access Form</h2>
            <ConnectForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
