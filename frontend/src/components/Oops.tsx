import React from "react";
import Typography from "@material-ui/core/Typography";

import empty from "../svg/empty.svg";

interface Props {
  message: string;
}

export const Oops: React.FC<Props> = ({ message }) => (
  <div>
    <img alt="search" src={empty} />
    <Typography align="center" variant="body1">
      Ой!
    </Typography>
    <Typography align="center" variant="body1">
      {message}
    </Typography>
  </div>
);
