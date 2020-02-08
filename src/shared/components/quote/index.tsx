import React from "react";

interface Props {
  message: string;
  author: string;
}

const Quote = (props: Props) => {
  return (
    <div>
      {props.message}
      {props.author}
    </div>
  );
};

export default Quote;
