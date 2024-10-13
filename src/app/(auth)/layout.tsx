import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AuthLayoutProps {
    children: React.ReactNode;
};

const AuthLayout = ({ children } : AuthLayoutProps) => {
    return ( 
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center gap-0">
                        <Image src="/logo.svg" height={52} width={52} alt="logo"/>
                        <h1 className="bg-gradient-to-r from-emerald-500 to-sky-400 inline-flex tracking-tight font-bold text-transparent bg-clip-text text-2xl">Xynapse</h1>
                    </div>
                    <Button variant="secondary">
                        Sign Up
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