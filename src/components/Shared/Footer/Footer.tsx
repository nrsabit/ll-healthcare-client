import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@/assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <Box py={5} bgcolor="rgb(17, 26, 34)">
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/login">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            NGOs
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="center" gap={4} py={4}>
          <Image
            src={FacebookIcon}
            alt="Facebook"
            width={30}
            height={30}
          ></Image>
          <Image
            src={FacebookIcon}
            alt="Facebook"
            width={30}
            height={30}
          ></Image>
          <Image
            src={FacebookIcon}
            alt="Facebook"
            width={30}
            height={30}
          ></Image>
          <Image
            src={FacebookIcon}
            alt="Facebook"
            width={30}
            height={30}
          ></Image>
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 LL Healthcare. All Rights Reserved
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            color="white"
            href="/"
            fontWeight={600}
          >
            L
            <Box component="span" color="primary.main">
              L
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
