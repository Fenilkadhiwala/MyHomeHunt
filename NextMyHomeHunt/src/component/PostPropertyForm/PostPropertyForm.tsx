"use client";
import React, { useState } from "react";
import {
  Chip,
  Group,
  TextInput,
  Container,
  Text,
  ChipGroup,
  RadioGroup,
  Radio,
  Select,
  Button,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import {
  residentialPropertyList,
  commercialPropertyList,
} from "@/utility/constant";

export const PostPropertyForm = () => {
  const [selectedPropertyTypeList, setSelectedPropertyTypeList] = useState(
    residentialPropertyList
  );
  const [postTypeValue, setPostTypeValue] = useState<string | null>("sell");
  const [roleValue, setRoleValue] = useState<string | null>("owner");
  const [propertyTypePlaceholder, setPropertyTypePlaceholder] =
    useState("residential");
  const handleChipClickForPostType = (
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.value === postTypeValue) {
      setPostTypeValue(null);
    }
  };

  const handleChipClickForRole = (
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.value === roleValue) {
      setRoleValue(null);
    }
  };

  const handleChangingPropertyType = (value: any) => {
    switch (value) {
      case "residential":
        setPropertyTypePlaceholder("residential");
        setSelectedPropertyTypeList(residentialPropertyList);
        break;

      case "commercial":
        setPropertyTypePlaceholder("commercial");
        setSelectedPropertyTypeList(commercialPropertyList);
        break;

      default:
        break;
    }
  };
  return (
    <Container
      className="w-[65%] mt-14 p-7"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }}
    >
      <Text size="lg" fw={500}>
        Post your property at MyHomeHunt for free
      </Text>
      <div className="mt-4">
        <Text className="mb-2" size="sm">
          You're posting this property for
        </Text>
        <ChipGroup
          multiple={false}
          value={postTypeValue}
          onChange={setPostTypeValue}
        >
          <Group>
            <Chip
              variant="light"
              color="#F21616"
              value="sell"
              onClick={handleChipClickForPostType}
            >
              Selling
            </Chip>
            <Chip
              value="rentOrLease"
              variant="light"
              color="#F21616"
              onClick={handleChipClickForPostType}
            >
              Rent / Lease
            </Chip>
          </Group>
        </ChipGroup>
        <Text className="mb-2 mt-4" size="sm">
          You are
        </Text>
        <ChipGroup multiple={false} value={roleValue} onChange={setRoleValue}>
          <Group>
            <Chip
              variant="light"
              color="#F21616"
              value="owner"
              onClick={handleChipClickForRole}
            >
              Owner
            </Chip>
            <Chip
              value="broker"
              variant="light"
              color="#F21616"
              onClick={handleChipClickForRole}
            >
              Broker
            </Chip>
          </Group>
        </ChipGroup>
        <RadioGroup
          onChange={handleChangingPropertyType}
          className="mt-4"
          name="favoriteFramework"
          label="Select type of property"
        >
          <Group mt="xs">
            <Radio
              color="#F21616"
              checked
              value="residential"
              label="Residential Unit"
              variant="outline"
            />
            <Radio
              color="#F21616"
              variant="outline"
              value="commercial"
              label="Commercial"
            />
            <Radio
              color="#F21616"
              variant="outline"
              value="openPlots"
              label="Open Plots"
            />
          </Group>
        </RadioGroup>
        <Select
          clearable
          className="mt-3"
          placeholder={`Select ${propertyTypePlaceholder} property type`}
          data={selectedPropertyTypeList}
          searchable
          nothingFoundMessage="Nothing found..."
        />
        <TextInput
          label="Contact number for clients to get in touch."
          placeholder="Contact number"
          className="mt-5"
        />
        <Button
          rightSection={<IconArrowRight />}
          fullWidth
          className="mt-5"
          size="md"
          color="#f21616"
        >
          Get Started
        </Button>
      </div>
    </Container>
  );
};
