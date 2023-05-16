const quizData = [
    {
        'que': 'Which of the following is markup language?',
        'a':'HTML',
        'b': 'CSS',
        'c' : 'Javascript',
        'd' : 'PHP',
        'correct':'a'

    },
    {
        'que': 'Which language is used for styles in web development?',
        'a':'JAVA',
        'b': 'CSS',
        'c' : 'React.js',
        'd' : 'BootStrap',
        'correct':'b'

    },{
    'que': 'What does CSS stands for?',
        'a':'Cascading style sheet',
        'b': 'Cascade styling sheet',
        'c' : 'Cascades styles sheet',
        'd' : 'Copying and styling sheet',
        'correct':'a'
    },
    {
        'que': 'What is the work of BootStrap?',
        'a':'It describes the structure of the page',
        'b': 'It is the brain of the page',
        'c' : 'Designed to enable responsive development of mobile- first websites',
        'd' : 'It is the beauty of the page',
        'correct':'c' 
    },
    {
        'que': 'JDK stands for?',
        'a':'Java Design Kit',
        'b': 'Java Destruct kit',
        'c' : 'Java Destructure kit',
        'd' : 'Java Development Kit',
        'correct':'d' 
    }

];
let index =0;
let correct=0,
incorrect=0,
total =quizData.length;
let questionBox= document.getElementById("questionBox")
let allInputs = document.querySelectorAll("input[type='radio']")
const loadquestion =() =>{
    if(total==index){
        return quizEnd()

    }
    reset()
    const data = quizData[index];
    questionBox.innerHTML = ` ${index+1}) ${data.que}`;
    allInputs[0].nextElementSibling.innerText =data.a;
    allInputs[1].nextElementSibling.innerText =data.b;
    allInputs[2].nextElementSibling.innerText =data.c;
    allInputs[3].nextElementSibling.innerText =data.d;

}
 document.querySelector("#submit").addEventListener(
    "click",
    function(){
        const data = quizData[index]
        const ans = getAnswer()
        if(ans==data.correct){
            correct++;
        }
        else{
            incorrect++;
        }
        index++;
        loadquestion()
    }
 )
 const getAnswer=()=>{
    let ans;
    allInputs.forEach(
        (inputE1) => {
        if(inputE1.checked){
            ans =inputE1.value;
        }
        
    })
    return ans;
 }
 const reset= ()=>{
    allInputs.forEach(
        (inputE1) =>{
            inputE1.checked =false;
        }
    )
 }
 const quizEnd =() =>{
    document.getElementsByClassName("container")[0].innerHTML =`
    <div class = "col">
    <h3 class = "w-100">Hii, You've  scored ${correct}/${total}</h3>
    </div>`
 }

loadquestion(index);
