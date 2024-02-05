let form = document.querySelector('form');
let Name = document.getElementById('name');
let docID = document.getElementById('docID');

let depart = document.getElementById('dept');

let exp = document.getElementById('exp');
let email = document.getElementById('email');

let mob = document.getElementById('mbl');

let tbody = document.querySelector('tbody');

// console.log(form,Name,empId,email,depart,exp,mob)
let server = [];
let job = "";

form.addEventListener('submit',function(ele){
    ele.preventDefault();

    let data = {};

    data.name1 = Name.value 
    data.docID = docID.value
    data.dept = dept.value
    data.exp = exp.value

    if (exp.value > 5){
        job = "Senior"

    }
    else if (exp.value >= 2 && exp.value <= 5){
        job = "Junior"
    }
    else if (exp.value <= 1){
        job = "Trainee"
    }

   
    data.role = job


    data.email = email.value
    data.mbl = mob.value
    // data.exp = exp.value

    server.push(data)
    console.log(server)

    tbody.innerHTML = null;

    server.map((ele,ind) => {
        let row = document.createElement('tr');
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let td7 = document.createElement('td')
        let td8 = document.createElement('td')
        
        td1.innerText = ele.name1
        td2.innerText = ele.docID
        td3.innerText = ele.dept
        td4.innerText = ele.exp
        td5.innerText = ele.email
        td6.innerText = ele.mbl
        td7.innerText = ele.role
        td8.innerText = "Delete"
        td8.style.backgroundColor = "red"
        
        row.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.append(row)


        td8.addEventListener('click',function(){
            server.splice(ind,1);
            row.remove()
            
        })
    })

})



