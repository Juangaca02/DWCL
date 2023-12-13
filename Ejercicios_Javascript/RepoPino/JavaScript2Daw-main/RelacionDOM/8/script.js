const cambiarEnlaceBtn = document.getElementById("cambiarEnlace");
const enlaceAlMarca = "http://www.marca.es/";
const enlaceALAs = "http://www.as.com/";
const as = "AS";
const marca = "Marca";

cambiarEnlaceBtn.addEventListener("click", () => {
  const enlace = document.getElementById("enlace");
  if (enlace.href == enlaceAlMarca) {
    enlace.href = enlaceALAs;
    enlace.textContent = as;
  } else {
    enlace.href = enlaceAlMarca;
    enlace.textContent = marca;
  }
});
