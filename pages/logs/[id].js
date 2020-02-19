import { useRouter } from "next/router";
import DefaultLayout from "../../components/DefaultLayout";

const Log = ({ log: { type, message, date } = {} }) => {
  const logDate = new Date(date);

  return (
    <DefaultLayout>
      <h1>{type}</h1>
      <p>{message}</p>
      <p>
        This {type} log was reported {logDate.toLocaleDateString()} at{" "}
        {logDate.toLocaleTimeString()}
      </p>
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
