import { useGetMembers } from "@/features/members/api/use-get-members";
import { useGetProjects } from "@/features/projects/api/use-get-project";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { DatePicker } from "@/components/date-picker";
import { ListCheckIcon } from "lucide-react";
import { TaskStatus } from "../types";

interface DataFiltersProps {
    hideProjectFilters?: boolean;
}

export const DataFilters = ({ hideProjectFilters } : DataFiltersProps) => {
    const workspaceId = useWorkspaceId();

    const { data: projects, isLoading: isLoadingProjects } = useGetProjects({ workspaceId });
    const { data: members, isLoading: isLoadingMembers } = useGetMembers({ workspaceId });

    const isLoading = isLoadingMembers || isLoadingProjects;

    const projectsOptions = projects?.documents.map((project) => ({
        value: project.$id,
        label: project.name,
    }));

    const membersOptions = members?.documents.map((member) => ({
        value: member.$id,
        label: member.name,
    }));

    if (isLoading) return null;

    return (
        <div className="flex flex-col lg:flex-row gap-2">
            <Select
             defaultValue={undefined}
             onValueChange={() => {}}
            >
                <SelectTrigger className="w-full lg:w-auto h-8">
                    <div className="flex items-center pr-2">
                        <ListCheckIcon className="size-4 mr-2"/>
                        <SelectValue placeholder="All Statuses"/>
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectSeparator/>

                    <SelectItem value={TaskStatus.BACKLOG}>
                        Backlog
                    </SelectItem>

                    <SelectItem value={TaskStatus.IN_PROGRESS}>
                        In Progress
                    </SelectItem>

                    <SelectItem value={TaskStatus.IN_REVIEW}>
                        In Review
                    </SelectItem>

                    <SelectItem value={TaskStatus.TODO}>
                        Todo
                    </SelectItem>

                    <SelectItem value={TaskStatus.DONE}>
                        Done
                    </SelectItem>

                </SelectContent>
            </Select>
        </div>
    )

}