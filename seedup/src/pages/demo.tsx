import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  ListItemText,
  TextFieldProps,
} from "@mui/material";
import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

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

const Demo: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [singleSelect, setSingleSelect] = useState("");
  const [multiSelect, setMultiSelect] = useState<string[]>([]);
  const [_file, setFile] = useState<File | null>(null);
  const [date, setDate] = useState<Date | null>(null);

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
      <FormContainer>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', color: '#007B50', marginBottom: '24px' }}>
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
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                color="primary"
              />
            }
            label="Ghi nhớ tôi"
            style={{ display: 'block', textAlign: 'right', color: '#007B50', marginTop: '8px' }}
          />
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="single-select-label">Lựa chọn đơn</InputLabel>
            <Select
              labelId="single-select-label"
              id="single-select"
              value={singleSelect}
              onChange={(e) => setSingleSelect(e.target.value as string)}
              label="Lựa chọn đơn"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="10">Option 1</MenuItem>
              <MenuItem value="20">Option 2</MenuItem>
              <MenuItem value="30">Option 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="multi-select-label">Lựa chọn đa</InputLabel>
            <Select
              labelId="multi-select-label"
              id="multi-select"
              multiple
              value={multiSelect}
              onChange={(e) => setMultiSelect(e.target.value as string[])}
              input={<OutlinedInput label="Lựa chọn đa" />}
              renderValue={(selected) => selected.join(", ")}
            >
              <MenuItem value="10">
                <Checkbox checked={multiSelect.indexOf("10") > -1} />
                <ListItemText primary="Option 1" />
              </MenuItem>
              <MenuItem value="20">
                <Checkbox checked={multiSelect.indexOf("20") > -1} />
                <ListItemText primary="Option 2" />
              </MenuItem>
              <MenuItem value="30">
                <Checkbox checked={multiSelect.indexOf("30") > -1} />
                <ListItemText primary="Option 3" />
              </MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="file"
            type="file"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              inputProps: {
                accept: "image/*, .pdf, .doc, .docx",
              },
            }}
            onChange={handleFileChange}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Chọn ngày"
              value={date}
              onChange={(newDate: Date | null) => setDate(newDate)}
              renderInput={(params: TextFieldProps) => (
                <TextField {...params} fullWidth margin="normal" />
              )}
            />
          </LocalizationProvider>
          <a href="#" style={{ display: 'block', textAlign: 'right', color: '#007B50', marginTop: '8px' }}>
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

export default Demo;
