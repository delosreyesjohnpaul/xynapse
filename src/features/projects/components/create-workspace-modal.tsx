"use client";

import { ResponsiveModal } from "@/components/responsive-modal"
import { CreateWorkspaceForm } from "./create-project-form"
import { useCreateProjectModal } from "../hooks/use-create-project-modal";

export const CreateProjectModal = () => {
    const { isOpen, setIsOpen, close } = useCreateProjectModal();

    return (
        <ResponsiveModal open={isOpen} onOpenChange={() => {}}>
            <CreateWorkspaceForm onCancel={close}/>
        </ResponsiveModal>
    );
};