import React from "react";
import { Button } from "@chakra-ui/core";
export default function PrimaryButton({ onClick, label, marginTop }) {
  return (
    <Button
      variant="outline"
      fontSize="1rem"
      fontWeight="medium"
      background="#025559"
      color="#f2f2f2"
      padding="20px 18px"
      height="40px"
      maxWidth="152px"
      _hover={{
        background: "none",
        color: "#025559",
        border: "1px solid #025559",
      }}
      onClick={onClick}
      display="flex"
      alignContent="center"
      justifyContent="center"
      width="150px"
      borderRadius="5px"
      marginTop={marginTop}
    >
      {label}
    </Button>
  );
}
