"use client";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

export const WorkspaceSwitcher = () => {
    const { data } = useGetWorkspaces();
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">

            </div>
        </div>
    )
}