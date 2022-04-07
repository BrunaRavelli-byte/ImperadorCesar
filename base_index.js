function encriptar(elemento){
    var palavra = document.getElementsByTagName('input')[0].value;
    var palavraComCodificacao = btoa(palavra);
    document.getElementById('encriptacao').innerHTML = palavraComCodificacao;
  };
  
  function desencriptar(elemento){
    var palavra = document.getElementsByTagName('input')[0].value;
    var palavraComDecodificacao = atob(palavra);
    document.getElementById('encriptacao').innerHTML = palavraComDecodificacao;
  };

