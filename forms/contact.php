<?php

// 1) CONFIGURACIÓN — cambia esto a tu correo del mismo dominio que tu hosting
$to        = 'estudiogaf.web@gmail.com'; // Destino final (puede ser Gmail/Outlook)
$from      = 'contacto@estudiogaf.mx';             // Remitente del mismo dominio (mejor para SPF/DKIM)
$from_name = 'Formulario Web GAF';                  // Nombre que verás como remitente
$subject_prefix = 'Nuevo mensaje desde la web: ';   // Se antepone al asunto que escribe el usuario

// 2) VALIDACIONES BÁSICAS
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  exit('Método no permitido');
}

$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $subject === '' || $message === '') {
  http_response_code(400);
  exit('Faltan campos obligatorios.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  exit('El correo no es válido.');
}

// 3) ARMA EL MENSAJE
$ip      = $_SERVER['REMOTE_ADDR'] ?? 'desconocida';
$ua      = $_SERVER['HTTP_USER_AGENT'] ?? 'desconocido';
$bodyTxt = "Has recibido un mensaje del formulario de contacto:\n\n"
         . "Nombre: $name\n"
         . "Email: $email\n"
         . "Asunto: $subject\n"
         . "Mensaje:\n$message\n\n"
         . "----\nIP: $ip\nNavegador: $ua\n";

$bodyHtml = nl2br(htmlspecialchars($bodyTxt, ENT_QUOTES, 'UTF-8'));

// 4) ENCABEZADOS (From del dominio y Reply-To del usuario)
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: ".mb_encode_mimeheader($from_name)." <{$from}>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";

// 5) ENVÍO
$ok = @mail($to, $subject_prefix.$subject, $bodyHtml, $headers);

// 6) RESPUESTA PARA validate.js
if ($ok) {
  // ¡IMPORTANTE! validate.js espera literalmente 'OK'
  // para mostrar el mensaje de éxito.
  echo 'OK';
} else {
  http_response_code(500);
  echo 'No se pudo enviar el correo. Revisa la configuración de correo del servidor.';
}
