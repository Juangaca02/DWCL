const fecha = (cadena) => {
  fechaActual = new Date().getFullYear();
  fechaInicio = new Date(cadena).getFullYear();

  return {
    diferencia: Math.abs(fechaActual - fechaInicio),
    fechaActual,
    fechaInicio,
  };
};

const escribir = (callback) => {
  document.write(
    `Hay una diferencia de ${callback.diferencia} años entre ${callback.fechaInicio} y ${callback.fechaActual}`
  );
};
