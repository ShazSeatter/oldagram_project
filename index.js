const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let mainSection = document.getElementById("main");

posts.forEach((post) => {
    let postSection = document.createElement("section");
    postSection.className="post-info";

    // html for main section
    postSection.innerHTML =  `
        <div class="user-details-wrapper">
            <img class="small-avatar" src=${post.avatar}>
            <div class="user-info">
                <p class="bold-text">${post.name}<p>
                <p>${post.location}</p>
            </div>
        </div>

        <img class="post-img" src=${post.post}>

        <div class="post-content">
            <div class="interaction-icons">
                <img class="icons heart-icon" src="images/icon-heart.png">
                <img class="icons" src="images/icon-comment.png">
                <img class="icons" src="images/icon-dm.png">
            </div>
            <p class="bold-text post-likes">${post.likes} likes</p>
            <div class="post-desc">
                <p class="bold-text">${post.username}</p>
                <p>${post.comment}</p>
            </div>
        </div>
    
    `
    mainSection.appendChild(postSection);


})

document.querySelectorAll('.heart-icon').forEach((heartIcon, index) => {
    let isLiked = false;


    heartIcon.addEventListener('click', () => {
        if(isLiked) {
            const likesElement = document.querySelectorAll('.post-likes')[index];
            const currentLikes = parseInt(likesElement.textContent, 10);
            heartIcon.src = "images/icon-heart.png";
            likesElement.textContent = `${currentLikes - 1} likes`;
            
        } else {
            const likesElement = document.querySelectorAll('.post-likes')[index];
            const currentLikes = parseInt(likesElement.textContent, 10);
            heartIcon.src = "images/red-heart.png";
        
            likesElement.textContent = `${currentLikes + 1} likes`;
   
        }

        isLiked = !isLiked;
       

    })
})




