$('#btnComparar').on('click', function () {
    const datoOriginal = $('#Original').text();
    const datoModificado = $('#Modificado').text();

    const diferencias = encontrarDiferencias(datoOriginal, datoModificado);
    mostrarDiferencias(diferencias);
});

function encontrarDiferencias(texto1, texto2) {
    return Diff.diffWords(texto1, texto2);
}

function mostrarDiferencias(diferencias) {
    const divOriginal = $('#Original');
    const divModificado = $('#Modificado');

    let htmlOriginal = '';
    let htmlModificado = '';

    diferencias.forEach(part => {
        if (part.added) {
            htmlModificado += `<span class="diff-added">${part.value}</span>`;
        } else if (part.removed) {
            htmlOriginal += `<span class="diff-removed">${part.value}</span>`;
        } else {
            htmlOriginal += part.value;
            htmlModificado += part.value;
        }
    });

    divOriginal.html(htmlOriginal);
    divModificado.html(htmlModificado);
}
