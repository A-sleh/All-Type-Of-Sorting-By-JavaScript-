let array = [ 2 , 1 , 3 , 6 , 8 , 10 , 11 , 7 , 4 ] ;

console.log('The Array Before Sort : ' , array ) ;

function quickSort(left , right ) {
    if( right - left <= 0 ) return ;
    let paivot = array[right] ; // rightMost Item
    let partition = partitionIT(left,right,paivot) ;
    //console.log(partition , 'for' , 'left = ' , left , 'right = ' , right ) ; 
    quickSort(left , partition - 1 ) ; // the first subArray
    quickSort(partition + 1 , right ) ; // the second subArray
}

function partitionIT(left , right , paivot ) {
    let l = left - 1 ,
        r = right ;
    while(true) {
        while( array[++l] < paivot ) ;
        while( r > 0 && array[-- r ] > paivot ) ;   
        if( l >= r  ) break ;
        if(array[l] != array[r]) {
            array[l] ^= array[r] ;
            array[r] ^= array[l] ;
            array[l] ^= array[r] ;
        }
    }
    if(array[right] != array[l]) {
        array[l] ^= array[right] ;
        array[right] ^= array[l] ;
        array[l] ^= array[right] ;
    }
    return l ;
}
quickSort( 0 , array.length - 1 )   
console.log('The Array Before Sort : ' , array) ;