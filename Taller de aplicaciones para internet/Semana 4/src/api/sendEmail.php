<?php
header('Content-Type: application/json'); // Define el tipo de contenido como JSON para la respuesta

// Recolecta datos del formulario
$nombre = $_POST['nombre'] ?? 'Nombre'; // Asigna un nombre por defecto si no se proporciona
$mensaje = $_POST['mensaje'] ?? 'Texto del artículo'; // Asigna un mensaje por defecto si no se proporciona

// Preparación para enviar correo electrónico
$destino = 'jpgt155@gmail.com'; // Dirección del destinatario del correo, cambiar al destinatario real
$asunto = 'Nuevo mensaje de contacto de ' . $nombre; // Asunto del correo que incluye el nombre del remitente
$cuerpo = "Has recibido un nuevo mensaje de: $nombre\n\n" . $mensaje; // Cuerpo del correo que incluye el nombre y mensaje del remitente
$encabezados = "From: no-reply@the-only.great-site.net"; // Encabezado del correo, cambiar al remitente real

// Envío del correo
if (mail($destino, $asunto, $cuerpo, $encabezados)) {
    // Si el correo se envía exitosamente, devuelve un mensaje de éxito
    echo json_encode(['mensaje' => 'Correo enviado exitosamente!']);
} else {
    // Si el correo falla al enviarse, devuelve un mensaje de error
    echo json_encode(['mensaje' => 'Fallo al enviar el correo.']);
}
?>
