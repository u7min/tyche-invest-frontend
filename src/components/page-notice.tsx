import React from 'react';
import { IPageNotice } from '../common.interface';

export const PageNotice: React.FC<IPageNotice> = ({ message, level }) => {
  return message ? (
    <div
      className={`py-0.5 ${
        level === 'error' ? 'text-red-400' : 'text-blue-500'
      }`}
    >
      {message}
    </div>
  ) : (
    <></>
  );
};
