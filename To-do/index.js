let form = document.querySelector('form');

let input1 = document.getElementById('task');
let input2 = document.getElementById('priority');
let tbody = document.querySelector('tbody')

let global_data = [];



form.addEventListener('submit',function(event){
    event.preventDefault()

    let data = {};
    
    data.task = input1.value;
    data.priority = input2.value;
    global_data.push(data)

    tbody.innerHTML = null

    // let yes = true;

   global_data.map((ele)=> {

       let row = document.createElement('tr')
       let td1 = document.createElement('td')
       let td2 = document.createElement('td')

       td1.innerText = ele.task
       td2.innerText = ele.priority       
       row.append(td1,td2);
       tbody.append(row)

       if(ele.priority === "High"){
        td1.style.backgroundColor = "red"
        td2.style.backgroundColor = "red"
       }
       else{
        td1.style.backgroundColor = "green"
        td2.style.backgroundColor = "green"
       }


   })
    
})

