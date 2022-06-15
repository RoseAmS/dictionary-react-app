import React from "react";

import "./Phonetic.css";

export default function Phonetics(props) {
  if (props.phonetic.audio.length > 0) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
