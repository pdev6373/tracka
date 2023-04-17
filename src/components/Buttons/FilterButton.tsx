import React from "react";
import { Button } from "native-base";

type FilterButtonProp = {
  filter: string;
  filterType: string;
};

const FilterButton = (props: FilterButtonProp) => {
  const { filter, filterType } = props;

  return (
    <Button
      size={"sm"}
      paddingTop={1}
      paddingBottom={1}
      marginRight={3}
      marginBottom={3}
      borderRadius={8}
      variant="outline"
      borderColor={
        filterType === "category"
          ? "primary.500"
          : filterType === "lga"
          ? "secondary.800"
          : "error.800"
      }
      fontFamily="roboto"
      _text={{
        color:
          filterType === "category"
            ? "primary.500"
            : filterType === "lga"
            ? "secondary.800"
            : "error.800",
        fontSize: 12,
      }}
    >
      {filter}
    </Button>
  );
};

export default FilterButton;
