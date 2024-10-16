import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";
import { WorkspaceSwitcher } from "./workspace-switcher";

export const Sidebar = () => {
    return (
        <aside className="h-full bg-neutral-100 p-4 w-full">
            <Link href="/">
                <div className="flex items-center gap-0">
                    <Image src="/logo.svg" height={52} width={52} alt="logo"/>
                    <h1 className="bg-gradient-to-r from-emerald-500 to-sky-400 inline-flex tracking-tight font-bold text-transparent bg-clip-text text-2xl">Xynapse</h1>
                </div>
            </Link>
            <DottedSeparator classname="my-4"/>
            <WorkspaceSwitcher/>
            <DottedSeparator classname="my-4"/>
            <Navigation/>
        </aside>
    );
};