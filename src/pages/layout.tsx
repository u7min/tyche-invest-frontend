import React from "react";
import { useHistory } from "react-router-dom";
import { ILayout } from "../common.interface";
import { Helmet } from "react-helmet-async";

export const Layout: React.FC<ILayout> = ({ title, children }) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>My Invest | {title}</title>
      </Helmet>
      <div onClick={goBack} className="button">
        Back
      </div>
      <div className="h-14 w-full text-2xl flex flex-col justify-between">
        <div></div>
        <div>{title}</div>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
};
