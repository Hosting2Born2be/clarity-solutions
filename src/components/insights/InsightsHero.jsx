"use client";
import { RevealWrapper, RevealList } from "next-reveal";


const InsightsHero = () => {
  return (
    <>
      <section className="insights-hero">
        <div className="_container">
          <div className="insights-hero__body">
            <RevealWrapper delay={100} origin="bottom">
              <h1 className="wow fadeInUp">Insights</h1>
            </RevealWrapper>
            <RevealWrapper delay={100} origin="bottom">
                <img className="mob-hidden" src="/images/insights/hero.png"/>
                <img className="dt-hidden" src="/images/insights/hero-mobile.png"/>
            </RevealWrapper>
          </div>
        </div>


      </section>
    </>
  );
};
export default InsightsHero;
