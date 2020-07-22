// This is a wrapper that fetches all the global states like the user account info,
// user values, projects if any, and the app's values
import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/core";
import { connect } from "react-redux";
import { fetchUserProfile, fetchValues } from "../../redux-store/actions";
import { FullPageSpinner } from "../index";
import { getState } from "../../Utilities/localStorage";

function PreloadedStateProvider(props) {
  const { user, fetchUserProfile, fetchValues, children } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

 const { id } = getState();
  
  console.log(user, id);

  function handleAllFetchOnLoad() {    
    setIsLoading(true);
    Promise.all([fetchUserProfile(id)])
      .then(() => {
        setIsLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
    // fetchUserProfile(id);
    // fetchValues();
    // setIsLoading(false)
  }

  useEffect(() => {
    handleAllFetchOnLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(error, isLoading)

  if (isLoading) {
    return <FullPageSpinner />;
  }

  if (error && !isLoading) {
    return (
      <Flex
        height="100vh"
        textAlign="center"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box width="100px" marginBottom="0.5rem">
          <Image src="" />
        </Box>
        <Heading>Oh dear!</Heading>
        <Text marginBottom="0.5rem">
          An error occurred <br />
          while trying to load this page.
        </Text>
        <Button variantColor="pink" onClick={handleAllFetchOnLoad}>
          Try again
        </Button>
      </Flex>
    );
  }
  return <>{children}</>;
}


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    // profile: state.user.response,
    // profileError: state.user.error
  };
};
export default connect(mapStateToProps, { fetchUserProfile, fetchValues })(
  PreloadedStateProvider
);
