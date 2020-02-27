import DefaultLayout from "../components/DefaultLayout";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import LogItem from "../components/LogItem";
import List from "@material-ui/core/List";
import { Divider } from "@material-ui/core";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Index = ({ logs: initialData }) => {
  const { data: logs, error } = useSWR("/api/logs", fetcher, { initialData });

  if (error) return <div>failed to load</div>;
  if (!logs) return <div>loading...</div>;

  return (
    <DefaultLayout>
      <h1>LumberJack</h1>
      <h2>Most Recent Logs</h2>
      <List>
        {logs.map(log => (
          <>
            <LogItem key={log.id} {...log} />
            <Divider variant="" component="li" />
          </>
        ))}
      </List>
    </DefaultLayout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:3000/api/logs");
  const logs = await res.json();

  console.log(`Show data fetched. Count: ${logs.length}`);

  return {
    logs
  };
};

export default Index;
