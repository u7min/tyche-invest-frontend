import React from 'react';
import { ILayout } from '../common.interface';

export const PageContainer: React.FC<ILayout> = ({ children }) => {
  return <div className="h-full">{children}</div>;
};
