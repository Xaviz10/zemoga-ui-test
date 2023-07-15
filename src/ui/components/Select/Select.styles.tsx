"use client";
import tw from "twin.macro";
import styled from "styled-components";

import { styled as styledMUI } from "@mui/material/styles";
import {
  Select,
  SelectProps as SelectPropsMUI,
  MenuItem,
  MenuItemProps as MenuItemPropsMUI,
} from "@mui/material";

export interface SelectProps extends SelectPropsMUI {
  selectcolor?: string;
}

export interface MenuItemProps extends MenuItemPropsMUI {
  selectcolor?: string;
}

interface StyledLabelSelectProps {
  textLabelColor?: string;
}

export const StyledSelect = styledMUI(Select)<SelectProps>((props) => ({
  backgroundColor: `${props.selectcolor === "light" ? "#FFFFFF" : "#2b3238"}`,
  color: `${props.selectcolor === "light" ? "#111314" : "#ffffff"}`,
  fontFamily: "NunitoSans, sans-serif",
  padding: "0px ",
  borderRadius: "8px",
  borderWidth: "0px",
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",

  "&.Mui-focused  .MuiOutlinedInput-notchedOutline": {
    border: "0px solid #2b3238 !important",
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "0px solid #2b3238 !important",
  },
}));

export const StyledMenuItem = styledMUI(MenuItem)<MenuItemProps>((props) => {
  let menuItemStyles = {
    backgroundColor: "transparent",
    color: `${props.selectcolor === "light" ? "#2b3238" : "#ffffff"}`,
    borderRadius: "8px",
    padding: "8px 13px",
    fontFamily: "NunitoSans, sans-serif",
  };

  return menuItemStyles;
});

// export const StyledSelect = styled.select.attrs({
//   className: "StyledSelect",
// })`
//   ${tw`
//   relative
//   w-full
//   flex
//   flex-row
//   items-center
//   justify-center
//   p-3

//   rounded-lg
//   bg-lightMode-elements dark:bg-darkMode-elements

//   text-lg
//   text-lightMode-input dark:text-darkMode-input
//   `}
// `;
// export const StyledMenuItem = styled.option.attrs({
//   className: "StyledMenuItem",
// })`
//   ${tw``}
// `;
export const StyledHelperText = styled.p.attrs({
  className: "StyledHelperText",
})`
  ${tw`
    text-base
    leading-6
    `}
  word-break: break-word;
`;
