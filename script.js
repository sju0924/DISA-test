A = 0;
B = 0;
C = 0; 
D = 0;

function submit(){
    Qcount = 2;
    for(i = 1;i<=Qcount;i++){
        cur = 'q'+String(i);
        resarr = document.getElementsByName(cur);
        for(j = 0 ; j<4 ; j++){
            if(resarr[j].checked == true){
                res = resarr[j].value;
            }
        }

        if(res == 'A'){
            A += 1
        }
        else if(res == 'B'){
            B+=1
        }
        else if(res == 'C'){
            C+=1
        }
        else if(res == 'D'){
            D+=1
        }
    }

    max = Math.max(A,B,C,D)
    console.log('max : ',max)

    if(max == A){
        document.getElementById('result').innerText += ' A'
    }
    if(max == B){
        document.getElementById('result').innerText += ' B'
    }
    if(max == C){
        document.getElementById('result').innerText += ' C'
    }
    if(max == D){
        document.getElementById('result').innerText += ' D'
    }

    A = 0
    B = 0
    C = 0
    D = 0

}

