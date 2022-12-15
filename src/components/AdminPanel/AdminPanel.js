import "./admin.scss";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate } from "./Proshivka";
import { authProvider } from "./AuthProvider";

const dataProvider = jsonServerProvider(
  "https://aimoto-server-production.up.railway.app"
);
function AdminPanel() {
  return (
    <div className="admin">
      
        <Admin dataProvider={dataProvider} authProvider={authProvider}>
          <Resource
            name="proshivka"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
          />
        </Admin>
    </div>
  );
}

export default AdminPanel;
