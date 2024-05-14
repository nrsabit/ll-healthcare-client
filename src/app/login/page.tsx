"use client";
import assets from "@/assets";
import LLForm from "@/components/Forms/LLForm";
import LLInput from "@/components/Forms/LLInput";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export type TLoginFormValues = {
  email: string;
  password: string;
};

const loginValidationSchema = z.object({
  email: z.string().email("Must be a valid email"),
  password: z.string().min(6, "Password should be at leaset 6 characters"),
});

const LoginPage = () => {
  const router = useRouter();

  const submit: SubmitHandler<FieldValues> = async (values) => {
    try {
      const res = await loginUser(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message, { duration: 5000 });
        storeUserInfo(res?.data?.accessToken);
        router.push("/dashboard");
      } else {
        toast.error(res?.message, { duration: 5000 });
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
                Login LL Healthcare
              </Typography>
            </Box>
          </Stack>

          <LLForm
            onSubmit={submit}
            resolver={zodResolver(loginValidationSchema)}
            defaultValues={{
              email: "",
              password: "",
            }}
          >
            <Grid container spacing={2} my={2}>
              <Grid item md={6}>
                <LLInput
                  name="email"
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
            </Grid>
            <Box>
              <Typography textAlign="end" component="p" fontWeight={300}>
                <Link href="#">Forgot Password?</Link>
              </Typography>
            </Box>

            <Button fullWidth={true} sx={{ margin: "16px 0px" }} type="submit">
              Login
            </Button>
            <Box>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link href="/register">Create an account</Link>
              </Typography>
            </Box>
          </LLForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
