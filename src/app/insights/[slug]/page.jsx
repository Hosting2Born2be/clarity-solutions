import { getInsight } from "@/lib/insights";
import "@/public/scss/insights.scss";

export async function generateMetadata({ params: { slug } }) {
    const insight = await getInsight(slug);
    return {
      title: insight.seo_title,
      description: insight.seo_description,
      openGraph: {
        title: insight.seo_title,
        description: insight.seo_description,
      },
    };
  }

export default async function InsightPage({ params: { slug } }) {
  const insight = await getInsight(slug);
  return (
    <>
      <section className="insights-wrap">
        <div className="_container">
          <div className="insight-inner__body">
            <div className="header">
                <img src={insight.image}/>
                <h1>{insight.title}</h1>
            </div>
            <article
                dangerouslySetInnerHTML={{ __html: insight.body }}
                className="w-full font-gentium prose prose-slate max-w-none"
                />
          </div>
        </div>
      </section>
    </>
  );
}
