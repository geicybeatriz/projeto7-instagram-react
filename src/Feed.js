import Stories from "./Stories";
import Posts from "./Posts";

export default function Feed(){
    return(
        <div class="left">
            <Stories/>
            <Posts/>;
        </div>
    );
}