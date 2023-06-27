import React from 'react';
import { ILayout } from '../common.interface';

export const MainContent: React.FC<ILayout> = ({ children }) => {
  return <div className="flex flex-col space-y-3">{children}</div>;
};
