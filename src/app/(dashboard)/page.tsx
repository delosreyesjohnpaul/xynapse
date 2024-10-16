import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();

  if(!user) redirect("/sign-in")

  console.log({user});

  return (
    <div>
      Home Page: Monitor all your projects and tasks here.
    </div>
  );
};
