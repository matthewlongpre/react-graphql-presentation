import Button from '@material-ui/core/Button';
import React from "react";
import { Col, H2, H3, ImageContainer, Label, MemberContainer, MemberDetails, P } from './styled';


const Member = ({ name, realName, drink, age, instrument, photoURL, handleFireBandMember }) => {
  return (
    <MemberContainer>
      <Col flex="calc(100% - 120px) 1 1">
        <MemberDetails>
          <H2>{name}</H2>
          <H3>{realName}</H3>
          <Label>
            Instruments:
          </Label>
          <P>
            {instrument}
          </P>
          <div>
            <Label>
              Drink of choice:
            </Label>
            <P>
              {drink}
            </P>
          </div>
          <div>
            <Label>
              Age:
            </Label>
            <P>
              {age}
            </P>
          </div>
        </MemberDetails>
      </Col>
      <Col flex="120px 0 0">
        <ImageContainer>
          <img alt={name} src={photoURL} />
        </ImageContainer>
        <Button variant="contained" color="primary" onClick={handleFireBandMember} style={{ marginTop: `1rem` }}>Fire</Button>
      </Col>
    </MemberContainer>
  );
};

export default Member;
