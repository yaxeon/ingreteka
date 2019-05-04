import React from "react";
import * as Yup from "yup";
import idx from "idx";
import { Card, CardContent, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Formik, Field, Form, FormikActions } from "formik";

import { UploadImageField } from "../Fields/UploadImageField";
import {
  useShopDeleteMutation,
  useShopUpsertMutation,
  useShopItemQuery,
  ShopUpsertInput
} from "../../api";
import { FormCrudAction } from "./FormCrudAction";
import { CrudFormProps } from "../../hooks/useCrudForm";

const shopSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  link: Yup.string()
    .url()
    .required("Required"),
  image: Yup.string().required("Required")
});

export const ShopForm: React.FC<CrudFormProps> = ({ id, onClose }) => {
  const { data, loading } = useShopItemQuery({ variables: { id } });
  const handleUpsert = useShopUpsertMutation();
  const handleDelete = useShopDeleteMutation();

  const onDelete = (id: string) => {
    handleDelete({ variables: { input: { id } } }).then(onClose);
  };

  if (loading) {
    return <LinearProgress />;
  }

  const initialValues = {
    id: idx(data, _ => _.shop.item.id),
    title: idx(data, _ => _.shop.item.title) || "",
    link: idx(data, _ => _.shop.item.link) || "",
    image: idx(data, _ => _.shop.item.image) || ""
  };

  return (
    <Formik
      initialValues={initialValues}
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
