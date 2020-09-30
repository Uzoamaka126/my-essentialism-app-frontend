import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  FormControl,
  Text,
  Input,
  Box,
  FormErrorMessage,
  Image,
  Flex
} from "@chakra-ui/core";
import lock from '../../../Components/assets/lock.svg'

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
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <Box width="100%" maxWidth="448px"
    >
      <form
        style={{
          width: "100%",
          margin: "auto",
          background: "#fff",
          border: "1px solid rgb(248, 248, 248)",
          // padding: "1.5rem 1rem",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          padding: "1.5rem 2rem"
        }}
      >
        <Box>
          <Flex 
            margin="1.2rem auto 2rem" 
            flexDirection="column" 
            alignItems="center" 
            width="100%"
          >
            <Flex 
              borderRadius="50%" 
              width="80px" 
              height="80px" 
              padding="10px" 
              border="1px solid #8DAAA5"
              justifyContent="center"
              alignItems="center"
            >
              <Image width="40px" height="40px" src={lock} />
            </Flex>
            <Text marginTop="0.8rem" fontSize="12px">Signup</Text>
          </Flex>
        </Box>
        <FormControl
          isInvalid={!!formik.touched.username || !!formik.errors.username}
          marginBottom="0.5rem"
        >
          {/* <FormLabel marginBottom="0rem">Username</FormLabel> */}
          <Input
            type="text"
            name="username"
            // background="#f7fbfb"
            id="username"
            variant="flushed"
            aria-describedby="username-helper-text"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="username"
            focusBorderColor="blue.500"
          />
          <FormErrorMessage marginBottom="0.625rem">
            {formik.errors.username || formik.touched.username}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={!!formik.touched.email}
          marginBottom="0.5rem"
        >
          {/* <FormLabel marginBottom="0rem">Email address</FormLabel> */}
          <Input
            id="email"
            type="email"
            name="email"
            variant="flushed"
            value={formik.values.email}
            // background="#f7fbfb"
            aria-describedby="email-helper-text"
            placeholder="email"
            focusBorderColor="blue.500"
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
          {/* <FormLabel marginBottom="0rem" htmlFor="password">
            Password
          </FormLabel> */}
          <Input
            type="password"
            // background="#f7fbfb"
            name="password"
            variant="flushed"
            id="password"
            aria-describedby="password-helper-text"
            placeholder="password"
            focusBorderColor="blue.500"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <FormErrorMessage marginBottom="0.625rem">
            {formik.errors.password}
          </FormErrorMessage>
        </FormControl>
        <Box width="100%" marginTop="2rem">
          <Button
            size="md"
            variant="solid"
            marginBottom="0.875rem"
            background="#025559"
            color="#fff"
            border="none"
            width="100%"
            isLoading={!!isLoading}
            // disabled={
            //   (!formik.values.email && !formik.values.username && !formik.values.password)
            //   ? true
            //   : false
            // }
            onClick={() => onSubmit(formik.values)}
          >
            Sign up
          </Button>
          <Text fontSize="10px">
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
  );
}
