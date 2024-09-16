<?php
  //Variáveis
  $email = $_POST['email'];
  $telefone = $_POST['telefone'];
  $assunto = $_POST['assunto'];
  $mensagem = $_POST['mensagem'];

  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

  //Compo E-mail
  $arquivo = "
    <html>
        <p><b>E-mail: </b>$email</p>
        <p><b>Telefone: </b>$telefone</p>
        <p><b>Assunto: </b>$assunto</p>
        <p><b>Mensagem: </b>$mensagem</p>
        <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
  ";

  //Emails para quem será enviado o formulário
  $destino = "bruno2403moreira@gmail.com";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=utf-8\n";
  $headers .= "From: $email";

  //Enviar
  mail($destino, $assunto, $arquivo, $headers);
  
  echo "E-mail Enviado com Sucesso!";
?>
