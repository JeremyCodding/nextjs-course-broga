import Link from "next/link";
import Image from "next/image";
import ArticleService from "@/services/Articles";
import { getIntArray } from "@/helpers/math";

export async function HomeLatestArticlesSkeleton() {
  const placeholders = getIntArray(0, 3);
  return (
    <div className="container mx-auto my-6">
      <h2 className="text-3xl my-10 underline">
        <div className="bg-slate-600 w-1/6 h-9 rounded-lg" />
      </h2>
      <div className="grid grid-cols-4 gap-4 h-[35vh]">
        {placeholders.map((_, index) => (
          <div className="flex-center relative overflow-hidden" key={index}>
            <div className="h-full w-full bg-slate-600" />
            <p className="absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full"></p>
          </div>
        ))}
      </div>
    </div>
  );
}
