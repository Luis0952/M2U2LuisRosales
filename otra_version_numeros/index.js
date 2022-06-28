let inputuno=document.getElementById('numeroUno')
let inputdos=document.getElementById('numeroDos')
let inputtres=document.getElementById('numeroTres')
let inputcuatro=document.getElementById('numeroCuatro')
const boton=document.getElementById('boton')
let resultado=document.getElementById('resultado')
const clean=document.getElementById("boton_clean")


boton.addEventListener('click',function(){
  let numeros=[]
    let numeroUno=parseInt(inputuno.value)
    let numeroDos=parseInt(inputdos.value)
    let numeroTres=parseInt(inputtres.value)
    let numeroCuatro=parseInt(inputcuatro.value)
    if((numeroUno===null && numeroDos===null && numeroTres===null && numeroCuatro===null)||(numeroUno==='' && numeroDos===''&& numeroTres==='' && numeroCuatro==='')||(isNaN(numeroUno) && isNaN(numeroDos) && isNaN(numeroTres) && isNaN(numeroCuatro)))
    {alert("Los números vienen vacios") 
        }else{if (numeroUno===numeroDos||numeroUno===numeroTres||numeroUno===numeroCuatro||numeroDos===numeroTres||numeroDos===numeroCuatro 
        || numeroTres===numeroCuatro) 
          {alert("Los números tienen que ser diferentes entre si, vuelva a digitarlos")
            }else{let tamaño=numeros.length
           tamaño=tamaño+1
               for (let i=0;i<tamaño;i++){numeros.push(numeroUno,numeroDos,numeroTres,numeroCuatro)}
              let mayor=Math.max(...numeros)  
            } 
            resultado.innerHTML="El número mayor es "+Math.max(...numeros) + " y el número menor es "+Math.min(...numeros)
        }
})

clean.addEventListener('click', function(){

if(numeroUno!=''&& numeroDos!=''&&numeroTres!=''&& numeroCuatro!=''){
numeroUno.value=""
numeroDos.value=""
numeroTres.value=""
numeroCuatro.value=""

}

})