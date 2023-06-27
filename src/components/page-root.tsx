import React from 'react';
import { ILayout } from '../common.interface';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const PageRoot: React.FC<ILayout> = ({ title, children }) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>My Invest | {title}</title>
      </Helmet>
      <div onClick={goBack} className="button">
        Back
      </div>
      <div className="h-14 w-full text-2xl flex flex-col justify-between px-3">
        <div></div>
        <div>{title}</div>
      </div>
      <div className="h-full flex flex-row">
        <div className="w-3"></div>
        <div className="w-full overflow-x-hidden">{children}</div>
        <div className="w-3"></div>
      </div>
    </div>
  );
};
