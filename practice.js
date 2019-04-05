/*for(i=0;i<10;i++){
    console.log(i)
}
for(i=44;i<67;i++){
    console.log(i)
}*/ /*
console.log("hello")
console.log("hello".length)
console.log("hello world".length)
console.log("hello".toUpperCase())
console.log("hello".trim())
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))
 console.log("      |      |      ")
 console.log("      |      |      ")
 console.log("      |      |      ")
 console.log("--------------------")
 console.log("      |      |      ")
 console.log("      |      |      ")
 console.log("      |      |      ")
 console.log("--------------------")
 console.log("      |      |      ")
 console.log("      |      |      ")
 console.log("      |      |      ")
 console.log("      |      |      ")
 console.log('My name is Andrew'.search('Andrew'))
 console.log('My nane is Andrew'.lastIndexOf('d'))
 console.log('My name is Andrew'.slice(3,7))
 console.log('My name is Andrew'.substring(3,7))
 console.log('My name is Andrew'.substr(3,4))
 console.log('My name is Andrew'.replace('rew','y'))
 console.log('My name is Andrew'.concat(' miller'))
 console.log('All Around the world'.substr(7,1).toUpperCase())*/
 /*
 let name= 'andrew'
 console.log(name)
 name = 'andy'
 console.log(name)
 //var versus let
 let  age= 29 
 console.log(age)
 age *= 2
 console.log(age) 
 age += 2
 console.log(age)
 age /= 2
 console.log(age)
 age -= 1
 console.log(age)
 age++
 console.log(age)
 age--
 console.log(age)  

 let favoriteDrink= 'bourbon'
 console.log(`My favorite drink is ${favoriteDrink}`)
  */
 //let name= 'Andrew'
 // age= 42
 // favoriteColor= 'red'
 //.log(`Welcome ${name} today you are ${age} and the login screen is ${favoriteColor}`)
 //your age is ${age} and your favorite color is
 // ${favoriteColor}`)
 /* space1 = 'x'
 let space2= 'o'
 let space3= ' '
 let space4 ='x'
 let space5= 'x' 
 
 let space6= ' '
  let space7= 'o'
  let space8= ' '
  let space9= ' '
 
  
  console.log(` ${space1} | ${space2} | ${space3}  ` )
  console.log('   |   |   ')
 console.log('------------')
 console.log('   |   |   ')
  console.log('   |   |   ')
  console.log(` ${space4} | ${space5} | ${space6}  ` )
  console.log('   |   |   ')
 console.log('------------')
 console.log('   |   |   ')
  console.log(` ${space7} | ${space8} | ${space9}  ` )
  console.log('   |   |   ')
 console.log('------------') */
 //== compares value
 //=== compares values  and also type
 /* myNumber= 5
 let myNumber1= '5'

 if(myNumber1== 5){
     console.log('this is true')
 }
   else{console.log('this is false')}

   if(myNumber1=== 5){
    console.log('this is true')
}
  else{console.log('this is false')}

  let age1= 23
  let country= 'uk'
  if(age1 > 17 && country== 'uk'){
    console.log('you can drink')
}
 else  {
     console.log("you arn't old enough")
 }*/
  /*  
let logon = 'makeitlongdonotuseashortone' 

 if(logon.length > 7){
     console.log('the length is good enough')
 }
 else {
     console.log('this password is not long enough')
 }
 let num= 1234043218
  let bol= true;
  let stringNum= num.toString()
  let length= stringNum.length-1
  let count= 0
   
   while (count <= length-count){
       if(stringNum.charAt(count)== stringNum.charAt(length-count)){
           count++
       }
       else{
           bol= false;
           break;
       }
   }

   if(bol){
       console.log('this number is palandromic')
   }
   else{
       console.log('this number is not palandromic')
   } 
   
let time= 7
let placeOfWork= true
let townOfHome=  false

vowel= 'wwwwaww'
length1= vowel.length
let bol1= false
  
 
 while(length1>0){
     length1--
     if('aeiou'.includes(vowel.charAt(length1))){
    
         bol1= true
        break;
        
     }
 }
if(bol1){
    console.log(`the last vowel is at ${length1} position in the string`)
}
else{
    console.log('there is no vowel in this string')
}

const barista= (size,drink) => {
  console.log(`your order is a ${size} ${drink}`) }

  barista('large', 'mocha')

  const factorial=(n) =>{
      if((n===0)|| (n===1)){
          return 1
      }
      else{
          return (n*factorial(n-1))
      }
  }
  const noughtsAndCrosses= (space1,space2,space3,space4,
     space5,space6,space7,space8,space9)=>{
       console.log(` ${space1} | ${space2} | ${space3}  ` )
       console.log('   |   |   ')
       console.log('------------')

       console.log('   |   |   ')
       console.log(` ${space4} | ${space5} | ${space6}  ` )
       console.log('   |   |   ')
       console.log('------------')
       console.log('   |   |   ')
       console.log(` ${space7} | ${space8} | ${space9}  ` )
       console.log('   |   |   ')
       console.log('------------')                             
                            }
     
//noughtsAndCrosses('x',' ','x','o','o',' ',' ',' ',' ')  
const pinNumber=(att) =>{
    const pin= '1234'
    if(att===pin){
        return true
    }
    else{
        return false
    }
}
const balance=(att) =>{
    let balance= 1234
    if(att <=balance){
        return true
    }
    else{
        return
    }
}
const machine= (pin,am)=>{
    if(pinNumber(pin)) {
      if(balance(am)) {
          console.log('your funds are coming')
      } 
      else{
          console.log('you have insufficent funds')
      } 
    }else{
        console.log('incorrect pin try again')
    }

}
machine('1234',1234)
machine('1245',2000)
machine('1234',2000)

const mult= (a,b)=>{
    return a*b
}
console.log(mult(7,4))
*/
/*let songs= ['white rabbit','maggot brain','bewley brothers']
console.log(songs)
let drinks= ['bourbon','vodka','wine']
console.log(songs[2])
songs[0]= 'speed of life'
console.log(songs)
console.log(songs.length)
songs.push('kandy korn')
console.log(songs)
songs.pop()
console.log(songs) */
// unshift,shift= pop push at begining of array
// splice slice 

