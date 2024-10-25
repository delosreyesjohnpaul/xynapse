"use client";

import { PageLoader } from "@/components/page-loader";
import { useGetTask } from "@/features/tasks/api/use-get-task";
import { useTaskId } from "@/features/tasks/hooks/use-task-id";

export const TaskIdClient = () => {
    const taskId = useTaskId();
    const { data, isLoading } = useGetTask({ taskId });

    if (isLoading) {
        return <PageLoader/>
    }

    return (
        <p>TaskIdClient</p>
    );
};