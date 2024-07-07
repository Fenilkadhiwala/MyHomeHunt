"use client";
import { useState } from "react";
import cx from "clsx";
import { Menu, rem, useMantineTheme } from "@mantine/core";
import { HeaderNavigations } from "@/component/HeaderNavigations";
import { DrawerNavigations } from "@/component/DrawerNavigations";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconChevronDown, IconUserCircle, IconUser } from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
} from "@/component/core";

export const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const theme = useMantineTheme();
  const isXsSize = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Box pb={120}>
      <div className={classes.header}>
        <Group className={classes.group} h="100%">
          <h1 className="text-[1.1875rem] font-semibold xs:text-xl xs:font-semibold sm:text-2xl sm:font-bold">
            MyHomeHunt
          </h1>
          <Group className="flex justify-center" h="100%">
            <Group className="flex justify-center" visibleFrom="md">
              <HeaderNavigations />
            </Group>
          </Group>
          <Group>
            <Button
              className="uppercase"
              color="#F21616"
              size={`${isXsSize ? "xs" : "sm"}`}
            >
              Post Property
            </Button>
            <Menu
              width={200}
              position="bottom-end"
              transitionProps={{ transition: "fade-down" }}
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              withinPortal
            >
              <Menu.Target>
                <div
                  className={`${cx(classes.user, {
                    [classes.userActive]: userMenuOpened,
                  })} cursor-pointer`}
                >
                  <div className="flex items-center">
                    <IconUserCircle
                      style={{ width: rem(25), height: rem(25) }}
                      stroke={1.5}
                    />
                    <IconChevronDown
                      style={{ width: rem(15), height: rem(15) }}
                      stroke={1.5}
                    />
                  </div>
                </div>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  leftSection={
                    <IconUser
                      style={{ width: rem(16), height: rem(16) }}
                      stroke={1.5}
                    />
                  }
                  className="text-blue-600 font-semibold"
                >
                  LOGIN / REGISTER
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="md"
              size={`${isXsSize ? "sm" : "md"}`}
            />
          </Group>
        </Group>
      </div>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        position="right"
        size="75%"
        padding="md"
        overlayProps={{ backgroundOpacity: 0.5, blur: 2 }}
        title={
          <>
            <h1 className="text-xl font-bold">MyHomeHunt</h1>
          </>
        }
        hiddenFrom="md"
        zIndex={1000000}
      >
        <ScrollArea
          type="never"
          scrollbars="y"
          h={`calc(100vh - ${rem(80)})`}
          mx="-md"
        >
          <Divider my="sm" />
          <DrawerNavigations />
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
