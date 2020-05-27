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
  FormErrorMessage,
} from "@chakra-ui/core";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export function SignupForm({ isLoading, onSubmit }) {

  const formik = useFormik({
    validationSchema,
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => onSubmit(values)
  });

  const { values } = formik;

  return (
    <Box>
      <Box width="100%" margin="0 auto" maxWidth="448px">
        <form
          onSubmit={formik.handleSubmit}
          style={{
            width: "100%",
            margin: "10rem auto 0",
            background: "#fff",
            border: "1px solid rgb(248, 248, 248)",
            padding: "1.5rem 1rem",
          }}
        >
          <FormControl
            isInvalid={!!formik.touched.username || !!formik.errors.username}
            marginBottom="1rem"
          >
            <FormLabel marginBottom="0rem">Username</FormLabel>
            <Input
              type="text"
              name="username"
              background="#f7fbfb"
              id="username"
              aria-describedby="username-helper-text"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Enter username here"
            />
            <FormErrorMessage marginBottom="0.625rem">
              {formik.errors.username}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={!!formik.touched.email || !!formik.errors.email}
            marginBottom="1rem"
          >
            <FormLabel marginBottom="0rem">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              value={formik.values.email}
              background="#f7fbfb"
              aria-describedby="email-helper-text"
              placeholder="Enter email"
              onChange={formik.handleChange}
            />
            <FormErrorMessage marginBottom="0.625rem">
              {formik.errors.email}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={!!formik.touched.password || !!formik.errors.password}
            marginBottom="1rem"
          >
            <FormLabel marginBottom="0rem" htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              background="#f7fbfb"
              name="password"
              id="password"
              aria-describedby="password-helper-text"
              placeholder="Enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <FormErrorMessage marginBottom="0.625rem">
              {formik.errors.password}
            </FormErrorMessage>
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
              isLoading={isLoading}
              onClick={() => onSubmit(values)}
            >
              Sign up
            </Button>
            <Text>
              Don't have an account?
              <Link
                style={{
                  color: "#e91e63",
                  marginLeft: "0.25rem",
                }}
                to="/login"
              >
                Login
              </Link>
            </Text>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
