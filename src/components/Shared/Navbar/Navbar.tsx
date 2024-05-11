"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = () => {
  const AuthButtons = dynamic(
    () => import("@/components/UI/AuthBottons/AuthButtons"),
    { ssr: false }
  );
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          L
          <Box component="span" color="primary.main">
            L
          </Box>{" "}
          Health Care
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/login">
            Consultation
          </Typography>
          <Typography component={Link} href="/login">
            Health Plans
          </Typography>
          <Typography component={Link} href="/login">
            Medicine
          </Typography>
          <Typography component={Link} href="/login">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/login">
            NGOs
          </Typography>
        </Stack>

        <AuthButtons />
      </Stack>
    </Container>
  );
};

export default Navbar;
