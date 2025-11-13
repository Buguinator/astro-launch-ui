<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
// Configuración de la API de Resend
require_once __DIR__ . '/vendor/autoload.php'; // Asegúrate de que el SDK de Resend esté instalado

// Clave de la API de Resend
$resendApiKey = 're_MCAqTa2b_222RM3EkSjz5mPqWi5QarqzB'; // Reemplaza con tu clave real

// Inicializar el cliente de Resend
$resend = Resend::client($resendApiKey);

// Verificar que la solicitud sea POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo "Método no permitido.";
    exit;
}

// Obtener y validar los datos del formulario
$nombre = $_POST['nombre'] ?? '';
$correo = $_POST['correo'] ?? '';
$telefono = $_POST['telefono'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';

// Validar campos obligatorios
if (empty($nombre) || empty($correo) || empty($telefono)) {
    http_response_code(400);
    echo "Por favor, completa todos los campos obligatorios.";
    exit;
}

// Validar formato de correo
if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Por favor, ingresa un correo electrónico válido.";
    exit;
}

// Configurar el contenido del correo
$subject = "Nuevo mensaje de contacto de $nombre";
$htmlContent = "
    <h1>Nuevo mensaje de contacto | Skin and Shape</h1>
    <p><strong>Nombre:</strong> $nombre</p>
    <p><strong>Correo:</strong> $correo</p>
    <p><strong>Teléfono:</strong> $telefono</p>
    <p><strong>Mensaje:</strong></p>
    <p>$mensaje</p>
";

// Enviar el correo usando Resend
try {
    $resend->emails->send([
        'from' => 'onboarding@resend.dev', // Reemplaza con tu correo verificado en Resend
        'to' => 'theskinandshape@gmail.com', // Reemplaza con el correo del destinatario
        'subject' => $subject,
        'html' => $htmlContent
    ]);

    http_response_code(200);
    echo "Mensaje enviado con éxito.";
} catch (Exception $e) {
    http_response_code(500);
    echo "Error al enviar el mensaje: " . $e->getMessage();
}
?>
