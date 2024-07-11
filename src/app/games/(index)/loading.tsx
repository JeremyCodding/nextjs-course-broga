import Image from "next/image";

import { PageWrapper, Pagination } from "@/components";
import GamesService from "@/services/Games";
import { getGameImage } from "@/helpers/games";
import Link from "next/link";
import { getIntArray } from "@/helpers/math";

export default async function GamesLoading() {
  return (
    <PageWrapper>
      <div className="container mx-auto my-6 animate-pulse">
        <h1 className="text-3xl my-6">
          <div className="bg-slate-600 w-1/6 h-9 rounded-lg" />
        </h1>

        <div className="grid grid-cols-4 gap-x-4 gap-y-12">
          {getIntArray(1, 12).map((game) => {
            return (
              <div
                key={game}
                className="flex-center gap-2 w-[372px] h-[312px] flex-col relative overflow-hidden "
              >
                <div className="h-full w-full bg-slate-600" />
                <p className="pt-2 pb-2 px-2 w-full">
                  <span className="w-full bg-slate-600 h-6 rounded-lg" />
                </p>
              </div>
            );
          })}
        </div>
        <div className="my-8">
          <div className="bg-slate-600 w-1/6 h-10 rounded-lg" />
        </div>
      </div>
    </PageWrapper>
  );
}
