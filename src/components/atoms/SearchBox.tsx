import React from 'react';
import './SearchBox.scss';

type Props = {searchEngineId: string};

export const SearchBox = ({searchEngineId}: Props) => {
  return (
    <form id="cse-search-box" action="https://google.com/cse" target="_blank">
      <span className="magnify-icon">🔍</span>
      <input type="hidden" name="cx" value={searchEngineId} />
      <input type="hidden" name="ie" value="UTF-8" />
      <input type="text" name="q" placeholder="Search Text" />
      {/* <input type="submit" name="sa" value="🔍" /> */}
    </form>
  );
};
