import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  // function handlePixabayResponse(response) {
  //   console.log(response.data);
  // }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    // API call for pictures via Pexels
    let pexelsApiKey =
      "563492ad6f917000010000017b2faa0fe0f34cd0ac6f8252930c7490";
    // adding headers for axios call using Authentication Headers
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    // adding {headers: headers} with the info for Auth call
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

    // API call for pictures via Pixabay
    // let pixabayUrl = `https://pixabay.com/api/?key=28058304-16e3953b62c2b3da916b5b204&q=${keyword}&image_type=photo`;
    // axios.get(pixabayUrl).then(handlePixabayResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
