import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div>
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">
                <span>✔ </span>
                {definition.definition}
              </div>
              <div className="example">{definition.example}</div>
              <br />
            </div>
          );
        })}
        <Synonyms synonyms={props.meaning.synonyms} />
        <Antonyms antonyms={props.meaning.antonyms} />
        <br />
      </div>
    </div>
  );
}
