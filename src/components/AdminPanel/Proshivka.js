import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  SimpleList,
  ReferenceInput
} from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import { useMediaQuery } from "@mui/material";
export const PostIcon = BookIcon;

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="User" reference="imei" />,
];

export const PostList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={postFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.model}
          secondaryText={(record) => record.imei}
          thirdlyText={(record) => record.file}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="imei" />
          <TextField source="model" />
          <TextField source="file" />
          <TextField source="program" />
          <TextField source="Comment" />
        </Datagrid>
      )}
    </List>
  );
};

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="imei" />
      <TextInput source="model" />
      <TextInput source="file" />
      <TextInput source="program" />
      <TextInput source="Comment" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="imei" />
      <TextInput source="model" />
      <TextInput source="file" />
      <TextInput source="program" />
      <TextInput source="Comment" />
    </SimpleForm>
  </Create>
);
