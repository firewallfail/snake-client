const net = require("net");

const handleUserInput = function() {
  if (key === '\u0003') {
    process.exit();
  }
};


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '172.23.174.163', // IP address here,
    port: '50541' // PORT number here,
  });
  conn.on("connect", () => {
    //sssnake puns
    console.log("Sssuccesssfully connected to game ssserver");
    conn.write("Name: MUG");
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