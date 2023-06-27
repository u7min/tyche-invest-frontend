import React from 'react';
import { ILayout } from '../common.interface';

export const PanelFooter: React.FC<ILayout> = ({ children }) => {
  return <div className="flex flex-row justify-between p-2">{children}</div>;
};
