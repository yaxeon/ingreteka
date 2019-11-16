import React from "react";
import * as yup from "yup";
import idx from "idx";
import {
  Card,
  CardContent,
  LinearProgress,
  Grid,
  Fab,
  IconButton,
  FormControlLabel
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Image";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { TextField, Switch } from "formik-material-ui";
import { Formik, Field, FieldArray, Form, FormikActions } from "formik";

import { RichTextField } from "../Fields/RichTextField";
import { UploadImageField } from "../Fields/UploadImageField";
import { SelectField } from "../Fields/SelectField";
import { DateField } from "../Fields/DateField";
import {
  useSelectionDeleteMutation,
  useSelectionUpsertMutation,
  useSelectionItemQuery,
  useSelectionOptionsQuery,
  SelectionUpsertInput
} from "../../api";
import { FormCrudAction } from "./FormCrudAction";
import { CrudFormProps, mapId } from "../../hooks/useCrudForm";

const selectionSchema = yup.object().shape({
  title: yup.string().required("Required"),
  text: yup.string().required("Required"),
  categories: yup.array(yup.string()),
  shops: yup.array(yup.string()),
  brands: yup.array(yup.string()),
  images: yup.array(yup.string()),
  isPublished: yup.boolean()
});

export const SelectionForm: React.FC<CrudFormProps> = ({ id, onClose }) => {
  const { data, loading } = useSelectionItemQuery({ variables: { id } });
  const { data: dataOptions } = useSelectionOptionsQuery();
  const [handleUpsert] = useSelectionUpsertMutation();
  const [handleDelete] = useSelectionDeleteMutation();

  const onDelete = (id: string) => {
    handleDelete({ variables: { input: { id } } }).then(onClose);
  };

  if (loading) {
    return <LinearProgress />;
  }

  const initialValues = {
    id: idx(data, _ => _.selection.item.id),
    title: idx(data, _ => _.selection.item.title) || "",
    text: idx(data, _ => _.selection.item.text) || "",
    categories: mapId(idx(data, _ => _.selection.item.categories)),
    images: idx(data, _ => _.selection.item.images) || [],
    shops: mapId(idx(data, _ => _.selection.item.shops)),
    brands: mapId(idx(data, _ => _.selection.item.brands)),
    isPublished: idx(data, _ => _.selection.item.isPublished) || false,
    relevanceDate: idx(data, _ => _.selection.item.relevanceDate) || null
  };

  const options = {
    category: idx(dataOptions, _ => _.category.list),
    shop: idx(dataOptions, _ => _.shop.list),
    brand: idx(dataOptions, _ => _.brand.list)
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={selectionSchema}
      onSubmit={(
        input: SelectionUpsertInput,
        { setSubmitting, setFieldValue }: FormikActions<SelectionUpsertInput>
      ) => {
        handleUpsert({ variables: { input } }).then(({ data }) => {
          setSubmitting(false);

          const id = idx(data, _ => _.selection.upsert.id);

          if (id) {
            setFieldValue("id", id);
          }
        });
      }}
      render={({ isSubmitting, values: { id, images } }) => (
        <Form>
          <Card>
            <CardContent>
              <Grid container spacing={8}>
                <Grid item xs={9}>
                  <Field
                    name="title"
                    label="Title"
                    fullWidth
                    margin="normal"
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    name="relevanceDate"
                    label="Relevance"
                    fullWidth
                    margin="normal"
                    component={DateField}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    multiple
                    name="categories"
                    label="Category"
                    component={SelectField}
                    options={options.category}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    multiple
                    name="shops"
                    label="Shop"
                    component={SelectField}
                    options={options.shop}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    multiple
                    name="brands"
                    label="Brand"
                    component={SelectField}
                    options={options.brand}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={<Field name="isPublished" component={Switch} />}
                    label="Published"
                  />
                </Grid>
              </Grid>
              <FieldArray
                name="images"
                render={arrayHelpers => (
                  <Grid container spacing={8}>
                    {images &&
                      images.length > 0 &&
                      images.map((image, index) => (
                        <Grid item key={index}>
                          <Field
                            label={`Image ${index}`}
                            name={`images.${index}`}
                            component={UploadImageField}
                            index={index}
                            count={images.length}
                            sortNode={
                              <React.Fragment>
                                <IconButton
                                  onClick={() =>
                                    arrayHelpers.move(index, index - 1)
                                  }
                                  disabled={index === 0}
                                >
                                  <ChevronLeft fontSize="small" />
                                </IconButton>
                                <IconButton
                                  onClick={() =>
                                    arrayHelpers.move(index, index + 1)
                                  }
                                  disabled={index === images.length - 1}
                                >
                                  <ChevronRight fontSize="small" />
                                </IconButton>
                              </React.Fragment>
                            }
                            onClear={() => arrayHelpers.remove(index)}
                          />
                        </Grid>
                      ))}
                    <Grid item>
                      <Fab
                        size="small"
                        color="primary"
                        onClick={() => arrayHelpers.push("")}
                      >
                        <AddIcon />
                      </Fab>
                    </Grid>
                  </Grid>
                )}
              />
              <Field name="text" label="Text" component={RichTextField} />
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
