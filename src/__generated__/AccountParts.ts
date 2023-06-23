/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AccountParts
// ====================================================

export interface AccountParts_creator {
  __typename: "User";
  name: string;
}

export interface AccountParts {
  __typename: "Account";
  id: number;
  createdAt: any;
  updatedAt: any;
  name: string;
  creator: AccountParts_creator;
  creatorId: number;
  accountNumber: string;
  allocRate: number | null;
}
