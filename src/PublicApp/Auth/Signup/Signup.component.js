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
  fullname: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export function SignupComponent({ register_success, loading, register }) {
         const formik = useFormik({
           validationSchema,
           initialValues: {
             fullname: "",
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
                   background: "#f8f8f8",
                   padding: "1.5rem 1rem",
                 }}
               >
                 <FormControl>
                   <FormLabel htmlFor="fullname">Full Name</FormLabel>
                   <Input
                     type="fullname"
                     borderColor="#eee"
                     border="1px solid #eee"
                     id="fullname"
                     aria-describedby="fullname-helper-text"
                     onChange={formik.handleChange}
                     value={formik.values.fullname}
                   />
                   <FormErrorMessage>{formik.errors.fullname}</FormErrorMessage>{" "}
                 </FormControl>
                 <FormControl>
                   <FormLabel htmlFor="email">Email address</FormLabel>
                   <Input
                     type="email"
                     borderColor="#eee"
                     border="1px solid #eee"
                     id="email"
                     aria-describedby="email-helper-text"
                     onChange={formik.handleChange}
                     value={formik.values.email}
                   />
                   <FormErrorMessage>{formik.errors.email}</FormErrorMessage>{" "}
                 </FormControl>
                 <FormControl
                   isInvalid={
                     !!formik.touched.password && !!formik.errors.password
                   }
                   marginBottom="2rem"
                 >
                   <FormLabel htmlFor="password">Password</FormLabel>
                   <Input
                     type="password"
                     border="1px solid #eee"
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
                     background="#53f"
                     color="#fff"
                     border="none"
                     width="100%"
                   >
                     Login
                   </Button>
                   <Text>
                     Have an account?
                     <Link
                       style={{
                         color: "#53f",
                         marginLeft: "0.25rem",
                       }}
                       to="/login"
                     >
                       Login here
                     </Link>
                   </Text>
                 </Box>
               </form>
             </Box>
           </Box>
         );
       }
