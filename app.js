function sing(){
    console.log("Do")
    console.log("Re")
    console.log("Mi")
}
sing()



function greet(firstName){
    console.log(`firstName is: ${firstName}`)
}


function repeat(str,numTimes){
    let result = ''
    for (let i = 0; i < numTimes; i++){
        result += str
    }
    console.log(result)
}
