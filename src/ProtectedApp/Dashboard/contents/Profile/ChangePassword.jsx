import React, { useState } from 'react';
import {
    Box,
    Heading,
    Input,
    FormLabel,
    FormControl,
  } from "@chakra-ui/core";


  export function ChangePassword() {
      const [profile] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      })
      return (
          <Box>
              <Box>
                  <Heading size="md" color="#919191">Your Profile</Heading>
                  <Box>
                      <FormControl>
                          <FormLabel
                            fontSize="14px"
                            fontWeight="semibold"
                            color="#57584e"
                          >
                              Old Password
                            </FormLabel>
                          <Input 
                            name="username"
                            value={profile.oldPassword}
                            isDisabled 
                            />
                      </FormControl>
                      <FormControl>
                          <FormLabel
                            fontSize="14px"
                            fontWeight="semibold"
                            color="#57584e"
                          >
                              New Password
                            </FormLabel>
                          <Input 
                            name="email" 
                            isDisabled
                            value={profile.newPassword}
                            />
                      </FormControl>
                  </Box>
              </Box>
          </Box>
      )
  }