/*songs.unshift('heroes')
console.log(songs)
let ss= songs.shift()
console.log(songs,ss)
console.log(songs.slice(1))
console.log(songs)
console.log(songs.splice(1))
console.log(songs)


const numToString=(n)=>{
    return n.toString()
}

const addOne=(n)=>{
    return n+1
}
const subOne=(n)=>{
    return n-1
}

const add= (a,b)=>{
    return a+b
}

const subtract= (a,b)=>{
    return a-b
}
const multiply= (a,b)=>{
    return a*b
}
const divide= (a,b)=>{
    return a/b
}
const square= (a)=>{
  return a*a 
}
const expresion= (op,a,b)=>{
     let o= ['+','-','*','/']
     let oo= ['add','subtract','multiply','divide']
     let ooo= [add,subtract,multiply,divide]
     let index= oo.indexOf(op)

    console.log(`${a} ${o[index] } ${b} = ${ooo[index](a,b)}`)
}

expresion('add',3,2)

const great= (a,b)=>{
  return a>b   
} 

const less= (a,b)=>{
    return a<b
} 

const equal= (a,b)=>{
   return a==b 
} 
console.log(great(7,3))

const min=(a,b)=>{
    if(a<b){
        return a
    }else if(a>b){
         return b
    }else {
        return null
    }
}
const max=(a,b)=>{
    if(a<b){
        return b
    }else if(a>b){
         return a
    }else {
        return null
    }
}

const even=(a,b)=>{
    if(a% 2==0){
        return true
    }else {
         return false
    }        
    
}
const odd=(a,b)=>{
    if(a% 2==0){
        return false
    }else {
         return true
    }        
    
}
const grade=(a,b)=>{
    let per= (b*100)/a
        
         
    
}
for(i=9;i>-1;i--){
    console.log(i)
}
let filmNoir=['nightmare alley','they shoot horses don\'t they','try and get me',
'shield for murder','the big combo']
filmNoir.unshift('private hell 36')
filmNoir.push('detour')
 for(i=0;i<filmNoir.length;i++){
     console.log(filmNoir[i])
 }
 const filmCheck=(f)=>{
     if(f[2]=='ghostbusters'){
         return 'yey it\'s ghostbusters'
     } else{
         return 'we want ghostbusters'
     }
 }
 console.log(filmCheck(filmNoir))
  let sum= 0
 for(i=0;i<1001;i++){
     
     if(i%3==0 || i%5==0){
         sum= sum+i
     }
 }
 console.log(sum)
 
 let long='jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh'
 let hold=''
 let start= [-1]
 let end= [-1]
 for(i=0;i<long.length;i++){
   hold=`${long[i]}${long[i+1]}`
    if(hold== 'hi' ){
     if(  start[0]==-1){
        start[0]= i
        start[1]= i+1 
         }else  {
             end[0]= i
             end[1]= i+1 
        }  
    }
 }
 console.log(start,end,long.length)*/
 //for(i=0;i<long.length;i++){
 //  console.log(long[i])
 //}
 /*let hihi= []
  let cc= 0
 for(i=0;i<long.length;i++){
    hold=`${long[i]}${long[i+1]}`
     if(hold== 'hi' ){
         cc++  
         hihi.push([i,i+1])
     }
  }

  console.log(hihi,cc)

  const paliCheck=(num)=>{
    let bol= true;
    let stringNum= num.toString()
    let length= stringNum.length-1
    let count= 0
     
     while (count <= length-count){
         if(stringNum.charAt(count)== stringNum.charAt(length-count)){
             count++
         }
         else{
             bol= false;
             break;
         }
     }
     return bol
  }
  let largeNum= 90283743503503594
  let largeNum1= 902837435035035
  for(let i=largeNum1;i>-0;i--){
       if(paliCheck(i)){
           console.log (i)
           break
       }
       
  }

  console.log(paliCheck(1111111111))*/

  /*let person= {
      name:'andrew',
      age:54,
      favoriteDrinks:['bourbon','vodka','wine'],
      friendly(){
          return 'hello wheather\'s nice '
      },
      miserable(){
          return 'everything\' is going to ruin'
      },
      sayHi(){
          return `hi my name is ${this.name}`
      }
  }
  console.log(person.name)
  person['favBiscuits']=['plainChocDigestives','shortbread']
  
  person.favSongs= ['white rabbit','maggot brain','bewley brothers']
  console.log(person)
  console.log(person.sayHi())*/
  const fibCalc= (n)=>{
      if(n===1){
          return [0,1]
      }else{
          var s= fibCalc(n-1);
          s.push(s[s.length-1]+s[s.lenght-2])
           return s
      }
  }

  const nextFib= (a)=>{
      if((a[0]+ a[1]).toString().length===25){

      }
  } 
  let seq= [0,1]
   let holdResults= [] 
   let a= 0
 while(a.toString().length!=23){
      
      a= seq[seq.length-1]+seq[seq.length-2]
       seq.push(a)
       
   
          
 }

 console.log(a.toString().length,seq[seq.length-1].toString().length,
    seq[seq.length-2].toString().length) 

  num= 1
 while(true){
  if(num% 6==0 && num% 7== 0 && num% 8== 0 && num% 9==0 && num% 10==0){
      console.log('done')
    break   
  }   
  num++
 }

