import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
export const PostIcon = BookIcon;

export const PostList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="imei" />
            <TextField source="model" />
            <TextField source="file" />
            <TextField source="program" />
            <TextField source="Comment" />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
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

export const PostCreate = props => (
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