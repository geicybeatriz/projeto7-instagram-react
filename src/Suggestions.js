import SuggestedProfile from "./SuggestedProfile";

const suggestedProfiles = [
    {
        name:"driven.education",
        image: "driven.jpeg"
    },
    {
        name:"southamericamemes",
        image: "samemes.jpeg"
    },
    {
        name:"ilha_dos_memes",
        image: "ilhameme.jpeg"
    },
    {
        name:"destinythegame",
        image: "destinypage.jpeg"
    },
    {
        name:"destinydadepressao",
        image: "destinydepre.jpeg"
    }
];

export default function Suggestions (){
    return (
        <section class="suggestions">
                <article class="title">
                    Sugestões para você
                    <div>Ver tudo</div>
                </article>

                {suggestedProfiles.map((profile) => <SuggestedProfile name={profile.name} image={profile.image}/>)}
                    
        </section>
    );
}