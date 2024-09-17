import {
  Box,
  Button,
  Center,
  Divider,
  Group,
  HoverCard,
  HoverCardDropdown,
  HoverCardTarget,
  Text,
} from "../core";
import Link from "next/link";
import { NavigationsHoverContent } from "../NavigationsHoverContent";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { rem } from "@mantine/core";
import classes from "../../section/Header/HeaderMegaMenu.module.css";
import { useState } from "react";

export const NavigationsHoverCard = ({ item, topAreaItems = [] }: any) => {
  const [isHoveredOnNavigation, setIsHoveredOnNavigation] =
    useState<boolean>(false);
  const changeArrowIcon = () => {
    setIsHoveredOnNavigation(true);
  };
  const revertArrowIcon = () => {
    setIsHoveredOnNavigation(false);
  };

  return (
    <HoverCard
      width={item?.hoverCardWidth}
      position="bottom"
      radius="md"
      shadow="md"
      withinPortal
    >
      <HoverCardTarget>
        <Link href="#" className={classes.link}>
          <Center inline>
            <Box
              onMouseOver={changeArrowIcon}
              onMouseLeave={revertArrowIcon}
              component="span"
              mr={5}
              className="text-[#d7d2ce] hover:text-white"
            >
              {item?.title}
            </Box>
            {isHoveredOnNavigation ? (
              <IconChevronUp
                onMouseOver={changeArrowIcon}
                onMouseLeave={revertArrowIcon}
                style={{ width: rem(16), height: rem(16) }}
                color="white"
              />
            ) : (
              <IconChevronDown
                onMouseOver={changeArrowIcon}
                onMouseLeave={revertArrowIcon}
                style={{ width: rem(16), height: rem(16) }}
                color="white"
              />
            )}
          </Center>
        </Link>
      </HoverCardTarget>

      <HoverCardDropdown style={{ overflow: "hidden" }}>
        {item?.hoverCardTitle && (
          <>
            <Group justify="space-between" px="md">
              <Text
                className="capitalize"
                text={item?.hoverCardTitle}
                fw={500}
              />
            </Group>
            <Divider my="sm" />
          </>
        )}
        <NavigationsHoverContent item={item} topAreaItems={topAreaItems} />
        {item?.showHoverCardFooter && (
          <div className={classes.dropdownFooter}>
            <Group justify="space-between">
              <div>
                <Text text="View All Homes" fw={500} fz="sm" />
                <Text
                  size="xs"
                  c="dimmed"
                  text="Explore our extensive list of available homes and find your perfect match."
                />
              </div>
              <Button color="#F21616">View All</Button>
            </Group>
          </div>
        )}
      </HoverCardDropdown>
    </HoverCard>
  );
};
