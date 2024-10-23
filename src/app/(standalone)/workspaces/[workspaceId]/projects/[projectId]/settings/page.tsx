import { getCurrent } from "@/features/auth/queries";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";
import { getProject } from "@/features/projects/queries";
import { redirect } from "next/navigation";

interface ProjecIdSettingsPageProps {
    params: {
        projectId: string;
    };
};

const ProjecIdSettingsPage = async ({
    params,
} : ProjecIdSettingsPageProps) => {
    const user = await getCurrent();
    if(!user) redirect("/sign-in");
    
    const initialValues = await getProject({
        projectId: params.projectId,
    });

    return (
        <div className="w-full lg:max-w-xl ">
            <EditProjectForm initialValues={initialValues}/>
        </div>
    )
}

export default ProjecIdSettingsPage;