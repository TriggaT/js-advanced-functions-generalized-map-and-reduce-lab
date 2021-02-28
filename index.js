// Add your functions here


function map(array, work){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(work(array[i]))
    }
    return newArray
}

function reduce(array, work, startingPoint = 0){
    let a = (!!startingPoint) ? startingPoint : array[0] 
    let i = (!!startingPoint) ? 0 : 1
    for (i; i < array.length; i++){
        a = work(array[i], a)
    }
    return a

}