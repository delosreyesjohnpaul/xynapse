import { differenceInDays, format } from "date-fns";

import { cn } from "@/lib/utils";

interface TaskDateProps {
    value: string;
    className?: string;
}

export const TaskDate = ({ value, className } : TaskDateProps) => {
    const today = new Date();
    const endDate = new Date(value);
    const diffInDays = differenceInDays(endDate, today);
}