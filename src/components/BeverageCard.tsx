import { Result } from "@yext/answers-headless-react";
import { beverageDataForRender } from "../types/Beverage";
import { GrayWineBottleIcon } from "../icons/GreyWineBottleIcon";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { StarRating } from "./StarRating";

interface BeverageCardProps {
  result?: Result;
}

export const BeverageCard = ({ result }: BeverageCardProps): JSX.Element => {
  const beverage = beverageDataForRender(result);

  return (
    <div className="flex flex-col border-4 border-transparent px-4 py-4 hover:border-toast-orange">
      <div className="flex flex-col items-center">
        <ImagePlaceholder
          imgCssClasses="w-24 mb-2"
          imgUrl={beverage.primaryPhoto?.image.url}
          placeholder={<GrayWineBottleIcon />}
        />
      </div>
      <div className="flex flex-col ">
        <div className="h-16">
          <p className="line-clamp-2">{beverage.name}</p>
        </div>
        <div className="pb-8">
          {beverage.c_price && (
            <div className="text-base">{`$${beverage.c_price}`}</div>
          )}
          {beverage.c_rating && <StarRating rating={beverage.c_rating} />}
        </div>
      </div>
    </div>
  );
};
