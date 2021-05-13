reaload = () => {

    let buton=document.getElementById('button')

    buton.addEventListener('click',()=>{
        let caja=document.getElementById('cajaId').value
        let img=document.getElementById('imgId')
        let strong=document.getElementById('infoId')
        let p=document.getElementById('infoId_')
        let em=document.getElementById('infoId_1')
        let b=document.getElementById('infoId_2')
        let xhttp1=new XMLHttpRequest()
        xhttp1.open("GET",`https://pokeapi.co/api/v2/pokemon/${caja}`)
        xhttp1.send()

        xhttp1.onreadystatechange=function () {
            if(this.readyState==4 && this.status==200)
            {
                let datoPokemon=JSON.parse( this.responseText)
                console.log(datoPokemon)
                img.setAttribute("src",datoPokemon.sprites.front_default)
                strong.textContent=datoPokemon.name
                p.textContent=datoPokemon.id
                em.textContent=datoPokemon.base_experience
                b.textContent=datoPokemon.weight
            }       
        }
    })

    buton.addEventListener('click',()=>{
        let caja=document.getElementById('cajaText').value
        let img=document.getElementById('imgText')
        let strong=document.getElementById('infoText')
        let p=document.getElementById('infoText_')
        let em=document.getElementById('infoText_1')
        let b=document.getElementById('infoText_2')
        let xhttp2=new XMLHttpRequest()
        xhttp2.open("GET",`https://pokeapi.co/api/v2/pokemon/${caja}`)
        xhttp2.send()

        xhttp2.onreadystatechange=function () {
            if(this.readyState==4 && this.status==200)
            {
                let datoPokemon=JSON.parse( this.responseText)
                console.log(datoPokemon)
                img.setAttribute("src",datoPokemon.sprites.front_default)
                strong.textContent=datoPokemon.name
                p.textContent=datoPokemon.id
                em.textContent=datoPokemon.base_experience
                b.textContent=datoPokemon.weight
                }       
        }
    })

    buton.addEventListener('click',()=>{
        let caja=document.getElementById('seleccion').value
        let img=document.getElementById('imgselec')
        let strong=document.getElementById('infoselect')
        let p=document.getElementById('infoselect_')
        let em=document.getElementById('infoselect_1')
        let b=document.getElementById('infoselect_2')
        let xhttp3=new XMLHttpRequest()
        xhttp3.open("GET",`https://pokeapi.co/api/v2/pokemon/${caja}`)
        xhttp3.send()

        xhttp3.onreadystatechange=function () {
            if(this.readyState==4 && this.status==200)
            {
                let datoPokemon=JSON.parse( this.responseText)
                console.log(datoPokemon)
                img.setAttribute("src",datoPokemon.sprites.front_default)
                strong.textContent=datoPokemon.name
                p.textContent=datoPokemon.id
                em.textContent=datoPokemon.base_experience
                b.textContent=datoPokemon.weight
                }       
        }
    })

}