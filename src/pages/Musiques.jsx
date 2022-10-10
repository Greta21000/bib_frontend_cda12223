import CardList from "../card-list/CardList"
import "./Oeuvres.css"

let MUSIQUES = [
    {
        id : 1,
        auteur: "Daft Punk",
        annee: "2013",
        titre: "Get Lucky",
        imageUrl:"https://www.juliemag.com/wp-content/uploads/2013/06/daft-punk-get-lucky-1.jpg" 
    },
    {
        id : 2,
        auteur: "David Ghetta",
        annee: "2011",
        titre: "Titanium",
        imageUrl:"https://images.lesindesradios.fr/medias/UBL5BgYYYQ/image/guettatitaniummed1639126731292.jpg" 
    },
    {
        id : 3,
        auteur: "Shaka Punk",
        annee: "2019",
        titre: "Smells like teen spirits",
        imageUrl:"https://www.letelegramme.fr/images/2020/11/06/frah-au-centre-on-s-est-pris-un-coup-dans-les-jambes_5387598_676x343p.jpg?v=1" 
    },
    {
        id : 4,
        auteur: "Imagine Dragon",
        annee: "2018",
        titre: "Natural",
        imageUrl:"https://i.ytimg.com/vi/V5M2WZiAy6k/maxresdefault.jpg" 
    },
]

const Musiques = () => {
  return (
    <div>musiques

        <CardList oeuvres={MUSIQUES} />

    </div>
    
  )
}

export default Musiques;