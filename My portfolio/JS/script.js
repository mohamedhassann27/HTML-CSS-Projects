// const skillsArray=[
//     {
//         name:"HTML",
//         experience:"2024",
//         type:"frontend"
//     },
//     {
//         name:"CSS",
//         experience:"2024",
//         type:"frontend"
//     },
//     {
//         name:"Javascript",
//         experience:"2024",
//         type:"frontend"
//     },
//     {
//         name:"React",
//         experience:"2024",
//         type:"frontend"
//     },
//     {
//         name:"C++",
//         experience:"2024",
//         type:"backend"
//     },
//     {
//         name:"Python",
//         experience:"2024",
//         type:"backend"
//     }
// ];
// let skillsList=document.createElement("ul");
// skillsList.classList.add("skills__list");

// skillsArray.forEach((element)=>{
//     let skillsColumn= document.createElement("li");
//     skillsColumn.classList.add("skills__column")
//     let p=document.createElement("p");
//     let pCont=document.createTextNode(element["name"]);
//     p.appendChild(pCont);
//     skillsColumn.appendChild(p);
//     skillsList.appendChild(skillsColumn);
// })
// document.querySelector("#skills .container").appendChild(skillsList);


// import {animate} from 'animejs';

import { animate,svg,utils } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

// import { svg, utils } from 'animejs';

const [ $path1, $path2 ] = utils.$('polygon');

function animateRandomPoints() {
  // Update the points attribute on #path-2
  utils.set($path2, { points: generatePoints() });
  // Morph the points of #path-1 into #path-2
  animate($path1, {
    points: svg.morphTo($path2),
    ease: 'inOutCirc',
    duration: 500,
    onComplete: animateRandomPoints
  });
}

// Start the animation
animateRandomPoints();

// A function to generate random points on #path-2 on each iteration
// For demo purpose only
function generatePoints() {
  const total = utils.random(4, 64);
  const r1 = utils.random(4, 56);
  const r2 = 56;
  const isOdd = n => n % 2;
  let points = '';
  for (let i = 0, l = isOdd(total) ? total + 1 : total; i < l; i++) {
    const r = isOdd(i) ? r1 : r2;
    const a = (2 * Math.PI * i / l) - Math.PI / 2;
    const x = 152 + utils.round(r * Math.cos(a), 0);
    const y = 56 + utils.round(r * Math.sin(a), 0);
    points += `${x},${y} `;
  }
  return points;
}



let filterButtons=document.querySelectorAll(".skills__button");
let skillsList=document.querySelector(".skills__list")

filterButtons.forEach((element)=>{
    element.addEventListener("click",()=>{
        document.querySelector(".skills__button--isActive").classList.remove("skills__button--isActive");
        element.classList.add("skills__button--isActive")
        
        // if ( element.getAttribute("data-type")==="all") {
        //     skillsList.classList.remove("frontend")
        //     skillsList.classList.remove("backend")
        // }
        // else if(element.getAttribute("data-type")==="frontend"){
        //     skillsList.classList.add("frontend");
        //     skillsList.classList.remove("backend")
        // }
        // else if(element.getAttribute("data-type")==="backend"){
        //     skillsList.classList.add("backend");
        //     skillsList.classList.remove("frontend");
        // }
        skillsList.classList=`skills__list ${element.dataset.type}`;
    })
})

window.addEventListener('DOMContentLoaded',()=>{
    const options = {
        threshold: 0.3,
    };
    
    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("inView");
            }else {
                entry.target.classList.remove("inView")
            }
        })
    };

    const observer = new IntersectionObserver(callback, options);
    
    document.querySelectorAll("#bio,#skills,#clientsReviews,#contact").forEach((section)=>{
        observer.observe(section)
    })
    document.querySelectorAll(".project").forEach((project)=>{
        observer.observe(project)
    })

})

