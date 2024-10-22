"use client";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface JoinWorkspaceFormProps {
    initialValues: {
        name: string;
    };
};

export const JoinWorkspaceForm = ({
    initialValues,
}: JoinWorkspaceFormProps) => {
    return (
        <Card className="w-full h-full border-none shadow-none">
            <CardHeader className="p-7">
                <CardTitle className="text-xl font-bold ">Join Workspace</CardTitle>
                <CardDescription>You&apos;ve been invited to join <strong>{initialValues.name}</strong> workspace</CardDescription>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator/>
            </div>
            <CardContent className="p-7">
                <div className="flex flex-col lg:flex-row gap-2 items-center justify-between">
                    <Button
                        variant="secondary"
                        type="button"
                        asChild
                        className="w-full lg:w-fit"
                    >
                        <Link href="/"/>
                        Cancel
                    </Button>

                    <Button
                        className="w-full lg:w-fit"
                    >
                        Join Workspace
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}