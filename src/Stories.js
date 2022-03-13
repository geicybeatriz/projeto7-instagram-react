import Story from "./Story";

const dataStory = [
    {
        name:"Little light",
        image: "ghost.jpg"
    },
    {
        name:"Zavala",
        image: "Zavala.jpg"
    },
    {
        name:"Ikora Rey",
        image: "IkoraRey.jpg"
    },
    {
        name:"Cayde-6",
        image: "Cayde6.jpeg"
    },
    {
        name:"Eris Morn",
        image: "Eris.jpg"
    },
    {
        name:"Lord Shaxx",
        image: "Shaxx.png"
    },
    {
        name:"Xur",
        image: "Xur.jpg"
    },
    {
        name:"Saint 14",
        image: "casal.jpeg"
    },
    {
        name:"Destiny",
        image: "raid.png"
    }
];

export default function Stories(){
    return (
        <section class="stories">
            {dataStory.map((data)=>(
                <Story name={data.name} image={data.image}/>
            ))}
            <div class="little-arrow">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </section>
    );
}