import React from 'react';
import { ILayout } from '../common.interface';

export const Panel: React.FC<ILayout> = ({ children }) => {
  return <div className="bg-gray-200 border border-black">{children}</div>;
};
