
import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Fan = ({ age }) => {
  return <span>{age}</span>
}

const Member = ({ name, realName, drink, age, fans, instrument }) => {
  const allFans = fans.map((fan, index) => <Fan key={`${realName}--${index}`} {...fan} />) 
  return <div>{name} ({realName}) {age} - {drink} {instrument} {allFans}</div>
};

const BandMembers = () => (
  <Query
    query={gql`
      {
        bandMembers {
          name
          realName
          age
          drink
          instrument
          fans {
            age
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Good things take time....</p>
      if (error) return <p>Something went wrong...</p>

      return <div className="row">{data.bandMembers.map(member => <Member key={`member--${member.realName}--${member.age}`} {...member} />)}</div>
    }}
  </Query>
);

export default BandMembers;
