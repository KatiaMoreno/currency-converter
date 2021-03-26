
function calc_total() {
    var valorEmEuros = parseFloat(document.getElementById('iQtdReais').value)

    var totalEmReais = valorEmEuros * 6.65
    var valoremReaisDecimais = totalEmReais.toFixed(2)
  
     document.getElementById('iTtlEuros').value = valoremReaisDecimais

     var valorEmDollar = parseFloat(document.getElementById('iQtdReais').value)
    totalEmReais = valorEmDollar * 5.65
    valoremReaisDecimais = totalEmReais.toFixed(2)
  
     document.getElementById('iTtlDollar').value = valoremReaisDecimais

     var valorEmPounds = parseFloat(document.getElementById('iQtdReais').value)
     totalEmReais = valorEmPounds * 7.76 
     valoremReaisDecimais = totalEmReais.toFixed(2)
   
      document.getElementById('iTtlPound').value = valoremReaisDecimais

}