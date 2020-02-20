import Link from "next/link";

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

export default LogLink;
