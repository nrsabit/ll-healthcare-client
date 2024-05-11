"use client";

import { getUserInfo, removeUserInfo } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
  const router = useRouter();
  const userInfo = getUserInfo();

  const handleLogOut = () => {
    removeUserInfo();
    router.refresh();
  };
  return (
    <>
      {userInfo?.email ? (
        <Button color="error" onClick={handleLogOut}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButtons;
