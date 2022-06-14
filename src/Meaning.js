import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  return (
    <div>
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong> {definition.definition}
                <br />
                <em>{definition.example}</em>
              </p>
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
