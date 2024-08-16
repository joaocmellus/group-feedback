function carregarComentarios(userId) {
  const userComents = funcionarios.filter(
    (comentario) => comentario.userId === userId
  );
  mostrarComentarios(userComents);
}

function mostrarComentarios(comentarios) {
  const positivo = document.getElementById("positivo");
  const negativo = document.getElementById("negativo");

  positivo.innerHTML = "";
  negativo.innerHTML = "";

  comentarios.forEach((comentario) => {
    const li = document.createElement("li");
    li.textContent = comentario.comentario;

    if (comentario.positivo) {
      positivo.appendChild(li);
    } else {
      negativo.appendChild(li);
    }
  });
}
