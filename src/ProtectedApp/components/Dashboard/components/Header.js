import React from 'react';
import { Link } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/core";

export function Header({ onLogout }) {
    return (
      <Box height="50px" background="#eee" padding="0.625rem 1.5rem">
        <Box>
          <Text fontSize="1.25rem" color="#53f" fontWeight="medium">
            Essentialism
          </Text>

          <Box className="collapse navbar-collapse" id="navbarNav">
           
          </Box>
        </Box>
      </Box>
    );
}