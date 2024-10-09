export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={`min-h-screen bg-gray-100 flex  justify-center sm:items-center px-4 py-12`}>
            {children}
        </main>
    );
}
