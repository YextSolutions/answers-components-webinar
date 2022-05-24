import { Matcher } from "@yext/answers-headless-react";
import { Filters } from "@yext/answers-react-components";
import { v4 as uuid } from "uuid";

export const BeverageFilters = (): JSX.Element => {
  return (
    <Filters.Facets>
      {(facets) => {
        const abvFacet = facets.find((facet) => facet.fieldId === "c_abv");

        return (
          <>
            <Filters.FilterGroup fieldId="c_abv"></Filters.FilterGroup>
          </>
        );
      }}
    </Filters.Facets>
  );
};
