import React from "react";

export interface IPageNotice {
  message?: string;
  level?: "error" | "info";
}

export interface ITestAccount {
  id: number;
  name: string;
  accountNumber: string;
  allocRate: number;
}

export interface ITestAsset {
  id: number;
  name: string;
  categoryName: string;
  subCategoryName: string;
  price: number;
  amount: number;
  accountName: string;
  currencyType: string;
  askAvg: number;
  perform: number;
  marketValue: number;
}

export interface ILayout {
  title?: string;
  children?: React.ReactNode;
}
