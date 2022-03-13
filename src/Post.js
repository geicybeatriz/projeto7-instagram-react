export default function Post(props){
    const {postadoPor, postagem, curtidoPor} = props;
    const {nome, imagem} = postadoPor;
    const {nomePerfil, imagemPerfil, curtidas} = curtidoPor;

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={`assets/img/${imagem}`} alt={nome} />
                    {nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={`assets/img/${postagem}`} alt="postagem"/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                </div>

                <div class="curtidas">
                    <img src={`assets/img/${imagemPerfil}`} alt={nomePerfil} />
                    <div class="texto">
                        Curtido por <strong>{nomePerfil}</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
