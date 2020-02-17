import DefaultLayout from "../components/DefaultLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const LogLink = ({ id, label }) => (
  <Link href="/logs/[id]" as={`logs/${id}`}>
    <a>{label}</a>
  </Link>
);

const LogItem = ({ id, type, message, date }) => {
  const logDate = new Date(date);

  return (
    <div
      style={{
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid gray"
      }}
    >
      <h3>{type}</h3>
      <span>
        {logDate.toLocaleDateString()} {logDate.toLocaleTimeString()}
      </span>
      <p>{message}</p>
      <LogLink label="Details" id={id} />
    </div>
  );
};

const Index = ({ logs, ...rest }) => (
  <DefaultLayout>
    <h2>Most Recent Logs</h2>
    {logs.map(log => (
      <LogItem key={log.id} {...log} />
    ))}
  </DefaultLayout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://lumberjack-c45e4.firebaseio.com/.json");
  const logs = await res.json();

  console.log(`Show data fetched. Count: ${logs.length}`);

  return {
    logs
  };
};

export default Index;
