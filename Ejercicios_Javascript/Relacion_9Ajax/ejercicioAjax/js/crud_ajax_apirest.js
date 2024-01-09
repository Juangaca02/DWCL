const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const ajax = (options) => {
    let { url, method, success, error, data } = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            success(json);
        } else {
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
}

const getAll = () => {
    ajax({
        url: "http://localhost:5555/Lunas",
        success: (respuesta) => {
            respuesta.forEach(el => {
                $template.querySelector(".categoria").textContent = el.categoria;
                $template.querySelector(".nombre").textContent = el.nombre;

                $template.querySelector(".edit").dataset.id = el.id;
                $template.querySelector(".edit").dataset.categoria = el.categoria;
                $template.querySelector(".edit").dataset.nombre = el.nombre;

                $template.querySelector(".delete").dataset.id = el.id;
                $template.querySelector(".delete").dataset.nombre = el.nombre;

                let $clone = d.importNode($template, true);

                $fragment.appendChild($clone);
            });
            $table.querySelector("tbody").appendChild($fragment);
        },
        error: (err) => {
            $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
        }
    })
}
d.addEventListener("DOMContentLoaded", getAll);
d.addEventListener("submit", e => {
    if (e.target === $form) {
        e.preventDefault();
        if (!e.target.id.value) {
            ajax({
                url: "http://localhost:5555/Lunas",
                method: "POST",
                success: (respuesta) => location.reload(),
                error: (err) => {
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`)
                },
                data: {
                    categoria: e.target.categoria.value,
                    nombre: e.target.nombre.value
                }
            });
        } else {
            ajax({
                url: `http://localhost:5555/Lunas/${e.target.id.value}`,
                method: "PUT",
                success: (respuesta) => { location.reload() },
                error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
                data: {
                    categoria: e.target.categoria.value,
                    nombre: e.target.nombre.value
                }
            });
        }

        $form.categoria.value = null;
        $form.nombre.value = null;
        $form.id.value = null;
    }
});

d.addEventListener("click", e => {
    if (e.target.matches(".edit")) {
        $titulo.textContent = "Editar Categoria de Lunas";
        $form.categoria.value = e.target.dataset.categoria;
        $form.nombre.value = e.target.dataset.nombre;
        $form.id.value = e.target.dataset.id;
    }
    if (e.target.matches(".delete")) {
        let isDelete = confirm(`¿Estás seguro de eliminar a ${e.target.dataset.nombre}?`);
        if (isDelete) {
            ajax({
                url: `http://localhost:5555/Lunas/${e.target.dataset.id}`,
                method: "DELETE",
                success: (respuesta) => location.reload(),
                error: (err) => alert(err)
            });
        }
    }
})