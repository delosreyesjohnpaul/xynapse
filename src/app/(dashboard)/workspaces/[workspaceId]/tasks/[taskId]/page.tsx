import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

const TaskIdPage = async () => {
    const user = await getCurrent();
    if (!user) redirect("/sign-in");

    return (
        <div>
            Task Id page
        </div>
    )
}

export default TaskIdPage;