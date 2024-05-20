import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { TUserRoles } from "@/types";
import SidebarItems from "./SidebarItems";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/auth.services";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        py={1}
        my={1}
        gap={1}
        component={Link}
        href="/"
      >
        <Image height={40} width={40} src={assets.svgs.logo} alt="Logo" />
        <Typography
          component="h1"
          variant="h6"
          fontWeight={600}
          sx={{ cursor: "pointer" }}
        >
          LL Healthcare
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as TUserRoles).map((item, index) => (
          <SidebarItems key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
