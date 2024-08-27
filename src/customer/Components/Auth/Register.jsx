import {
  Grid,
  TextField,
  Button,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../../Redux/Auth/Action";
import { useEffect, useState } from "react";

export default function RegisterUserForm({ onSwitch }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [role] = useState("ROLE_CUSTOMER"); // Default role set to "Customer"
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const { auth } = useSelector((store) => store);
  const handleClose = () => setOpenSnackBar(false);

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true);
  }, [auth.user, auth.error]);

  const validatePassword = (password) => {
    // Password must be at least 5 characters and include at least one number
    const hasNumber = /\d/;
    if (password.length < 5 || !hasNumber.test(password)) {
      setPasswordError("Password must be at least 5 characters long and contain at least one number.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateEmail = (email) => {
    // Simple regex for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateName = (name, setter) => {
    if (!name.trim()) {
      setter("This field is required.");
      return false;
    }
    setter("");
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const password = data.get("password");

    const isFirstNameValid = validateName(firstName, setFirstNameError);
    const isLastNameValid = validateName(lastName, setLastNameError);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPasswordValid) {
      return; // Stop form submission if validation fails
    }

    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role, // Use default role
    };

    console.log("user data", userData);
    dispatch(register(userData));
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              role="first-name"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
              helperText={firstNameError}
              error={!!firstNameError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              role="last-name"

              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
              helperText={lastNameError}
              error={!!lastNameError}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              role="email"

              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              helperText={emailError}
              error={!!emailError}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="role-select-label">Role</InputLabel>
              <Select
                labelId="role-select-label"
                id="role-select"
                label="Role"
                name="role"
                value={role} // Default value
                disabled // Set as disabled
              >
                <MenuItem value="ROLE_ADMIN">Admin</MenuItem>
                <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              role="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="new-password"
              type="password"
              helperText={passwordError}
              error={!!passwordError}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              role="register"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p className="m-0 p-0">Already have an account?</p>
          <Button onClick={onSwitch} className="ml-5" size="small">
            Login
          </Button>
        </div>
      </div>

      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={auth.error ? "error" : "success"} sx={{ width: '100%' }}>
          {auth.error ? auth.error : auth.user ? "Register Success" : ""}
        </Alert>
      </Snackbar>
    </div>
  );
}
