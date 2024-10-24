"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { useCreateTasktModal } from "../hooks/use-create-task-modal";
import { CreateTaskFormWrapper } from "./create-task-form-wrapper";
 
export const CreateTaskModal = () => {
    const { isOpen, setIsOpen, close} = useCreateTasktModal();
    
    return (
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
            <CreateTaskFormWrapper onCancel={close}/>
        </ResponsiveModal>
    );
};