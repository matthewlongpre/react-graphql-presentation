import gql from "graphql-tag";

const GET_BAND_MEMBERS = gql`
  {
    bandMembers {
      id
      name
      realName
      instrument
      age
      drink
      photoURL
    }
  }
`;

export default GET_BAND_MEMBERS;
