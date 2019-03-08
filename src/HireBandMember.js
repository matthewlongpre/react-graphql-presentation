import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Formik } from "formik";
import React from "react";
import { Mutation } from "react-apollo";
import { GET_BAND_MEMBERS, HIRE_BAND_MEMBER } from "./queries";

const HireBandMember = () => {
  return (
    <Mutation
      mutation={HIRE_BAND_MEMBER}
    >
      {hireBandMember => (
        <>
          <Formik
            initialValues={{
              name: ``,
              realName: ``,
              instrument: ``,
              age: ``,
              drink: ``,
              photoURL: ``,
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              hireBandMember({
                variables: {
                  newBandMember: values
                },
                refetchQueries: [{ query: GET_BAND_MEMBERS }],
              }).then(
                () => {
                  setSubmitting(false);
                  resetForm();
                }
              );
            }}
          >

            {({ values, handleSubmit, handleChange, isSubmitting }) => (
              <>
                <form
                  onSubmit={handleSubmit}>
                  <TextField fullWidth margin="normal" required label="Name" type="text" name="name" onChange={handleChange} value={values.name} />
                  <TextField fullWidth margin="normal" label="Real name" type="text" name="realName" onChange={handleChange} value={values.realName} />
                  <TextField fullWidth margin="normal" label="Instrument" type="text" name="instrument" onChange={handleChange} value={values.instrument} />
                  <TextField fullWidth margin="normal" label="Age" type="number" name="age" onChange={handleChange} value={values.age} />
                  <TextField fullWidth margin="normal" label="Drink of Choice" type="text" name="drink" onChange={handleChange} value={values.drink} />
                  <TextField fullWidth margin="normal" label="Photo URL" type="text" name="photoURL" onChange={handleChange} value={values.photoURL} />
                  <Button style={{ marginTop: `1rem` }} variant="contained" color="primary" type="submit" disabled={isSubmitting}>Hire</Button>
                </form>
              </>
            )}

          </Formik>
        </>
      )}
    </Mutation>
  );
};

export default HireBandMember;
