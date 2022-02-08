//REPL
//Read Eval Print Loop
console.log(10)
// Use '_' for fetching previous value
let m=12*76+1
console.log(m)

do{
    console.log(++m)
}while(m<100);

//forEach
let fruits=['apple','banana','grapes']
function getFruits(item,index,array){
    if (index==array.length)
        console.log("Last Fruit")
    else
        console.log(`${index+1}. ${item}.\n`)
}
fruits.forEach(getFruits);