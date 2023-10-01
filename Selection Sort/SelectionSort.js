// This Funtion Can Sort Any Array Using Selection Sort Algorithem

function SelectionSort(Array) {
    let array = Array , 
        S = array.length ;
    for( let i = 0 ; i < S - 1  ; ++ i  ) {
        let index = i ; // We Will Consider The First element To Be The Smallest
        for(let j = i + 1 ; j < S ; ++ j ){
            if( array[index] > array[j] ) {// Swap The Index If This Element Is Smallest
                index = j ;
            }
        }
        // Swap The Elements 
        if( index != i ){
            array[index] += array[i];
            array[i] = array[index] - array[i];
            array[index] -=  array[i] ;
        }
    }
    return array ;
}// Complexity O(N^2)

// Test Case 

let Array = [ 10 , 2 , 9 , 3 , 4 , 7 , 5 , 1 ] ;

console.log("The Array Before Sort :") ;
console.log(Array) ;

let sortedArray = SelectionSort(Array) ;

console.log("The Array After Sort :") ;
console.log(sortedArray) ;

