import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

import { IconFooter } from "./types";

export const IconSearch: IconFooter = ({ active }) => (
  <SvgIcon viewBox="0 0 50 50" fontSize="large">
    {active ? (
      <path d="M38.61,35.73a19.75,19.75,0,1,0-2.92,2.93l7.73,7.73a2.07,2.07,0,0,0,2.93,0h0a2.06,2.06,0,0,0,0-2.92ZM23.37,38.94a15.4,15.4,0,1,1,15.4-15.4A15.42,15.42,0,0,1,23.37,38.94Z" />
    ) : (
      <path
        fill="#4e4e50"
        d="M37.11,35.28a18.91,18.91,0,1,0-1.4,1.41L45,46l1.4-1.4Zm-14,4.33A16.82,16.82,0,1,1,39.91,22.8,16.83,16.83,0,0,1,23.1,39.61Z"
      />
    )}
  </SvgIcon>
);
