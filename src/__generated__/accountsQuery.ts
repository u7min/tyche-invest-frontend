/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AllAccountsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: accountsQuery
// ====================================================

export interface accountsQuery_findAllAccounts_accounts_creator {
  __typename: "User";
  name: string;
}

export interface accountsQuery_findAllAccounts_accounts {
  __typename: "Account";
  id: number;
  createdAt: any;
  updatedAt: any;
  name: string;
  creator: accountsQuery_findAllAccounts_accounts_creator;
  creatorId: number;
  accountNumber: string;
  allocRate: number | null;
}

export interface accountsQuery_findAllAccounts {
  __typename: "AllAccountsOutput";
  ok: boolean;
  error: string | null;
  totalPages: number | null;
  totalResults: number | null;
  accounts: accountsQuery_findAllAccounts_accounts[] | null;
}

export interface accountsQuery {
  findAllAccounts: accountsQuery_findAllAccounts;
}

export interface accountsQueryVariables {
  input: AllAccountsInput;
}
