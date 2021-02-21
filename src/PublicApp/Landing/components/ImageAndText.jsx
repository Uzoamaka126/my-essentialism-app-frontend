import React from "react";
import { Box, Image, Text } from "@chakra-ui/core";

export default function ImageAndText({ src, label, alt, imageWidth }) {
  return (
    <Box>
      <Box width={imageWidth} maxWidth="280px" height="160px" marginX="auto">
        <Image width="100%" height="100%" src={src} alt={alt} />
      </Box>
      <Text marginTop="40px" fontSize="22px" color="#585858" textAlign="center">
        {label}
      </Text>
    </Box>
  );
}
