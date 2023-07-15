import styled from "styled-components";
import tw from "twin.macro";

export const StyledHome = styled.section.attrs((props) => ({
  className: props.className,
}))`
  ${tw`
  px-4 py-6
  lg:(px-16 py-20)
    `}
`;

export const StyledFilterContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  ${tw`
    flex 
    flex-wrap
    items-center 
    justify-between 
    gap-x-4
    gap-y-11
    
    `}
`;

export const StyledCountriesContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  ${tw`
    py-14
    mx-auto
    flex 
    flex-wrap
    items-center 
    justify-center 
    gap-16
    `}
`;
