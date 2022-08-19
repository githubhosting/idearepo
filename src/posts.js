import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateField,
  ImageField,
  ImageInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  DeleteWithConfirmButton,
  RichTextField,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  FileInput,
  FileField,
  ArrayInput,
  SimpleFormIterator,
  DateInput,
  EmailField,
  BooleanField,
  BooleanInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import {
  FirebaseReferenceField,
  FirebaseReferenceInput,
} from "./FirebaseReferenceFields";

// const PostFilter = (props) => (
//   <Filter {...props}>
//     <TextInput label="Search" source="title" alwaysOn />
//   </Filter>
// );

// const ReferenceFilter = (props) => (
//   <Filter {...props}>
//     <ReferenceInput
//       label="Organization"
//       source="user.id"
//       reference="users"
//       allowEmpty
//     >
//       <SelectInput optionText="name" />
//     </ReferenceInput>
//   </Filter>
// );

export const PostList = (props) => (
  <List
    {...props}
    // filters={<ReferenceFilter />}
    // filter={{ updatedby: "test@example.com" }}
  >
    <Datagrid>
      <TextField source="name" />
      <TextField source="title" />
      <ShowButton label="Show" />
      <EditButton label="Edit" />
      <DeleteWithConfirmButton label="Delete" redirect={false} />
    </Datagrid>
  </List>
);

const ConditionalEmailField = ({}) =>
  record && record.hasEmail ? (
    <EmailField source="email" record={record} {...rest} />
  ) : null;
export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="title" />
      <RichTextField source="body" />
      <EmailField source="updatedby" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Name" source="name" />
      <TextInput label="Idea Title" source="title" />
      <RichTextInput source="body" />
      {/* <BooleanInput source="hasEmail" /> */}
    </SimpleForm>
  </Create>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="name" />
      <DateField source="createdate" />
      <DateField source="lastupdate" />
      <TextInput source="title" />
      <RichTextInput source="body" />
    </SimpleForm>
  </Edit>
);
