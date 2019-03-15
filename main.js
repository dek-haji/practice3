//targetting dom elements using querysellector exercise.


let article1 = document.querySelector(".article__header")
article1.textContent = `WELCOME TO DEK'S BLOG`;
article1.classList.remove("article__header")
article1.classList.add("article__header__important")

let dash = document.querySelector(".dashed");
dash.classList.remove("dashed")


let footer = document.querySelector(".article__footer")
footer.classList.add("goldenrod")