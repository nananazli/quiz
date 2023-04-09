const quizData=[
    {
        question: 'hangisi aile hukuku ilkelerinden biri değildir?',
        a:'eşitlik',
        b:'irade özerkliği ilkesi',
        c:'numerus clausus olma',
        d:'devletin müdahalesi ilkesi',
        e:'düzenleme serbestisinin olmaması ilkesi',
        correct:'b',


    },

    {
        question: 'aile hukuku kitabını oluşturan kısımlar hangi şıkta doğru verilmiştir?',
        a:'nişanlanma,evlilik hukuku,hısımlık',
        b:'nişanlanma,evlilik hukuku,vesayet',
        c:'evlilik hukuku,hısımlık,vesayet',
        d:'evlilik hukuku,vesayet,hısımlık',
        e:'hısımlık,nşanlanma,evlilik hukuku',
        correct:'c',


    },

    {
        question: 'hangisi yanlıştır?',
        a:'mevzuatta ayırt etme gücüne sahip küçüklerin nişanlanabilmesi bakımından belli bir yaş şartı aranmamıştır',
        b:'nişanlılardan birinin öldürülmesi durumunda,sağ kalan nişanlı,destekten yoksun kalma tazminatına hak kazanabilir.',
        c:'haklı bir sebep bulunmaksızın nişan bozulabilir',
        d:'nişanı bozma şahsa sıkı sıkıya bağlı haktır',
        e:'evlilik sona ermişse kadın,evliliğin sona ermesinden başlayarak 300 gün geçmedikçe nişanlanamaz',
        correct:'e',


    },
    {
        question:'maddi tazminat kanun numarası',
        a:'119',
        b:'120',
        c:'121',
        d:'122',
        e:'123',
        correct:'b',


    },

    {
        question: 'hangisi kesin olmayan evlenme engelidir',
        a:'bekleme süresi',
        b:'kan hısımlığı',
        c:'kayın hısımlığı',
        d:'evlatlık ilişkisi',
        e:'önceki evlilik',
        correct:'a',


    },
]

const quiz= document.getElementById("quiz")
const answerEls=document.querySelectorAll(".answer")
const questionEl=document.getElementById("question")
const a_text=document.getElementById("a-text")
const b_text=document.getElementById("b-text")
const c_text=document.getElementById("c-text")
const d_text=document.getElementById("d-text")
const e_text=document.getElementById("e-text")
const submitBtn= document.getElementById("submit")

let currentQuiz=0
let score=0

loadQuiz()
function loadQuiz(){
 const currentQuizData= quizData[currentQuiz]
 
 deselectedAnswers()

 questionEl.innerText=currentQuizData.question
 a_text.innerText=currentQuizData.a
 b_text.innerText=currentQuizData.b
 c_text.innerText=currentQuizData.c
 d_text.innerText=currentQuizData.d
 e_text.innerText=currentQuizData.e
 
 


}


function deselectedAnswers(){

    answerEls.forEach(answerEl => answerEl.checked= false)

}

function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click",()=>{
    const answer=getSelected()

   // console.log(answer)

   if(answer){
    if(answer === quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++
   
    if(currentQuiz<quizData.length){
        loadQuiz()
    } else{
        quiz.innerHTML='<h2>test tamamlandı, 100 puan aldınız</h2>   <button class="submit" onClick="location.reload()">tekrar dene </button>'
    }

   }
})
 // ${score*20}