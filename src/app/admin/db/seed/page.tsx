import { PageWrapper } from "@/components";
import { seed, truncate } from "../../../../../prisma/seed/seed";

export default async function SeedPage() {
  try {
    let ranTruncate = true;
    let ranSeed = true;

    if (process.env.DB_TRUNCAT) {
      truncate();
      ranTruncate = true;
    }

    if (process.env.DB_SEED) {
      seed();
      ranSeed = true;
    }

    return (
      <PageWrapper>
        <div className="bg-slate-800">
          <div className="container text-slate-100 px-4">
            <p>Truncate: {ranTruncate ? "YES" : "NO"}</p>
            <p>Seed: {ranSeed ? "YES" : "NO"}</p>
            <p className="my-4 text-red-500 font-semibold">
              Delete DB_TRUNCATE and DB_SEED from your .env file
            </p>
          </div>
        </div>
      </PageWrapper>
    );
  } catch (_e) {
    console.log("SeedPage", _e);
    return (
      <PageWrapper>
        <div className="bg-slate-800">
          <div className="container text-slate-100 px-4">
            <p className="my-4 text-red-500 font-semibold">
              Something went wrong
            </p>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
