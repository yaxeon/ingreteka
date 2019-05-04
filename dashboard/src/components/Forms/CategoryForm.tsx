import React from "react";
import * as Yup from "yup";
import idx from "idx";
import { Card, CardContent, Grid, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Formik, Field, Form, FormikActions } from "formik";

import { UploadImageField } from "../Fields/UploadImageField";
import {
  useCategoryUpsertMutation,
  useCategoryDeleteMutation,
  useCategoryItemQuery,
  CategoryUpsertInput
} from "../../api";
import { FormCrudAction } from "./FormCrudAction";
import { CrudFormProps } from "../../hooks/useCrudForm";

const categorySchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  slug: Yup.string().required("Required"),
  sort: Yup.number(),
  image: Yup.string().required("Required")
});

export const CategoryForm: React.FC<CrudFormProps> = ({ id, onClose }) => {
  const { data, loading } = useCategoryItemQuery({ variables: { id } });
  const handleUpsert = useCategoryUpsertMutation();
  const handleDelete = useCategoryDeleteMutation();

  const onDelete = (id: string) => {
    handleDelete({ variables: { input: { id } } }).then(onClose);
  };

  if (loading) {
    return <LinearProgress />;
  }

  const initialValues = {
    id: idx(data, _ => _.category.item.id),
    title: idx(data, _ => _.category.item.title) || "",
    sort: idx(data, _ => _.category.item.sort) || 0,
    slug: idx(data, _ => _.category.item.slug) || "",
    image: idx(data, _ => _.category.item.image) || ""
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={categorySchema}
      onSubmit={(
        input: CategoryUpsertInput,
        { setSubmitting, setFieldValue }: FormikActions<CategoryUpsertInput>
      ) => {
        handleUpsert({ variables: { input } }).then(({ data }) => {
          setSubmitting(false);

          const id = idx(data, _ => _.category.upsert.id);

          if (id) {
            setFieldValue("id", id);
          }
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
              <Grid container spacing={8}>
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
                  />
                </Grid>
              </Grid>
              <Field name="image" label="Image" component={UploadImageField} />
            </CardContent>
            <FormCrudAction
              disabled={isSubmitting}
              id={id}
              onDelete={onDelete}
            />
          </Card>
        </Form>
      )}
    />
  );
};
