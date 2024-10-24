import { Task, TaskStatus } from "../types";

import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "@hello-pangea/dnd";

import React, {
    useCallback,
    useEffect,
    useState,
} from "react";

const boards: TaskStatus[] = [
    TaskStatus.BACKLOG,
    TaskStatus.TODO,
    TaskStatus.IN_PROGRESS,
    TaskStatus.IN_REVIEW,
    TaskStatus.DONE,
];

type TasksStates = {
    [key in TaskStatus]: Task[];
};

interface DataKanbanProps {
    data: Task[];
};

export const DataKanban = ({ data } : DataKanbanProps) => {
    return (
        <div>
            Data Kanban
        </div>
    )
}