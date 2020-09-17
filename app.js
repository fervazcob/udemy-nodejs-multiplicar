const argv = require("./configs/yargs");
const colors = require("colors/safe");

const { crearTabla, leerTabla } = require("./multiplicar/multiplicar");

let cmd = argv._[0];

switch (cmd) {
  case "crear":
    crearTabla(argv.base, argv.limite)
      .then((data) => console.log(colors.green(data)))
      .catch((err) => console.error(colors.red(err)));
    break;
  case "listar":
    leerTabla(argv.base, argv.limite)
      .then((data) => console.log(colors.green(data)))
      .catch((err) => console.error(colors.red(err)));
    break;

  default:
    break;
}
