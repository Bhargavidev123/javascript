// sum of even numbers from 1 to 100

function even(){
    let sum = 0;
    for(i=0;i<=100;i++){
        if(i%2 == 0){
            sum = sum + i;
        }
    }
    console.log(sum);
}
even()



