export const mostrarTodos=async()=>{

    const arreglo=[]
    //807
    for(let i=1;i<=721;i++){
        const url=`https://pokeapi.co/api/v2/pokemon/${encodeURI(i)}`
        let resp= await fetch(url);
        let data= await resp.json();
        let {sprites,id,name, weight,height}=await data
        const {other} = sprites
const {'official-artwork':officialArtwork}=other
const {'front_default':frontDefault}=officialArtwork
const {'0':cero}=data.types;

const {name: nombreTipo}=cero.type
        const newArreglo={
            id:id,
            nombre:name,
            url:frontDefault,
            tipo:nombreTipo,
            peso:weight/10,
            alto:height*10,
            }
            arreglo.push(newArreglo);
        }
    return arreglo
        
    }