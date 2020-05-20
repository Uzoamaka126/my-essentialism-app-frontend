import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

import {
  Button,
  FormControl,
  FormLabel,
  Text,
  Input,
  Box,
  Image,
  FormErrorMessage,
} from "@chakra-ui/core";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export function LoginComponent({ login_success, loading, login }) {
  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    // onSubmit: (values) => onSubmit(values),
  });
  // onSubmit={formik.handleSubmit}

  return (
    <Box>
      <Box width="100%" margin="0 auto" maxWidth="448px">
        <form
          style={{
            width: "100%",
            margin: "10rem auto 0",
            background: "#fff",
            border: "1px solid rgb(248, 248, 248)",
            padding: "1.5rem 1rem",
          }}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="email"
              borderColor="#eee"
              border="1px solid #eee"
              background="#f7fbfb"
              id="email"
              aria-describedby="email-helper-text"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>{" "}
          </FormControl>
          <FormControl
            isInvalid={!!formik.touched.password && !!formik.errors.password}
            marginBottom="1rem"
          >
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              border="1px solid #eee"
              background="#f7fbfb"
              borderColor="#eee"
              id="password"
              aria-describedby="password-helper-text"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>{" "}
          </FormControl>
          <Box width="100%">
            <Button
              size="lg"
              variant="solid"
              marginBottom="0.875rem"
              background="#e91e63"
              color="#fff"
              border="none"
              width="100%"
            >
              Login
            </Button>
            <Text>
              Don't have an account?
              <Link
                style={{
                  color: "#e91e63",
                  marginLeft: "0.25rem",
                }}
                to="/signup"
              >
                Signup for free
              </Link>
            </Text>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
