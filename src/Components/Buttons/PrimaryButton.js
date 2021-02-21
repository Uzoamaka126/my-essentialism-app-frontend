import React from "react";
import { Button } from "@chakra-ui/core";

export default function PrimaryButton({ onClick, label, marginTop, width }) {
  return (
    <Button
      variant="outline"
      fontSize="1rem"
      fontWeight="medium"
      background="#117a8b" //117a8b 025559
      color="#f2f2f2"
      padding="20px 15px"
      lineHeight="1"
      height="40px"
      maxWidth="152px"
      _hover={{
        background: "teal",
        color: "#fff",
        border: "1px solid transparent",
      }}
      _focus={{
        background: "teal",
        color: "#fff",
        border: "1px solid transparent",
      }}
      _active={{
        background: "teal",
        color: "#fff",
        border: "1px solid transparent",
      }}
      onClick={onClick}
      width={width}
      borderRadius="5px"
      marginTop={marginTop}
      transition="transform .6s"
      border="1px solid transparent"
      // transition="ease-in-out 0.3s all"
    >
      {label}
    </Button>
  );
}
