import LogLink from "./LogLink";

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

export default LogItem;
