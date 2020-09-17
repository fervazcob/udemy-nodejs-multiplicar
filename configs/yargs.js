const opts = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    alias: "l",
    default: 10,
  },
};

const argv = require("yargs")
  .command("crear", "Crea una tabla de multiplicación", opts)
  .command("listar", "Lista la tabla de multiplicar", opts)
  .help().argv;

module.exports = argv;
