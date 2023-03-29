const c1= document.getElementById('c1')
const c2= document.getElementById('c2')
const c3= document.getElementById('c3')
const c4= document.getElementById('c4')
const c5= document.getElementById('c5')
const c6= document.getElementById('c6')
const c7= document.getElementById('c7')
const c8= document.getElementById('c8')
const c9= document.getElementById('c9')

const Titulo = document.getElementById('h1')
const SubTitulo = document.getElementById('h2')

const todo = document.getElementById('Todo')
let ContadorClicks = 0

let lineas = []

const celdas = [c1,c2,c3,c4,c5,c6,c7,c8,c9]
celdas.forEach(celda=>{
    celda.setAttribute('style','color:white;')
})
let HayGanador = 0


                    //La función

todo.addEventListener('click',(e)=>{
    e.preventDefault()
    Titulo.textContent=''
    SubTitulo.textContent=''
    const elemento = e.target.id
    const NElemento = e.target.textContent

    ContadorClicks++
    var turno = ContadorClicks%2

    if (e.target.textContent){
        ContadorClicks--
        if (turno===0) {
            SubTitulo.textContent='Turno del jugador O'   
        
        
     }
        else if (turno===1){
            SubTitulo.textContent='Turno del jugador X'   

     }
    }

    else {



        if (turno===0) {
            SubTitulo.textContent='Turno del jugador X'   
            e.target.textContent='O'

    }
        else if (turno===1){
            SubTitulo.textContent='Turno del jugador O'   
            e.target.textContent='X'
        }



        const linea1 =c1.textContent+c2.textContent+c3.textContent
        const linea2 =c4.textContent+c5.textContent+c6.textContent
        const linea3 =c7.textContent+c8.textContent+c9.textContent

        const linea4 =c1.textContent+c4.textContent+c7.textContent
        const linea5 =c2.textContent+c5.textContent+c8.textContent
        const linea6 =c3.textContent+c6.textContent+c9.textContent

        const linea7 =c1.textContent+c5.textContent+c9.textContent
        const linea8 =c3.textContent+c5.textContent+c7.textContent

        lineas = [linea1,linea2,linea3,linea4,linea5,linea6,linea7,linea8]

        let lineaganadora=''
        lineas.forEach((e)=>{                                  //La parte del ganador
            if (e==='XXX'||e==='OOO'){
            lineaganadora=e
            HayGanador++
            }
            
            if (HayGanador>0){
                Titulo.textContent=`Ganó el jugador ${lineaganadora[0]}!`
                SubTitulo.textContent='Click para jugar de nuevo'
                todo.addEventListener(('click'),(f)=>{
                location.reload()
                })
                    }
            else{



                let CuadradosLlenos = 0
                celdas.forEach((c)=>{       //La parte del empate
                    const T = c.textContent
                    if (T!=='') { CuadradosLlenos++}
                    })
                if (CuadradosLlenos===9) {
                    Titulo.textContent='EMPATE!'
                    SubTitulo.textContent='Toca para empezar de nuevo'  

                    todo.addEventListener('click',()=>{
                        location.reload()
                    })

                }
                else if (CuadradosLlenos<9){


                if (turno) {
                    turno.textContent=('Le toca a O')
                }
                else {
                    turno.textContent=('Le toca a X')
                }}

                }})
                }


                })


