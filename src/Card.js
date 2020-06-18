import React from "react";

const Card = props => {
  const { name, email, id } = props;
  return (
    <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200*200`} />
      <div>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;