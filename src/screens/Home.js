import React from "react";
import posthog from "posthog-js";
posthog.init("phc_f0oNZoLhGL2yNFb5oMXflD1RBbiTo8yyb1grAEDd9ae", {
  api_host: "https://app.posthog.com",
});

function Home() {
  const handleButton1 = () => {
    posthog.capture("my event", { property: "value" });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button onClick={handleButton1}>Button1</button>
    </div>
  );
}

export default Home;
