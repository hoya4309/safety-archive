let archiveData = [];

fetch("data/archive.json")
    .then(response => response.json())
    .then(data => {

        archiveData = data;

        renderData(data);
    });

function renderData(data) {

    const gallery = document.getElementById("gallery");

    gallery.innerHTML = "";

    data.forEach(item => {

        gallery.innerHTML += `
        
        <div class="card">

            <h3>${item.title}</h3>

            <p>구분 : ${item.type}</p>

            <p>위험유형 : ${item.category}</p>

            <p>현장 : ${item.site}</p>

            <p>날짜 : ${item.date}</p>

            ${item.photo}

            <p>${item.description}</p>

        </div>

        `;
    });
}

document
.getElementById("search")
.addEventListener("input", function() {

    const keyword =
    this.value.toLowerCase();

    const filtered =
    archiveData.filter(item =>

        item.title.toLowerCase().includes(keyword) ||

        item.site.toLowerCase().includes(keyword) ||

        item.category.toLowerCase().includes(keyword)

    );

    renderData(filtered);

});
