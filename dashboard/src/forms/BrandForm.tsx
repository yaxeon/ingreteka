import React from "react";
import * as Yup from "yup";
import idx from "idx";
import { Card, CardContent } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Formik, Field, Form, FormikActions } from "formik";

import {
  useBrandDeleteMutation,
  useBrandUpsertMutation,
  BrandUpsertInput
} from "../api";
import { FormCrudAction } from "./FormCrudAction";

const brandSchema = Yup.object().shape({
  id: Yup.string(),
  title: Yup.string().required("Required")
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
