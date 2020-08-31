import React, { useEffect } from 'react';
import {
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs
  } from "@chakra-ui/core";
import { connect } from 'react-redux'
import { UserProfile } from './UserProfile';
import { ChangePassword } from './ChangePassword';
import { fetchUserProfile } from "../../../../redux-store/actions/user.actions";
import { getState } from '../../../../Utilities/localStorage';


  export function Profile(props) {
    console.log(props);
    const { profile } = props;
    const { id } = getState().data;
    // const [userData, setUserData] = useState({})
  
    useEffect(() => {
      fetchUserProfile(id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

      return (
        <Tabs>
            <TabList>
                <Tab 
                    _active={{
                        background: 'none',
                        border: 'none'
                    }}
                    _focus={{ 
                        background: 'none',
                        border: 'none'
                    }}
                >
                    Profile</Tab>
                <Tab 
                    _active={{
                        background: 'none',
                        border: 'none'
                    }}
                    _focus={{ 
                        background: 'none',
                        border: 'none'
                    }}
                >
                    Change Password</Tab>
            </TabList>
        
            <TabPanels>
                <TabPanel>
                    <UserProfile profile={profile} />
                </TabPanel>
                <TabPanel>
                    <ChangePassword />
                </TabPanel>
            </TabPanels>
      </Tabs>
      )
  }

  const mapStateToProps = (store) => {
    return {
        profile: store.user.profile,
    };
  };
  
  export default connect(mapStateToProps, { fetchUserProfile })(Profile);
