const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let respuesta = await axios.get("http://localhost:5555/Pilares"),
            json = await respuesta.data;

        console.log(json);

        json.forEach((el) => {
            $template.querySelector(".categoria").textContent = el.categoria;
            $template.querySelector(".nombre").textContent = el.nombre;
            $template.querySelector(".estiloCombate").textContent = el.estiloCombate;

            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.categoria = el.categoria;
            $template.querySelector(".edit").dataset.nombre = el.nombre;
            $template.querySelector(".edit").dataset.estiloCombate = el.estiloCombate;

            $template.querySelector(".delete").dataset.id = el.id;
            $template.querySelector(".delete").dataset.nombre = el.nombre;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragment);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message}</b></p>`
        );
    }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
            //Create - POST
            try {
                let options = {
                    method: "POST",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    data: JSON.stringify({
                        categoria: e.target.categoria.value,
                        nombre: e.target.nombre.value,
                        estiloCombate: e.target.estiloCombate.value,
                    })
                };
                let respuesta = await axios("http://localhost:5555/Pilares", options);
                let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        } else {
            try {
                let options = {
                    method: "PUT",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    data: JSON.stringify({
                        categoria: e.target.categoria.value,
                        nombre: e.target.nombre.value,
                        estiloCombate: e.target.estiloCombate.value,
                    }),
                };
                let respuesta = await axios(`http://localhost:5555/Pilares/${e.target.id.value}`, options);
                let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        }
        $form.categoria.value = null;
        $form.nombre.value = null;
        $form.estiloCombate.value = null;
        $form.id.value = null;
    }
});

d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
        $titulo.textContent = "Editar Pilar";
        $form.categoria.value = e.target.dataset.categoria;
        $form.nombre.value = e.target.dataset.nombre;
        $form.estiloCombate.value = e.target.dataset.estiloCombate;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(
            `¿Estás seguro de eliminar a ${e.target.dataset.nombre}?`
        );

        if (isDelete) {
            try {
                let options = {
                    method: "DELETE",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                };
                let respuesta = await axios(`http://localhost:5555/Pilares/${e.target.dataset.id}`, options);
                let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                alert(`Error ${err.status}: ${message}`);
            }
        }
    }
});