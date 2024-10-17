import { UserButton } from "@/features/auth/components/user-button";
import Image from "next/image";
import Link from "next/link";

interface StandaloneLayoutProps {
    children: React.ReactNode;
}

const StandaloneLayout = ({ children } : StandaloneLayoutProps) => {
    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center h-[73px]">
                    <Link href="/">
                        <div className="flex items-center gap-0">
                            <Image src="/logo.svg" height={52} width={52} alt="logo"/>
                            <h1 className="bg-gradient-to-r from-emerald-500 to-sky-400 inline-flex tracking-tight font-bold text-transparent bg-clip-text text-2xl">Xynapse</h1>
                        </div>
                    </Link>
                    <UserButton/>
                </nav>
                <div className="flex flex-col items-center justify-center py-4">
                    {children}
                </div>
            </div>
        </main>
    );
}

export default StandaloneLayout;