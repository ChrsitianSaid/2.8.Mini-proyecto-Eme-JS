/**
 * 
 * 
 */
const _DEBUGMODE = true;


/**
 * Muestra un mensaje de error, warning, o mensaje default dependiendo del tipo
 */
let recursosDisponibles = 3;

const loteIncidentes = [
    { id: 101, descripcion: "Gato atrapado en un árbol", gravedad: 1, resuelta: false },
    { id: 102, descripcion: "Falsa alarma de humo en local", gravedad: 2, resuelta: true },
    { id: 103, descripcion: "Incendio estructural en bloque de viviendas", gravedad: 5, resuelta: false },
    { id: 104, descripcion: "Contenedor ardiendo en la vía pública", gravedad: 3, resuelta: false },
    { id: 105, descripcion: "Inundación leve de un sótano", gravedad: 2, resuelta: true },
    { id: 106, descripcion: "Accidente de tráfico múltiple en la A-4", gravedad: 5, resuelta: false },
    { id: 107, descripcion: "Rescate en ascensor bloqueado", gravedad: 2, resuelta: false }
];

const mostrar={
    info:(mensaje)=>{
        if (_DEBUGMODE) console.log(`[INFO]${mensaje}`);
    },
    warn:(warning)=>{
        //no es chatgpt lo he buscado yo 
        if (_DEBUGMODE) console.warn(`🚨[WARNING]${warning}🚨`);
    },
    error: (mensaje)=>{
        console.error(`[ERROR CATASTROFICO]${mensaje}`)
    }
};

    function procesarIncidentes(loteIncidentes,recursosDisponibles){
    for(let i=0;i<loteIncidentes.length;i++){
        
        const{id,descripcion,gravedad,resuelta}=loteIncidentes[i];
        if(recursosDisponibles<=0){
            mostrar.error("lo sentimos,actualmente no tenemos recursos suficientes")
            break
        } else if(!resuelta){
            if(gravedad==5)
            {
            mostrar.warn(`${id},${descripcion},${gravedad},${resuelta}`);
            recursosDisponibles=recursosDisponibles-1
            continue
            }
            mostrar.info(`${id},${descripcion},${gravedad},${resuelta}`);
            recursosDisponibles=recursosDisponibles-1
            continue
        }
    }  
};

procesarIncidentes(loteIncidentes,recursosDisponibles);




