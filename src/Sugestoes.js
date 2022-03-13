import Sugestao from "./Sugestao";

const perfisSugeridos = [
    {
        nome:"driven.education",
        imagem: "driven.jpeg"
    },
    {
        nome:"southamericamemes",
        imagem: "samemes.jpeg"
    },
    {
        nome:"ilha_dos_memes",
        imagem: "ilhameme.jpeg"
    },
    {
        nome:"destinythegame",
        imagem: "destinypage.jpeg"
    },
    {
        nome:"destinydadepressao",
        imagem: "destinydepre.jpeg"
    }
];

export default function Sugestoes (){
    return (
        <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {perfisSugeridos.map((perfil) => <Sugestao nome={perfil.nome} imagem={perfil.imagem}/>)}
                    
        </div>
    );
}