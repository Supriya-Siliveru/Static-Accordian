let questions = document.getElementsByClassName('question');
let answerDiv = document.getElementsByClassName('answer');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<questions.length; i++){
    questions[i].addEventListener('click', ()=>{
        if( parseInt(answerDiv[i].style.height) != answerDiv[i].scrollHeight){
            answerDiv[i].style.height = answerDiv[i].scrollHeight + "px";
            questions[i].style.color = "#0084e9";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            answerDiv[i].style.height = "0px";
            questions[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<answerDiv.length; j++){
            if(j!==i){
                answerDiv[j].style.height = "0px";
                questions[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}