import app from "./app";

app.listen(
  {
    host: "0.0.0.0",
    port: 8080,
  },
  (err, address) => {
    if (err) throw err;

    const newAddress = address.replace(/127.0.0.1/, "localhost");

    console.log(`🔥 Server is running at: ${newAddress}`);
  }
);
