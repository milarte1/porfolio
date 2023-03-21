function Formulario () {
    return (
        <div className="Formulario">
          <section className="base-formulario">
       <h2>Dejame tus comentarios</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
        <label for="comment">Comentario:</label>
        <textarea id="comment" name="comment" required></textarea>
        <button type="submit">ENVIAR</button>
      </form>
      </section>
        </div>
        );
}

export default Formulario;