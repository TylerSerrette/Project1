// react
import React from "react";

// third-party
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useAvatarDropDownMenu } from "../../../../../AvatarDropDownMenuContext/AvatarDropDownMenuContext";

// local

interface UserLoginFormProps {}

const UserLoginForm: React.FC<UserLoginFormProps> = (
  props: UserLoginFormProps
) => {
  //Props
  const {} = props;
  const { setOpenLoginDialogTo } = useAvatarDropDownMenu();

  //Constants
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Required"),
    }),

    onSubmit: (values) => {
      const url = "http://127.0.0.1:8000/Users/api/create_user/";
      axios.post(url, values).then((res) => {
        console.log(res);
      });
      setOpenLoginDialogTo(false);
    },
  });

  return (
    <>
      <Box onSubmit={formik.handleSubmit} component="form">
        <TextField
          id="username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button onClick={() => setOpenLoginDialogTo(false)}>Cancel</Button>

        <Button type="submit">Login</Button>
      </Box>
    </>
  );
};

export default UserLoginForm;
