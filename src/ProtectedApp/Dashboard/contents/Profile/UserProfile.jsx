import React from 'react';
import {
    Box,
    Heading,
    Flex,
    Text
  } from "@chakra-ui/core";
  import { FullPageSpinner } from '../../../../Components/FullPageSpinner'


  export function UserProfile(props) {
      const { profile, loading } = props; 

      if (loading) return <FullPageSpinner />

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
                     <Flex alignItems="baseline">
                        <Text 
                            color="#636363" 
                            fontSize="14px"
                            marginBottom="0.8rem"
                            marginRight="0.625rem"
                        >
                            Username:
                        </Text>
                         <Text>{profile && profile.username}</Text>
                     </Flex>
                     <Flex alignItems="baseline">
                         <Text 
                            color="#636363" 
                            fontSize="14px"
                            marginBottom="0.8rem"
                            marginRight="0.625rem"
                        >
                            Email Address:
                        </Text>
                         <Text>{profile && profile.email}</Text>
                     </Flex>
                  </Box>
              </Box>
          </Box>
      )
  }