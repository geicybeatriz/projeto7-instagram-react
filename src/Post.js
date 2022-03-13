export default function Post(props){
    const {postedBy, content, likedBy} = props;
    const {name, image} = postedBy;
    const {likedByName, likedByImage, likes} = likedBy;

    return (
        <section class="post">
            <article class="top">
                <div class="user">
                    <img src={`assets/img/${image}`} alt={name} />
                    {name}
                </div>
                <div class="actions">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </article>

            <article class="content">
                <img src={`assets/img/${content}`} alt="postagem"/>
            </article>

            <article class="bottom-post">
                <div class="actions">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                </div>

                <div class="likes">
                    <img src={`assets/img/${likedByImage}`} alt={likedByName} />
                    <div class="texto">
                        Curtido por <strong>{likedByName}</strong> e <strong>outras {likes} pessoas</strong>
                    </div>
                </div>
            </article>
        </section>
    );
}
