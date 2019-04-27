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
  useBrandDeleteMutation,
  useBrandUpsertMutation,
  BrandUpsertInput
} from "../api";

const brandSchema = Yup.object().shape({
  id: Yup.string(),
  title: Yup.string().required("Required"),
  description: Yup.string(),
  image: Yup.string().required("Required")
});

interface Props {
  input: BrandUpsertInput;
  onReload: () => void;
}

export const BrandForm: React.FC<Props> = ({ input, onReload }) => {
  const handleUpsert = useBrandUpsertMutation();
  const handleDelete = useBrandDeleteMutation();

  const onDelete = (id: string) => {
    handleDelete({ variables: { input: { id } } }).then(onReload);
  };

  return (
    <Formik
      initialValues={input}
      validationSchema={brandSchema}
      onSubmit={(
        input: BrandUpsertInput,
        { setSubmitting, setFieldValue }: FormikActions<BrandUpsertInput>
      ) => {
        handleUpsert({ variables: { input } }).then(({ data }) => {
          setSubmitting(false);

          const id = idx(data, _ => _.brand.upsert.id);

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
