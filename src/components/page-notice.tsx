import React from "react";
import { IPageNotice } from "../common.interface";

export const PageNotice: React.FC<IPageNotice> = ({ message, level }) => {
  return message ? (
    <div
      className={`text-white px-1 py-0.5 ${
        level === "error" ? "bg-red-400" : "bg-blue-500"
      }`}
    >
      {message}
    </div>
  ) : (
    <></>
  );
};
