"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useWorkspaceId } from "../hooks/use-workspace-id";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MoreVerticalIcon } from "lucide-react";
import Link from "next/link";
import { DottedSeparator } from "@/components/dotted-separator";
import { useGetMembers } from "@/features/members/api/use-get-members";
import { Fragment } from "react";
import { MemberAvatar } from "@/features/members/components/member-avatar";
import { Separator } from "@/components/ui/separator";

export const MemberList = () => {
    const workspaceId = useWorkspaceId();
    const { data } = useGetMembers({ workspaceId });
     
    return (
        <Card className="w-full h-full border-none shadow-none">
            <CardHeader className="flex flex-row items-center gap-x-4 p-7 space-y-0">
                <Button variant="secondary" size="sm" asChild>
                    <Link href={`/workspaces/${workspaceId}`}>
                        <ArrowLeft className="size-4 mr-2 "/>
                        Back
                    </Link>
                </Button>
                <CardTitle className="text-xl font-bold">Members List</CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator/>
            </div>
            <CardContent className="p-7">
                {data?.documents.map((member, index) => (
                    <Fragment key={member.$id}>
                        <div className="flex items-center gap-2">
                            <MemberAvatar 
                                className="size-10"
                                fallbackClassName="text-lg"
                                name={member.name}
                            />
                            <div className="flex flex-col ">    
                                <p className="text-sm font-medium ">{member.name}</p>
                                <p className="text-xs text-muted-foreground ">{member.email}</p>
                            </div>

                            <Button
                                className="ml-auto "
                                variant="secondary"
                                size="icon"
                            >
                                <MoreVerticalIcon className="size-4 text-muted-foreground"/>
                            </Button>
                        </div>

                        {index < data.documents.length - 1 && (
                            <Separator className="my-2.5"/>
                        )}
                    </Fragment>
                ))}
            </CardContent>
        </Card>
    );
};