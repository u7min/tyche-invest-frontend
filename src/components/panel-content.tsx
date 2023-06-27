import React from 'react';
import { ILayout } from '../common.interface';

export const PanelContent: React.FC<ILayout> = ({ children }) => {
  return <div className="overflow-x-scroll">{children}</div>;
};
