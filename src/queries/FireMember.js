import gql from "graphql-tag";

const FIRE_BAND_MEMBER = gql`
  mutation FireMember($id: Int!) {
    fireMember(firedMemberId: $id){
      name
    }
  }
`;

export default FIRE_BAND_MEMBER;
