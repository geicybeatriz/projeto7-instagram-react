export default function Story(props){
    const {nome, imagem} = props;

    return (
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${imagem}`} alt={nome}/>
            </div>
            <div class="usuario">
                {nome}
            </div>
        </div>
    );
}