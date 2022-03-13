import Post from "./Post";

const listaDePosts = [
    {
        postadoPor:
        {
            nome:"Luzinha",
            imagem: "ghost.jpg"
        },
        postagem: "postagem1.jpeg",
        curtidoPor: 
        {
            nomePerfil:"Zavala",
            imagemPerfil:"Zavala.jpg",
            curtidas: 101.435
        },
        
    },
    {
        postadoPor: 
        {
            nome:"Cayde-6",
            imagem: "Cayde6.jpeg"
        },
        postagem: "postagem2.jpg",
        curtidoPor:
        {
            nomePerfil: "Ikora Rey",
            imagemPerfil: "IkoraRey.jpg",
            curtidas: 89.757
        },
        
    },
    {
        postadoPor:
        {
            nome:"Lord Shaxx",
            imagem: "Shaxx.png"
        },
        postagem: "traveler.jpg",
        curtidoPor: 
        {
            nomePerfil: "Saint 14",
            imagemPerfil: "casal.jpeg",
            curtidas: 101.546
        },
        
    }
];


export default function Posts(){
    return (
        <div class="posts">
            {listaDePosts.map ((postIndividual) => (
                <Post postadoPor={postIndividual.postadoPor} postagem={postIndividual.postagem} curtidoPor={postIndividual.curtidoPor} />
            ))}
        </div> 
    );
}