console.log(num)

let number= '371072875339021027987979982208375902465101357402504637693767749000971264812489697007805041701826053874324986199524741059474233309513058123726617309629919422133635741615725224305633018110724061549082502306758820753934617117198031042104751377806324667689261670696623633820136378418383684177343617267572811287981284997940806548193159262169127588983273844274228917432520321923589422876796487670272189318474514457360013064390911672168568445887116031532767038648610584302543993961982891759366568675793495162176457141856560629502157223196586755079324193331'
 
 let h= 0
 let n= 0
for(i=0;i<number.length;i++){
   h= parseInt(number.charAt(i))
   
    n=h+n
}

console.log(n)
 
let seq1= [1,2]
   let nn= 2
   let a1= 0
 while(a1<=4000000){
      
      a1= seq1[seq1.length-1]+seq1[seq1.length-2]
       seq1.push(a1)
       if(a1% 2==0){
           nn= nn+a1
       }
       
   
          
 }

 console.log(nn);

let potter= 'This is a paragraph from Harry Potter “Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself to be caught no less than forty seven times in various disguises.'
let arr= potter.split(' ')
//console.log(arr.length)

let game= {
    playerX: 'andrew',
    playerY: 'steven',
    grid: [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']],
    display(){
        console.log('   |   |   ')
        console.log(` ${this.grid[0][0]} | ${this.grid[0][1]} | ${this.grid[0][2]}  ` )
        console.log('   |   |   ')
       console.log('------------')
        console.log('   |   |   ')
        console.log(` ${this.grid[1][0]} | ${this.grid[1][1]} | ${this.grid[1][2]}  ` )
        console.log('   |   |   ')
       console.log('------------')
       console.log('   |   |   ')
        console.log(` ${this.grid[2][0]} | ${this.grid[2][1]} | ${this.grid[2][2]}  ` )
        console.log('   |   |   ')
    },
    update(r,c,v){
        this.grid[r][c]= v
    },
   check(x,y,z){
      if(x==y==z && x!=' '){
          if(x=='x'){
              return 'x win'
          } else {
             return 'y win'
          }
      }
   },
   lines(){
       let x = []
       let y= []
       for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            x.push(this.grid[i][j])
            y.push(this.grid[j][i])

        }
        //if(check(x[0],x[1],x[2])[0]==true){
        //  return 
       // }
        console.log(x)
        console.log(y)
        x= []
        y= []
      }
      x= []
    for (k=0;k<2;k++){
        for(l= 0;l<3;l++){
            x.push(this.grid[k==0 ? 1: l][k==0 ? l:1])
        }
        console.log(x)
         x= []
    }
    x=[]
    for(m=0;m<2;m++){
        for(n=0;n<3;n++){
            x.push(this.grid[m==0 ? n: n][m==0 ? n:2-n])
        }
        console.log(x)
        x= []
   }
  }
}   

let vv= 7

let aa= [vv==7 ? 'aa': 'bb',vv==6 ? 'aa':'bb']

console.log(aa)
let xx= 1
for(j=0;j<3;j++){
     
 for(i=0;i<3;i++){

    game.update(j,i,xx)
    xx++
 }
}

console.log(game.grid)
game.lines()