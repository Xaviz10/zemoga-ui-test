"use client";
import { FC } from "react";
import {
  Pagination,
  PaginationProps as PaginationPropsMUI,
} from "@mui/material";

import { useTheme } from "next-themes";

export const PaginationCustom: FC<PaginationPropsMUI> = (props) => {
  const { className, count, page, onChange } = props;
  const { theme } = useTheme();

  return (
    <Pagination
      className={className}
      count={count}
      page={page}
      onChange={onChange}
      sx={{
        "& .MuiPaginationItem-root": {
          color: `${theme === "light" ? `#111314` : `#ffffff`}`,
        },
        "& .Mui-selected": {
          background: `${
            theme === "light" ? `#2b3238 !important` : `#ffffff !important`
          }`,
          color: `${theme === "light" ? `#ffffff` : `#2b3238`}`,
        },
        button: {
          color: `${theme === "light" ? `#111314` : `#ffffff`}`,
        },
      }}
    />
  );
};
