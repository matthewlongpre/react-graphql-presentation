
import React from "react";
import { Mutation, Query } from "react-apollo";
import Member from './BandMember';
import { FIRE_BAND_MEMBER, GET_BAND_MEMBERS } from "./queries";
import { MemberCard } from "./styled";
import Spinner from "./Spinner";


const BandMembers = () => (
  <Query
    query={GET_BAND_MEMBERS}
  >
    {({ loading, error, data }) => {
      
      if (loading) return <Spinner />
      if (error) return <p>Something went wrong... Oh well, too bad!</p>

      return (
        <>
          {data.bandMembers.map(member => {
            
            const { id } = member;
            return (
            
              <Mutation
                mutation={FIRE_BAND_MEMBER}
                key={id}
              >
                {(fireBandMember, { loading, error }) => (

                  <MemberCard>
                    <Member
                      key={id}
                      {...member}
                      handleFireBandMember={
                        () => fireBandMember({
                          variables: { id },
                          refetchQueries: [{ query: GET_BAND_MEMBERS }]
                        })}
                    />
                    {loading && <Spinner />}
                    {error && <p>Error :( Please try again</p>}
                  </MemberCard>

                )}

              </Mutation>
            );
          })
          }
        </>
      );
    }}
  </Query>
);

export default BandMembers;
