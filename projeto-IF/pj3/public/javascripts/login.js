var log = document.getElementById("login");
var reg = document.getElementById("register");
var button = document.getElementById("btn")

function register() {
    log.style.left = "-400px"
    reg.style.left = "50px"
    button.style.left = "110px"
}

function login() {
    log.style.left = "50px"
    reg.style.left = "450px"
    button.style.left = "0"
}

// pegar dados do usuario

async function getUserData() {
    try {
        const response = await fetch('http://localhost:3000/getUserData'); // Substitua pela sua rota real
        const userData = await response.json();

        // Atualize os elementos HTML com os dados do usuário
        document.getElementById('profileImage').src = userData.profileImage;
        document.getElementById('profileName').innerText = userData.username;

    } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
    }
}

// enviar form
function enviarform(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    var nome = document.getElementById("register").elements["Nome"].value;
    var email = document.getElementById("register").elements["Email"].value;
    var senha = document.getElementById("register").elements["senha"].value;
    var paisSelecionado = document.querySelector('.icon.selected img').alt;

    // Aqui você pode adicionar a lógica para enviar esses dados ao servidor, por exemplo, usando uma solicitação AJAX.

    // Exemplo de como você pode usar a função fetch para enviar os dados para um servidor (substitua a URL pelo seu endpoint real):
    fetch('http://localhost:3200/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
            pais: paisSelecionado,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Aqui você pode lidar com a resposta do servidor, por exemplo, exibir uma mensagem de sucesso
        console.log('Sucesso:', data);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}

// editar usuario

const editarUser = async (event) =>{
    event.preventDefault()
        
        const editUser = {
          username: event.target.nome.value,
          email: event.target.profissao.value,
          senha: event.target.localizacao.value,
          photo: event.target.nomeExibicao.value
        }
        
        const response = await fetch('http://localhost:3200/users',{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(editUser)
        })
  
        if(response.ok){
          const data = await response.json()
          alert(data.success)
          setShowModal(false)
          setUsers([...users, data.user])
        }
      }  

      // autenticar login
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