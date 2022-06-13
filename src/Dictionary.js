import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary mt-4 mb-4">
      <h1 className="mt-4 mb-4">DICTIONARY</h1>
      <h2 className="mt-4 mb-4">What word do you want to look up?</h2>
      <div className="mt-5 mb-5">
        <form onSubmit={search}>
          <div className="d-flex justify-content-center">
            <input
              type="search"
              placeholder="Search for a word"
              className="form-control shadow-sm border-1"
              onChange={handleKeywordChange}
            />
            <input type="submit" value="Search" className="btn" />
          </div>
        </form>
        <small>i.e. coding, rose, study</small>
      </div>
    </div>
  );
}
