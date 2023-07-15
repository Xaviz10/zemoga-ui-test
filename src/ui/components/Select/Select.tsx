"use client";
import { FC, SelectHTMLAttributes } from "react";
import { SelectProps as SelectPropsMUI } from "@mui/material";
import {
  StyledSelect,
  StyledMenuItem,
  StyledHelperText,
} from "./Select.styles";
import { OptionsSelectEntity } from "../../../domain/entities";
import { useTheme } from "next-themes";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export interface SelectProps extends SelectPropsMUI {
  id?: string;
  name?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  iconSrc?: string;
  placeholder?: string;
  options: Array<OptionsSelectEntity>;
}

export const Select: FC<SelectProps> = (props) => {
  const {
    className,
    id,
    name,
    label,
    error,
    helperText,
    placeholder,
    options,
    required,
    value,
    inputRef,
    defaultValue,
    ...rest
  } = props;
  const { theme } = useTheme();

  return (
    <div
      className={`relative flex flex-col w-full gap-y-1 text-left ${className}`}
    >
      <StyledSelect
        id={id}
        name={name}
        inputRef={inputRef}
        selectcolor={theme}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        {...rest}
        MenuProps={{
          sx: {
            ul: {
              background: `${theme === "light" ? `#FFFFFF` : `#2b3238`}`,
              borderRadius: "8px",
            },
            "& .MuiPaper-root": {
              background: `${theme === "light" ? `#FFFFFF` : `#2b3238`}`,
              borderRadius: "10px",
            },
          },
        }}
        IconComponent={(props) => <KeyboardArrowDownIcon />}
      >
        {options.map((currentOption, key) => {
          const isPlaceHolder = currentOption.id === "none";
          return (
            <StyledMenuItem
              key={key}
              selectcolor={theme}
              value={currentOption.id}
              disabled={isPlaceHolder}
              className={isPlaceHolder ? "text-gray-500" : "text-black"}
            >
              {currentOption.name}
            </StyledMenuItem>
          );
        })}
      </StyledSelect>

      {!!error && !!helperText && (
        <StyledHelperText>{helperText as string}</StyledHelperText>
      )}
    </div>
  );
};
