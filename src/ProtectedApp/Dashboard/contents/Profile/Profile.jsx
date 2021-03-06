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


function Profile(props) {
    const { profile , loading } = props;
    const { id } = getState().data;
  
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
                    <UserProfile profile={profile} loading={loading} />
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
        loading: store.user.loading
    };
};

export default connect(mapStateToProps, { fetchUserProfile })(Profile);
