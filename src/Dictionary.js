import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary m-4 text-center">
      <h1 className="m-4">Dictionary</h1>
      <h2 className="m-4">What word do you want to look up?</h2>
      <div className="m-5">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word"
            onChange={handleKeywordChange}
          />
          <input type="submit" value="Search" className="btn " />
        </form>
        <small className="text-muted">i.e. coding, rose, study</small>
      </div>
    </div>
  );
}
