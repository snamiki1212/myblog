import { SITE_NAME_WITH_EMOJI, SEARCH_ENGINE_ID } from "../constants/site";

const AVATAR_IMG = "/images/avatar.jpg";

export const Header = () => {
  return (
    <div className="bg-base-300">
      <div className="navbar max-w-screen-lg m-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href={"/"}>
            {SITE_NAME_WITH_EMOJI}
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control hidden sm:flex">
            <SearchBox />
          </div>
          <a href={"/about"}>
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar normal-case"
            >
              <div className="w-10 rounded-full">
                <img src={AVATAR_IMG} />
              </div>
            </label>
          </a>
        </div>
      </div>
    </div>
  );
};

const SearchBox = () => {
  return (
    <form id="cse-search-box" action="https://google.com/cse" target="_blank">
      <input type="hidden" name="cx" value={SEARCH_ENGINE_ID} />
      <input type="hidden" name="ie" value="UTF-8" />
      <input
        type="text"
        name="q"
        placeholder="Search Text"
        className="input input-bordered"
      />
    </form>
  );
};
