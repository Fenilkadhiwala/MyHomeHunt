import {
  PropertySearchBoxItems,
  SearchPropertiesPlaceholderTexts,
} from "@/utility/constant";
import { Button, em, Grid, GridCol, Input, Tabs, Tooltip } from "@mantine/core";
import { IconMapPin, IconSearch } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { Divider } from "../core";
import { useState, useEffect } from "react";

export const SearchBoxItemsContent = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const [placeholder, setPlaceholder] = useState(
    SearchPropertiesPlaceholderTexts[0]
  );

  useEffect(() => {
    let currentIndex = 0;
    setInterval(() => {
      currentIndex =
        (currentIndex + 1) % SearchPropertiesPlaceholderTexts.length;
      setPlaceholder(SearchPropertiesPlaceholderTexts[currentIndex]);
    }, 3000);
  }, []);

  return (
    <>
      {PropertySearchBoxItems?.map((item) => (
        <Tabs.Panel key={item?.key} color="red" value={item?.key}>
          <Grid px={"lg"} py={"lg"}>
            <GridCol
              className="flex items-center"
              span={{ base: 12, xs: 9, sm: 10, md: 10, lg: 10 }}
            >
              <Tooltip
                transitionProps={{ transition: "fade-up", duration: 300 }}
                withArrow
                arrowOffset={10}
                arrowSize={4}
                label="Find near me"
              >
                <span className="mr-1 h-8 w-8 rounded-full bg-red-200 flex items-center justify-center hover:cursor-pointer">
                  <IconMapPin color="red" />
                </span>
              </Tooltip>
              <Divider size={"sm"} mx={"sm"} orientation="vertical" />
              <Input
                className="w-[100%]"
                variant="unstyled"
                leftSection={<IconSearch size={18} />}
                placeholder={placeholder}
              />
            </GridCol>
            <GridCol
              className="flex justify-center"
              span={{ base: 12, xs: 3, sm: 2, md: 2, lg: 2 }}
            >
              <Button
                fullWidth={isMobile}
                size="sm"
                className="uppercase"
                color="#F21616"
              >
                Search
              </Button>
            </GridCol>
          </Grid>
        </Tabs.Panel>
      ))}
    </>
  );
};
