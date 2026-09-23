fetch('data/archive.json')
.then(response=>response.json())
.then(data=>{

const gallery =
document.getElementById('gallery');

data.forEach(item=>{

gallery.innerHTML += `
<div class="card">

<h3>${item.title}</h3>

<p>${item.type}</p>

<p>${item.site}</p>

${item.photo}

<p>${item.description}</p>

</div>
`;

});

});
