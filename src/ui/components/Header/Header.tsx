"use client";
import { FC, useEffect } from "react";
import { useTheme } from "next-themes";
import { StyledDefaultHeader } from "./Header.styles";
import { Button } from "../Button";
import { LightMode, DarkMode } from "@mui/icons-material";

export const Header: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <StyledDefaultHeader>
      <p>Where in the world?</p>
      {theme === "dark" ? (
        <Button onClick={() => setTheme("light")}>
          <LightMode /> Light Mode
        </Button>
      ) : (
        <Button onClick={() => setTheme("dark")}>
          <DarkMode /> Dark Mode
        </Button>
      )}
    </StyledDefaultHeader>
  );
};
