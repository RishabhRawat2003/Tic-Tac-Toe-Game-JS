const resetGame = document.querySelector(".reset")
const buttons = document.querySelectorAll(".btn")

let winningChances = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let turn0 = true

buttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        e.preventDefault()
        if(turn0){
            btn.innerText = "O"
            turn0 = false
        }else{
            btn.innerText = "X"
            turn0 =  true
        }
        btn.disabled = true
        checkWinner()
    })
})

let checkWinner = ()=>{
    for(let i of winningChances){
        let posValue1 = buttons[i[0]].innerText
        let posValue2 = buttons[i[1]].innerText
        let posValue3 = buttons[i[2]].innerText
        if(posValue1!="" && posValue2!="" && posValue3!="" ){
            if(posValue1===posValue2 && posValue2===posValue3 && posValue3===posValue1){
                alert(`Player ${posValue1} Won !!`)
                buttons.forEach((btn)=>{
                    btn.setAttribute("disabled","")
                })
            }
        }
    }
}


resetGame.addEventListener("click",function(e){
    e.preventDefault()
    window.location.reload()
})