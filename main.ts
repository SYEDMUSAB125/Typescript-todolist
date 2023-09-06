#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
let lists:string[]=[];
type todo = {
    do:string,
    choices:string,
    addtodo:string,
    deletetodo:string
}
let todo:todo=await inquirer.prompt([{
    message:"Enter your todo list",
    type:"string",
    name:"do"
},{
    message:"select your option",
    type:"list",
    choices:["delete todo","add todo"],
    name:"choice"
},{
    message:"Add your todo list",
    type:"string",
    name:"addtodo",
    when(todo){
        return todo.choice==="add todo"
    }
},{
    message:"delete your todo list from last",
    type:"string",
    name:"deletetodo",
    when(todo){
        return todo.choice==="delete todo"
    }
}])
lists.push(todo.do);
if(todo.addtodo){
    lists.push(todo.addtodo)
    console.log(lists)
}else if(todo.deletetodo){
    lists.pop()
    console.log(lists)
}
if(lists.length > 0){
    console.log("Your TOdo List:")
    lists.forEach(todo => {
        console.log(todo)
    });
} else {
    console.log("No todos found")
}