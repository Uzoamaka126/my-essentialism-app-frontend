import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Box, Text, Stack, Flex, Icon } from "@chakra-ui/core";

const StyledSidebar = styled(Box)`
  a {
    width: 100%;
    color: #4a5568;
    display: block;

    &.active {
      color: #4299e1;
      font-weight: 600 !important;
    }

    &.hover {
      text-decoration: none;
    }
  }
`;

export function SideBar({ menuList, user }) {

  const [selected, setSelected] = React.useState({
    isToggled: true,
    title: "Overview",
  });
  const { title, isToggled } = selected;

  const handleClick = (t) => {
    if (t === title) {
      return setSelected({ ...selected, isToggled: !isToggled });
    }

    const item = menuList.find(({ title: ti }) => ti === t);
    if (item) {
      if (item.subItems) {
        return setSelected({
          title: t,
          isToggled: true,
        });
      }
    }

    return setSelected({ ...selected, isToggled: true, title: t });
  };

  return (
    <StyledSidebar
      zIndex={10}
      height="100vh"
      position="fixed"
      backgroundColor="#e3e8ee"
      width="215px"
    >
      <Box marginLeft="2.125rem" marginY="1rem">
        <Text color="#718096" fontSize="1.125rem" fontWeight="medium">
          {user?.username}
        </Text>
      </Box>
      <Stack
        mx="1rem"
        as="aside"
        pt="1.675rem"
        color="#212242"
        spacing="1.4375rem"
      >
        {menuList.map(({ title: t, subItems, url }) => {
          if (subItems) {
            return (
              <Box key={t}>
                <Flex
                  cursor="pointer"
                  alignItems="center"
                  onClick={() => handleClick(t)}
                >
                  {/* <Image src={src} size="4" /> */}
                  <Text
                    ml="1.125rem"
                    fontSize="0.875rem"
                    fontWeight="400"
                    textTransform="capitalize"
                    minWidth="6.5625rem"
                    color={title === t ? "#6554c0" : "#1a1f36"}
                    _hover={{ textDecoration: "none" }}
                  >
                    {t}
                  </Text>
                  {subItems.length > 0 && (
                    <Icon
                      aria-label="Edit Profile"
                      name={
                        isToggled && title === t ? "chevron-up" : "chevron-down"
                      }
                      ml="1.3125rem"
                      color={isToggled && title === t ? "#6554c0" : "#1a1f36"}
                      size="4"
                    />
                  )}
                </Flex>

                {subItems.length > 0 && isToggled && title === t && (
                  <Stack mt="1.125rem" spacing=".9375rem" color="#212242">
                    {subItems.map((item) => (
                      <Box fontSize="sm" ml="2.125rem" key={item.title}>
                        <NavLink to={item.url} activeClassName="active">
                          {item.title}
                        </NavLink>
                      </Box>
                    ))}
                  </Stack>
                )}
              </Box>
            );
          } else {
            return (
              <Box key={t}>
                <NavLink to={url} activeClassName="active">
                  <Flex
                    cursor="pointer"
                    alignItems="center"
                    onClick={() => handleClick(t)}
                  >
                    {/* <Image src={src} size="4" /> */}
                    <Text
                      ml="1.125rem"
                      fontSize="0.875rem"
                      minWidth="6.5625rem"
                      textTransform="capitaize"
                    >
                      {t}
                    </Text>
                  </Flex>
                </NavLink>
              </Box>
            );
          }
        })}
      </Stack>
    </StyledSidebar>
  );
}
