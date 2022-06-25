let inputname=document.getElementById('nombre')
let inputmaterias=document.getElementById('Cant-materias')
let inputvalor_mat=document.getElementById('vlr-mat')
const boton=document.getElementById('boton')
const vlr_papeleria=20000
const carne=8000
let resultado=document.getElementById('resultado')
let porcentaje=(20/100)
let resultado_dos=document.getElementById('resultado_dos')

boton.addEventListener('click',function(){
    let name=inputname.value
    let mate=parseInt(inputmaterias.value)
    let vlr_mat=parseInt(inputvalor_mat.value)
    if((name===''||mate==='')||(vlr_mat==='')||(name===null||vlr_mat===null||mate===null)){
    alert("NO puede dejar campos vacios o negativos")
    }else{
        let mate_vlr_total=(mate*vlr_mat)-((mate*vlr_mat)*porcentaje)
        let mate_costosf=mate_vlr_total+vlr_papeleria+carne
        resultado.innerHTML=" Para el Estudiante "+ name + " La cantidad de materías es "+ mate + " y El Valor total de las materias con Descuento es $ " +mate_vlr_total 
        resultado_dos.innerHTML="El Costo total de las materias inscritas mas los costos fijos de Papelería y Carné es: $"+ mate_costosf
    }//
})