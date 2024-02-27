"use client";
import { RevealWrapper, RevealList } from "next-reveal";


const TariffsHero = () => {
  return (
    <>
      <section className="tariffs-hero">
        <div className="_container">
          <div className="tariffs-hero__body">
            <RevealWrapper origin="bottom">
              <h1 className="wow fadeInUp">Clarity Solutions tariffs</h1>
            </RevealWrapper>
            <RevealWrapper origin="bottom">
                <img className="mob-hidden" src="/images/tariffs/hero.png"/>
                <img className="dt-hidden" src="/images/tariffs/hero-mobile.png"/>
            </RevealWrapper>
          </div>
        </div>


      </section>
    </>
  );
};
export default TariffsHero;
