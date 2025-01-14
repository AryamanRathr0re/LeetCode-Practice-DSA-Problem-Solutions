/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

  let  I = 1
let V =    5
let X =   10
let L =  50
let C= 100
let D = 500
let M = 1000
let temp=0
for(let i=0;i<s.length;i++){
 
    if(s[i]==="I"){
        if(s[i+1]==="V"){
            temp+=4
            i++

        }
        else if(s[i+1]==="X"){
            temp+=9
            i++
        }
        else
        temp+=1
    }
    else if(s[i]==="V"){
        temp+=5
    }
     else if(s[i]==="X"){
        if(s[i+1]==="L"){
            temp+=40
            i++
        }
        else if(s[i+1]==="C"){
            temp+=90
            i++
        }
        else
        temp+=10
    } else if(s[i]==="L"){
        temp+=50
    } else if(s[i]==="C"){
        if(s[i+1]==="D"){
            temp+=400
            i++
        }
        else if(s[i+1]==="M"){
            temp+=900
            i++
        }
        else
        temp+=100
    } else if(s[i]==="D"){
        temp+=500
    } else if(s[i]==="M"){
        temp+=1000
    }

}
return temp

    
};