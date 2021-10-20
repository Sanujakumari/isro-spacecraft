

fetch(`https://isro.vercel.app/api/spacecrafts`).then((data)=>{
    //console.log(data)
    return data.json();
}).then((completeddata)=>{

// console.log(completeddata.spacecrafts[8].name)
// })
    let data1="";
completeddata.spacecrafts.map((values)=>{

    data1+=`<div class="card">
    <h4 class="space"> ${values.id}. ${values.name}</h4>
    </div>`
});
document.getElementById("card").innerHTML=data1
}).catch((err)=>{
    console.log(err)
})