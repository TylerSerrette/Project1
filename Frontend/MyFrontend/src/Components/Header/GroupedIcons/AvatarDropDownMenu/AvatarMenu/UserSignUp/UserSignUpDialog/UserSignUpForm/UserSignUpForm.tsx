// react
import React from "react";

// third-party
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Paper, TextField } from "@mui/material";
import StandardDialog from "../../../../../../../StandardComponents/StandardDialog/StandardDialog";
import { useAvatarDropDownMenu } from "../../../../../AvatarDropDownMenuContext/AvatarDropDownMenuContext";

// local

interface UserSignUpFormProps {}

const UserSignUpForm: React.FC<UserSignUpFormProps> = (
  props: UserSignUpFormProps
) => {
  const { openSignUpDialog, setOpenSignUpDialogTo } = useAvatarDropDownMenu();

  //Props
  const {} = props;

  //Constants

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Formik Values", values);
    },
  });

  console.log(formik.errors);
  //States

  const signupForm = (
    <Box onSubmit={formik.handleSubmit} component="form">
      <TextField
        id="firstName"
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        label="First Name"
        fullWidth
        variant="standard"
        sx={{ marginBottom: "1rem" }}
      />
      <TextField
        id="lastName"
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
        name="lastName"
        type="text"
        placeholder="Last Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        label="Last Name"
        fullWidth
        variant="standard"
        sx={{ marginBottom: "1rem" }}
      />
      <TextField
        id="email"
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        label="Email"
        fullWidth
        variant="standard"
        sx={{ marginBottom: "1rem" }}
      />
      <TextField
        id="password"
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        label="Password"
        fullWidth
        variant="standard"
        sx={{ marginBottom: "1rem" }}
      />
      <TextField
        id="confirmPassword"
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        label="Confirm Password"
        fullWidth
        variant="standard"
        sx={{ marginBottom: "1rem" }}
      />
    </Box>
  );

  return (
    <>
      <StandardDialog
        openDialog={openSignUpDialog}
        setOpenDialogTo={setOpenSignUpDialogTo}
        title="Sign Up"
        contentText="Sign up to create an account"
        content={<>{signupForm}</>}
        primaryButton={{
          text: "Sign Up",
          type: "submit",
          onClick: () => formik.handleSubmit,
        }}
        cancelButton={{
          text: "Cancel",
          onClick: () => setOpenSignUpDialogTo(false),
        }}
      />
    </>
  );
};

export default UserSignUpForm;
