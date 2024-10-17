import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

interface WorkspaceIdSettingsPageProps {

}

const WorkspaceIdSettingsPage = async () => {
    const user = await getCurrent();
    if (!user) redirect("/sign-in")

    return (
        <div>
            WorksapceIdSettingPage
        </div>
    );
};

export default WorkspaceIdSettingsPage;