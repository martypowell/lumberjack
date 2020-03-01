import { useRouter } from "next/router";
import DefaultLayout from "../../components/DefaultLayout";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Log = ({ log: { type, message, date } = {} }) => {
  const logDate = new Date(date);

  return (
    <DefaultLayout>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {message}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This {type} log was reported {logDate.toLocaleDateString()} at{" "}
            {logDate.toLocaleTimeString()}
          </Typography>
        </CardContent>
      </Card>
    </DefaultLayout>
  );
};

Log.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/logs`);
  const logs = await res.json();
  const log = logs.find(x => x.id === parseInt(id));

  return {
    log
  };
};

export default Log;
