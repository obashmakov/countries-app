import { gql } from '@apollo/client';

export const countries = gql`
  {
    countries {
      name
      code
      capital
      currency
    }
  }
`;
