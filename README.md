# 🛍️ Projeto APP

Um aplicativo mobile desenvolvido com **React Native** e **Expo** para demonstração de funcionalidades de autenticação e consumo de API.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React Native** - Framework mobile  
- 🎯 **Expo** - Plataforma de desenvolvimento  
- 🧭 **React Navigation** - Navegação entre telas  
- 🌐 **Axios** - Cliente HTTP para APIs  
- 📱 **React Native Screens** - Otimização de telas nativas  

---

## 📁 Estrutura do Projeto

```
projetoApp/
├── App.js                     # Componente principal com navegação
├── screens/                   # Telas do aplicativo
│   ├── LoginScreen.js         # Tela de login
│   ├── HomeScreen.js          # Tela principal com produtos
│   ├── ProductDetailScreen.js # Detalhes do produto
│   └── GroupInfoScreen.js     # Informações do grupo
├── services/
│   └── api.js                 # Configuração da API
├── components/
│   └── ProductItem.js         # Componente de produto
├── assets/                    # Imagens e ícones
└── package.json               # Dependências do projeto
```

---

## 📦 Dependências do Projeto

```json
{
  "@react-navigation/native": "^7.1.17",
  "@react-navigation/native-stack": "^7.3.26",
  "axios": "^1.12.2",
  "expo": "~54.0.10",
  "expo-status-bar": "~3.0.8",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "react-native": "0.81.4",
  "react-native-safe-area-context": "~5.6.0",
  "react-native-screens": "~4.16.0",
  "react-native-web": "^0.21.0"
}
```

---

## 🚀 Como rodar o projeto com Expo

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/pedrobsegatto/projetoApp.git
   ```

2. **Abrir o projeto** no **VS Code** (ou outro editor de sua preferência).

3. **Instalar as dependências** e rodar o Expo:
   ```bash
   npm install expo   # Instala o Expo
   cd nome-do-projeto
   expo start         # Inicia o Expo
   ```

4. **Executar no dispositivo físico**:
   - Baixe o aplicativo **Expo Go** (disponível para Android/iOS).
   - Escaneie o **QR Code** gerado no terminal ou no navegador.

---

## 🔑 Login na aplicação

Os usuários e senhas estão disponíveis na API pública: [Fake Store API](https://fakestoreapi.com).

### Exemplo de login
- **Usuário:** `johnd`  
- **Senha:** `m38rmF$`

👉 Para verificar outros usuários, acesse: [https://fakestoreapi.com/users](https://fakestoreapi.com/users)

---

## 👨‍💻 Autores

- Lauro Dariva Ferneda — RA: `1136899`  
- Pedro Bohnen Segatto — RA: `1136047`  
- Pedro de Oliveira Souza Leal — RA: `1136365`
