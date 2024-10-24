"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { CreateTaskFormWrapper } from "./create-task-form-wrapper";
import { useEditTasktModal } from "../hooks/use-edit-task-modal";
 
export const EditTaskModal = () => {
    const { taskId, close} = useEditTasktModal();
    
    return (
        <ResponsiveModal open={!!taskId} onOpenChange={close}>
            {taskId && (
                <CreateTaskFormWrapper onCancel={close}/>
            )}
        </ResponsiveModal>
    );
};