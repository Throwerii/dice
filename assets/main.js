let dieRoll=[]
let rollButton = document.querySelector("#roll")
let diceroll = document.querySelector("#diceroll")
let showAllButton = document.querySelector("#all")
let rollSum = document.querySelector("#rollsum")
let listAll = document.querySelector("#allroll")


rollButton.addEventListener("click", function() {
   const result=diceroll.value
    console.log(result)
    console.log("Roll button clicked")
    let numRand=Math.floor(Math.random() * 7)
    let count=0
    while(count<result){
        dieRoll.push(numRand)
        console.log(dieRoll)
        var sum=dieRoll.reduce(function(a,b){
            return a+b
        },0)
        console.log(sum)
            rollSum.innerHTML=sum; 
        count+=1
    }
    })
showAllButton.addEventListener("click", function() {
   const result=diceroll.value
    console.log(result)
    console.log("All button clicked")
    let count=0
    let i=0
    while(count<result){
        var list=dieRoll[i]
        const newDiceString = '<li class="allroll">' + list + "</li>";
        listAll.innerHTML += newDiceString;
        console.log(dieRoll)
        i+=1
        count+=1

    }
    })