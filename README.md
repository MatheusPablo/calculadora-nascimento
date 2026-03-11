# Calculadora de Ano de Nascimento

Aplicativo mobile desenvolvido com **Expo + React Native** que calcula o ano de nascimento de uma pessoa com base na idade, dia e mês de nascimento informados.

## Funcionalidades

- Campos para digitação: **idade**, **dia de nascimento** e **mês de nascimento**
- Cálculo automático do ano de nascimento conforme o usuário digita (sem botão)
- Comparação com a data atual do sistema para determinar o ano correto
- Utiliza o componente `KeyboardAvoidingView` para melhor experiência com teclado

## Tecnologias

- [Expo](https://expo.dev/) (SDK 54)
- [React Native](https://reactnative.dev/)
- JavaScript

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npx expo start
```

3. Escaneie o QR code com o app **Expo Go** no celular.

## Estrutura do projeto

```
├── App.js          # Componente principal com a lógica da calculadora
├── styles.js       # Estilos da aplicação
├── index.js        # Ponto de entrada do app
├── app.json        # Configurações do Expo
├── eas.json        # Configurações do EAS (build e update)
├── package.json    # Dependências do projeto
└── assets/         # Ícones e imagens do app
```
