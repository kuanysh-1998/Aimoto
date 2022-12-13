import "./adminpanel.scss";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostListProshivka from "./Proshivka/PostListProshivka";

const AdminPanel = () => {
  return (
    <div className="admin">
      <div className="container">
        <Admin
          dataProvider={restProvider(
            "https://aimoto-server-production.up.railway.app/"
          )}
        >
          <Resource name="proshivka" list={PostListProshivka} />
        </Admin>
      </div>
    </div>
  );
};

export default AdminPanel;
