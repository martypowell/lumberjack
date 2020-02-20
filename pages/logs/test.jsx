import fetch from "isomorphic-unfetch";

const TestPage = props => {
  const handleDefaultLogClick = async () => {
    const resp = await fetch("http://localhost:3000/api/logs", {
      method: "POST",
      body: JSON.stringify({
        type: "warning",
        message: "This is a sample warning message from the client test page."
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await resp.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Test Page</h1>
      <p>The purpose of this page is to allow us to test out our api.</p>
      <h2>Default Post Log</h2>
      <button type="button" onClick={handleDefaultLogClick}>
        Submit Default Log
      </button>
    </div>
  );
};

export default TestPage;
