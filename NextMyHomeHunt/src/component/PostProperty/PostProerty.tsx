import { Image, Grid, GridCol } from "@mantine/core";
import { PostPropertyForm } from "../PostPropertyForm";

export const PostProperty = () => {
  return (
    <Grid className="bg-[#e6e5e5]">
      <GridCol span={{ base: 6 }}>
        <Image
          visibleFrom="md"
          h={550}
          w={700}
          className="object-contain"
          src="/assets/post-property-background.png"
        />
      </GridCol>
      <GridCol span={{ base: 6 }}>
        <PostPropertyForm />
      </GridCol>
    </Grid>
  );
};
