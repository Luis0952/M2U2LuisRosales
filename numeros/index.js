let inputuno=document.getElementById('numeroUno')
let inputdos=document.getElementById('numeroDos')
let inputtres=document.getElementById('numeroTres')
let inputcuatro=document.getElementById('numeroCuatro')
const boton=document.getElementById('boton')
let inputMayor=document.getElementById('Mayor')
let inputMenor=document.getElementById('Menor')
let resultado=document.getElementById('resultado')

boton.addEventListener('click',function(){
    let numeroUno=parseInt(inputuno.value)
    let numeroDos=parseInt(inputdos.value)
    let numeroTres=parseInt(inputtres.value)
    let numeroCuatro=parseInt(inputcuatro.value)
    let mayor
    let menor
    
    if((numeroUno===null && numeroDos===null && numeroTres===null && numeroCuatro===null)||(numeroUno==='' && numeroDos===''&& numeroTres==='' && numeroCuatro==='')||(isNaN(numeroUno) && isNaN(numeroDos) && isNaN(numeroTres) && isNaN(numeroCuatro)))
    {
      alert("Los números vienen vacios") 
        }else{
          if (numeroUno===numeroDos||numeroUno===numeroTres||numeroUno===numeroCuatro||numeroDos===numeroTres||numeroDos===numeroCuatro 
        || numeroTres===numeroCuatro) 
          {
            alert("Los números tienen que ser diferentes entre si, vuelva a digitarlos")
            }else{
                if((numeroUno>numeroDos) && (numeroUno>numeroTres) && (numeroUno>numeroCuatro)){
                mayor=numeroUno
                }
                else{
                    if((numeroUno<numeroDos) && (numeroUno<numeroTres) && (numeroUno<numeroCuatro))
                        {
                        menor=numeroUno
                        }
                    }    
                    //Numero 2 mayor y menor
                    if((numeroDos>numeroUno) && (numeroDos>numeroTres) && (numeroDos>numeroCuatro)){
                                        mayor=numeroDos  
                        }//cierra el if del numero dos
                        else{
                            if((numeroDos<numeroUno) && (numeroDos<numeroTres) && (numeroDos<numeroCuatro))
                                {
                               menor=numeroDos
                                } 
                            }        
                            //numero 3 menor y mayor  
                            if((numeroTres>numeroUno) && (numeroTres>numeroDos) && (numeroTres>numeroCuatro)){
                                    mayor=numeroTres
                                    }
                                    else{
                                        if((numeroTres<numeroUno) && (numeroTres<numeroDos) && (numeroTres<numeroCuatro))
                                        {
                                            menor=numeroTres
                                        }
                                    }//NUMERO CUATRO MENOR Y MAYOR
                                    if((numeroCuatro>numeroUno) && (numeroCuatro>numeroDos) && (numeroCuatro>numeroTres)){
                                        mayor=numeroCuatro
                                        }
                                        else{
                                            if((numeroCuatro<numeroUno) && (numeroCuatro<numeroDos) && (numeroCuatro<numeroTres))
                                            {
                                                menor=numeroCuatro
                                            }
                                        }
                            }
                }              
        resultado.innerHTML="El número mayor es " + mayor + " y El menor es "+ menor
});