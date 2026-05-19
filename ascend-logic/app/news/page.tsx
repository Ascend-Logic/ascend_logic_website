import { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import FadeIn from "../../components/ui/FadeIn";
import { newsItems } from "../../lib/news";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "Ascend Logicの最新ニュース、プレスリリース、お知らせをご覧いただけます。",
};

export default function News() {
  return (
    <>
      <PageHero
        titleEn="News"
        titleJa="お知らせ"
        description="Ascend Logicの最新ニュース、プレスリリースをご覧いただけます。"
      />

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="space-y-0 border-t border-gray-200">
            {newsItems.map((item, index) => {
              const isExternal = item.url.startsWith("http");
              const content = (
                <div className="border-b border-gray-200 py-8 flex flex-col md:flex-row md:items-center gap-4 transition-colors group-hover:bg-gray-50 px-2 md:px-4 -mx-2 md:-mx-4">
                  <div className="md:w-1/5 flex items-center gap-4">
                    <span className="text-sm text-gray-400">{item.date}</span>
                    <span className="inline-block bg-gray-100 text-gray-600 px-3 py-0.5 rounded text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="md:w-4/5">
                    <h2 className="text-lg font-bold mb-2 flex items-start gap-2">
                      <span className="group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </span>
                      {isExternal && (
                        <svg
                          className="w-4 h-4 mt-1 text-gray-400 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.excerpt}</p>
                  </div>
                </div>
              );

              return (
                <FadeIn key={item.id} delay={index * 80}>
                  {isExternal ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
