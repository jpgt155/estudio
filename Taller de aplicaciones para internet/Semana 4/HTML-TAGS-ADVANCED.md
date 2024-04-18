## HTML Tags avanzados

### `<video>`
**Descripción:** Se utiliza para incrustar contenido de video en una página web. Este tag permite a los desarrolladores añadir videos que pueden reproducirse directamente en el navegador, con controles como reproducir, pausar, y ajustar el volumen.  
**Usado cuando:** Quieres mostrar un video en tu sitio web, como tutoriales, presentaciones o contenido de entretenimiento.  
**Ejemplo:**  
```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Tu navegador no soporta el elemento de vídeo.  <!-- Esta línea le muestra un mensaje de error al usuario que usa un navegador antigüo sin soporte para HTML5 -->
</video>
```

### `<audio>`
* **Descripción:** Permite incrustar sonidos o música en una página web. Similar al tag <video>, pero específicamente para archivos de audio.

* **Usado cuando:** Quieres añadir elementos de audio a tu sitio, como música de fondo, efectos de sonido, o podcasts.

* **Ejemplo:**
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Tu navegador no soporta el elemento de audio.  <!-- Esta línea le muestra un mensaje de error al usuario que usa un navegador antigüo sin soporte para HTML5 -->
</audio>
```

