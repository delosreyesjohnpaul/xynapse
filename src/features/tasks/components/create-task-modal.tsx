import { ResponsiveModal } from "@/components/responsive-modal";
import { useCreateTasktModal } from "../hooks/use-create-task-modal";

export const CreateTaskModal = () => {
    const { isOpen, setIsOpen } = useCreateTasktModal();
    
    return (
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
            <div>
                TODO: Task form
            </div>
        </ResponsiveModal>
    );
};