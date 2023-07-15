import tw from "twin.macro";
import styled from "styled-components";

interface StyledInputProps {
  error?: boolean;
}

export const StyledInput = styled.input.attrs((props) => ({
  className: props.className,
}))<StyledInputProps>`
  ${tw`
      relative
      w-full
      h-14
      flex
      flex-row
      items-center
      justify-center
      py-3
      outline-0
      rounded-lg
      bg-lightMode-elements dark:bg-darkMode-elements

      text-lg
      text-lightMode-input dark:text-darkMode-input
  `}
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
  ::focus {
    border: 2px solid #2b3238 !important;
  }
  ${({ error }) => error && tw`border-red-600`}
`;

export const StyledLabel = styled.label.attrs({
  className: "StyledLabel",
})`
  ${tw`text-2xl font-medium `}
`;

export const StyledHelperText = styled.p.attrs({
  className: "StyledHelperText",
})`
  ${tw`
    text-base
    text-red-600
    `}
  word-break: break-word;
`;
