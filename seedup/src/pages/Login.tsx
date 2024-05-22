import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { styled } from "@mui/material/styles";
import Logo from "../assets/logo_name.png";

const FormContainer = styled("div")({
  backgroundColor: "#FFFFFF",
  padding: "40px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  width: "500px",
});

const SmallIcon = styled("div")({
  fontSize: "20px",
  position: "relative",
  top: "-2px",
});

const Header = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "absolute",
  top: "30px",
  padding: "0 20px",
});

const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const RegisterButton = styled(Button)({
  backgroundColor: "#007B50",
  color: "#FFFFFF",
});

const Text = styled("div")({
  display: "flex",
  alignItems: "center",
  marginRight: "10px",
  fontSize: "16px",
});

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <Header>
        <LogoContainer>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "40px", marginLeft: "30px" }}
          />
        </LogoContainer>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "30px" }}
        >
          <Text>Bạn chưa có tài khoản?</Text>
          <RegisterButton variant="contained">Đăng ký</RegisterButton>
        </div>
      </Header>
      <FormContainer>
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          ĐĂNG NHẬP
        </h2>
        <form
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Hãy nhập email của bạn"
            fullWidth
            required
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SmallIcon>
                    <EmailIcon fontSize="small" />
                  </SmallIcon>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Hãy nhập mật khẩu của bạn"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SmallIcon>
                    <LockIcon fontSize="small" />
                  </SmallIcon>
                </InputAdornment>
              ),
            }}
          />
          <a href="#" className="block text-right text-green-700 mt-2">
            Quên mật khẩu?
          </a>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{
              marginTop: "16px",
              backgroundColor: "#007B50",
              color: "#FFFFFF",
            }}
          >
            Đăng nhập
          </Button>
        </form>
      </FormContainer>
    </div>
  );
};

export default LoginPage;
