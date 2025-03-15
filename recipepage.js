

fetch('https://dummyjson.com/recipes?limit=10&skip=10&select=name,image')
    .then((data) => { return (data.json()) })
    .then((DataRead) => {
        console.log(DataRead)

        let parentDiv = document.createElement('div');
        parentDiv.className = 'div-container';
        for (let i of DataRead.recipes) {
            console.log(i);

            let names = document.createElement('h4')
            names.innerText = i.name;
            document.body.appendChild(names);


            let images = document.createElement('img');
            images.className = 'photo';
            images.src = i.image;
            images.style.height = "200px";
            images.style.width = "200px";
            document.body.appendChild(images);


            let divs = document.createElement('div');
            divs.className = 'whole-api';

            divs.appendChild(images);
            divs.appendChild(names);
            document.body.appendChild(divs);

            parentDiv.appendChild(divs);



        }

        let htmldiv = document.querySelector(".div-container1");
        htmldiv.appendChild(parentDiv);

    })
    .catch((dataRejected) => { dataRejected });

let login_submit = document.querySelector('.log-btn');

login_submit.addEventListener('click',()=>{
document.getElementById('h1-div').style.display = "none";
document.getElementById('h2-div').style.display = "none";

document.getElementById('log').style.display = "block";


})