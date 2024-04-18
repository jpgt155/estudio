### `<form>`
**Descripción:** Se utiliza para crear un formulario en una página web. Un formulario puede contener campos de entrada como textos, opciones y botones, y se usa para recopilar información del usuario.  

**Usado cuando:** Quieres recoger datos de los usuarios, como durante el registro en un sitio, hacer encuestas, o cuando los usuarios deben ingresar información para buscar algo.

**Ejemplo:**  
```html
<form action="/submit_form" method="POST">
  <label for="name">Nombre:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Enviar">
</form>
```

`<label>`
* **Descripción:**  Define una etiqueta para un elemento `<input>` de un formulario, proporcionando una descripción clara de lo que se espera que el usuario introduzca en el campo asociado.

* **Usado cuando:** Necesitas identificar claramente los diferentes campos de un formulario, lo que ayuda a mejorar la accesibilidad y la experiencia del usuario.

* **Ejemplo:** 
```html
<label for="email">Correo Electrónico:</label>
<input type="email" id="email" name="email">
```

`<input>`
* **Descripción:** Se utiliza para crear un campo donde los usuarios pueden ingresar datos. Los tipos de `<input>` pueden variar desde * textos simples hasta botones y casillas de verificación.

* **Usado cuando:** Quieres que los usuarios ingresen información en un formulario, como escribir su nombre, elegir una contraseña, o seleccionar una opción entre varias.

* **Ejemplo:**
```html
<!-- Text Input -->
<input type="text" id="username" name="username">

<!-- Submit Button -->
<input type="submit" value="Registrar">
```

### `<video>`
**Descripción:** Se utiliza para incrustar contenido de video en una página web. Este tag permite a los desarrolladores añadir videos que pueden reproducirse directamente en el navegador, con controles como reproducir, pausar, y ajustar el volumen.  

**Usado cuando:** Quieres mostrar un video en tu sitio web, como tutoriales, presentaciones o contenido de entretenimiento.  

**Ejemplo:**  
```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Tu navegador no soporta el elemento de vídeo.
</video>
```

### `<audio>`
* **Descripción:** Permite incrustar sonidos o música en una página web. Similar al tag `<video>`, pero específicamente para archivos de audio.

* **Usado cuando:** Quieres añadir elementos de audio a tu sitio, como música de fondo, efectos de sonido, o podcasts.

* **Ejemplo:**
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Tu navegador no soporta el elemento de audio.
</audio>
```
