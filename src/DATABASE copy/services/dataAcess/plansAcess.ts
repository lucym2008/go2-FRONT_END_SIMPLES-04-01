// Importa a referência ao banco de dados Firestore (provavelmente de um arquivo chamado firebaseConfig.js)

import { db } from "../../firebaseConfig";

// Cria uma referência à coleção "planos" no Firestore
const plansReferences = db.collection("loucoss");

export function addPlansAcess() {// Função para adicionar planos de acesso
  plansReferences.add({ // Adiciona um novo documento à coleção "planos"
    text: "tqqqqeo", // Texto do plano
    value: 1,     // Valor do plano (provavelmente um número que representa o custo)
  })
  .then((res) => {
    console.log(res.id); // Exibe o ID do documento recém-criado
  })
  .catch((error) => {
    console.error("Erro ao adicionar plano de acesso:", error); // Exibe mensagem de erro caso ocorra
  });
}

// GET : BUSCA DE VARIOS DADOS DE UMA VEZ
// export async function getPlansAcess() {
//   const Response = await plansReferences.get();
//   return Response;
// }