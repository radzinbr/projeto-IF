function autenticarlogin(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtenha os valores dos campos do formulário
    const username = document.getElementById("loginForm").elements[0].value;
    const senha = document.getElementById("loginForm").elements[1].value;

    // Aqui você pode adicionar a lógica para enviar esses dados ao servidor, por exemplo, usando uma solicitação AJAX.

    // Exemplo de como você pode usar a função fetch para enviar os dados para um servidor (substitua a URL pelo seu endpoint real):
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            senha: senha,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Aqui você pode lidar com a resposta do servidor, por exemplo, exibir uma mensagem de sucesso ou redirecionar para outra página.
        console.log(data);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}