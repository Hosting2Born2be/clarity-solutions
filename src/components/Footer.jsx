import Link from "next/link";
import "@/public/scss/footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="_container">
          <div className="foot-top">
            <Link href="/" className="logo">
              Clarity Solutions
            </Link>
            <span></span>
            <nav className="main-menu">
              <Link href="/business-accounts">Business Accounts</Link>
              <Link href="/tariffs">Tariffs</Link>
              <Link href="#">FAQ</Link>
              <Link href="/insights">Insights</Link>
              <Link href="#">Contacts</Link>
            </nav>
            <span></span>
            <nav className="legal">
              <Link href="#">Terms and Conditions</Link>
              <Link href="#">Privacy Policy</Link>
            </nav>
          </div>

          <div className="foot-rights">
            <span>All Rights Reserved. © 2024</span>
          </div>

          <div className="foot-bottom">
            <span>
              Clarity Solutions upholds a robust security program aligned with
              the latest industry standards. This program is tailored to: (i)
              safeguard the security and integrity of customer data, including
              cardholder information, (ii) mitigate threats or risks to the
              security or integrity of customer data, and (iii) prevent
              unauthorised access to such data. Our security protocols adhere to
              the Service Organizational Controls Report. Clarity Solutions and
              its offerings comply with the Payment Card Industry Payment
              Application Data Security Standard (PA-DSS) and PCI Data Security
              Standard (PCI DSS) as applicable to our services. 
              <br/><br/>
              Reputable banks issue Clarity Solutions’ cards under relevant regulatory licences.
              As an authorised Program Manager and registered service provider,
              Clarity Solutions ensures all fund transfers are processed through
              partner financial institutions utilising certified “PrepaidGate”
              technology.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
