import { useRouter } from "next/router";
import DefaultLayout from "../../components/DefaultLayout";

const Log = ({ log: { type, message, date } }) => {
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
  const res = await fetch(`https://lumberjack-c45e4.firebaseio.com/${id}.json`);
  const log = await res.json();

  return {
    log
  };
};

export default Log;
