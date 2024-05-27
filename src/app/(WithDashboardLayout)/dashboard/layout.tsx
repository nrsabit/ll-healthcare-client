"use client";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn()) {
      return router.push("/login");
    }
  }, [router]);
  
  return <DashboardDrawer>{children} </DashboardDrawer>;
};

export default DashboardLayout;
