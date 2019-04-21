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
  useCategoryUpsertMutation,
  useCategoryDeleteMutation,
  CategoryUpsertInput
} from "../api";

const categorySchema = Yup.object().shape({
  id: Yup.string(),
  title: Yup.string().required("Required"),
  description: Yup.string(),
  slug: Yup.string().required("Required"),
  sort: Yup.number(),
  image: Yup.string().required("Required")
});

interface Props {
  input: CategoryUpsertInput;
  onReload: () => void;
}

export const CategoryForm: React.FC<Props> = ({ input, onReload }) => {
  const handleUpsert = useCategoryUpsertMutation();
  const handleDelete = useCategoryDeleteMutation();

  const categoryId = input.id;

  const onDelete = () => {
    if (!categoryId) {
      return;
    }

    handleDelete({ variables: { input: { id: categoryId } } }).then(onReload);
  };

  return (
    <Formik
      initialValues={input}
      validationSchema={categorySchema}
      onSubmit={(
        input: CategoryUpsertInput,
        { setSubmitting, resetForm }: FormikActions<CategoryUpsertInput>
      ) => {
        handleUpsert({ variables: { input } }).then(() => {
          setSubmitting(false);

          if (!categoryId) {
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
                name="description"
                label="Description"
                fullWidth
                multiline
                rows="3"
                margin="normal"
                component={TextField}
              />
              <Grid container spacing={32}>
                <Grid item xs={6}>
                  <Field
                    name="slug"
                    label="Slug"
                    fullWidth
                    margin="normal"
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="sort"
                    label="Sort"
                    type="number"
                    fullWidth
                    margin="normal"
                    component={TextField}
                  />{" "}
                </Grid>
              </Grid>
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
                  {categoryId ? "Update" : "Create"}
                </Button>
                {categoryId && (
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
