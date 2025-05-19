const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const elders = [
    {
        firstname: "Franco",
        age: 95,
        job: "Ouvrier d'usine",
        city: "Saint-Étienne",
        zipcode: "42000",
        description:
            "Franco adore raconter ses souvenirs de l’usine et partager un bon café avec les jeunes du quartier.",
        imageUrl: "/images/danie-franco-ClHY-KyvI1M-unsplash.jpg",
        type: "Un café/thé",
    },
    {
        firstname: "Soares",
        age: 84,
        job: "Puéricultrice",
        city: "Angers",
        zipcode: "49000",
        description:
            "Soares a consacré sa vie aux tout-petits et aime aujourd’hui transmettre tendresse et conseils de vie.",
        imageUrl: "/images/vladimir-soares-z_8Jqe0Cc-s-unsplash.jpg",
        type: "Un repas",
    },
    {
        firstname: "Tim",
        age: 80,
        job: "Facteur",
        city: "Aurillac",
        zipcode: "15000",
        description:
            "Ancien facteur, Tim connaît chaque recoin de sa ville et adore les longues balades en bonne compagnie.",
        imageUrl: "/images/tim-mossholder-FRPbQvAwY10-unsplash.jpg",
        type: "Une promenade",
    },
    {
        firstname: "Shimo",
        age: 94,
        job: "Professeure",
        city: "Besançon",
        zipcode: "25000",
        description:
            "Shimo a le cœur sur la main et des tas d’histoires passionnantes à raconter sur ses années d’enseignement.",
        imageUrl: "/images/shimo-yann-7nTFrV1xQGE-unsplash.jpg",
        type: "Un café/thé",
    },
    {
        firstname: "Zanon",
        age: 86,
        job: "Journaliste",
        city: "Paris",
        zipcode: "75011",
        description:
            "Zanon est curieuse du monde et adore échanger autour d’un bon livre ou d’un article d’actualité.",
        imageUrl: "/images/tatiana-zanon-MMhazsT2wtM-unsplash.jpg",
        type: "Une sortie culturelle",
    },
    {
        firstname: "Matveev",
        age: 77,
        job: "Pilote d'avion",
        city: "Toulouse",
        zipcode: "31000",
        description:
            "Pilote à la retraite, Matveev a mille anecdotes à partager sur ses voyages aux quatre coins du monde.",
        imageUrl: "/images/michael-matveev-Bk8zT4gLLt0-unsplash.jpg",
        type: "Une sortie culturelle",
    },
    {
        firstname: "Mahe",
        age: 93,
        job: "Mécanicienne",
        city: "Le Mans",
        zipcode: "72000",
        description:
            "Mahe a les mains d’or et le sourire généreux. Elle aime parler de mécanique, mais surtout de lien humain.",
        imageUrl: "/images/quentin-mahe-a6jCS61X1Hg-unsplash.jpg",
        type: "Autre activité",
    },
    {
        firstname: "Samir",
        age: 82,
        job: "Musicien",
        city: "Lyon",
        zipcode: "69007",
        description:
            "Musicien passionné, Samir aime improviser quelques notes et créer des moments chaleureux avec les jeunes.",
        imageUrl: "/images/mohammad-samir-huHXKc_usoA-unsplash.jpg",
        type: "Un repas",
    },
    {
        firstname: "Marcel",
        age: 87,
        job: "Charpentier",
        city: "Limoges",
        zipcode: "87000",
        description:
            "Marcel a construit des charpentes pendant 45 ans et adore partager son savoir-faire et ses astuces de menuiserie.",
        imageUrl: "/images/homme.png",
        type: "Autre activité",
    },
    {
        firstname: "Solange",
        age: 79,
        job: "Infirmière",
        city: "Grenoble",
        zipcode: "38000",
        description:
            "Solange a soigné des milliers de personnes et trouve toujours les mots justes pour réconforter et conseiller.",
        imageUrl: "/images/femme.png",
        type: "Un café/thé",
    },
    {
        firstname: "Roger",
        age: 91,
        job: "Agriculteur",
        city: "Amiens",
        zipcode: "80000",
        description:
            "Roger connaît les secrets de la terre et partage volontiers ses anecdotes sur l'évolution du monde rural.",
        imageUrl: "/images/homme.png",
        type: "Une promenade",
    },
    {
        firstname: "Jacqueline",
        age: 84,
        job: "Postière",
        city: "Caen",
        zipcode: "14000",
        description:
            "Jacqueline a rencontré tous les habitants de sa ville et adore échanger des nouvelles autour d'un bon gâteau.",
        imageUrl: "/images/femme.png",
        type: "Un repas",
    },
    {
        firstname: "Pierre",
        age: 88,
        job: "Architecte",
        city: "Nancy",
        zipcode: "54000",
        description:
            "Pierre observe chaque bâtiment avec passion et raconte l'histoire des monuments avec précision et enthousiasme.",
        imageUrl: "/images/homme.png",
        type: "Une sortie culturelle",
    },
    {
        firstname: "Germaine",
        age: 93,
        job: "Modiste",
        city: "Orléans",
        zipcode: "45000",
        description:
            "Germaine a créé des chapeaux pour les plus grandes dames et parle de mode avec élégance et nostalgie.",
        imageUrl: "/images/femme.png",
        type: "Un café/thé",
    },
    {
        firstname: "Paul",
        age: 85,
        job: "Boucher",
        city: "Clermont-Ferrand",
        zipcode: "63000",
        description:
            "Paul connaît tous les morceaux et toutes les recettes. Il partage volontiers ses astuces de cuisine traditionnelle.",
        imageUrl: "/images/homme.png",
        type: "Un repas",
    },
    {
        firstname: "Suzanne",
        age: 81,
        job: "Secrétaire de mairie",
        city: "La Rochelle",
        zipcode: "17000",
        description:
            "Suzanne a vu évoluer sa ville pendant des décennies et raconte avec passion les petites histoires locales.",
        imageUrl: "/images/femme.png",
        type: "Une promenade",
    },
    {
        firstname: "Lucien",
        age: 90,
        job: "Horticulteur",
        city: "Avignon",
        zipcode: "84000",
        description:
            "Lucien a les mains vertes et partage ses connaissances sur les plantes avec poésie et précision.",
        imageUrl: "/images/homme.png",
        type: "Autre activité",
    },
    {
        firstname: "Madeleine",
        age: 86,
        job: "Cuisinière",
        city: "Perpignan",
        zipcode: "66000",
        description:
            "Madeleine connaît mille recettes traditionnelles et adore transmettre ses secrets culinaires aux plus jeunes.",
        imageUrl: "/images/femme.png",
        type: "Un repas",
    },
    {
        firstname: "Victor",
        age: 82,
        job: "Forgeron",
        city: "Rouen",
        zipcode: "76000",
        description:
            "Victor raconte avec passion le travail du métal et l'importance des artisans dans notre société moderne.",
        imageUrl: "/images/homme.png",
        type: "Une sortie culturelle",
    },
    {
        firstname: "Paulette",
        age: 89,
        job: "Tricoteuse",
        city: "Mulhouse",
        zipcode: "68200",
        description:
            "Paulette a des doigts agiles et un cœur généreux, elle aime partager sa passion pour le tricot et la laine.",
        imageUrl: "/images/femme.png",
        type: "Un café/thé",
    },
    {
        firstname: "Fernand",
        age: 94,
        job: "Ébéniste",
        city: "Aix-en-Provence",
        zipcode: "13100",
        description:
            "Fernand a façonné les plus beaux meubles de la région et parle du bois comme d'un ami de longue date.",
        imageUrl: "/images/homme.png",
        type: "Autre activité",
    },
    {
        firstname: "Marguerite",
        age: 78,
        job: "Libraire",
        city: "Poitiers",
        zipcode: "86000",
        description:
            "Marguerite a lu des milliers de livres et trouve toujours la recommandation parfaite pour chaque lecteur.",
        imageUrl: "/images/femme.png",
        type: "Une sortie culturelle",
    },
    {
        firstname: "René",
        age: 83,
        job: "Pêcheur",
        city: "Bayonne",
        zipcode: "64100",
        description:
            "René connaît tous les cours d'eau de la région et partage ses techniques de pêche avec patience et humour.",
        imageUrl: "/images/homme.png",
        type: "Une promenade",
    },
    {
        firstname: "Yvonne",
        age: 92,
        job: "Institutrice",
        city: "Valence",
        zipcode: "26000",
        description:
            "Yvonne a enseigné pendant 40 ans et prend plaisir à écouter les jeunes générations avec bienveillance.",
        imageUrl: "/images/femme.png",
        type: "Un café/thé",
    },
    {
        firstname: "Gaston",
        age: 87,
        job: "Garagiste",
        city: "Béziers",
        zipcode: "34500",
        description:
            "Gaston peut identifier un problème moteur rien qu'au bruit et raconte l'évolution de l'automobile avec passion.",
        imageUrl: "/images/homme.png",
        type: "Un repas",
    },
    {
        firstname: "Bernadette",
        age: 77,
        job: "Couturière",
        city: "Metz",
        zipcode: "57000",
        description:
            "Bernadette a habillé des générations entières et partage ses astuces de couture avec générosité.",
        imageUrl: "/images/femme.png",
        type: "Autre activité",
    },
    {
        firstname: "Léon",
        age: 89,
        job: "Cordonnier",
        city: "Le Havre",
        zipcode: "76600",
        description:
            "Léon connaît l'art du cuir comme personne et raconte l'histoire des chaussures avec humour et précision.",
        imageUrl: "/images/homme.png",
        type: "Un café/thé",
    },
    {
        firstname: "Thérèse",
        age: 85,
        job: "Fleuriste",
        city: "Reims",
        zipcode: "51100",
        description:
            "Thérèse compose des bouquets magnifiques et partage le langage des fleurs avec poésie et délicatesse.",
        imageUrl: "/images/femme.png",
        type: "Une promenade",
    },
    {
        firstname: "Émile",
        age: 91,
        job: "Électricien",
        city: "Toulon",
        zipcode: "83000",
        description:
            "Émile a éclairé des centaines de foyers et explique les mystères de l'électricité avec simplicité.",
        imageUrl: "/images/homme.png",
        type: "Autre activité",
    },
    {
        firstname: "Denise",
        age: 83,
        job: "Vendeuse",
        city: "Versailles",
        zipcode: "78000",
        description:
            "Denise a le sens du commerce et de l'écoute. Elle adore les conversations animées et les bonnes histoires.",
        imageUrl: "/images/femme.png",
        type: "Un repas",
    },
    {
        firstname: "Armand",
        age: 96,
        job: "Imprimeur",
        city: "Nîmes",
        zipcode: "30000",
        description:
            "Armand a vu l'évolution de l'imprimerie et raconte avec passion l'histoire de la presse et des livres.",
        imageUrl: "/images/homme.png",
        type: "Une sortie culturelle",
    },
    {
        firstname: "Gisèle",
        age: 79,
        job: "Coiffeuse",
        city: "Pau",
        zipcode: "64000",
        description:
            "Gisèle a coiffé plusieurs générations et adore discuter des modes capillaires d'hier et d'aujourd'hui.",
        imageUrl: "/images/femme.png",
        type: "Un café/thé",
    },
    {
        firstname: "Louis",
        age: 88,
        job: "Jardinier",
        city: "Colmar",
        zipcode: "68000",
        description:
            "Louis connaît toutes les plantes par leur nom latin et prodigue des conseils précieux pour jardiner naturellement.",
        imageUrl: "/images/homme.png",
        type: "Une promenade",
    },
    {
        firstname: "Henriette",
        age: 82,
        job: "Comptable",
        city: "Boulogne-sur-Mer",
        zipcode: "62200",
        description:
            "Henriette a le sens des chiffres et explique l'économie avec clarté. Elle aime les discussions profondes.",
        imageUrl: "/images/femme.png",
        type: "Un repas",
    },
    {
        firstname: "Gilbert",
        age: 92,
        job: "Conducteur de train",
        city: "Angoulême",
        zipcode: "16000",
        description:
            "Gilbert a parcouru des milliers de kilomètres et raconte les paysages de France avec poésie et précision.",
        imageUrl: "/images/homme.png",
        type: "Une sortie culturelle",
    },
    {
        firstname: "Josette",
        age: 86,
        job: "Sage-femme",
        city: "Montauban",
        zipcode: "82000",
        description:
            "Josette a aidé des centaines d'enfants à venir au monde et partage sa sagesse avec bienveillance.",
        imageUrl: "/images/femme.png",
        type: "Un café/thé",
    },
    {
        firstname: "Robert",
        age: 90,
        job: "Plombier",
        city: "Arles",
        zipcode: "13200",
        description:
            "Robert a résolu des milliers de problèmes techniques et trouve toujours une solution avec ingéniosité.",
        imageUrl: "/images/homme.png",
        type: "Autre activité",
    },
    {
        firstname: "Colette",
        age: 78,
        job: "Journaliste",
        city: "Cannes",
        zipcode: "06400",
        description:
            "Colette a couvert les grands événements du siècle et raconte l'actualité avec recul et perspicacité.",
        imageUrl: "/images/femme.png",
        type: "Une sortie culturelle",
    },
    {
        firstname: "Joseph",
        age: 84,
        job: "Maçon",
        city: "Troyes",
        zipcode: "10000",
        description:
            "Joseph a bâti de nombreuses maisons et partage sa connaissance des matériaux avec expertise.",
        imageUrl: "/images/homme.png",
        type: "Un repas",
    },
    {
        firstname: "Renée",
        age: 89,
        job: "Pharmacienne",
        city: "Chambéry",
        zipcode: "73000",
        description:
            "Renée connaît tous les remèdes de grand-mère et conseille avec sagesse sur les questions de santé.",
        imageUrl: "/images/femme.png",
        type: "Un café/thé",
    },
    {
        firstname: "Ernest",
        age: 93,
        job: "Bûcheron",
        city: "Épinal",
        zipcode: "88000",
        description:
            "Ernest a passé sa vie dans les forêts vosgiennes et raconte la nature avec respect et émerveillement.",
        imageUrl: "/images/homme.png",
        type: "Une promenade",
    },
    {
        firstname: "Monique",
        age: 81,
        job: "Serveuse",
        city: "Vannes",
        zipcode: "56000",
        description:
            "Monique a servi des milliers de clients et adore les conversations animées autour d'un bon verre.",
        imageUrl: "/images/femme.png",
        type: "Un repas",
    },
    {
        firstname: "Eugène",
        age: 87,
        job: "Artisan verrier",
        city: "Vichy",
        zipcode: "03200",
        description:
            "Eugène transforme le verre en œuvres d'art et partage sa passion avec émerveillement et patience.",
        imageUrl: "/images/homme.png",
        type: "Une sortie culturelle",
    },
    {
        firstname: "Juliette",
        age: 94,
        job: "Violoniste",
        city: "Antibes",
        zipcode: "06600",
        description:
            "Juliette joue toujours quelques morceaux et raconte l'histoire de la musique avec passion et émotion.",
        imageUrl: "/images/femme.png",
        type: "Autre activité",
    },
    {
        firstname: "Auguste",
        age: 80,
        job: "Facteur d'orgues",
        city: "Chartres",
        zipcode: "28000",
        description:
            "Auguste a construit et restauré des orgues dans toute la France et parle de musique avec ferveur.",
        imageUrl: "/images/homme.png",
        type: "Une sortie culturelle",
    },
    {
        firstname: "Georgette",
        age: 85,
        job: "Concierge",
        city: "Paris",
        zipcode: "75018",
        description:
            "Georgette connaît tous les secrets du quartier et accueille les visiteurs avec chaleur et bienveillance.",
        imageUrl: "/images/femme.png",
        type: "Un café/thé",
    },
    {
        firstname: "Antoine",
        age: 89,
        job: "Cordier",
        city: "Douarnenez",
        zipcode: "29100",
        description:
            "Antoine a fabriqué des cordages pour les bateaux et raconte la vie maritime avec nostalgie et précision.",
        imageUrl: "/images/homme.png",
        type: "Une promenade",
    },
    {
        firstname: "Lucienne",
        age: 91,
        job: "Institutrice",
        city: "Brive-la-Gaillarde",
        zipcode: "19100",
        description:
            "Lucienne a enseigné pendant plus de 40 ans et aime toujours apprendre et partager ses connaissances.",
        imageUrl: "/images/femme.png",
        type: "Un repas",
    },
    {
        firstname: "Ferdinand",
        age: 86,
        job: "Apiculteur",
        city: "Gap",
        zipcode: "05000",
        description:
            "Ferdinand connaît tout sur les abeilles et partage sa passion pour le miel et la nature avec enthousiasme.",
        imageUrl: "/images/homme.png",
        type: "Autre activité",
    },
    {
        firstname: "Raymonde",
        age: 82,
        job: "Téléphoniste",
        city: "Belfort",
        zipcode: "90000",
        description:
            "Raymonde a connecté des milliers de conversations et adore échanger sur l'évolution des communications.",
        imageUrl: "/images/femme.png",
        type: "Un café/thé",
    },
    {
        firstname: "Édouard",
        age: 94,
        job: "Menuisier",
        city: "Albi",
        zipcode: "81000",
        description:
            "Édouard a façonné le bois toute sa vie et partage son amour pour l'artisanat avec passion et minutie.",
        imageUrl: "/images/homme.png",
        type: "Une promenade",
    },
    {
        firstname: "Marthe",
        age: 88,
        job: "Couturière",
        city: "Arcachon",
        zipcode: "33120",
        description:
            "Marthe a habillé des générations de familles et raconte l'évolution de la mode avec nostalgie et humour.",
        imageUrl: "/images/femme.png",
        type: "Un repas",
    },
    {
        firstname: "Gustave",
        age: 92,
        job: "Pâtissier",
        city: "Carcassonne",
        zipcode: "11000",
        description:
            "Gustave connaît des centaines de recettes par cœur et partage ses secrets de pâtisserie avec générosité.",
        imageUrl: "/images/homme.png",
        type: "Une sortie culturelle",
    },
    {
        firstname: "Charlotte",
        age: 83,
        job: "Lingère",
        city: "Cognac",
        zipcode: "16100",
        description:
            "Charlotte a travaillé pour les plus grandes maisons et raconte ses souvenirs avec élégance et discrétion.",
        imageUrl: "/images/femme.png",
        type: "Un café/thé",
    },
    {
        firstname: "Félix",
        age: 89,
        job: "Horloger",
        city: "Besançon",
        zipcode: "25000",
        description:
            "Félix répare les montres avec précision et partage sa fascination pour le temps qui passe avec philosophie.",
        imageUrl: "/images/homme.png",
        type: "Autre activité",
    },
    {
        firstname: "Hélène",
        age: 80,
        job: "Bibliothécaire",
        city: "Arras",
        zipcode: "62000",
        description:
            "Hélène a lu des milliers de livres et recommande toujours l'ouvrage parfait avec finesse et pertinence.",
        imageUrl: "/images/femme.png",
        type: "Une sortie culturelle",
    },
];

