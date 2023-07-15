"use client";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledDefaultHeader = styled.header.attrs((props) => ({
  className: props.className,
}))`
  ${tw`
  px-4 py-5
  lg:(py-7
  px-16)
  flex 
  items-center 
  justify-between 
  bg-lightMode-elements dark:bg-darkMode-elements 
  `}
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);

  > p {
    ${tw`min-w-fit text-lg lg:(text-2xl) font-extrabold  text-lightMode-text dark:text-darkMode-text`}
  }
`;
