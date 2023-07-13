import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {" "}
      <h1>HomePage</h1>
      {/* This redirect sends another request to backend loading all the
      javascript code, load React, restart React application that impacts
      site performance */}
      <p>
        Go to <a href="/products">products</a>
      </p>
      {/* Link render an anchor element, but it listens for
      clicks on elements, preventing default for redirecting
      and take look at route definitions to accordingly update
      the page */}
      <p>
        Go to using Link <Link to="/products">products</Link>
      </p>
    </>
  );
}

export default HomePage;
