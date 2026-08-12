const btnEnviar = document.getElementById('btnEnviar');
const cajaAlerta = document.getElementById('cajaAlerta');
if (btnEnviar) {
  btnEnviar.addEventListener('click', function() {
    cajaAlerta.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Formulario enviado correctamente</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
    document.getElementById('formularioUmbrella').reset();
  });
}