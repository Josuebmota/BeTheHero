![](https://user-images.githubusercontent.com/34459397/81734055-5367a600-9469-11ea-9513-266b085751b2.png)

# Semana Omnistack 11.0

Links das etapas do projeto:
> [BackEnd](https://beheros.herokuapp.com)

> [Front](https://beheros.netlify.com/)

> [Mobile](https://drive.google.com/drive/folders/1JLWERA4AshPlNFWyFBJY6hWhxXKiljrY?usp=sharing)

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

O projeto foi criado seguindo as instruções lecionadas pelo pessoal da RockeSeat, na semana OmniStack 11.0. Com o intuito de levar o aprendizado dessas tecnologias.

A aplicação consiste, em cadastrar uma ONG, onde ela seria capaz de atribuir incidentes, para que pessoas pudessem contribuir com aquela causa, dai vem esse sugestivo nome, Be The Hero.

## Funcionalidades

1. Criar Ongs */ongs*

		{
			"name": "Ong",
			"email": "ongs@gmail.com",
			"whatsapp": "999999999",
			"city": "Fortaleza",
			"uf": "CE"
		}

2. Listar Ongs */ongs*

3. Criar Incidents */incidents*
e o Header de Authorization com o id da ong

		{
			"title": "Caso 1",
			"description": "Cachorro abandonado",
			"value": 21
		}
   obs: É necessario utilizar o Header de Authorization com o id da ong


4. Deletar Incidents */incidents/id* <br> obs: É necessario utilizar o Header de Authorization com o id da ong

5. Listar Incidents */incidents*

6. Login  */session*

		{
			"id": "013d5051"
		}

6. Listar Incidents daquela Ong */profile*
Utilizado o metodo Http Get
e o Header de Authorization com o id da ong

## Como executar o projeto

Caso queira executar a aplicação em sua maquina siga os seguintes passos:

1. Após clonar o projeto, entre em cada pasta e execute o seguinte comando, para baixar as dependências:

	npm i

2. Mude o endereço da api para localhost nas seguintes pastas [Front](https://github.com/Josuebmota/BeTheHero/blob/master/frontend/src/services/api.js) e [Mobile](https://github.com/Josuebmota/BeTheHero/blob/master/mobile/src/services/api.js).

3. Após isso execute primeiro o Back e em seguida o Front, no caso do Mobile é necessario que você utilize um emulador ou baixe o expo no seu celular.

### [](<[https://github.com/Josuebmota/BeTheHero](https://github.com/Josuebmota/BeTheHero)#autor>)Autor

- **Josué Batista Mota** - [GitHub](https://github.com/Josuebmota) - Email: [josuebatistam1@gmail.com](mailto:josuebatistam1@gmail.com)
