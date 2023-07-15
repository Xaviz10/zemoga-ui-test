import { forwardRef, InputHTMLAttributes } from "react";
import { StyledInput, StyledLabel, StyledHelperText } from "./TextField.styles";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  IconElement?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  placeholder?: string;
  onClickIcon?: () => void;
}

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      className,
      id,
      name,
      label,
      error,
      helperText,
      placeholder,
      required,
      IconElement,
      ...rest
    } = props;

    return (
      <div
        className={`relative flex flex-col w-full gap-y-1 items-start text-left ${className}`}
      >
        {!!label && (
          <StyledLabel htmlFor={id}>
            {label} {!!required && <span className="text-primary-100"> *</span>}
          </StyledLabel>
        )}
        <div className="w-full relative">
          {IconElement && (
            <div className="absolute z-10 bottom-1/2 left-5 translate-y-1/2">
              <IconElement />
            </div>
          )}
          <StyledInput
            className={`${IconElement ? "pl-16 pr-8" : "px-8"}`}
            error={error}
            id={id}
            name={name}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
        </div>
        {!!error && !!helperText && (
          <StyledHelperText>{helperText as string}</StyledHelperText>
        )}
      </div>
    );
  }
);
