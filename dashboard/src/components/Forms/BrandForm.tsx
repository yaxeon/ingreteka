import React from "react";
import * as Yup from "yup";
import idx from "idx";
import { Card, CardContent, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Formik, Field, Form, FormikActions } from "formik";

import {
  useBrandDeleteMutation,
  useBrandUpsertMutation,
  BrandUpsertInput,
  useBrandItemQuery
} from "../../api";
import { FormCrudAction } from "./FormCrudAction";
import { CrudFormProps } from "../../hooks/useCrudForm";

const brandSchema = Yup.object().shape({
  title: Yup.string().required("Required")
});

export const BrandForm: React.FC<CrudFormProps> = ({ id, onClose }) => {
  const { data, loading } = useBrandItemQuery({ variables: { id } });
  const [handleUpsert] = useBrandUpsertMutation();
  const [handleDelete] = useBrandDeleteMutation();

  const onDelete = (id: string) => {
    handleDelete({ variables: { input: { id } } }).then(onClose);
  };

  if (loading) {
    return <LinearProgress />;
  }

  const initialValues = {
    id: idx(data, _ => _.brand.item.id),
    title: idx(data, _ => _.brand.item.title) || ""
  };

  return (
    <Formik
      initialValues={initialValues}
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
