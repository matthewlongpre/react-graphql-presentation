import styled from "styled-components";

export const H2 = styled.h2`
  font-family: "Special Elite";
`;

export const H3 = styled.h3`
  font-family: "Karla";
  font-size: 1em;
`;

export const P = styled.p`
  font-family: "Karla";
  margin: 0;
`;

export const BackgroundImage = styled.div`
  background-image: url('${({ bgImage }) => bgImage}');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.3);
    position: absolute;
  }
}
`;

export const PageContainer = styled.div`
  padding: 20px;
`;

export const CurrentMembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;

export const HireBandMemberContainer = styled.div`
  background: #fff;
  padding: 20px;
  max-width: 450px;
  margin: auto;
  border-radius: 4px;
`;

export const MemberCard = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-basis: 25%;
  flex-grow: 0;
  flex-shrink: 1;
  margin: 10px;
  min-width: 300px;
`;


export const MemberContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const MemberDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  h2, h3 {
    margin: 0 0 .5em;
  } 
`;

export const ImageContainer = styled.div`
  width: 120px;
  min-width: 120px;
  height: 120px;
  overflow: hidden;
  img {
    max-width: 100%;
  }
`;

export const Label = styled.div`
  font-family: "ABeeZee";
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-top: 1em;
  margin-right: 1em;
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${({ flex }) => flex };
  padding: 20px;
`;