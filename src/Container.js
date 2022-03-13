import Feed from "./Feed";
import Sidebar from "./Sidebar";

export default function Container(){
    return(
        <main class="main">
            <Feed/>
            <Sidebar/>
        </main>
    );
}