let d = document, $nextd = document.querySelector('.next'), $preview = d.querySelector('.preview');
$img = d.querySelector('.img-cont'), $nombre = d.querySelector('.api-nombre'),
$status = d.querySelector('.api-status'), $especie = d.querySelector('.api-especie');

let page = 1;

$nextd.addEventListener("click", e => {
    page++;
    apiRick(page)
})

$preview.addEventListener("click", e => {
    if (page > 1){
        page--;
        apiRick(page)
    }
    
})

async function apiRick(page){
    let url = `https://rickandmortyapi.com/api/character/${page}`;
    try {
        let res = await fetch(url),
        json = await res.json();
        let apiRickMorty = json;
        console.log(apiRickMorty);
        $img.src = apiRickMorty.image;
        $nombre.innerHTML = apiRickMorty.name;
        $status.innerHTML = apiRickMorty.status;
        $especie.innerHTML = apiRickMorty.species;

    } catch (error) {
        let message = error.statusText || "Ocurrión un error";
    }
}

apiRick(page);