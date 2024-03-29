//adicionando o evento de carregamento do documento (html)
document.addEventListener('DOMContentLoaded',(event)=> {

    event.preventDefault();


const form = document.querySelector('form')
form.addEventListener('submit', loadUserData);

//chamando a funçao para carregar os usuarios
loadUserDatalist();

})

function loadUserData(event){
    event.preventDefault();

    let listUser = [] //array - vetores

//capturando os valores e colocando eles dentro de um objeto (userData)
    const userData ={
    
        //capturando os valores e colocando eles dentro das propriedades ou tambem atributos
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value

    }

    if(localStorage.getItem('users')){
           listUser = JSON.parse(localStorage.getItem('users'))
    }
    
    listUser.push(userData)
    localStorage.setItem('users',JSON.stringify(listUser))

    console.log(listUser);
    window.location.reload();
}

const loadUserDatalist = () => {


const tableData = document.getElementById('tableBodyList'); //variavel tbm usada

if (localStorage.getItem('users')){
  const listUser = JSON.parse(localStorage.getItem('users'))//json para objeto

  let template = ""

  listUser.forEach(user =>{
    template +=`
    <tr>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.age}</td>
    </tr>
    `

  });

  tableData.innerHTML = template
}else{
    alert("nenhum usuario cadastrado")
}

}

