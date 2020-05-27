import React from "react";
import { Flex } from "@chakra-ui/core";
import { Content, SideBar } from "./components";

const menuList = [
  { title: "Onboarding", url: "/dashboard/home" },
  { title: "Values", url: "/dashboard/values" },
  {
    title: "My Values",
    subItems: [
      { title: "Current", url: "/dashboard/values/current" },
      { title: "Top Three", url: "/dashboard/values/me/top-three" },
    ],
    url: "/dashboard/values/me",
  },
  {
    title: "Projects",
    subItems: [
      { title: "Current", url: "/dashboard/projects" },
      // { title: "All", url: "/dashboard/projects/all" },
    ],
    url: "/dashboard/projects",
  },
  {
    title: "Settings",
    subItems: [
      { title: "Profile", url: "/dashboard/settings/profile" },
      { title: "Change Password", url: "/dashboard/settings/password" },
    ],
    url: "/dashboard/settings",
  },
];

export function Dashboard({ children, user, history, profile,logout }) {

  function handleLogout() {
    logout();
    history.push("/");
  }

  return (
    <>
      <Flex>
        <SideBar menuList={menuList} user={user} />
        <Content
          width="100%"
          height="calc(100vh -60px)"
          overflow="auto"
          position="fixed"
          paddingLeft="215px"
          backgroundColor="#fff"
          logout={handleLogout}
          user={user}
          profile={profile}
        >
          {children}
        </Content>
      </Flex>
    </>
  );
}