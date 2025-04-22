import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated, signOut } from "@/lib/actions/auth.action";

const layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between px-4 py-2  shadow">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepSmart</h2>
        </Link>

        <form action={signOut}>
          <button type="submit" className="text-red-500 shadow cusor:pointer text-sm">
            <Image
              src="/log-out.svg" alt="log-out" width={30} height={30} className="cursor-pointer transition-transform duration-200 hover:scale-125"/>
          </button>
        </form>
      </nav>

      {children}
    </div>
  );
};

export default layout;
