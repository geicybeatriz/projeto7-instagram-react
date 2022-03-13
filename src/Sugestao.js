export default function Sugestao(props){
    const {nome, imagem} = props;

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${imagem}`} />
                <div class="texto">
                    <div class="nome">{nome}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );

}