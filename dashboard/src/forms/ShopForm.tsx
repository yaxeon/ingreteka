import React from "react";
import * as Yup from "yup";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Grid
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Formik, Field, Form, FormikActions } from "formik";

import { ImageField } from "../components/ImageField";
import {
  useShopDeleteMutation,
  useShopUpsertMutation,
  ShopUpsertInput
} from "../api";

const shopSchema = Yup.object().shape({
  id: Yup.string(),
  title: Yup.string().required("Required"),
  description: Yup.string(),
  link: Yup.string().url(),
  image: Yup.string().required("Required")
});

interface Props {
  input: ShopUpsertInput;
  onReload: () => void;
}

export const ShopForm: React.FC<Props> = ({ input, onReload }) => {
  const handleUpsert = useShopUpsertMutation();
  const handleDelete = useShopDeleteMutation();

  const shopId = input.id;

  const onDelete = () => {
    if (!shopId) {
      return;
    }

    handleDelete({ variables: { input: { id: shopId } } }).then(onReload);
  };

  return (
    <Formik
      initialValues={input}
      validationSchema={shopSchema}
      onSubmit={(
        input: ShopUpsertInput,
        { setSubmitting, resetForm }: FormikActions<ShopUpsertInput>
      ) => {
        handleUpsert({ variables: { input } }).then(() => {
          setSubmitting(false);

          if (!shopId) {
            resetForm();
          }

          onReload();
        });
      }}
      render={({ isSubmitting }) => (
        <Form>
          <Card>
            <CardContent>
              <Field
                name="title"
                label="Title"
                fullWidth
                margin="normal"
                component={TextField}
              />
              <Field
                name="link"
                label="Link"
                fullWidth
                margin="normal"
                component={TextField}
              />
              <Field
                name="description"
                label="Description"
                fullWidth
                multiline
                rows="3"
                margin="normal"
                component={TextField}
              />
              <Field name="image" label="Image" component={ImageField} />
            </CardContent>
            <CardActions>
              <Grid container justify="space-around">
                <Button
                  disabled={isSubmitting}
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  {shopId ? "Update" : "Create"}
                </Button>
                {shopId && (
                  <Button
                    onClick={onDelete}
                    color="secondary"
                    variant="contained"
                    type="button"
                  >
                    Delete
                  </Button>
                )}
              </Grid>
            </CardActions>
          </Card>
        </Form>
      )}
    />
  );
};
