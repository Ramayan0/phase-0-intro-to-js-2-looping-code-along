function writeCards(arr, message){
    let cards = [];
    for(let i = 0; i<arr.length; i++){
        cards.push(`Thank you, ${arr[i]}, for the wonderful ${message} gift!`);
          
    }
    return cards;
}
 function countDown(n){
    while(n>=0){
        console.log(n);
        n--;
    }
 
 }