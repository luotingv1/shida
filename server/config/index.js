module.exports = {
  port: 4000,
  mongodb: {
    url: "mongodb://localhost:27000/ffcreator",
    options: {}
  },
  middleware: ["handlerError"],
  jwt: { secret: "ffcreator" },
  crypto: { secret: "#*#*ffcreator*#*#" },
  baseUrl: ""
};
