import React from "react";
import * as Yup from "yup";
import idx from "idx";
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
import { RichTextField } from "../components/RichTextField";
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

  const onDelete = (id: string) => {
    handleDelete({ variables: { input: { id } } }).then(onReload);
  };

  return (
    <Formik
      initialValues={input}
      validationSchema={shopSchema}
      onSubmit={(
        input: ShopUpsertInput,
        { setSubmitting, setFieldValue }: FormikActions<ShopUpsertInput>
      ) => {
        handleUpsert({ variables: { input } }).then(({ data }) => {
          setSubmitting(false);

          const id = idx(data, _ => _.shop.upsert.id);

          if (id) {
            setFieldValue("id", id);
          }

          onReload();
        });
      }}
      render={({ isSubmitting, values: { id } }) => (
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
                component={RichTextField}
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
                  {id ? "Update" : "Create"}
                </Button>
                {id && (
                  <Button
                    onClick={() => onDelete(id)}
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
