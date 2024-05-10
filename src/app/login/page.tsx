import assets from "@/assets";
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

const LoginPage = () => {

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

          <form>
            <Grid container spacing={2} my={2}>
              <Grid item md={6}>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
            </Grid>
            <Box>
              <Typography textAlign="end" component="p" fontWeight={300}>
                <Link href="#">Forgot Password?</Link>
              </Typography>
            </Box>

            <Button fullWidth={true} sx={{ margin: "16px 0px" }}>
              Login
            </Button>
            <Box>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link href="/register">Create an account</Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
