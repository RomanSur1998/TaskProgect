// ! ===================== localStorage =====================
// console.log(localStorage);

// ? seitem -------
// localStorage.setItem('name','MY NAME')
// let obj =  {
//     city: 'Bishkek',
//     coontry:'Kyrgyzstan'
// }
// localStorage.setItem('fcounty', JSON.stringify(obj))
//todo Для отправки данных в  localStorage используеться метод setItem который принимате два аргумента 1.название объекта  2.данные в формате json .stringify;



//todo=================== getitem =========
//? Метод getItem используеться для полчения данных через localStorage принимает один аргумент (ключ ). данные приходят в формате JSON.strungify(), поэтому при получении нужно перевести в формат JSON.parse()
// let data = localStorage.getItem('name')
// console.log(data);
// let data1 = JSON.parse(localStorage.getItem('fcounty'))
// console.log(data1)


// todo removeitem =========
//* Метод удаляет данные по названию ключа 
//  localStorage.removeItem('fcounty')
 

 // todo 
//  *Метод который удвляет все данные в  localStorage 

//  localStorage.clear();


 // ! sessionStorage 

//  localStorage.setItem('example','Будет храниться, даже если закроем браузер и закоментирует данный код ')
//   sessionStorage.setItem('example','Удалиться при обновлении браузера ')


// ! ========================TODO - LIST  ===============
// let form = document.querySelector('form');
// let inpTask =document.querySelector('form input');
// let list  = document.querySelector('ul');
// // todo create ======
// function createTask(){
//     if(localStorage.getItem('tasks-data') === null){
//         localStorage.setItem('tasks-data','[]')
        
//     }
// }
// form.addEventListener('submit',()=>{
//     createTask()
// } )


let form = document.querySelector("form");
let inpTask = document.querySelector("form input");
let list = document.querySelector("ul");

// ? create
function createTask() {
  if (localStorage.getItem("tasks-data") === null) {
    localStorage.setItem("tasks-data", "[]");
  }
  let data =JSON.parse(localStorage.getItem('tasks-data'))
//   console.log(data);
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let obj = {
        task: inpTask.value
    };
    let data = JSON.parse(localStorage.getItem('tasks-data'));
    data.push(obj);
    localStorage.setItem('tasks-data', JSON.stringify(data));
    // setItemObjTask(obj)
  createTask();
});

//* функция для добавления новых объектов в главный массив 
// function  setItemObjTask (task){
//     let data = JSON.parse(localStorage.getItem('tasks-data'));
//     data.push(task)
//     localStorage.setItem(JSON.stringify(data))
// }



