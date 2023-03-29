

const c1= document.getElementById('c1')
const c2= document.getElementById('c2')
const c3= document.getElementById('c3')
const c4= document.getElementById('c4')
const c5= document.getElementById('c5')
const c6= document.getElementById('c6')
const c7= document.getElementById('c7')
const c8= document.getElementById('c8')
const c9= document.getElementById('c9')

const turno = document.getElementById('turno')
const comentario = document.getElementById('comentario')
const todo = document.getElementById('Todo')

//Datos
let Casillas = [c1,c2,c3,c4,c5,c6,c7,c8,c9]
const jugadores = ['el Jugador','la PC']
var CJ
let HayGanador=false
const TM = 'Turno de la máquina'
const TJ = 'Turno del jugador'
let amenaza = false
//                               ------------
//                               | FUNCIONES |
//                               ------------

function Ganador (){
    
    const linea1 =c1.textContent+c2.textContent+c3.textContent
    const linea2 =c4.textContent+c5.textContent+c6.textContent
    const linea3 =c7.textContent+c8.textContent+c9.textContent

    const linea4 =c1.textContent+c4.textContent+c7.textContent
    const linea5 =c2.textContent+c5.textContent+c8.textContent
    const linea6 =c3.textContent+c6.textContent+c9.textContent

    const linea7 =c1.textContent+c5.textContent+c9.textContent
    const linea8 =c3.textContent+c5.textContent+c7.textContent

    lineas = [linea1,linea2,linea3,linea4,linea5,linea6,linea7,linea8]

    lineas.forEach(linea=>{//console.log('Revisando líneas...')
    if (linea==='XXX'||linea==='OOO'){
        HayGanador=true
        
        if  (linea==='OOO'){turno.textContent='GANASTE!' }
        if  (linea==='XXX'){turno.textContent='PERDISTE!'}
        todo.addEventListener('click',(e)=>location.reload())
        comentario.textContent='Click para jugar de nuevo'; 
       
}

}
);
}

function inteligencia (){
    console.log('Buscando amenazas...')
    //Defensa
    const linea1 =[c1,c2,c3]
    const linea2 =[c4,c5,c6]
    const linea3 = [c7,c8,c9]    
    const linea4 = [c1,c4,c7]
    const linea5 = [c2,c5,c8]
    const linea6 = [c3,c6,c9]
    
    const linea7 =[c1,c5,c9]
    const linea8 =[c3,c5,c7]
    
    lineas = [linea1,linea2,linea3,linea4,linea5,linea6,linea7,linea8]
    let puntocrítico;
    let lineaamenazada;
    lineas.forEach(linea=>{
        const stringL = linea[0].textContent+linea[1].textContent+linea[2].textContent
        if (stringL==='OO'){
            lineaamenazada=linea
            amenaza=true
            console.log(`Amenaza de jugador en la línea ${lineaamenazada[0].id}-${lineaamenazada[1].id}-${lineaamenazada[2].id}`)
            }})

    lineas.forEach(linea=>{
    const stringL = linea[0].textContent+linea[1].textContent+linea[2].textContent
    if (stringL==='XX'){
        lineaamenazada=linea
        amenaza=true
        console.log(`Amenaza de PC en la línea ${lineaamenazada[0].id}-${lineaamenazada[1].id}-${lineaamenazada[2].id}`)
        }})

    return {

    lineaamenazada
    }
}

//style
                                      //Termina inteligencia
    

//Empate
function empate () {
    turno.textContent='Empate!'
    comentario.textContent='Click para jugar de nuevo'
    todo.addEventListener('click',()=>{
        location.reload()
        })
}

                                        //Jugada de Maquina//
function JPC (Casillas,inteligencia){
    
    Ganador()
    
    if (HayGanador===false){
        
        turno.textContent='Turno de la máquina'
        comentario.textContent = 'La máquina está pensando...'
        let Disponibles = []
        Casillas.forEach((casilla)=>{
            if (casilla.textContent===''){

                    Disponibles.push(casilla)
                }
        })
                
        if (Disponibles.length>0){
             setTimeout(()=>{

                 amenaza=false
                LA = inteligencia().lineaamenazada

                if (amenaza===true){

                    LA.forEach(casilla=>{
                    if (casilla.textContent===''){
                        casilla.textContent='X'
                        turno.textContent=TJ
                        CJ=true
                        JJ(Casillas)
                    }
                })
                } 
                else if (amenaza===false){

                    let numeroE = Math.round((Math.random()*(Disponibles.length-1)),0)
                    eleccion = Disponibles[numeroE]

                    eleccion.textContent='X'
                    turno.textContent=TJ
                    CJ=true
                    JJ(Casillas)
                } 
                if (HayGanador===false){

                    if (Disponibles.length>1){
                    comentario.textContent='';
                    
                }}
                else if (Disponibles.length===1){ 
                    empate(); 
                    console.log('empate')}
                },1500)}
        else if (Disponibles.length===0){ 
                    empate(); 
        }
      


        return {

        }} }

//Termina JUGADA DE LA MAQUINA

                                 //Jugada del jugador
function JJ (Casillas) {
    Ganador()
    if (HayGanador===false){
        let posibles=[]
        Casillas.forEach((casilla)=>{
            if (casilla.textContent===''){
                posibles.push(casilla)
                }})
//c o   nsole.log(posibles.length)

        if (posibles.length>0){
            if (CJ===true){
                turno.textContent='Turno del jugador'
              
                todo.addEventListener('click',(e)=>{

                    let turno = 'terminado'

                const elemento=e.target
                let TC = elemento.textContent 
                if (CJ===true) {                                                                //Todo esto es JJ
                    if (TC!==''){CJ=true}
                else if (TC==='') {
                    elemento.textContent='O';
                    turno.textContent=TM
                    CJ=false     
                   if (HayGanador===false) {comentario.textContent='';
                    JPC(Casillas,inteligencia)}
                    return
                }}})}}
         
        else if (posibles.length===0){
            empate() }


            return {

            }

        }

}


//TERMINA JUGADA DEL JUGADOR






//                                ----------------------
//                               |  Principio del juego |
//                                ----------------------




const Empieza = Math.round(((Math.random())),0)
if (Empieza===0) {turno.textContent=TJ
    CJ=true}
else if (Empieza===1) {turno.textContent=TM
    CJ=false}

if (CJ===false){
    JPC(Casillas,inteligencia)
}
else if (CJ===true){
    JJ(Casillas)
}




