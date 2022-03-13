export default function Usuario(props){
    const {nome, imagem} = props;

    return (
        <div class="usuario">
            <img src={`assets/img/${imagem}`} />
            <div class="texto">
                <strong>{nome}</strong>
                {nome}
            </div>
        </div>
    );

}