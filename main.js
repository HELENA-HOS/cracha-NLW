const linksSocialMedia = {
  github: 'HELENA-HOS',
  youtube: 'RocketSeat',
  instagram: 'helena_oliveirasilva',
  facebook: '100003354873196',
  linkedin: 'in/helena-oliveira-silva/'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = "https://www."+social+".com/"+ linksSocialMedia[social]

    //[0] se refere à qual dos "filhos de li deve ser acessado"
  }        
}

/*userName.textContent = 'Marcelo'
  trecho acima simplifica a forma abaixo 
  document.getElementById('userName').textContent = "Marcelo" */

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  
  fetch(url)
    .then(resposta => resposta.json())
    .then(data => {
    userName.textContent = data.name, 
    userBio.textContent = data.bio,
    userLinkGithub.href = data.html_url,
    userLogin.textContent = data.login,
    userPhoto.src = data.avatar_url
    }) 
    
}

getGitHubProfileInfos()

/* ARROW FUNCTION
 Recurso que permite criar função de forma anônima e reduzida

 Ex.:

 function nomeDaFuncao (argumento){

 }

 Em arrow:

 argumento => {

 }

 Caso não haja argumento:

 () => {   
 }*/