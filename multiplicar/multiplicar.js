const fs = require("fs");

const crearTabla = (base, limite) => {
  return new Promise((res, rej) => {
    let data = "";
    if (isNaN(base) || isNaN(limite)) {
      rej(`La "base" o el "limite" no son correctos`);
      return;
    }

    for (let i = 1; i <= limite; i++) {
      data += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) rej(err);
      else res(`El archivo tabla-${base}.txt se creó con exito`);
    });
  });
};

const leerTabla = (base, limite) => {
  return new Promise((res, rej) => {
    let temp,
      newData = "";

    if (isNaN(base) || isNaN(limite)) {
      rej(`La "base" o el "limite" no son correctos`);
      return;
    }

    fs.readFile(`tablas/tabla-${base}.txt`, (err, data) => {
      if (err) {
        rej(`No se encontro el archivo ${err}`);
        return;
      }

      temp = data.toString().split("\n");

      for (let i = 0; i < limite; i++) {
        if (temp[i]) newData += `${temp[i]}\n`;
      }

      res(newData.toString());
    });
  });
};

module.exports = {
  crearTabla,
  leerTabla,
};
