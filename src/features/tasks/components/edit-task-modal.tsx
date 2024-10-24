"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { useEditTasktModal } from "../hooks/use-edit-task-modal";
import { EditTaskFormWrapper } from "./edit-task-form-wrapper";
 
export const EditTaskModal = () => {
    const { taskId, close} = useEditTasktModal();
    
    return (
        <ResponsiveModal open={!!taskId} onOpenChange={close}>
            {taskId && (
                <EditTaskFormWrapper id={taskId} onCancel={close}/>
            )}
        </ResponsiveModal>
    );
};