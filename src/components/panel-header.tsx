import React from 'react';
import { ILayout } from '../common.interface';

export const PanelHeader: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-row justify-between bg-gray-300 p-2">
      {children}
    </div>
  );
};
