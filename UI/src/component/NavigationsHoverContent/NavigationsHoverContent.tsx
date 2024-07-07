import React, { ReactNode } from "react";
import { Group, Text, UnstyledButton, Grid, GridCol } from "../core";
import classes from "../../section/Header/HeaderMegaMenu.module.css";
import { ListProps, NavigationItemsProps } from "@/interface/HeaderInterfaces";

interface NavigationsHoverContentProps {
  item: NavigationItemsProps;
  topAreaItems?: ReactNode;
  isDrawer?: boolean;
}

export const NavigationsHoverContent: React.FC<
  NavigationsHoverContentProps
> = ({ item, topAreaItems, isDrawer = false }) => {
  const list = item?.list?.map((item: ListProps) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <div>
          <Text text={item.title} size="sm" fw={500} />
        </div>
      </Group>
    </UnstyledButton>
  ));

  if (item?.list && !item?.showTopAreas) {
    return (
      <Grid>
        <GridCol
          span={{ base: 12, md: isDrawer ? 4 : 12 }}
          className={`${isDrawer ? "px-6" : ""}`}
        >
          {list}
        </GridCol>
      </Grid>
    );
  }

  return (
    <Grid>
      {item?.list && (
        <GridCol
          className={`${isDrawer ? "px-6" : "border-r"}`}
          span={{ base: 12, md: 4 }}
        >
          {list}
        </GridCol>
      )}
      {item?.showTopAreas && !isDrawer && (
        <GridCol className="py-4 px-6" span={{ base: 12, md: 6 }}>
          <Text className="capitalize text-gray-500" text="Top areas" />
          <div>{topAreaItems}</div>
        </GridCol>
      )}
    </Grid>
  );
};
