export default function User(props){
    const {name, image} = props;

    return (
        <section class="user">
            <img src={`assets/img/${image}`} />
            <div class="text">
                <strong>{name}</strong>
                {name}
            </div>
        </section>
    );

}