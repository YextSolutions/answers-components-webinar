import { Matcher } from "@yext/answers-headless-react";
import { Filters } from "@yext/answers-react-components";
import { v4 as uuid } from "uuid";

export const BeverageFilters = (): JSX.Element => {
  return (
    <Filters.Facets searchOnChange={true}>
      {(facets) => {
        const abvFacet = facets.find((facet) => facet.fieldId === "c_abv");

        return (
          <>
            {abvFacet && (
              <Filters.FilterGroup fieldId="c_abv">
                <div className="mb-8 ml-4">
                  <div className="mb-6 font-bold">ABV</div>
                  {abvFacet.options.map((o, _i) => (
                    <Filters.CheckboxOption
                      key={uuid()}
                      label={`${o.displayName} (${o.count})`}
                      value={o.value}
                      matcher={Matcher.Between}
                      customCssClasses={{
                        label:
                          "text-neutral md:text-sm text-base  font-normal cursor-pointer pl-2",
                        input:
                          "w-3.5 h-3.5 form-checkbox cursor-pointer border border-gray-300 rounded-sm text-toast-orange focus:ring-toast-orange",
                      }}
                      cssCompositionMethod="assign"
                    />
                  ))}
                </div>
              </Filters.FilterGroup>
            )}
          </>
        );
      }}
    </Filters.Facets>
  );
};
