import { gql } from "@apollo/client";

export const ACCOUNT_FRAGMENT = gql`
  fragment AccountParts on Account {
    id
    createdAt
    updatedAt
    name
    creator {
      name
    }
    creatorId
    accountNumber
    allocRate
  }
`;
