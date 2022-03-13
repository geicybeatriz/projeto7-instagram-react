import Story from "./Story";

const dadosStory = [
    {
        nome:"Luzinha",
        imagem: "ghost.jpg"
    },
    {
        nome:"Zavala",
        imagem: "Zavala.jpg"
    },
    {
        nome:"Ikora Rey",
        imagem: "IkoraRey.jpg"
    },
    {
        nome:"Cayde-6",
        imagem: "Cayde6.jpeg"
    },
    {
        nome:"Eris Morn",
        imagem: "Eris.jpg"
    },
    {
        nome:"Lord Shaxx",
        imagem: "Shaxx.png"
    },
    {
        nome:"Xur",
        imagem: "Xur.jpg"
    },
    {
        nome:"Saint 14",
        imagem: "casal.jpeg"
    },
    {
        nome:"Destiny",
        imagem: "raid.png"
    }
];

export default function Stories(){
    return (
        <div class="stories">
            {dadosStory.map((dado)=>(
                <Story nome={dado.nome} imagem={dado.imagem}/>
            ))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}