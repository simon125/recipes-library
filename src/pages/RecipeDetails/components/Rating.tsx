import React, { FC } from "react";

interface RatingProps {
  rating: number;
}

export const Rating: FC<RatingProps> = ({ rating }) => {
  let color = "green";

  if (rating < 4 && rating >= 3) {
    color = "yellow";
  } else if (rating < 3) {
    color = "red";
  }

  return <span style={{ color }}>{rating}</span>;
};
