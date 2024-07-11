import Link from "next/link";
import Image from "next/image";
import ArticleService from "@/services/Articles";

export async function HomeLatestArticles() {
  const latestArticles = await ArticleService.getHomeLatestArticles();
  const highlithedArticles = latestArticles.data;
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl my-10 underline">Latest Articles</h2>
      <div className="grid grid-cols-4 gap-4 h-[35vh]">
        {highlithedArticles.map((article) => (
          <Link
            className="flex-center relative overflow-hidden"
            key={article.title}
            href={`/articles/${article.slug}`}
          >
            <div className="h-full w-full">
              <Image
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                src={`/assets/images/articles/${article.image}`}
                alt={article.title}
                width={600}
                height={400}
              />
            </div>
            <p className="absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full">
              {article.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
