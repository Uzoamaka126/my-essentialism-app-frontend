import React from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Stack,
  ListItem,
  Link,
  Icon,
  VisuallyHidden,
  ControlBox,
} from "@chakra-ui/core";

function CustomCheckbox({ label, date }) {
  return (
    <label style={{ display: "flex" }}>
      <VisuallyHidden as="input" type="checkbox" />
      <ControlBox
        borderWidth="1px"
        size="16px"
        rounded="sm"
        borderRadius="20px"
        padding="10px"
        _checked={{ bg: "white", color: "teal", borderColor: "teal" }}
        _focus={{ borderColor: "teal", boxShadow: "none" }}
      >
        <Icon name="check" size="16px" />
      </ControlBox>
      <Flex width="100%" as="span" verticalAlign="top" ml={3}>
        <Box>
          <Text as="span" color="#333" fontSize="0.875rem" fontWeight="normal">
            {label}
          </Text>
          <Box>
            <Text fontSize="0.75rem" color="#f44336">
              {date}
            </Text>
          </Box>
        </Box>
        <Box>{/* Action Buttons here */}</Box>
      </Flex>
    </label>
  );
}
export function SingleProjectComponent(props) {
  let { id } = useParams();
  
  return (
    <Box>
      <Box>
        <Flex
          padding="1rem 0"
          paddingLeft="1.25rem"
          paddingRight="1.25rem"
          justifyContent="space-between"
          borderBottom="1px solid #eee"
          alignItems="center"
        >
          <Flex alignItems="center">
            <Link
              marginRight="0.625rem"
              as={RouterLink}
              to="/dashboard/projects"
              _focus={{ borderColor: "none", border: "none" }}
              _selected={{ borderColor: "none", border: "none" }}
            >
              <Icon name="arrow-back" />
            </Link>
            <Text color="#333" fontSize="1.2rem" fontWeight="medium">
              Test Project 1
            </Text>
          </Flex>
          <Text fontSize="0.8rem" fontWeight="normal" color="red">
            Date Created here
          </Text>
        </Flex>
        <Stack marginTop="2rem" paddingX="1.25rem">
          <ListItem
            listStyleType="none"
            borderBottom="1px solid #f0f0f0"
            paddingY="10px"
          >
            <CustomCheckbox
              label="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              date="Nov 2019"
            />
          </ListItem>
          <ListItem listStyleType="none" borderBottom="1px solid #f0f0f0">
            <CustomCheckbox
              label="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              date="Nov 2019"
            />
          </ListItem>
        </Stack>
      </Box>
    </Box>
  );
}
