const net = require("net");
const { IP, PORT, NAME, GREETING } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here
    port: PORT // PORT here
  });
  conn.on("connect", () => {
    //sssnake puns
    console.log(GREETING);
    conn.write(NAME);
    // conn.write("Move: up");
    // setTimeout(() => conn.write("Move: up"), 50);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

//ES6 shorthand
module.exports = {
  connect
};