import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

const dadosUsuario = [
    {
    nome:"Luzinha",
    imagem:"ghost.jpg"
    }
];

export default function Sidebar(){
    return (
        <div class="sidebar">
            {dadosUsuario.map((usuario) => (
                <Usuario nome={usuario.nome} imagem={usuario.imagem}/>
            ))}

            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}