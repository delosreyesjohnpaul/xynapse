interface StandaloneLayoutProps {
    children: React.ReactNode;
}

const StandaloneLayout = ({ children } : StandaloneLayoutProps) => {
    return (
        <main>
            {children}
        </main>
    );
}

export default StandaloneLayout;