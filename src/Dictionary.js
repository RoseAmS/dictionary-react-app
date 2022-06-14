import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response);
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary mt-4 mb-4">
        <h1>DICTIONARY 📚</h1>
        <h2>What word do you want to look up?</h2>

        <section>
          <form onSubmit={handleSubmit}>
            {/* <form className="d-flex justify-content-center" onSubmit={search}> */}
            <input
              type="search"
              placeholder="Search for a word"
              defaultValue={props.defaultKeyword}
              className="form-control shadow-sm border-1"
              onChange={handleKeywordChange}
            />
            {/* <input type="submit" value="Search" className="btn" /> */}
          </form>

          <div className="hint">i.e. coding, rose, study</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
