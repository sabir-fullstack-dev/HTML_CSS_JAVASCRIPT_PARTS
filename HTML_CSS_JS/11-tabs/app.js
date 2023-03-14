

const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e){
    const id = e.target.dataset.id; //will say us which id we clicked
    if(id){

        //remove active from other buttons

        btns.forEach(function(btn){
            btn.classList.remove("active")// we remove active from all buttons

            e.target.classList.add("active") // and then add active class into the button which we choose
        })
           //hide articles

           articles.forEach(function(article){
            article.classList.remove("active") // we removed active class from all contents
           })

           const element = document.getElementById(id); // in here we are searching id names which are located in contents
           element.classList.add("active")// then adding active class into contents which ones id is already selected , 
           // when u clicking any button from buttons list we will call exact data-id which we clicked 
           //then we will use this data-id as a article id which mentioned before 
        
    }
})