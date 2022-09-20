// in src/User.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  useNotify,
  useRedirect,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  NumberInput,
  NumberField,
  DateField,
  DateInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  ArrayInput,
  SimpleFormIterator,
  ImageInput,
  ImageField,
  FileInput,
  FileField,
  BooleanInput,
  BooleanField,
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  email,
  Form,
  SaveButton,
  Toolbar,
  ShowButton,
  EditButton,
  DeleteButton,
  useRecordContext,
  DeleteWithConfirmButton,
  SimpleList,
} from "react-admin";
import useMediaQuery from "@mui/material/useMediaQuery";
import Calculator from "./Calculator";
import { ListSubheader, Typography } from "@material-ui/core";

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const UserList = (props) => (
  <List exporter={false} {...props} filters={<UserFilter />}>
    <Datagrid bulkActionButtons={false}>
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="age" />
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="age" />
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="createdate" />
      <TextInput disabled source="lastupdate" />
      <TextInput source="name" />
      <TextInput source="age" />
    </SimpleForm>
  </Edit>
);

export const calciList1 = (props) => (
  <List {...props}>
    <Datagrid>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const calciList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const record = useRecordContext();
  const postRowStyle = (record, index) => ({
    backgroundColor: record.isAdmin == true ? "#90caf9" : "default",
  });
  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <SimpleList
          sx={{
            borderRadius: "0.5rem",
            boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
          }}
          linkType="show"
          primaryText={(record) => <b>{record.name}</b>}
          secondaryText={(record) => `Created By: ${record.createdby}`}
          leftAvatar={(record) => (record.avatar ? record.avatar : null)}
        />
      ) : (
        <Datagrid
          bulkActionButtons={false}
          rowClick="show"
          sx={{
            borderRadius: "0.5rem",
            boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
          }}
        >
          <TextField source="name" />
          <ShowButton sx={{ fontWeight: "bold" }} label="Show" />
          <EditButton sx={{ fontWeight: "bold" }} label="Edit" />
          <DeleteWithConfirmButton
            confirmContent="You will not be able to recover this record. Are you sure?"
            label="Delete"
            translateOptions={(record) => record.name}
            redirect={false}
          />
        </Datagrid>
      )}
    </List>
  );
};

export const calciShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <NumberField source="Maths" />
      <NumberField source="Chemistry" />
      <NumberField source="CProgramming" />
      <NumberField source="Electronics" />
      <NumberField source="Mechanical" />
      <NumberField label="AEC" source="AEC" />
    </SimpleShowLayout>
  </Show>
);

export const calciCreate = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const onSuccess = (data) => {
    notify(`Changes saved`);
    redirect(`/calculator`);
  };
  return (
    <>
      <ListSubheader>Enter the Average Marks of CIE for 50 and Predicted grade from the calculator</ListSubheader>
      <Create {...props} mutationOptions={{ onSuccess }}>
        <SimpleForm
          sx={{
            borderRadius: "0.5rem",
            boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
            mb: "4rem",
          }}
        >
          <TextInput source="name" />
          <NumberInput source="Maths" />
          <SelectInput source="MathsGrade" choices={choices} />
          <NumberInput source="Chemistry" />
          <SelectInput source="ChemistryGrade" choices={choices} />
          <NumberInput source="CProgramming" />
          <SelectInput source="CProgrammingGrade" choices={choices} />
          <NumberInput source="Electronics" />
          <SelectInput source="ElectronicsGrade" choices={choices} />
          <NumberInput source="Mechanical" />
          <SelectInput source="MechanicalGrade" choices={choices} />
          <NumberInput label="AEC" source="AEC" />
          <SelectInput source="AECGrade" label="AEC Grade" choices={choices} />
        </SimpleForm>
      </Create>
    </>
  );
};
const choices = [
  { id: "O", name: "O" },
  { id: "A+", name: "A+" },
  { id: "A", name: "A" },
  { id: "B+", name: "B+" },
  { id: "B", name: "B" },
];

export const calciEdit = (props) => (
  <Edit {...props}>
    <SimpleForm
      sx={{
        borderRadius: "0.5rem",
        boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
        mb: "4rem",
      }}
    >
      <TextInput source="name" />
      <NumberInput source="Maths" />
      <SelectInput source="MathsGrade" choices={choices} />
      <NumberInput source="Chemistry" />
      <SelectInput source="ChemistryGrade" choices={choices} />
      <NumberInput source="CProgramming" />
      <SelectInput source="CProgrammingGrade" choices={choices} />
      <NumberInput source="Electronics" />
      <SelectInput source="ElectronicsGrade" choices={choices} />
      <NumberInput source="Mechanical" />
      <SelectInput source="MechanicalGrade" choices={choices} />
      <NumberInput label="AEC" source="AEC" />
      <SelectInput source="AECGrade" label="AEC Grade" choices={choices} />
    </SimpleForm>
  </Edit>
);
