import React from "react";
import { Tab } from "@chakra-ui/core";

export default function CustomChakraTab({ name, key }) {
  return (
    <Tab
      _active={{ border: "none", outline: "none" }}
      _hover={{ border: "none", outline: "none" }}
      _focus={{ border: "none", outline: "none" }}
      key={key}
    >
      {name}
    </Tab>
  );
}
