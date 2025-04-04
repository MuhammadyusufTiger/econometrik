let staskL=[
    {
        id: 0,
        title:"СТАНДАРТ МАСШТАБДАГИ РЕГРЕССИЯ ТЕНГЛАМАСИ",
        link: "sourses/books/11-МАВЗУ. СТАНДАРТ МАСШТАБДАГИ РЕГРЕССИЯ ТЕНГЛАМАСИ.pdf",
    },
    {
        id: 1,
        title:"Amaly ekonometrik madellar",
        link: "sourses/books/20-mavzu ...................amaly ekonometrik madellar.pdf",
    },
    {
        id: 2,
        title:"АДАПТИВ КУТИШЛАР ВА ТАҚСИМЛАНГАН ЛАГ МОДЕЛЛАРИНИНГ ПАРАМЕТРЛАРИНИ БАҲОЛАШ",
        link: "sourses/books/АДАПТИВ КУТИШЛАР ВА ТАҚСИМЛАНГАН ЛАГ МОДЕЛЛАРИНИНГ ПАРАМЕТРЛАРИНИ БАҲОЛАШ.pdf",
    },
    {
        id: 3,
        title:"БИЛВОСИТА ВА ИККИ БОСҚИЧЛИ ЭНГ КИЧИК КВАДРАТЛАР УСУЛИ",
        link: "sourses/books/МАВЗУ. БИЛВОСИТА ВА ИККИ БОСҚИЧЛИ ЭНГ КИЧИК КВАДРАТЛАР УСУЛИ.pdf",
    },
    {
        id: 4,
        title:"ВАҚТЛИ ҚАТОР ДАРАЖАЛАРИНИНГ АВТОКОРРЕЛЯЦИЯСИ",
        link: "sourses/books/МАВЗУ. ВАҚТЛИ ҚАТОР ДАРАЖАЛАРИНИНГ АВТОКОРРЕЛЯЦИЯСИ.pdf",
    },
    {
        id: 5,
        title:"ВАҚТЛИ ҚАТОРЛАР ТЎҒРИСИДА АСОСИЙ ТУШУНЧАЛАР",
        link: "sourses/books/МАВЗУ. ВАҚТЛИ ҚАТОРЛАР ТЎҒРИСИДА АСОСИЙ ТУШУНЧАЛАР.pdf",
    },
    {
        id: 6,
        title:"ВАҚТЛИ ҚАТОРЛАРНИНГ АДДИТИВ ВА МУЛЬТИПЛИКАТИВ МОДЕЛЛАРИ",
        link: "sourses/books/МАВЗУ. ВАҚТЛИ ҚАТОРЛАРНИНГ АДДИТИВ ВА МУЛЬТИПЛИКАТИВ МОДЕЛЛАРИ.pdf",
    },
    {
        id: 7,
        title:"ДИНАМИК ЭКОНОМЕТРИК МОДЕЛЛАР",
        link: "sourses/books/МАВЗУ. ДИНАМИК ЭКОНОМЕТРИК МОДЕЛЛАР.pdf",
    },
    {
        id: 8,
        title:"ИҚТИСОДИЙ КЎРСАТКИЧЛАРНИ БАШОРАТЛАШДА ЭКОНОМЕТРИК МОДЕЛЛАРДАН ФОЙДАЛАНИШ",
        link: "sourses/books/МАВЗУ. ИҚТИСОДИЙ КЎРСАТКИЧЛАРНИ БАШОРАТЛАШДА ЭКОНОМЕТРИК МОДЕЛЛАРДАН ФОЙДАЛАНИШ.pdf",
    },
    {
        id: 9,
        title:"ИҚТИСОДИЙ ЎСИШ МОДЕЛЛАРИ",
        link: "sourses/books/МАВЗУ. ИҚТИСОДИЙ ЎСИШ МОДЕЛЛАРИ.pdf",
    },
    {
        id: 10,
        title:"МОДЕЛНИНГ КЕЛТИРИЛГАН ВА ТАРКИБИЙ ШАКЛИ",
        link: "sourses/books/МАВЗУ. МОДЕЛНИНГ КЕЛТИРИЛГАН ВА ТАРКИБИЙ ШАКЛИ.pdf",
    }
    
]

let stasksBtns=document.querySelector("#stasksLink");
let objT=document.querySelector("#objL");
let countT=document.querySelector("#taskCount");

// countT.textContent=`${staskL.length} ta`;
// for(let k=0;k<staskL.length;k++){
    
// }

$(document).ready(() => {
    countT.textContent=`${staskL.length} ta`
    for(let i=0;i<staskL.length;i++){
        stasksBtns.innerHTML+=`<button 
                                    type="button" 
                                    class="btn btn-lg btn-primary w-100 text-start mb-2" 
                                    style="font-size: 14px; height:50px;"
                                    onclick="setLink(${i})">
                                    ${staskL[i].title}
                                </button>`;
    }
});
function setLink(i){
    objT.data=staskL[i].link;
}