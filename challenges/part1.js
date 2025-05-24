/** Write your code below */
let post=""
jsInput=document.querySelector('input')
jsDiv=document.querySelector('div')
let handelInput=()=>{
    post=jsInput.value
    jsDiv.textContent=post
}
jsInput.addEventListener('input',handelInput)

