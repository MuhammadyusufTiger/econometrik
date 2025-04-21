let lectureL=[
    {
        id: 0,
        title:"Maruza ",
        link: "sourses/books/11-МАВЗУ. СТАНДАРТ МАСШТАБДАГИ РЕГРЕССИЯ ТЕНГЛАМАСИ.pdf",
    },
    {
        id: 1,
        title:"Maruza ",
        link: "sourses/books/20-mavzu ...................amaly ekonometrik madellar.pdf",
    },
    {
        id: 2,
        title:"Maruza ",
        link: "sourses/books/АДАПТИВ КУТИШЛАР ВА ТАҚСИМЛАНГАН ЛАГ МОДЕЛЛАРИНИНГ ПАРАМЕТРЛАРИНИ БАҲОЛАШ.pdf",
    },
    {
        id: 3,
        title:"Maruza ",
        link: "sourses/books/МАВЗУ. БИЛВОСИТА ВА ИККИ БОСҚИЧЛИ ЭНГ КИЧИК КВАДРАТЛАР УСУЛИ.pdf",
    },
    {
        id: 4,
        title:"Maruza ",
        link: "sourses/books/МАВЗУ. ВАҚТЛИ ҚАТОР ДАРАЖАЛАРИНИНГ АВТОКОРРЕЛЯЦИЯСИ.pdf",
    },
    {
        id: 5,
        title:"Maruza ",
        link: "sourses/books/МАВЗУ. ВАҚТЛИ ҚАТОРЛАР ТЎҒРИСИДА АСОСИЙ ТУШУНЧАЛАР.pdf",
    },
    {
        id: 6,
        title:"Maruza ",
        link: "sourses/books/МАВЗУ. ВАҚТЛИ ҚАТОРЛАРНИНГ АДДИТИВ ВА МУЛЬТИПЛИКАТИВ МОДЕЛЛАРИ.pdf",
    },
    {
        id: 7,
        title:"Maruza ",
        link: "sourses/books/МАВЗУ. ДИНАМИК ЭКОНОМЕТРИК МОДЕЛЛАР.pdf",
    },
    {
        id: 8,
        title:"Maruza ",
        link: "sourses/books/МАВЗУ. ИҚТИСОДИЙ КЎРСАТКИЧЛАРНИ БАШОРАТЛАШДА ЭКОНОМЕТРИК МОДЕЛЛАРДАН ФОЙДАЛАНИШ.pdf",
    },
    {
        id: 9,
        title:"Maruza ",
        link: "sourses/books/МАВЗУ. ИҚТИСОДИЙ ЎСИШ МОДЕЛЛАРИ.pdf",
    },
    {
        id: 10,
        title:"Maruza ",
        link: "sourses/books/МАВЗУ. МОДЕЛНИНГ КЕЛТИРИЛГАН ВА ТАРКИБИЙ ШАКЛИ.pdf",
    }
]

const lectureBtns=document.querySelector("#lectureLink");
const objL=document.querySelector("#objL");
const count=document.querySelector("#lecCount");
$(document).ready(() => {
    count.textContent=`${lectureL.length} ta`
    for(let i=0;i<lectureL.length;i++){
        lectureBtns.innerHTML+=`<button 
                                    type="button" 
                                    class="btn btn-lg btn-primary w-100 text-start mb-2" 
                                    style="font-size: 13px; height:50px;"
                                    onclick="setLink(${i})">
                                    ${i+1}-${lectureL[i].title}
                                </button>`;
    }
});

function setLink(i){
    objL.data=lectureL[i].link;
}