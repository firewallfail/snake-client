const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '172.23.174.163', // IP address here,
    port: '50541' // PORT number here,
  });
  conn.on("connect", () => {
    //sssnake puns
    console.log("Sssuccesssfully connected to game ssserver");
    conn.write("Name: BHH");
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