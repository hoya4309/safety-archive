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

            <p><strong>구분 :</strong> ${item.type}</p>
            <p><strong>위험유형 :</strong> ${item.category}</p>
            <p><strong>현장 :</strong> ${item.site}</p>
            <p><strong>날짜 :</strong> ${item.date}</p>

            ${item.photo}

            <p>${item.description}</p>

        </div>
        `;
    });
}

document.getElementById("search")
.addEventListener("input", function(){

    const keyword = this.value.toLowerCase();

    const filtered = archiveData.filter(item =>
        item.title.toLowerCase().includes(keyword) ||
        item.site.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword)
    );

    renderData(filtered);
});
