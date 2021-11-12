import React from "react";
import { Input, Icon } from "semantic-ui-react";
// import {AiOutlineSearch} from 'react-icons/ai'

const SearchBar = () => {
  return (
    <section className="input">
        <Input icon placeholder="Search your favourite recipes..." className="input-search-bar">
          <input />
          <Icon name="search" className="search-icon"/>
        </Input>
    </section>
  );
};

export default SearchBar;
