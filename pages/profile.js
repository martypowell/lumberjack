import DefaultLayout from "../components/DefaultLayout";
import auth0 from "../common/Authentication";

const Profile = props => (
  <DefaultLayout>
    <p>My Profile</p>
  </DefaultLayout>
);

Profile.getInitialProps = async ({ req, res }) => {
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

export default Profile;
