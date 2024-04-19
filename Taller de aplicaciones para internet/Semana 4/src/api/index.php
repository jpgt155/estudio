<?php
header('Content-Type: application/json'); // Define el tipo de contenido como JSON

$seccion = $_GET['seccion'] ?? 'todo'; // Obtiene la sección desde la URL o asigna 'todo' si no se proporciona

// Decide la acción basada en el método HTTP utilizado
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        echo obtenerArticulos($seccion); // Obtiene y muestra los artículos de la sección solicitada
        break;
    case 'POST':
        $datos = json_decode(file_get_contents('php://input'), true); // Decodifica los datos recibidos en formato JSON
        echo agregarArticulo($seccion, $datos); // Añade un nuevo artículo a la sección y muestra el resultado
        break;
}

// Función para obtener la ruta del archivo JSON de la sección especificada
function obtenerRutaArchivo($seccion) {
    return "../data/${seccion}.json"; // Devuelve la ruta del archivo de datos
}

// Función para recuperar artículos desde un archivo JSON
function obtenerArticulos($seccion) {
    $rutaArchivo = obtenerRutaArchivo($seccion); // Obtiene la ruta del archivo
    if (file_exists($rutaArchivo)) {
        return file_get_contents($rutaArchivo); // Retorna el contenido del archivo si existe
    } else {
        return json_encode([]); // Retorna un array vacío si el archivo no existe
    }
}

// Función para añadir un nuevo artículo al archivo JSON
function agregarArticulo($seccion, $articulo) {
    $rutaArchivo = obtenerRutaArchivo($seccion); // Obtiene la ruta del archivo
    if (file_exists($rutaArchivo)) {
        $articulos = json_decode(file_get_contents($rutaArchivo), true); // Decodifica el contenido existente del archivo
        array_push($articulos, $articulo); // Añade el nuevo artículo al array de artículos
        file_put_contents($rutaArchivo, json_encode($articulos)); // Guarda el array modificado de vuelta en el archivo
        return json_encode(['exito' => true]); // Retorna un estado de éxito
    } else {
        return json_encode(['exito' => false, 'mensaje' => 'Archivo no encontrado']); // Retorna un estado de error si el archivo no existe
    }
}
?>
