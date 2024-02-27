"use client";
import Image from "next/image";
import Link from "next/link";
import "@/public/scss/home.scss";
import { RevealWrapper, RevealList } from "next-reveal";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="_container">
          <div className="home-hero__body">
            <RevealWrapper origin="bottom">
              <h1 className="wow fadeInUp">Welcome to Clarity Solutions</h1>
              <p className="wow fadeInUp">
                At Clarity Solutions, we believe in empowering individuals and
                businesses alike by providing seamless financial solutions. With
                a focus on convenience, security, and accessibility, we strive
                to make managing your finances more straightforward than ever
                before. Join us on a journey towards financial freedom today!
              </p>
            </RevealWrapper>
          </div>
        </div>
      </section>

      <section className="home-second">
        <div className="_container">
          <div className="home-second__body">
            <RevealWrapper origin="bottom">
              <h2 className="section-title">Why choose us?</h2>
            </RevealWrapper>

            <div className="why-row">
              <RevealWrapper origin="bottom">
                <div className="why-element">
                  <span>1</span>
                  <p>
                    Instant payouts and versatile debit card options for
                    hassle-free transactions.
                  </p>
                </div>
              </RevealWrapper>
              <RevealWrapper origin="bottom">
                <div className="why-element">
                  <span>2</span>
                  <p>
                    Robust security measures in partnership with top-tier banks.
                  </p>
                </div>
              </RevealWrapper>
              <RevealWrapper origin="bottom">
                <div className="why-element">
                  <span>3</span>
                  <p>
                    Global access through our online banking portal and mobile
                    app ensures convenience wherever you are.
                  </p>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      <section className="home-third">
        <div className="_container">
          <div className="home-third__body">
            <RevealWrapper origin="bottom">
              <div className="home-third__col-01">
                <h2>Already a member?</h2>
                <p>
                  If you're already part of our community, simply{" "}
                  <Link href="#">sign in</Link> to access your account.
                  Alternatively, download our app for convenient on-the-go
                  management.
                </p>
                <h4>App available on:</h4>
                <div className="buttons-wrap">
                  <Link href="#">
                    <img src="/images/home/appstore.svg" />
                    App Store
                  </Link>
                  <Link href="#">
                    <img src="/images/home/google.svg" />
                    Google Play
                  </Link>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper origin="bottom">
              <div className="home-third__col-02">
                <h2>Join us today - it's free!</h2>
                <p>
                  Ready to experience the benefits of Clarity Solutions?{" "}
                  <Link href="#">Sign up</Link> for free today and unlock a
                  world of financial convenience and security.
                </p>
                <div className="buttons-wrap">
                  <Link href="#">
                    <img src="/images/home/sign-up.svg" />
                    Sign up
                  </Link>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      <section className="home-fourth">
        <div className="_container">
          <div className="home-fourth__body">
            <RevealWrapper origin="bottom">
              <h2 className="section-title">
                Upgrade your <br />
                payment experience
              </h2>
            </RevealWrapper>
            <span className="highlight">
              Optimise your finances easy as ABC
            </span>

            <RevealList
              origin="bottom"
              interval={500}
              delay={500}
              className="flex"
            >
              <div className="left">
                <h3>Quick Sign-Up for Payments</h3>
                <p>
                  Get started in under a minute and begin receiving payments
                  instantly upon registration. It's fast, simple, and
                  hassle-free.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                >
                  <circle
                    cx="20"
                    cy="20.9543"
                    r="14.5"
                    stroke="#F85C3A"
                    stroke-width="11"
                  />
                </svg>
              </div>
              <div className="right">
                <h3>Versatile Debit Cards</h3>
                <p>
                  Easily request virtual and physical debit cards from Clarity
                  Solutions, providing seamless online, in-store, and global ATM
                  transactions.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                >
                  <circle
                    cx="20"
                    cy="20.9543"
                    r="14.5"
                    stroke="#F85C3A"
                    stroke-width="11"
                  />
                </svg>
              </div>
              <div className="left">
                <h3>Secure Bank Transfers</h3>
                <p>
                  Effortlessly transfer funds from your Clarity Solutions
                  account directly to your local bank account, available in
                  eligible jurisdictions.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                >
                  <circle
                    cx="20"
                    cy="20.9543"
                    r="14.5"
                    stroke="#F85C3A"
                    stroke-width="11"
                  />
                </svg>
              </div>
              <div className="right">
                <h3>Comprehensive Money Management</h3>
                <p>
                  Stay in control with our intuitive online banking portal and
                  mobile app. Review transaction history, monitor balances, and
                  access additional features effortlessly.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                >
                  <circle
                    cx="20"
                    cy="20.9543"
                    r="14.5"
                    stroke="#F85C3A"
                    stroke-width="11"
                  />
                </svg>
              </div>
            </RevealList>
          </div>
        </div>
      </section>

      <section className="home-provide">
        <div className="_container">
          <div className="home-provide__body">
            <RevealWrapper origin="bottom">
              <h2 className="section-title">We provide</h2>
            </RevealWrapper>
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="provide-row"
            >
              <div className="provide">
                <h4>Payment Solutions</h4>
                <p>
                  From freelancers to businesses, our payment solutions cater to
                  diverse needs, offering efficiency and flexibility.
                </p>
              </div>

              <div className="provide">
                <h4>Seamless Process</h4>
                <p>
                  Our user-friendly platform offers straightforward payment
                  experiences, regardless of your industry.
                </p>
              </div>

              <div className="provide">
                <h4>Enhanced Protection Measures</h4>
                <p>
                  Rest assured that your funds are safe and protected by our
                  PCI-compliant technology and partnerships with regulated
                  institutions.
                </p>
              </div>

              <div className="provide">
                <h4>Global Access</h4>
                <p>
                  Access your funds and manage your account anywhere in the
                  world with our online banking portal and mobile app.
                </p>
              </div>
            </RevealList>

            <RevealWrapper origin="bottom">
              <Link href="#" className="orange-button">
                Become a member
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </section>

      <section className="home-prioritise">
        <div className="_container">
          <div className="home-prioritise__body">
            <RevealWrapper origin="bottom">
              <h2 className="section-title">We prioritise</h2>
            </RevealWrapper>
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="prioritise-row"
            >
              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10.9546"
                      r="7.5"
                      stroke="#F85C3A"
                      stroke-width="5"
                    />
                  </svg>
                  Flexibility
                </h4>
                <p>
                  Recognizing the uniqueness of each business, we pride
                  ourselves on offering adaptable payment solutions to fulfil
                  your specific requirements.
                </p>
              </div>

              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10.9546"
                      r="7.5"
                      stroke="#F85C3A"
                      stroke-width="5"
                    />
                  </svg>
                  Integrity
                </h4>
                <p>
                  Transparency and honesty are the cornerstone of our approach,
                  fostering solid and enduring relationships built on trust and
                  integrity with our account holders.
                </p>
              </div>

              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10.9546"
                      r="7.5"
                      stroke="#F85C3A"
                      stroke-width="5"
                    />
                  </svg>
                  Dependability
                </h4>
                <p>
                  Our dedicated customer support team ensures round-the-clock
                  assistance, addressing all your inquiries and providing
                  optimal solutions.
                </p>
              </div>

              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10.9546"
                      r="7.5"
                      stroke="#F85C3A"
                      stroke-width="5"
                    />
                  </svg>
                  Passion
                </h4>
                <p>
                  We are genuine about the financial empowerment we facilitate,
                  just as our account holders are passionate about their
                  endeavours.
                </p>
              </div>
            </RevealList>
          </div>
        </div>
      </section>

      <section className="home-how">
        <div className="_container">
          <div className="home-how__body">
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="home-how__col-01"
            >
              <h2 className="section-title">How it works</h2>
              <p>
                Simplify your finances with <br />
                Clarity Solutions
              </p>
              <Link href="#" className="orange-button">
                Get started
              </Link>
            </RevealList>
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="home-how__col-02"
            >
              <div class="how-element">
                <span>1</span>
                <p>
                  Instant payouts and versatile debit card options for
                  hassle-free transactions.
                </p>
              </div>
              <div class="how-element">
                <span>2</span>
                <p>
                  Receive payments instantly or transfer funds to your bank
                  account.
                </p>
              </div>
              <div class="how-element">
                <span>3</span>
                <p>
                  Utilise our debit card for online and in-store purchases or
                  withdraw cash from ATMs worldwide.
                </p>
              </div>
            </RevealList>
          </div>
        </div>
      </section>

      <section className="home-last">
        <div className="_container">
          <div className="home-last__body">
            <RevealWrapper origin="bottom">
              <div className="home-last__col-01">
                <span class="highlight">
                  Optimise your finances easy as ABC
                </span>
                <h2>
                  Stay informed <br />
                  with the Clarity <br />
                  Solutions blog
                </h2>
                <p>
                  Explore the latest articles covering topics such as financial
                  management tips, industry updates, and success stories.
                </p>
                <div className="buttons-wrap">
                  <Link href="#">Go to blog</Link>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper origin="bottom">
              <div className="home-last__col-02">
                <span class="highlight">Contact us</span>
                <h2>
                  Reach out to us with any questions, concerns, or feedback 
                </h2>
                <p>
                  Our support team is here to assist you every step of the way.
                  Your satisfaction is our priority, and we look forward to
                  hearing from you.
                </p>
                <div className="buttons-wrap">
                  <Link href="#">Get assistance</Link>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
