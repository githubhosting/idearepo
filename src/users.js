// in src/User.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

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
