## HTML5 Tags esenciales

### `<html>`
* **Descripción:** Este tag marca el inicio y el fin de tu página web. Es como el contenedor principal que sostiene todos los demás elementos de la página.  

* **Usado cuando:** Siempre al empezar a escribir tu página web para decirle al navegador que lo que sigue debe ser interpretado como HTML.  

* **Ejemplo:**  
```html
<!DOCTYPE html>
<html>...</html>
```

### `<head>`
* **Descripción:** Es la parte de la página que no ves directamente cuando entras a un sitio web. Aquí se colocan cosas como el título de la página y los enlaces a estilos y comportamientos adicionales.  

* **Usado cuando:** Quieres incluir información técnica que ayuda a configurar tu página o enlazar recursos externos.  

* **Ejemplo:**  
```html
<head>
  <title>Título de mi página</title>
</head>
```

### `<body>`
* **Descripción:** Contiene todo lo que puedes ver directamente en la página web, como textos, imágenes, y botones.  

* **Usado cuando:** Quieres agregar elementos que las personas que visitan tu página podrán ver y con los que podrán interactuar.  

* **Ejemplo:**  
```html
<body>
  <p>¡Bienvenidos a mi sitio web!</p>
</body>
```

### `<header>`
* **Descripción:** Sirve como la "cabeza" o entrada de tu página o una sección de ella, típicamente contiene títulos y menús de navegación.  

* **Usado cuando:** Necesitas un espacio para poner logos, títulos o enlaces importantes al principio de tu página o sección.  

**Ejemplo:**  
```html
<header>
  <h1>Mi Sitio Web</h1>
</header>
```

### `<main>`
* **Descripción:** Define la parte central y más importante de tu página, donde pones el contenido principal que quieres que tus visitantes vean.  

* **Usado cuando:** Tienes información clave que quieres destacar dentro de tu sitio web, como el contenido de un artículo o los servicios que ofreces.  

* **Ejemplo:**  
```html
<main>
  <p>Aquí va el contenido importante de mi página.</p>
</main>
```

### `<nav>`
* **Descripción:** Agrupa los enlaces principales de tu sitio web, facilitando la navegación entre diferentes páginas o secciones.  

* **Usado cuando:** Quieres que los visitantes de tu página puedan moverse fácilmente de una sección a otra.  

* **Ejemplo:**  
```html
<nav>
  <a href="#inicio">Inicio</a> | <a href="#servicios">Servicios</a>
</nav>
```

### `<section>`
* **Descripción:** Utilizado para organizar tu contenido en bloques temáticos claramente definidos dentro de tu página.

* **Usado cuando:** Tienes diferentes temas o categorías de contenido que necesitas separar visualmente en tu página.  

* **Ejemplo:**  
```html
<section>
  <h2>Historia</h2>
  <p>Nuestra historia comenzó en...</p>
</section>
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

* Ejemplos visuales de los artículos <a href="https://html5doctor.com/the-article-element/" target="_blank">aquí<a> y <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article" target="_blank">aquí<a>



### `<h1>`, `<h2>`, ...
* **Descripción:** Estos son los títulos y subtítulos de tu página. `<h1>` es el más grande e importante, y los números más altos (`<h2>`, `<h3>`, ...) son para sub-títulos menos importantes.  

* **Usado cuando:** Necesitas estructurar tu contenido de manera clara, marcando la jerarquía de la información.  

* **Ejemplo:**  
```html
<h1>Bienvenido</h1>
<h2>Nuestros Servicios</h2>
```

### `<p>`
* **Descripción:** Define un párrafo de texto, que es un bloque básico de contenido en tu página.  

* **Usado cuando:** Simplemente necesitas agregar texto en forma de narración o información.  

* **Ejemplo:**  
```html
<p>Este es un ejemplo de un párrafo en una página web.</p>
```

### `<ul>` and `<ol>`
* **Descripción:** `<ul>` es una lista sin orden específico, y `<ol>` es una lista con orden, como pasos en una receta o un ranking.  

* **Usado cuando:** Quieres mostrar información en forma de lista, ya sea sin número específico (`<ul>`) o con una secuencia numérica (`<ol>`).  

* **Ejemplo:**  
```html
<ul>
  <li>Manzana</li>
  <li>Banana</li>
</ul>
<ol>
  <li>Primer paso</li>
  <li>Segundo paso</li>
</ol>
```

### `<li>`
* **Descripción:** Es cada elemento individual dentro de una lista (`<ul>` o `<ol>`).  

* **Usado cuando:** Estás listando varios puntos o elementos y cada uno necesita ser identificado como parte de una lista.  

* **Ejemplo:**  
```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>
```

### `<a>`
* **Descripción:** Crea un enlace a otra página, un archivo descargable, o cualquier otro recurso en internet. Además, el uso de `#` en el atributo `href` permite enlazar a un punto específico de la página, identificado por un ID único.

* **Usado cuando:** Quieres conectar tu página con otra página o recurso, o permitir a los visitantes acceder a otros lugares haciendo clic en el texto o la imagen. También se usa para mover al usuario a una sección específica de la página actual o de otra página.  

* **Ejemplo:**  
```html
<a href="https://www.ejemplo.com">Visita este sitio</a>
<a href="#seccion2">Ir a la Sección 2</a>

<section id="seccion2">
    <h2>Sección 2</h2>
    <p>Contenido de la Sección 2 aquí.</p>
</section>
```

### `<table>`
* **Descripción:** Organiza datos en filas y columnas, como una planilla en Excel.  

* **Usado cuando:** Necesitas mostrar información estructurada, como horarios, precios o características en formato de tabla.  

* **Ejemplo:**  
```html
<table>
  <tr>
    <th>Producto</th>
    <th>Precio</th>
  </tr>
  <tr>
    <td>Café</td>
    <td>$1.200</td>
  </tr>
</table>
```

### `<footer>`
* **Descripción:** Es la parte inferior de tu página, generalmente usada para información de contacto, derechos de autor, y enlaces legales o de interés menor.  

* **Usado cuando:** Quieres incluir detalles que deben estar disponibles pero no son parte del contenido principal, como derechos de autor o enlaces a políticas de privacidad.  

* **Ejemplo:**  
```html
<footer>
  <p>© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
</footer>
```

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
