import { useContext, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import classNames from "classnames";
import {
  OverlayActionTypes,
  OverlayContext,
} from "../providers/OverlayProvider";
import { SearchBar } from "@yext/answers-react-components";
import { MagnifyingGlassIcon } from "../icons/MagnifyingGlassIcon";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useAnswersActions } from "@yext/answers-headless-react";

export const Header = (): JSX.Element => {
  const { overlayState, dispatch } = useContext(OverlayContext);

  const { width } = useWindowDimensions();

  const answersActions = useAnswersActions();

  useEffect(() => {
    if (width > 768) {
      searchBarChangeHandler(false);
    }
  }, [width]);

  const searchBarChangeHandler = (open: boolean) => {
    dispatch({
      type: OverlayActionTypes.ToggleSearchOverlay,
      payload: { open },
    });
  };

  const handleSearch = () => {
    answersActions.executeVerticalQuery();
    searchBarChangeHandler(false);
  };

  const renderMenuOrCloseIcon = () => (
    <div className="ml-6 text-toast-dark-orange md:hidden">
      {!overlayState.searchOverlay.open ? (
        <AiOutlineMenu size={30} />
      ) : (
        <button
          className=" text-text-toast-red flex items-center"
          onClick={() => searchBarChangeHandler(false)}
        >
          <AiOutlineClose size={30} />
        </button>
      )}
    </div>
  );

  const renderHeaderLinksAndSearchBar = () => (
    <div className="flex items-center justify-center md:justify-start md:pl-4">
      <div className="text-3xl font-semibold text-toast-red">TOAST</div>
      <div className="hidden pl-4 text-sm text-black md:flex">
        <div className="px-4">WINE</div>
        <div className="px-4">BEER</div>
        <div className="px-4">SPIRITS</div>
        <div className="px-4">OTHER</div>
      </div>
      <div
        className={classNames("w-full px-4 md:block md:w-80 md:px-0", {
          "fixed left-0 top-16 h-full overflow-y-scroll bg-white":
            overlayState.searchOverlay.open,
          hidden: !overlayState.searchOverlay.open,
        })}
      >
        <SearchBar
          customCssClasses={{
            container: `md:h-12 mt-6 sm:my-6`,
            inputContainer:
              "inline-flex items-center justify-between w-full rounded-3xl border border-black",
            logoContainer: "w-7 mx-2.5 my-2 ",
          }}
          placeholder="Search beer, wine, liqour "
          onSearch={handleSearch}
        />
      </div>
    </div>
  );

  const renderSearchIcon = () => (
    <div className="flex items-center text-toast-dark-orange">
      <button
        className="mr-4 h-8 w-8 md:hidden"
        onClick={() => searchBarChangeHandler(true)}
      >
        <MagnifyingGlassIcon />
      </button>
    </div>
  );

  return (
    <>
      <header className="absolute top-0 z-20 flex h-16 w-full items-center justify-between bg-toast-orange">
        {renderMenuOrCloseIcon()}
        {renderHeaderLinksAndSearchBar()}
        {renderSearchIcon()}
      </header>
    </>
  );
};
