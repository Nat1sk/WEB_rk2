const container = document.querySelector('#container')
const getRes = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`status: ${res.status}`);
    }
    return await res.json()
}

getRes('user.json')
    .then(data => {
        console.log(data);
        for(let key in data) {
            const block = document.createElement('div')
            const title = data[key].Zagolovok
            const desc = data[key].Opisanie
            const img = data[key].Kartinka
            const users = data[key].Tsena


            block.innerHTML = `<div class="block">
                <h2>Продукт: ${title}</h2>
                <img src="${img}" width=100/>
                <p>Описание: ${desc}</p>
                <h4>Цена: ${users}</h4>
            </div>`
            container.append(block)
        }
    })

    var Vihod = document.querySelector('#Vihod');

    Vihod.addEventListener("click", Exit)

    function Exit(){
        window.location.href = 'http://127.0.0.1:5500/auth.html'
    }