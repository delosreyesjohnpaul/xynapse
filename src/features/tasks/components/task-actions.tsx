import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useConfirm } from "@/hooks/use-confirm";
import { ExternalLinkIcon, PencilIcon, TrashIcon } from "lucide-react";

import { useDeleteTask } from "../api/use-delete-task";

interface TaskActionProps {
    id: string;
    projectId: string;
    children: React.ReactNode;
}

export const TaskAction = ({
    id,
    projectId,
    children,
} : TaskActionProps) => {
    const [ConfirmDialog, confirm] = useConfirm(
        "Delete task",
        "This action connot be undone.",
        "destructive"
    );

    const { mutate, isPending} = useDeleteTask();

    const onDelete = async () => {
        const ok = await confirm();

        if (!ok) return;

        mutate({ param: { taskId: id }});
    }

    return(
        <div className="flex justify-end">
            <ConfirmDialog/>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    {children}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                        onClick={() => {}}
                        className="font-medium p-[10px]"
                    >
                        <ExternalLinkIcon className="size-4 mr-2 stroke-2"/>
                        Task Details
                    </DropdownMenuItem>
                                        
                    <DropdownMenuItem
                        onClick={() => {}}
                        className="font-medium p-[10px]"
                    >
                        <ExternalLinkIcon className="size-4 mr-2 stroke-2"/>
                        Open Project
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() => {}}
                        className="font-medium p-[10px]"
                    >
                        <PencilIcon className="size-4 mr-2 stroke-2"/>
                        Edit Task
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem
                        onClick={onDelete}
                        disabled={isPending}
                        className="text-amber-700 focus:text-amber-700 font-medium p-[10px]"
                    >
                        <TrashIcon className="size-4 mr-2 stroke-2"/>
                        Delete Task
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
} 