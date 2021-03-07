import React from "react";
import { Button } from "@chakra-ui/core";

export default function GreyOutlineButton({
  onClick,
  label,
  marginTop,
  width,
  leftIcon,
  rightIcon,
  marginLeft,
  marginRight,
  maxWidth,
}) {
  return (
    <Button
      variant="outline"
      fontSize="1rem"
      fontWeight="medium"
      padding="20px 15px"
      marginLeft={marginLeft}
      marginRight={marginRight}
      lineHeight="1"
      height="40px"
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      maxWidth={maxWidth ? maxWidth : "152px"}
      onClick={onClick}
      width={width}
      borderRadius="5px"
      marginTop={marginTop}
      transition="transform .6s"
    >
      {label}
    </Button>
  );
}
