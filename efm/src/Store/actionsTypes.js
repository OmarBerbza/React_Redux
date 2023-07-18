export const ajouter = ({contentsCode, pays})=>{
    return{
        type: "AJOUTER",
        paylaod: {
            contCode: contentsCode,
            pays
        }
    }
}
export const modifier = ({code, population})=>{
    return{
        type: "MODIFIER",
        paylaod: {
            code,
            population
        }
    }
}