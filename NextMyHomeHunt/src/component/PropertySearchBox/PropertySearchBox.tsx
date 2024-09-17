import React, { useState } from "react";
import cx from "clsx";
import { Tabs } from "@mantine/core";

export const PropertySearchBox = () => {
  const [activeTab, setActiveTab] = useState<string | null>("Buy");
  return (
    <>
      <Tabs color="red" value={activeTab} onChange={setActiveTab}>
        <Tabs.List justify="center">
          <Tabs.Tab
            value="login"
            className={cx("text-[1rem]", {
              "text-[#f21616] font-bold": activeTab === "buy",
            })}
          >
            Buy
          </Tabs.Tab>
          <Tabs.Tab
            value="signup"
            className={cx("text-[1rem]", {
              "text-[#f21616] font-bold": activeTab === "rent",
            })}
          >
            Rentttt
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel color="red" value="buy">
          Buy
        </Tabs.Panel>

        <Tabs.Panel value="rent">rent</Tabs.Panel>
      </Tabs>
    </>
  );
};
