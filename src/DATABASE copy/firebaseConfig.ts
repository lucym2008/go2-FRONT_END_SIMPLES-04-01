// Importa as funcionalidades essenciais do Firebase
import firebase from "firebase/app";

// Importa a biblioteca específica para interagir com o Firestore
import "firebase/firestore";

// Configurações do seu projeto Firebase
// **Importante:** Substitua os valores entre as aspas pelas suas credenciais reais
const firebaseConfig = {
    apiKey: "AIzaSyDfQd3F0pj7yf51iPKekk0YGey53QwMXB4",
    authDomain: "projeto-3-4c7ce.firebaseapp.com",
    projectId: "projeto-3-4c7ce",
    storageBucket: "projeto-3-4c7ce.firebasestorage.app",
    messagingSenderId: "692191144426",
    appId: "1:692191144426:web:e9c3b475585ccb17deea93"
};

// Inicializa o aplicativo Firebase com as configurações
firebase.initializeApp(firebaseConfig);

// Obtém uma referência ao banco de dados Cloud Firestore
export const db = firebase.firestore();

// Agora você pode usar a variável 'db' para realizar operações no Firestore
// Exemplo:
// db.collection("users").add({
//   name: "John Doe",
//   email: "johndoe@example.com"
// })
// .then(() => {
//   console.log("Usuário adicionado com sucesso!");
// })
// .catch((error) => {
//   console.error("Erro ao adicionar usuário:", error);
// });