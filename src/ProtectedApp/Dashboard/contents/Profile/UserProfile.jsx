import React from 'react';
import {
    Box,
    Heading,
    Flex,
    Text
  } from "@chakra-ui/core";


  export function UserProfile({ user }) {
     
      return (
          <Box width="100%">
              <Box width="40%" margin="3rem auto 2rem">
                  <Heading 
                    size="md" 
                    color="#919191" 
                    textAlign="center"
                    >
                        Your Profile
                    </Heading>
                  <Box marginTop="3rem">
                     <Flex>
                        <Text 
                            color="#636363" 
                            fontSize="14px"
                            marginBottom="0.8rem"
                        >
                            Username:
                        </Text>
                         <Text>{user && user.username}</Text>
                     </Flex>
                     <Flex>
                         <Text 
                            color="#636363" 
                            fontSize="14px"
                            marginBottom="0.8rem"
                        >
                            Email Address:
                        </Text>
                         <Text>{user && user.email}</Text>
                     </Flex>
                  </Box>
              </Box>
          </Box>
      )
  }