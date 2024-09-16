<?php
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $assunto = addslashes($_POST['telefone']);
    $mensagem = addslashes($_POST['mensagem']);

    $destino = "vendas@axsecurity.com.br";

    $corpoEmail = "Telefone: " . $telefone . "\n" . "Mensagem: " . $mensagem;

    $cbc = "From: $email" . "\n" . "Reply-to: " . $email . "\n" . "X=Mailer:PHP" . phpversion();

    if(mail($destino, $assunto, $corpoEmail, $cbc)){
        echo('E-mail enviado com sucesso!');
    }
    else{
        echo('Erro ao enviar E-mail, tente novamente.')
    }
?>