"use client";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "../../lib/firebase";
import Head from "next/head";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const router = useRouter();
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const tokenResult = await user.getIdTokenResult();
                if (tokenResult.claims.admin) {
                    setIsAdmin(true);
                } else {
                    router.push("/admin/login");
                }
            } else {
                router.push("/admin/login");
            }
        });

        return () => unsubscribe();
    }, [auth, router]);

    if (!isAdmin) {
        return <div>Loading...</div>; // Or a proper loader
    }

    return (
        <html lang="en">
            <Head>The Destiny Trust Foundation</Head>
            <link rel="icon" href="favicon.ico" sizes="16x16 32x32 48x48" />
            <body suppressHydrationWarning={true} data-qb-installed={true}>
                {children}
            </body>
        </html>
    );
};

export default AdminLayout;
