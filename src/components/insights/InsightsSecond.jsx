"use client";
import { getInsights } from "@/lib/insights";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";

export default async function InsightsSecond() {
  const insights = await getInsights();
  console.log(insights);
  return (
    <>
      <section className="insights-wrap">
        <div className="_container">
          <div className="insights-wrap__body">
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="insights-row"
            >
              {insights.map((insight) => (
                <Link key={insight.slug} href={`/insights/${insight.slug}`}>
                  <div
                    className="thumbnail"
                    style={{ backgroundImage: `url(${insight.image}` }}
                  ></div>
                  <div className="info">
                    <h3>{insight.title}</h3>
                    <span>
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="12"
                          transform="matrix(-1 8.74228e-08 8.74228e-08 1 24 0)"
                          fill="#F85C3A"
                        />
                        <path
                          d="M10.7852 8.00008L12.8594 10.0743L14.9336 12.1484L12.8594 14.2226L10.7852 16.2968"
                          stroke="white"
                          stroke-width="2"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </RevealList>
          </div>
        </div>
      </section>
    </>
  );
}
