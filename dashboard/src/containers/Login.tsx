import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Button
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Formik, Field, Form, FormikActions } from "formik";
import * as Yup from "yup";

import { LoginMutation, mutation, Variables } from "../api/mutation/login";

interface Props {
  onEnter: () => void;
}

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(3, "Min length: 3")
    .max(20, "Max length: 3")
    .required("Required")
});

export const Login: React.FC<Props> = ({ onEnter }) => (
  <LoginMutation mutation={mutation}>
    {login => (
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={loginSchema}
        onSubmit={(
          values: Variables,
          { setSubmitting, setFieldError }: FormikActions<Variables>
        ) => {
          login({ variables: values }).then(data => {
            setSubmitting(false);

            if (data && data.data && data.data.login) {
              onEnter();
              return;
            }

            setFieldError("username", "Invalid credentials");
          });
        }}
        render={({ isSubmitting }) => (
          <Dialog open>
            <Form>
              <DialogTitle>Ingreteka Guide Dashboard</DialogTitle>
              <DialogContent>
                <Field
                  name="username"
                  type="email"
                  label="Email"
                  fullWidth
                  margin="normal"
                  component={TextField}
                />
                <Field
                  name="password"
                  type="password"
                  label="Password"
                  fullWidth
                  margin="normal"
                  component={TextField}
                />
              </DialogContent>
              <DialogActions>
                <Grid container justify="center">
                  <Button
                    disabled={isSubmitting}
                    color="primary"
                    variant="contained"
                    type="submit"
                  >
                    Login
                  </Button>
                </Grid>
              </DialogActions>
            </Form>
          </Dialog>
        )}
      />
    )}
  </LoginMutation>
);
