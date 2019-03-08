import gql from "graphql-tag";

const HIRE_BAND_MEMBER = gql`
  mutation HireMember($newBandMember: NewBandMember!){
    hireMember(newBandMember: $newBandMember) {
        name
        realName
        instrument
        age
        drink
        photoURL
      }
  }
`;

export default HIRE_BAND_MEMBER;
