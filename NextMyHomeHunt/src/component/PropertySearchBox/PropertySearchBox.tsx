import { useState } from "react";
import cx from "clsx";
import { Container, Tabs } from "@mantine/core";
import { PropertySearchBoxItems } from "@/utility/constant";
import { SearchBoxItemsContent } from "../SearchBoxItemsContent";

export const PropertySearchBox = () => {
  const [activeTab, setActiveTab] = useState<string | null>("buy");

  return (
    <Container
      className="rounded-xl bg-white w-[90%]"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <Tabs color="red" value={activeTab} onChange={setActiveTab}>
        <Tabs.List grow justify="center">
          {PropertySearchBoxItems?.map((item) => (
            <Tabs.Tab
              py={"lg"}
              key={item?.key}
              value={item?.key}
              className={cx("text-[1rem]", {
                "text-[#f21616] font-bold": activeTab === item?.key,
              })}
            >
              {item?.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <SearchBoxItemsContent />
      </Tabs>
    </Container>
  );
};
