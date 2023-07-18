export const ajouterPays = ({continentCode, pays}) => {
    return {
        type: 'ajouterPays',
        payload: {
            cntCode: continentCode,
            pays,
        }
    }
}

export const modifierPopulation = ({code, population}) => {
    return {
        type: "modifierPopulation",
        payload: {
            code,
            population,
        }
    }
}