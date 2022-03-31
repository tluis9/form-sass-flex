document.getElementById("send").addEventListener("click", function(event) {
    
    event.preventDefault()
    const inputName = document.getElementById("name") 
    const inputEmail = document.getElementById("email") 
    let message = `Obrigado, ${
        inputName.value
    }! Agradecemos sua resposta. Uma cópia das respostas foi enviada para o email ${
        inputEmail.value
    }`
    alert( message )

}, false)