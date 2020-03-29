## Tecnologias utilizadas

- ReactJs
- React Native
- NodeJs
- [Netlify](https://www.netlify.com/) 
- [Heroku](https://www.heroku.com/)
- [Expo](https://expo.io/)

## Ferramentas Utilizadas

- [Vs Code](https://code.visualstudio.com/download)
- [Insomnia](https://insomnia.rest/download/)

## Informações

O projeto criando seguindo as instruções lecionadas pelo pessoal da RockeSeat, na semana OmniStack 11.0. Com o intuito de levar o aprendizado dessa Stack.
A aplicação consiste, em cadastrar uma ONG, onde ela seria capaz de atribuir incidentes, para que pessoas pudessem contribuir com aquela causa, dai vem esse sugestivo nome, Be The Hero

## Funcionalidades

> 1 - Rotas de Criação

Primeiramente foi feito o deploy, na plataforma Heroku, tal api pode ser acessada no link abaixo:
- [BeHeros](https://beheros.herokuapp.com)

1. Criar Ongs */ongs*
Utilizado o metodo Http Post
			{
				"name": "ProjectCoronga",
				"email": "josuebatistam1@gmail.com",
				"whatsapp": "85987474842",
				"city": "Fortaleza",
				"uf": "CE"
			}

2. Listar Ongs */ongs*
Utilizado o metodo Http Get

3. Criar Incidents */incidents*
Utilizado o metodo Http Post
e o Header de Authorization com o id da ong

		{
			"title": "Caso 1",
			"description": "Morbidus",
			"value": 12223
		}

4. Deletar Incidents */incidents/id*
Utilizado o metodo Http Put
e o Header de Authorization com o id da ong

5. Listar Incidents */incidents*
Utilizado o metodo Http Get

6. Login  */session*
Utilizado o metodo Http Post
		{
			"id": "013d5051"
		}

6. Listar Incidents daquela Ong */profile*
Utilizado o metodo Http Get
e o Header de Authorization com o id da ong

> 2 - Front

Foi feito o deploy na plataforma Netlify, e o ambiente web pode ser visto no link abaixo:

- [BeHeros](https://beheros.netlify.com/)

> 3 - Mobile

Foi gerado o apk pelo Expo, você pode baixar no link abaixo:

- [BeHeros](https://beheros.netlify.com/)


## Como executar o projeto

Caso queira executar a aplicação em sua maquina siga os seguintes passos:
1 - Após clonar o projeto, entre em cada pasta e execute o seguinte comando, para baixar as dependências:

	npm i

2 - Mude o endereço da api para localhost nas seguintes pastas [Front](https://github.com/Josuebmota/BeTheHero/blob/master/frontend/src/services/api.js) e [Mobile](https://github.com/Josuebmota/BeTheHero/blob/master/mobile/src/services/api.js)

3 - Após isso execute primeiro o Back e em seguida o Front ou Mobile
