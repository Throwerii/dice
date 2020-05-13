let dieRoll=[]
let rollButton = document.querySelector("#roll")
let diceroll = document.querySelector("#diceroll")
let showAllButton = document.querySelector("#all")
let rollSum = document.querySelector("#rollsum")

rollButton.addEventListener("click", function() {
   const result=diceroll.value
    console.log(result)
    console.log("Roll button clicked")
    let numRand=Math.floor(Math.random() * 7)
    let count=0
    while(count<result){
        console.log(numRand)
        
        count+=1
    }
})