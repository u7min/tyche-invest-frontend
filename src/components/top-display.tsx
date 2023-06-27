import React from 'react';
import { ILayout } from '../common.interface';

export const TopDisplay: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="h-16">
      <div className="w-full border border-black">{children}</div>
    </div>
  );
};
