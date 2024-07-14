import { PageWrapper } from "@/components";
import { getSession } from "@/helpers/session";
import { redirect } from "next/navigation";

export default async function UserPage() {
  const user = await getSession();

  if (!user) redirect("/auth/sign-in");
  return (
    <PageWrapper>
      <div className="container mx-auto my-6">
        <div className="w-2/3">
          <h1 className="text-3xl my-6">{user?.name as string}</h1>
          <h1>Página do usuário</h1>
          <div className="flex flex-col my-6"></div>
        </div>
      </div>
    </PageWrapper>
  );
}
