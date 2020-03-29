import auth0 from "../common/Authentication";
import DefaultLayout from "../components/DefaultLayout";
import { fetch } from "isomorphic-unfetch";

const Login = async ({ user }) => {
  const res = await fetch("/api/login");
  return (
    <DefaultLayout>
      <form>form goes here</form>
    </DefaultLayout>
  );
};

export default Login;
