"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";
import LLForm from "@/components/Forms/LLForm";
import LLInput from "@/components/Forms/LLInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid phone number!"),
  address: z.string().min(1, "Please enter your address!"),
});

export const validationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters"),
  patient: patientValidationSchema,
});

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
  const router = useRouter();

  const submit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message, { duration: 5000 });
        const result = await loginUser({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo(result?.data?.accessToken);
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Box>
              <Image
                src={assets.svgs.logo}
                alt="Logo"
                height={50}
                width={50}
              ></Image>
            </Box>
            <Box mt={1}>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          <LLForm
            onSubmit={submit}
            defaultValues={defaultValues}
            resolver={zodResolver(validationSchema)}
          >
            <Grid container spacing={2} my={2}>
              <Grid item md={12}>
                <LLInput name="patient.name" label="Name" fullWidth={true} />
              </Grid>
              <Grid item md={6}>
                <LLInput
                  name="patient.email"
                  label="Email"
                  type="email"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <LLInput
                  name="password"
                  type="password"
                  label="Password"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <LLInput
                  name="patient.contactNumber"
                  label="Contact Number"
                  type="tel"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <LLInput
                  name="patient.address"
                  label="Address"
                  fullWidth={true}
                />
              </Grid>
            </Grid>
            <Button fullWidth={true} sx={{ margin: "16px 0px" }} type="submit">
              Register
            </Button>
            <Box>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </Box>
          </LLForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
