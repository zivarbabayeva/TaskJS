
let employers=[
    {
    name:"Zivar",
    surname:"Babayeva",
    profession: "Front_end Developer",
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus voluptas consequatur, dolor ad quia.",
    image:"https://i.pravatar.cc/300"
},
{
    name:"Zeynab",
    surname:"Aliyeva",
    profession: "Back_end Developer",
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus voluptas consequatur, dolor ad quia.",
    image:"https://i.pravatar.cc/300"
},
{
    name:"Narmin",
    surname:"Abizada",
    profession: "Front_end Developer",
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus voluptas consequatur, dolor ad quia.",
    image:"https://i.pravatar.cc/300"
},
{
    name:"Seljan",
    surname:"Alizada",
    profession: "IOS Developer",
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus voluptas consequatur, dolor ad quia.",
    image:"https://i.pravatar.cc/300"
},
{
    name:"Yagut",
    surname:"Alizada",
    profession: "Data Engineer",
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus voluptas consequatur, dolor ad quia.",
    image:"https://i.pravatar.cc/300"
},
{
    name:"Ahad",
    surname:"Alizada",
    profession: "Devops-Engineer",
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus voluptas consequatur, dolor ad quia.",
    image:"https://i.pravatar.cc/300"
},
];
const employersContainer=document.querySelector(".employers")
for (let i=0; i<employers.length;i++){
    let employer=document.createElement("div")
    employer.className="employer"
    employer.innerHTML=`
     <div class="violet"></div>
                <div class="info">
                    <div class="image">
                        <img src="${employers[i].image}" alt="/">
                    </div>
                    <div class="details">
                        <h1 class="fullname">${employers[i].name} ${employers[i].surname}</h1>
                        <h2 class="profession">${employers[i].profession}</h2>
                        <div class="description"> ${employers[i].description}.</div>
                        <div class="button">View Profile</div>
                    </div>
                </div>
            </div>
            `
            employersContainer.appendChild(employer)
}