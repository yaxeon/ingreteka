import React, { useContext } from "react";
import * as Yup from "yup";
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

import { AuthLoginMutationVariables, useAuthLoginMutation } from "../../api";
import { AuthContext } from "../../containers/AuthGuard";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(3, "Min length: 3")
    .max(20, "Max length: 3")
    .required("Required")
});

export const LoginForm = () => {
  const { onReload } = useContext(AuthContext);
  const handleLogin = useAuthLoginMutation();

  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validationSchema={loginSchema}
      onSubmit={(
        variables: AuthLoginMutationVariables,
        {
          setSubmitting,
          setFieldError
        }: FormikActions<AuthLoginMutationVariables>
      ) => {
        handleLogin({ variables }).then(({ data }) => {
          setSubmitting(false);

          if (!data || !data.auth.login) {
            setFieldError("username", "Invalid credentials");
            return;
          }

          onReload();
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
  );
};
