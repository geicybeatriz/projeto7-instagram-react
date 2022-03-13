import Feed from "./Feed";
import Sidebar from "./Sidebar";

export default function Container(){
    return(
        <div class="corpo">
            <Feed/>
            <Sidebar/>
        </div>
    );
}