export default function SuggestedProfile(props){
    const {name, image} = props;

    return (
        <div class="suggestion">
            <div class="user">
                <img src={`assets/img/${image}`} />
                <div class="text">
                    <div class="name">{name}</div>
                    <div class="reason">Segue você</div>
                </div>
            </div>
            <div class="follow">Seguir</div>
        </div>
    );

}