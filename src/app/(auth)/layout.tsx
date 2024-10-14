"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
    children: React.ReactNode;
};

const AuthLayout = ({ children } : AuthLayoutProps) => {
    const pathname = usePathname();
    const isSignIn = pathname === "/sign-in";

    return ( 
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center gap-0">
                        <Image src="/logo.svg" height={52} width={52} alt="logo"/>
                        <h1 className="bg-gradient-to-r from-emerald-500 to-sky-400 inline-flex tracking-tight font-bold text-transparent bg-clip-text text-2xl">Xynapse</h1>
                    </div>
                    <Button asChild variant="secondary">
                        <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                            {isSignIn ? "Sign Up" : "Login"}
                        </Link>
                    </Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>

            </div>
            
        </main>
     );
}
 
export default AuthLayout;