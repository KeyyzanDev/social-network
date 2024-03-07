function post(){
    const timeline = document.getElementById("timeline")
    let username = prompt("enter your username")
    let content = prompt("enter the post content")

    timeline.innerHTML += `

    <div class="post">
        <div class="post-user">
            <div class="post-userinfo">
                <div class="post-pp"><img src="assets/userpp.png" class="post-pp"></div>
                <div class="post-username"><p>${username}</p></div>
            </div>
                <div class="post-date"><p>00/00/0000</p></div>
        </div>
                <div class="post-post"><p>${content}</p></div>
                <div class="post-actions">
                    <div class="post-com">
                    <img src="assets/comment.png" class="post-actions-com">
                    <p id="pcom">0</p>
                    </div>
                    <div class="post-like">
                    <img src="assets/notliked.png" class="post-actions-like" id="likebtn" onclick="like()">
                    <p id="plike">0</p>
                    </div>
                    <div class="post-share">
                    <img src="assets/share.png" class="post-actions-share">
                    <p id="pshare">0</p>
                    </div>
                    <div class="post-views">
                    <img src="assets/views.png" class="post-actions-views">
                    <p id="pviews">0</p>
                    </div>
                </div>
            </div>

    `;
}