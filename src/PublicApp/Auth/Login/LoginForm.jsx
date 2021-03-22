import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import {
  Button,
  FormControl,
  Text,
  Input,
  Box,
  FormErrorMessage,
  Flex,
  Image,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/core";
import lock from "../../../Components/assets/lock.svg";
import { ToastBox } from "../../../Components";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export function LoginForm({ loginState, login }) {
  const [incorrectMsg, setIncorrectMsg] = useState("");
  const toast = useToast();
  const history = useHistory();

  async function handleSubmit(values) {
    const result = await login(values);
    if (result === true && result !== "You have no account with this email") {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Login successful!"} />,
      });
      sessionStorage.setItem("isAuthenticated", "true");
      Cookies.set("essentialismLog");
      history.push("/dashboard/home");
    } else if (result === "You have no account with this email") {
      setIncorrectMsg("You have no account with this email");
    } else {
      toast({
        position: "bottom-left",
        render: () => (
          <ToastBox message="An error occured. Please, try again" />
        ),
      });
    }
  }
  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => handleSubmit(values),
  });

  useEffect(() => {
    if (loginState === "loading" || loginState === "idle") {
      setIncorrectMsg("");
    }
  }, [loginState]);

  return (
    <Box>
      <Flex
        width="100%"
        margin="0 auto"
        maxWidth="448px"
        justify="center"
        align="center"
      >
        <form
          style={{
            width: "100%",
            margin: "70px auto",
            background: "#fff",
            border: "1px solid rgb(248, 248, 248)",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            padding: "1.5rem 2rem",
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
              <Text
                marginTop="0.8rem"
                fontSize="16px"
                color="#333"
                fontWeight="bold"
              >
                Login
              </Text>
            </Flex>
          </Box>
          {incorrectMsg && (
            <Alert status="error" marginBottom="1rem">
              <AlertIcon />
              <AlertTitle mr={2} color="#7e7b7b" fontSize="12px">
                You have no account with this email!
              </AlertTitle>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => setIncorrectMsg("")}
              />
            </Alert>
          )}
          <FormControl
            marginBottom="1.2rem"
            isInvalid={!!formik.touched.email && !!formik.errors.email}
          >
            <Input
              type="email"
              name="email"
              id="email"
              variant="flushed"
              placeholder="email"
              focusBorderColor="blue.500"
              aria-describedby="email-helper-text"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>{" "}
          </FormControl>
          <FormControl
            paddingBottom="0rem"
            isInvalid={!!formik.touched.password && !!formik.errors.password}
          >
            {/* <FormLabel htmlFor="password" marginBottom="0.1rem">Password</FormLabel> */}
            <Input
              type="password"
              name="password"
              variant="flushed"
              id="password"
              placeholder="password"
              focusBorderColor="blue.500"
              aria-describedby="password-helper-text"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>{" "}
          </FormControl>
          <Box width="100%" marginTop="3rem">
            <Button
              size="md"
              variant="solid"
              marginBottom="0.875rem"
              // background="#035257"
              background="#3D93DB"
              color="#fff"
              _hover={{
                // background: "#035257",
                background: "#4299e1",
                color: "#fff",
              }}
              border="none"
              width="100%"
              isLoading={loginState === "loading"}
              isDisabled={!formik.values.email || !formik.values.password}
              onClick={() => handleSubmit(formik.values)}
            >
              Login
            </Button>
            <Text fontSize="12px" marginTop="0.8rem">
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
      </Flex>
    </Box>
  );
}
