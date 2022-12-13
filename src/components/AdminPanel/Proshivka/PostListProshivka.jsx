import './PostList.scss';

import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, useRecordContext } from 'react-admin';

const PostListProshivka = (props) => {
  return (
    <div>
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="imei" />
          <DateField source="model" />
          <TextField source="file" />
          <TextField source="program" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};

export default PostListProshivka;
