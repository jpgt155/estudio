## HTML5 Tags avanzados


### `<form>`
* **Descripción:** Se utiliza para crear un formulario en una página web. Un formulario puede contener campos de entrada como textos, opciones y botones, y se usa para recopilar información del usuario.

**Usado cuando:** Quieres recoger datos de los usuarios, como para enviar un formulatio dee contacti, durante el registro en un sitio con usiario/mail y contraseña, hacer encuestas, o cuando los usuarios deben ingresar información para buscar algo.  

* **Ejemplo:**  
```html
<form action="/submit_form" method="POST">
  <label for="name">Nombre:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Enviar">
</form>
```

### `<video>`
* **Descripción:** Se utiliza para incrustar contenido de video en una página web. Este tag permite a los desarrolladores añadir videos que pueden reproducirse directamente en el navegador, con controles como reproducir, pausar, y ajustar el volumen.  

* **Usado cuando:** Quieres mostrar un video en tu sitio web, como tutoriales, presentaciones o contenido de entretenimiento.  

* **Ejemplo:**  
```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Tu navegador no soporta el elemento de vídeo. <!-- Esta línea es para mostrarle un mensaje a los usuarios usando navegadores viejos sin soporte HTML5 -->
</video>
```

### `<audio>`
* **Descripción:** Permite incrustar sonidos o música en una página web. Similar al tag <video>, pero específicamente para archivos de audio.

* **Usado cuando:**: Quieres añadir elementos de audio a tu sitio, como música de fondo, efectos de sonido, o podcasts.

* **Ejemplo:**
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Tu navegador no soporta el elemento de audio. <!-- Esta línea es para mostrarle un mensaje a los usuarios usando navegadores viejos sin soporte HTML5 -->
</audio>
```
### `<article>`
* **Descripción:** Usado para contenido que se sostiene por sí solo y podría ser visto o distribuido de manera independiente, como los posts de un blog. Se pueden usar como los contenedores rectangulares que muestran 

* **Usado cuando:** Tienes un texto, una noticia o cualquier otro contenido que tiene sentido por sí mismo, fuera del contexto del resto de la página.  

* **Ejemplo:**  
```html
<article>
  <h2>Cómo empezar en HTML</h2>
  <p>Aprender HTML es más fácil de lo que piensas.</p>
</article>
```
