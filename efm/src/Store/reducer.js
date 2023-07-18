const initialeState = {
    continent:[
        {code: 1, nom: "Afrique", surface: "30,37 millions km²", population: "1,216 milliard", imag: "https://i.pinimg.com/564x/e0/a1/72/e0a1721c47dd5e17218a3d0e2aa3c7af.jpg",
            pays:[
                {nom: "Maroc", population: "37,34 millions", capitale: "Rabat", indepYear: 1956, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_Map_of_Morocco_with_Western_Sahara.svg/635px-Flag_Map_of_Morocco_with_Western_Sahara.svg.png?20221210223224"},
                {nom: "Senegal", population: "17,2 millions", capitale: "Dakar", indepYear: 1960, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag-map_of_Senegal.svg/800px-Flag-map_of_Senegal.svg.png"},
        ]},
        {code: 2, nom: "Europe", surface: "10,53 millions km²", population: "746,4 millions", imag: "https://i.pinimg.com/564x/2e/b1/c3/2eb1c33363aaa891b41d536fbd08a4cc.jpg", 
            pays:[
                {nom: "Italy", population: "59,07 millions", capitale: "Rome", indepYear: 1871, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_map_of_Italy.svg/524px-Flag_map_of_Italy.svg.png?20200831063317"},
                {nom: "England", population: "55,98 millions", capitale: "London", indepYear: 1776, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_map_of_England.svg/484px-Flag_map_of_England.svg.png?20160713231917"},
        ]},
        {code: 3, nom: "Asia", surface: "44,58 millions km²", population: "4,561 milliards", imag: "https://i.pinimg.com/564x/ed/dc/97/eddc9713491534c723b96aeaf58f9131.jpg", 
            pays:[
                {nom: "Qatar", population: "2,931 millions", capitale: "Doha", indepYear: 1971, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag-map_of_Qatar.svg/201px-Flag-map_of_Qatar.svg.png?20101211062712"},
                {nom: "Japon", population: "125,7 millions", capitale: "Tokyo", indepYear: 1947, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag-map_of_Japan.svg/533px-Flag-map_of_Japan.svg.png?20221123141831"},
        ]},
        {code: 4, nom: "North Amérique", surface: "24,71 millions km²", population: "579 millions", imag: "https://i.pinimg.com/564x/78/31/6f/78316f769c45c1c88fd82114ee3f9fea.jpg", 
            pays:[
                {nom: "USA", population: "331,9 millions", capitale: "Washington", indepYear: 1776, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/USA_Flag_Map.svg/800px-USA_Flag_Map.svg.png?20221123072103"},
                {nom: "Canada", population: "38,25 millions", capitale: "Ottawa", indepYear: 1867, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Flag_map_of_Greater_Canada.png/800px-Flag_map_of_Greater_Canada.png?20121216193649"},
        ]},
        {code: 5, nom: "South Amérique", surface: "17,84 millions km²", population: "422,5 millions", imag: "https://i.pinimg.com/564x/45/4b/97/454b9726b970b6fe99df695f387392c7.jpg", 
            pays:[
                {nom: "Colombia", population: "51,27 millions", capitale: "Bogota", indepYear: 1810, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag-map_of_Colombia.svg/440px-Flag-map_of_Colombia.svg.png?20220815161300"},
                {nom: "Brazil", population: "214 millions", capitale: "Brasília", indepYear: 1822, image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_map_of_Brazil.png?20210407162134"},
        ]},
        {code: 6, nom: "Australia", surface: "7,688 millions km²", population: "25,74 millions", imag: "https://i.pinimg.com/564x/ef/42/bf/ef42bfb83fb1331c080ce8a19fa7a769.jpg", 
            pays:[
                {nom: "Australia", population: "25,74 millions", capitale: "Canberra", indepYear: 1901, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag-map_of_Australia.svg/642px-Flag-map_of_Australia.svg.png?20220810144342"},
        ]}
    ],
    
}
const reducer = (state = initialeState, action)=>{
    switch(action.type){
        case "AJOUTER":
            return{
                ...state,
                continents: state.continent.map((con)=>{
                    if(con.nom === action.paylaod.contCode){
                        return{
                            ...con,
                            pays: [...con.pays, action.paylaod.pays]
                        }
                    }
                    return con;
                })
            }
    }
    return state
}

export default reducer