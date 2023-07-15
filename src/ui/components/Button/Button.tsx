import tw from "twin.macro";
import { styled } from "styled-components";

export const Button = styled.button.attrs((props) => ({
  className: props.className,
}))`
  ${tw`
  p-2
  flex 
  items-center
  justify-center
  gap-1 
  // w-fit
  text-xs
  bg-lightMode-elements dark:bg-darkMode-elements
  lg:(text-base p-2 gap-2)
  `}
`;
