import DefaultLayout from "../components/DefaultLayout";

const Login = props => (
  <DefaultLayout>
<<<<<<< Updated upstream
    <form>
      <p>form goes here</p>
    </form>
  </DefaultLayout>
);

=======
    <form>form goes here</form>
  </DefaultLayout>
);

Login.getInitialProps = async ({ req, res }) => {
  if (typeof window === "undefined") {
    const { user } = await auth0.getSession(req);
    if (!user) {
      res.writeHead(302, {
        Location: "/api/login"
      });
      res.end();
      return;
    }

    return { user };
  }
};

>>>>>>> Stashed changes
export default Login;
