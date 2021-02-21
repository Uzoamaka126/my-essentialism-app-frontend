import React from "react";
import { Link } from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";

export default function HomeNavLink({ to, label, marginRight }) {
  return (
    <Link
      fontSize="1rem"
      fontWeight="normal"
      color="#5A5A5A"
      _hover={{
        borderBottom: "2px solid #025559",
        fontWeight: "medium",
        textDecoration: "none",
        color: "#025559",
      }}
      as={RouterLink}
      to={to}
      padding="8px 10px"
      marginRight={marginRight}
    >
      {label}
    </Link>
  );
}
