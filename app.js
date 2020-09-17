const argv = require("./configs/yargs");
const colors = require("colors");

const { crearTabla, leerTabla } = require("./multiplicar/multiplicar");

let cmd = argv._[0];

switch (cmd) {
  case "crear":
    crearTabla(argv.base, argv.limite)
      .then((data) => console.log(data.green))
      .catch((err) => console.error(err.red));
    break;
  case "listar":
    leerTabla(argv.base, argv.limite)
      .then((data) => console.log(data.green))
      .catch((err) => console.error(err.red));
    break;

  default:
    break;
}
