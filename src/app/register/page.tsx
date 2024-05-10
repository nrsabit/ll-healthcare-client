"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type TPatientRegisterFormData = {
  password: string;
  patient: TPatientData;
};

type TPatientData = {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TPatientRegisterFormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<TPatientRegisterFormData> = async (values) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        router.push("/login");
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} my={2}>
              <Grid item md={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register("patient.name", { required: true })}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register("patient.email", { required: true })}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register("password", { required: true })}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Contact Number"
                  type="tel"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register("patient.contactNumber", { required: true })}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Address"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register("patient.address", { required: true })}
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
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