app.post('/elder', (req, res) => {
  const newElder = {
    firstname: req.body.firstname,
    age: req.body.age,
    job: req.body.job,
    city: req.body.city,
    zipcode: req.body.zipcode,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    type: req.body.type
  };

  elders.push(newElder);
  res.json(newElder);
});

app.get("/elder", (req, res) => {
    res.send({elders: elders});
});

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.get('/elder/:age', (req, res) =>{
//     const elderAGE = parseInt(req.params.age)
//     const elder = elders.filter((elder) => elder.age === elderAGE)

//     if(elder.length === 0){
//         return res.status(404).send(`No user with the AGE of ${elderAGE}`)
//     }

//     res.json(elder)
// })

// app.get('/elder/:type', (req, res) =>{
//     const elderTYPE = req.params.type.toLowerCase()
//     const elder = elders.filter((elder) => elder.type.toLowerCase() === elderTYPE)

//     if(elder.length === 0){
//         return res.status(404).send(`No user for the activity of ${elderTYPE}`)
//     }

//     res.json(elder)
// })

app.get('/elder/search', (req, res) => {
    const { type = "Tous les moments possibles", city = "", page = 0, limit = 10} = req.query

    let elders_result = elders.filter((elder) => {
        const matchesType = type.toLowerCase() === "tous les moments possibles" || elder.type.toLowerCase() === type.toLowerCase();
        const matchesCity = city.toLowerCase() === "" || elder.city.toLowerCase().includes(city.toLowerCase())
        return matchesType && matchesCity
    })

    elders_result = elders_result.slice((page - 1) * limit, page * limit)
    
    if(elders_result.length === 0){
        return res.status(404).send(`No user for this research`)
    }

    res.json(elders_result)
});

app.put('/elder/:firstname', (req, res) => {
    const firstname = req.params.firstname
    let elder = elders.find(elder => elder.firstname === firstname)

    if(!elder){
        return res.status(404).send(`Elder not found`)
    }

    elder.firstname = req.body.firstname,
    elder.age = req.body.age,
    elder.job = req.body.job,
    elder.city = req.body.city,
    elder.zipcode = req.body.zipcode,
    elder.description = req.body.description,
    elder.imageUrl = req.body.imageUrl,
    elder.type = req.body.type
    res.status(200).json(elder)
})

app.delete('/elder/:firstname', (req,res) => {
    const firstname = req.params.firstname
    let elder = elders.find(elder => elder.firstname === firstname)    
    
    elders.splice(elders.indexOf(elder),1)   
    
    res.status(200).json(elders)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});