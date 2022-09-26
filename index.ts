let id :number=4
let company:string='jerry'
let isWorking:boolean=true 
let ids : number[] =[1,2,3,4]
let arr:any[] =[2,'jawad',null,true]
//tuple
let person :[number,string,boolean] =[1,'jawad',true]
//tuple array
let employee: [number,string][]
employee=[
    [1,'jawad'],
    [2,'john'],
    [3,'mike']
]
//unions
let myid:string|number =22
myid = 'kite'
myid=12
myid='number'

//objects
type User ={
    id:boolean
    name:string
}
const user : User={
    id:true,
    name:'james'
}


 