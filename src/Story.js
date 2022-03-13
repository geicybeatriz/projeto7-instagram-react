export default function Story(props){
    const {name, image} = props;

    return (
        <article class="story">
            <div class="image">
                <img src={`assets/img/${image}`} alt={name}/>
            </div>
            <div class="user">
                {name}
            </div>
        </article>
    );
}