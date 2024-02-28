import { getPage } from "@/lib/insights";
import "@/public/scss/insights.scss";

const pageId = 3;

export async function generateMetadata() {
    const page = await getPage(pageId);
    return {
      title: page.title,
    };
  }

export default async function PolicyPage() {
  const page = await getPage(pageId);
  return (
    <>
      <section className="insights-wrap">
        <div className="_container">
          <div className="insight-inner__body">
            <div className="header">
                <h1>{page.title}</h1>
            </div>
            <article
                dangerouslySetInnerHTML={{ __html: page.content }}
                className="w-full font-gentium prose prose-slate max-w-none"
                />
          </div>
        </div>
      </section>
    </>
  );
}
