<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Certifique-se de que o caminho está correto

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Coletar dados do formulário
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $nome = filter_var($_POST['nome'], FILTER_SANITIZE_STRING);
    $numero = filter_var($_POST['numero'], FILTER_SANITIZE_STRING);
    $assunto = filter_var($_POST['assunto'], FILTER_SANITIZE_STRING);
    $mensagem = filter_var($_POST['mensagem'], FILTER_SANITIZE_STRING);

    // Validar o e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'E-mail inválido.';
        exit;
    }

    // Criar uma nova instância do PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'mail.axsecurity.com.br';
        $mail->SMTPAuth = true;
        $mail->Username = 'vendas@axsecurity.com.br'; // E-mail do remetente
        $mail->Password = 'axsecurity@2023'; // Senha do remetente
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465; // Porta do SMTP

        // Remetente e destinatário
        $mail->setFrom($mail->Username, $nome); // E-mail e nome do usuário
        $mail->addAddress('vendas@axsecurity.com.br'); // E-mail do destinatário

        // Conteúdo do e-mail
        $mail->isHTML(true);
        $mail->Subject = htmlspecialchars($assunto);
        $mail->Body    = "<strong>Nome:</strong> " . htmlspecialchars($nome) . "<br>
                          <strong>Telefone:</strong> " . htmlspecialchars($numero) . "<br>
                          <strong>Mensagem:</strong><br>" . nl2br(htmlspecialchars($mensagem));
        $mail->AltBody = "Nome: " . htmlspecialchars($nome) . "\nEmail: " . htmlspecialchars($email) . "\nTelefone: " . htmlspecialchars($numero) . "\nMensagem:\n" . htmlspecialchars($mensagem);

        // Enviar o e-mail
        $mail->send();
        echo 'Mensagem enviada com sucesso!';
    } catch (Exception $e) {
        echo "Mensagem não foi enviada. Erro: {$mail->ErrorInfo}";
    }
} else {
    echo 'Método de requisição inválido.';
}
?>
