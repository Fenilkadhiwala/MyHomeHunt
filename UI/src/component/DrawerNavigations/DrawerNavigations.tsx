import { Box, Button, Center, Collapse, UnstyledButton } from "../core";
import classes from "../../section/Header/HeaderMegaMenu.module.css";
import { NavigationItems } from "@/utility/constant";
import { NavigationsHoverContent } from "../NavigationsHoverContent";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { rem } from "@mantine/core";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

export const DrawerNavigations = () => {
  const showUserInDrawer = useMediaQuery(`(max-width: 435px`);
  const [linksOpened, setLinksOpened] = useState(
    new Array(NavigationItems.length).fill(false)
  );

  const [iconState, setIconState] = useState(
    new Array(NavigationItems.length).fill(false)
  );

  const toggleLink = (index: number) => {
    setLinksOpened((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
    setIconState((prev) => prev.map((icon, i) => (i === index ? !icon : icon)));
  };
  return (
    <>
      {NavigationItems.map((item, index) => (
        <div key={index}>
          <UnstyledButton
            className={classes.link}
            onClick={() => toggleLink(index)}
          >
            <Center inline>
              <Box component="span" mr={5}>
                {item?.title}
              </Box>
              {iconState[index] ? (
                <IconChevronUp
                  style={{ width: rem(16), height: rem(16) }}
                  color="#F21616"
                />
              ) : (
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color="#F21616"
                />
              )}
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened[index]}>
            <NavigationsHoverContent item={item} isDrawer={true} />
          </Collapse>
        </div>
      ))}
      {showUserInDrawer ? (
        <div className="px-5 mt-3">
          <Button radius="md" fullWidth className="font-semibold">
            LOGIN / REGISTER
          </Button>
        </div>
      ) : null}
    </>
  );
};