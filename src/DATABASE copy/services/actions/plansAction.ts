import { getPlansAcess } from "../dataAcess/plansAcess";

GET : BUSCA DE VARIOS DADOS DE UMA VEZ
export async function getPlansAction() {
    const response = await getPlansAcess();
    const plans : any[] = [];
    response.forEach((doc) => {
        plans.push(doc.data())
    });
    return plans;
}