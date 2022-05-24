import { ShakerIcon } from "../icons/ShakerIcon";

export const ShakerLoader = (): JSX.Element => (
  <div className="flex h-96 w-full items-center justify-center">
    <div className="rotate-20 animate-shaker">
      <ShakerIcon />
    </div>
  </div>
);
