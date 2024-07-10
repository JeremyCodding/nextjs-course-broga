import { Pagination } from "@/components";
import GamesService from "@/services/Games";

export default async function Games({
  searchParams,
}: {
  searchParams: { page?: string; limit?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;

  const games = await GamesService.getGamesList(currentPage, limit);

  return (
    <div className="ml-72">
      <h1>Página games</h1>
      {games.data.map((game) => {
        return <div key={game.slug}>{game.title}</div>;
      })}
      <div className="my-8">
        <Pagination
          currentPage={games.metadata.page}
          totalPages={games.metadata.totalPages}
        />
      </div>
    </div>
  );
}
