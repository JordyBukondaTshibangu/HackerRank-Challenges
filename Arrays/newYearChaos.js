function minimumBribes(q) {

    let countBribe = 0;
    let TOO_CHAOTIC = "too chaotic";
    let p1 = 1;
    let p2 = 2;
    let p3 = 3;
    
    for(let i = 0 ; i < q.length; i ++){
        if(q[i] === p1){
            p1 = p2;
            p2 = p3;
            p3++;
        } else if(q[i] === p2){
            countBribe++;
            p2 = p3;
            p3++;
        } else if(q[i] === p3){
            countBribe+= 2;
            p3++;
        } else {
            console.log(TOO_CHAOTIC);
            return 
        }
    }

   console.log(countBribe)
    

}

const q1 = [2, 1, 5, 3, 4];
const q2 = [4,1,2,3];

minimumBribes(q2)