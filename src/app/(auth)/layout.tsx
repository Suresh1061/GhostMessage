export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main
            className={`min-h-screen bg-gray-100 flex py-8 justify-center items-center`}
        >
            {children}
        </main>
    );
}
