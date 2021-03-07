import React from "react";
import { Button } from "@chakra-ui/core";

export default function PrimaryButton({ onClick, label, marginTop, width, leftIcon, rightIcon, condition }) {
  return (
    <Button
      variant="solid"
      fontSize="1rem"
      fontWeight="medium"
      background="#4299e1" //117a8b 025559
      color="#f2f2f2"
      padding="20px 15px"
      lineHeight="1"
      height="40px"
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      maxWidth="152px"
      _hover={{
        background: "#1380da",
        color: "#fff",
        border: "1px solid transparent",
      }}
      _focus={{
        background: "#1380da",
        color: "#fff",
        border: "1px solid transparent",
      }}
      _active={{
        background: "#1380da",
        color: "#fff",
        border: "1px solid transparent",
      }}
      onClick={onClick}
      width={width}
      borderRadius="5px"
      marginTop={marginTop}
      transition="transform .6s"
      border="1px solid transparent"
      isDisabled={condition}
    >
      {label}
    </Button>
  );
}
