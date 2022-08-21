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
import { useMediaQuery } from "@mui/material";
import { SimpleList } from "react-admin";
import { RichTextInput, RichTextInputToolbar } from "ra-input-rich-text";
// import { RichTextInput, RichTextInputToolbar } from "ra-richtext-tiptap";

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

export const PostList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // const record = useRecordContext();
  return (
    <List
      {...props}
      // filters={<ReferenceFilter />}
      // filter={{ updatedby: "test@example.com" }}
    >
      {isSmall ? (
        <SimpleList
          sx={{
            borderRadius: "0.5rem",
            boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
          }}
          linkType="show"
          primaryText={(record) => <b>{record.name}</b>}
          secondaryText={(record) => `Email: ${record.updatedby}`}
          // leftAvatar={(record) => (record.avatar ? record.avatar : null)}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="name" />
          <TextField source="title" />
          <ShowButton label="Show" />
          <EditButton label="Edit" />
          <DeleteWithConfirmButton label="Delete" redirect={false} />
        </Datagrid>
      )}
    </List>
  );
};
// const ConditionalEmailField = ({}) =>
//   record && record.hasEmail ? (
//     <EmailField source="email" record={record} {...rest} />
//   ) : null;
export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      <TextField source="title" />
      <RichTextField source="body" />
      <EmailField source="updatedby" />
      <DateField source="createdate" />
      <DateField source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);

export const PostCreate = (props) => (
  <Create redirect="show" {...props}>
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
      <DateField source="lastupdate" />
      <TextInput source="title" />
      <RichTextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const BlogList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show" bulkActionButtons={false}>
      <TextField source="Title" />
    </Datagrid>
  </List>
);

export const BlogShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      {/* <TextField source="name" /> */}
      <TextField source="Title" />
      <RichTextField source="Description" />
      <DateField source="createdate" />
    </SimpleShowLayout>
  </Show>
);

export const BlogCreate = (props) => (
  <Create redirect="show" {...props}>
    <SimpleForm>
      <TextInput source="Title" />
      <RichTextInput
        source="Description"
        toolbar={<RichTextInputToolbar size="large" />}
      />
    </SimpleForm>
  </Create>
);

export const BlogEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="Title" />
      <RichTextInput
        source="Description"
        toolbar={<RichTextInputToolbar size="large" />}
      />
    </SimpleForm>
  </Edit>
);
