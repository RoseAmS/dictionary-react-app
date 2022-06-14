import React from "react";

export default function Antonyms(props) {
  if (props.antonyms.length > 0) {
    return (
      <ul className="Antonyms">
        <strong>Antonyms: </strong>
        {props.antonyms.map(function (antonym, index) {
          return <li key={index}>{antonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
