// let func = (a,func) => {
//     console.log(a)
//     func()
// } 
// func(10,()=>(console.log(50)))

// let func = (question,yes,no) =>{
//     if(confirm(question)) yes();
//     else no()
// }
// func('Вы согласны?',
//     ()=>alert('Вы согласились'),
//     ()=>alert('Вы отменили выполнение')
// )

// let a = '10'
// let obj = {
//     "my name":'Kaszcz',
//     surname:'Fabn',
//     age:24,
// }
// console.log(obj["my name"])
// console.log(obj.age)

// obj.year = 2022
// obj["ban"] = 512

// console.log(obj.year)
// console.log(obj["ban"])

// delete obj["ban"]

// console.log(obj["ban"])

// let user = {
//     name:'Hadsa',
//     surname:'Jhjakda',
//     age: 11,
//     year:2022
// }

// user.name = 'DASDAS'
// delete user.name


// // let obj = new Object()
// // let obj = Object.create(null,{})

// console.log('name' in user)

// for(key in user){
//     console.log(user[key])
//     console.log(key)

// }


// let prices = {
//     milk:300,
//     bread:1300,
//     phone:23000,
//     name:'asdasd',
//     surname:'azxczx',
//     year: '2022'
// }
// function sum(obj){
//     let sum=0
//     for(key in obj){
//     if (typeof obj[key] === 'number')
//     sum += obj[key]
//     }
//     if(typeof obj[key] === 'string' && !isNaN(+obj[key]))
//     return sum

// }

// console.log(sum(prices))

let obj2 = {...obj1}


