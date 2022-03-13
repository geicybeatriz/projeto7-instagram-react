import Post from "./Post";

const dataList = [
    {
        postedBy:
        {
            name:"Little Light",
            image: "ghost.jpg"
        },
        content: "postagem1.jpeg",
        likedBy: 
        {
            likedByName:"Zavala",
            likedByImage:"Zavala.jpg",
            likes: 101.435
        },
        
    },
    {
        postedBy: 
        {
            name:"Cayde-6",
            image: "Cayde6.jpeg"
        },
        content: "postagem2.jpg",
        likedBy: 
        {
            likedByName: "Ikora Rey",
            likedByImage: "IkoraRey.jpg",
            likes: 89.757
        },
        
    },
    {
        postedBy:
        {
            name:"Lord Shaxx",
            image: "Shaxx.png"
        },
        content: "traveler.jpg",
        likedBy: 
        {
            likedByName: "Saint 14",
            likedByImage: "casal.jpeg",
            likes: 101.546
        },
        
    }
];


export default function Posts(){
    return (
        <section class="posts">
            {dataList.map ((dataPost) => (
                <Post postedBy={dataPost.postedBy} content={dataPost.content} likedBy={dataPost.likedBy} />
            ))}
        </section> 
    );
}