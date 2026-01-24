// console.log("fetching user data from database...")
// let user;
// setTimeout(()=>{
//     user={name:"B2 Bhaiya",email:"bittukumarsingh@gmail.com"}
//     console.log("user is fetched")
// },0);
// console.log(user)

// console.log("first task")
// Promise.resolve().then(()=> console.log("promise resolved"))
// console.log("second task")

// console.log("task1")
// setTimeout(()=>{
//     console.log("task2")
// },0)
// Promise.resolve().then(()=> console.log("task3"))
// console.log("task4")


const fetchUser=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user={1:{name:"Biru",phone:"8340118254",address:"Patna",},
        2:{name:"Bittu",phone:"7061057265",address:"Aurangabad"}}
            const users=user[id];
            if(users){
                resolve(users)
            }
            else{
                reject("user not found")
            }
        },2000)
    })
}
fetchUser(1)
.then((users)=>console.log(users))
.catch((error)=>console.log(error))
// console.log(fetchUser(1))

const getUserData=async()=>{
    return new Promise((resolve,reject)=>{})
    
}