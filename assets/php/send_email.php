<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $telefone = addslashes($_POST['telefone']);
    $assunto = addslashes($_POST['assunto']);
    $mensagem = addslashes($_POST['mensagem']);

    $destino = "bruno2403moreira@gmail.com";

    $corpoEmail = "Telefone: " . $telefone . "\n" . "Mensagem: " . $mensagem;

    $headers = "From: $email" . "\r\n" . 
               "Reply-To: $email" . "\r\n" . 
               "X-Mailer: PHP/" . phpversion();

    if (mail($destino, $assunto, $corpoEmail, $headers)) {
        echo 'E-mail enviado com sucesso!';
    } else {
        echo 'Erro ao enviar e-mail, tente novamente.';
    }
} else {
    echo 'Método de requisição inválido.';
}
?>
