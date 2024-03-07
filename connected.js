let likedstatus = null
let likeval = null

 function like(a){
    const empty = "assets/notliked.png"
    const liked = "assets/liked.png"
    let likebtn = document.getElementById("likebtn")
    let plike = document.getElementById("plike")

    if (likedstatus) {
        likedstatus = false
    } else {
        likedstatus = true
    }

    if (likedstatus) {
        likebtn.src = liked;
        likeval += 1;
        plike.textContent = likeval;
    } else {
        likebtn.src = empty;
        likeval -= 1;
        plike.textContent = likeval;
    }
}