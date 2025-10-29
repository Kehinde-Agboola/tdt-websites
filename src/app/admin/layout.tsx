"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Head from "next/head";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                // TODO: Add proper role-based check here later
                setIsAuthenticated(true);
            } else {
                router.push("/admin/login");
            }
            setLoading(false);
        };

        checkSession();

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                setIsAuthenticated(false);
                router.push("/admin/login");
            } else {
                 setIsAuthenticated(true);
            }
        });

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, [router]);

    if (loading) {
        return <div>Loading...</div>; // Or a proper loader component
    }

    if (!isAuthenticated) {
        return null; // Avoid rendering children while redirecting
    }

    return (
        <html lang="en">
            <Head>
                <title>The Destiny Trust Foundation - Admin</title>
                <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
            </Head>
            <body suppressHydrationWarning={true} data-qb-installed="true">
                {children}
            </body>
        </html>
    );
};

export default AdminLayout;
