//CallBack is a function which pass as an argument to other function
//creating callback

function sum(a,b)
{
    console.log(`Sum of ${a} and ${b} = ${a+b}`);
    
}
//passing sum function in calculator as argument 
function calculator(a,b,sumCallback)
{
    sumCallback(a,b);
}

calculator(2,5,sum);

//creating nested callback

function getData(dataId,getNextData)  
{
    setTimeout(()=>{
        console.log("Data",dataId)
        if(getNextData)
        getNextData();
    },2000)
}
//nested callback and this become callback Hell it is a problem 
getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
});

//promise is used to handle callback hell problem
//it takes two callback function as argument 
//and it has three states panding,resolvedand rejected
//creating new promise
let promise=new Promise((resolve,reject)=>{
    console.log("I am promise");
  //  resolve("success");//for fullfil state
    reject("an error occur");//for rejected state
});

//how we use promise

const getPromise=()=>{
    return new Promise((resolve,reject)=>
    {
     console.log("I am Promise");
     resolve("Success");   
    });
}
//now calling promise
let promise1=getPromise();
// .then is sued when promise is resolved or fullfil
//.catch is used when promise is rejected
promise1.then(()=>{
    console.log("promise resolved");
});