document.addEventListener("DOMContentLoaded", function () {

    const memeForm = document.getElementById("memeform");
    const memeAddSection = document.getElementById("memeaddsection");

    memeForm.addEventListener("submit", function (evt) {
        evt.preventDefault();
        
        let imageUrl = evt.target.image_url.value;
        let topText = evt.target.top_text.value;
        let bottomText = evt.target.bottom_text.value;
        
        let memeDiv = document.createElement("div");
        memeDiv.setAttribute("id", "meme");

        let h2Top = document.createElement("h2");
        h2Top.setAttribute("id", "toptext");
        h2Top.innerText = topText;

        let h2Bottom = document.createElement("h2");
        h2Bottom.setAttribute("id", "bottomtext");
        h2Bottom.innerText = bottomText;

        let memeImage = document.createElement("img");
        memeImage.setAttribute("id", "addmemeimage");
        memeImage.src = imageUrl;

        let deleteBtn = document.createElement("a");
        deleteBtn.classList.add("waves-effect", "waves-light", "btn-small");
        deleteBtn.setAttribute("id", "deletememe");
        deleteBtn.innerText= "Delete Meme";

        memeDiv.append(h2Top, memeImage, h2Bottom, deleteBtn);
        memeAddSection.appendChild(memeDiv);

        deleteBtn.addEventListener("click", function(evt){
            evt.target.parentElement.remove();
        });

        memeForm.reset();
    });

});