import DefaultLayout from "../components/DefaultLayout";
import Link from "next/link";
import useSWR from "swr";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const LogLink = ({ id, label }) => (
  <>
    <Link href="/logs/[id]" as={`logs/${id}`}>
      <a>{label}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </>
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

const Index = props => {
  const { data: logs, error } = useSWR("/api/logs", fetcher);

  if (error) return <div>failed to load</div>;
  if (!logs) return <div>loading...</div>;

  return (
    <DefaultLayout>
      <h1>LumberJack</h1>
      <h2>Most Recent Logs</h2>
      {logs.map(log => (
        <LogItem key={log.id} {...log} />
      ))}
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </DefaultLayout>
  );
};

// Index.getInitialProps = async function() {
//   const res = await fetch("http://localhost:3000/api/logs");
//   const logs = await res.json();

//   console.log(`Show data fetched. Count: ${logs.length}`);

//   return {
//     logs
//   };
// };

export default Index;
