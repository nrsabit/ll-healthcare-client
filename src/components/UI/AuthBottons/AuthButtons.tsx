"use client";

import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo, removeUserInfo } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
  const router = useRouter();
  const userInfo = getUserInfo();

  const handleLogOut = () => {
    logoutUser(router);
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
