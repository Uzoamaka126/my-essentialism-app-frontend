// // This is a wrapper that fetches all the global states like the user account info,
// // user values, projects if any, and the app's values
// import React, { useState, useEffect } from "react";
// import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/core";
// import { connect } from "react-redux";
// import { fetchUserProfile } from "../../redux-store/actions";
// import { FullPageSpinner } from "../index";
// import { getState } from "../../Utilities/localStorage";
// // import { Dashboard } from "../../ProtectedApp/Dashboard";

// function PreloadedStateProvider(props) {
//   const { fetchUserProfile, children, profile } = props;
//   const [isLoading, setIsLoading] = useState(false);
//   // const [error, setError] = useState(false);
//   // const [appUser, setAppUser] = useState(profile);

  

//   if (isLoading) {
//     return <FullPageSpinner />;
//   }

//   // if (!isLoading) {
//   //   return (
//   //     <Flex
//   //       height="100vh"
//   //       textAlign="center"
//   //       alignItems="center"
//   //       flexDirection="column"
//   //       justifyContent="center"
//   //     >
//   //       <Box width="100px" marginBottom="0.5rem">
//   //         <Image src="" />
//   //       </Box>
//   //       <Heading>Oh dear!</Heading>
//   //       <Text marginBottom="0.5rem">
//   //         An error occurred <br />
//   //         while trying to load this page.
//   //       </Text>
//   //       <Button variantColor="pink" onClick={handleAllFetchOnLoad}>
//   //         Try again
//   //       </Button>
//   //     </Flex>
//   //   );
//   // }
//   return <>{children}</>;
// }

// const mapStateToProps = (state) => {
//   return {
//     profile: state.user,
//   };
// };
// export default connect(mapStateToProps, { fetchUserProfile })(
//   PreloadedStateProvider
// );
