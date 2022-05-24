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
    <div className="flex flex-col border-4 border-transparent px-4 py-4 hover:border-toast-orange"></div>
  );
};
