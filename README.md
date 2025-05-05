# 📱 Teste Mobile Automatizado com WebdriverIO + Appium

Este projeto realiza testes automatizados de **login com credenciais inválidas** utilizando o [Sauce Labs Demo App](https://github.com/saucelabs/my-demo-app-rn). O objetivo é validar o comportamento do aplicativo ao receber credenciais incorretas, garantindo que a mensagem de erro seja exibida corretamente.

## 🚀 Tecnologias Utilizadas
- [WebdriverIO](https://webdriver.io/)  
- [Appium](https://appium.io/)  
- Android Emulator  
- Page Object Model (POM)  
- Mocha + Expect Assertions  

## 🔧 Configuração do Ambiente
Antes de rodar os testes, siga estes passos:

1️⃣ **Instale as dependências**:
```bash
npm install
```

2️⃣ **Inicie o servidor Appium**:
```bash
appium -p 4723
```

3️⃣ **Execute os testes**:
```bash
npx wdio run wdio.conf.js
```

## 📜 Estrutura do Projeto
```bash
📂 appium-android-automation
 ┣ 📂 test
 ┃ ┣ 📂 screenObject
 ┃ ┃ ┣ 📜 menu.screen.js
 ┃ ┃ ┣ 📜 login.screen.js
 ┃ ┣ 📜 login.spec.js
 ┣ 📜 wdio.conf.js
 ┣ 📜 package.json
 ┣ 📜 README.md
```
🔹 Os arquivos dentro de **screenObject** seguem o **Page Object Model (POM)** para melhor organização e reutilização de código.

## ✅ Testes Implementados
- **Login com credenciais inválidas**
  - Clicar no botão hambúrguer para abrir o menu.
  - Navegar até a tela de login.
  - Preencher usuário e senha inválidos.
  - Validar a mensagem de erro exibida.

## 🛠️ Desafios Superados
- Configuração do ambiente WebdriverIO + Appium.
- Ajuste de seletores no Appium Inspector.
- Correção de erros de caminhos no WebdriverIO.
- Captura de mensagens de erro para validação.
