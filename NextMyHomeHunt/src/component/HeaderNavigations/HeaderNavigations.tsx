import { NavigationItems, TopAreas } from "@/utility/constant";
import { NavigationsHoverCard } from "../NavigationsHoverCard";
import { Text, UnstyledButton } from "../core";

export const HeaderNavigations = () => {
  const topAreaItems = TopAreas?.map((item) => (
    <UnstyledButton className="flex flex-col" key={item.title}>
      <Text
        className="mt-3 hover:text-[#f21616]"
        text={`Property in ${item.title}`}
        size="sm"
        fw={500}
      />
    </UnstyledButton>
  ));

  return (
    <>
      {NavigationItems?.map((item, index) => {
        return (
          <NavigationsHoverCard
            key={index}
            topAreaItems={topAreaItems}
            item={item}
          />
        );
      })}
    </>
  );
};
