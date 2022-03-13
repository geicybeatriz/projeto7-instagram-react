import User from "./User";
import Suggestions from "./Suggestions";

const userData = [
    {
    name:"Little Light",
    image:"ghost.jpg"
    }
];

export default function Sidebar(){
    return (
        <aside class="sidebar">
            {userData.map((user) => (
                <User name={user.name} image={user.image}/>
            ))}

            <Suggestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </aside>
    );
}