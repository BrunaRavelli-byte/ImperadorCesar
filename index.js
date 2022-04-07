var encryptBtn = document.getElementById('encrypt-btn')
var eInput = document.getElementById('encryptedInput-1')
var pInput = document.getElementById('plainInput')
var inputs = [eInput, pInput]
var copyBnt = document.getElementById('copyToClipBoard')

inputs.forEach( input => {
  input.oninput = () => {
    input.value = input.value.toUpperCase()
  }
})

function encrypt() {
  var pInput = document.getElementById('plainInput').value;
  var solucionador = ''
  var shiftInput = parseInt(document.getElementById('shiftInput').value)

  for (var i = 0; i < pInput.length; i++){
    var ascii_num = pInput[i].charCodeAt()
    var soma = ascii_num + shiftInput
    soma >= 65 && soma <=90 ? solucionador += String.fromCharCode(soma) : soma > 90 ? solucionador += String.fromCharCode(65 + (soma & 91)) : solucionador += pInput[i]
  }
  eInput.value = solucionador
}
function copyText(){
  eInput.select()
  eInput.setSelectionRange(0,99999)
  document.execCommand('copy')
  alert (`copied to clipboard: ${eInput.value}`)
}
copyBnt.addEventListener('click', copyText)
encryptBtn.addEventListener('click', encrypt)

