import "./admin.scss";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate } from "./Proshivka";
import { authProvider } from "./AuthProvider";

const dataProvider = jsonServerProvider(
  "https://aimoto-api.onrender.com"
);

function AdminPanel() {
  return (
    <div className="admin">
      <div className="container">
        <Admin dataProvider={dataProvider} authProvider={authProvider}>
          <Resource
            name="proshivka"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
          />
        </Admin>
      </div>
    </div>
  );
}

export default AdminPanel;
