

axios.get('https://leonardoapi.onrender.com/songs')

    .then(
        //datos que vienen del servidor// 
        (res) => {
            const contenedor = document.getElementById('track-list')
            console.log(res.data.songs)

            //recorrer las canciones//
            res.data.songs.map(
                (song) => {
                    //esto se repite por cada cancion//

                    const songHTML = document.createElement('div')
                    songHTML.classList.add('main-content__item')

                    // copiar lo que esta dentro del div de las canciones
                    songHTML.innerHTML = `
                       <img src="${song.path.front}">
                        <p>${song.title}</p>
                        <p>${song.author}</p>
                        <p></p>
            `

                    songHTML.addEventListener('click', () => {
                       
                        document.getElementById('current-song-audio').setAttribute('src', song.path.audio)
                    })


                    contenedor.appendChild(songHTML)
                }
            )
        }
    )
