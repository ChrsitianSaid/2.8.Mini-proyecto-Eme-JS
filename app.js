/**
 * @file app.js
 * @description Este archivo contiene la lógica para procesar un lote de incidentes y mostrar mensajes de información, advertencia o error según corresponda.
 * @version 1.0.0
 * @author Christian Said y Adrian Gonzalez Diaz
 */


/**
 * @description Variable que indica si el modo de depuración está activado o desactivado. Si está activado, se mostrarán mensajes de información y advertencia en la consola.   
 */
const _DEBUGMODE = true;


/**
 * @description Variable que representa la cantidad de recursos disponibles para atender incidentes.
 */
let recursosDisponibles = 3;

/**
 * @description Array de objetos que representa un lote de incidentes con sus propiedades: id, descripción, gravedad y estado de resolución.
 */
const loteIncidentes = [
    { id: 101, descripcion: "Gato atrapado en un árbol", gravedad: 1, resuelta: false },
    { id: 102, descripcion: "Falsa alarma de humo en local", gravedad: 2, resuelta: true },
    { id: 103, descripcion: "Incendio estructural en bloque de viviendas", gravedad: 5, resuelta: false },
    { id: 104, descripcion: "Contenedor ardiendo en la vía pública", gravedad: 3, resuelta: false },
    { id: 105, descripcion: "Inundación leve de un sótano", gravedad: 2, resuelta: true },
    { id: 106, descripcion: "Accidente de tráfico múltiple en la A-4", gravedad: 5, resuelta: false },
    { id: 107, descripcion: "Rescate en ascensor bloqueado", gravedad: 2, resuelta: false }
];

/** 
 * @description Objeto que contiene métodos para mostrar mensajes de información, advertencia y error en la consola.
 */
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

/**
 * @description Función que procesa un lote de incidentes y muestra mensajes según la gravedad y el estado de resolución de cada incidente. Si no hay recursos disponibles, muestra un mensaje de error.
 * @param {Array} loteIncidentes - Array de objetos que representan los incidentes a procesar.
 * @param {number} recursosDisponibles - Cantidad de recursos disponibles para atender los incidentes.
 * @debugger Esta función contiene un punto de interrupción para depuración en caso de que no haya recursos disponibles.
 */
function procesarIncidentes(loteIncidentes,recursosDisponibles){
    for(let i=0;i<loteIncidentes.length;i++){
        
        const{id,descripcion,gravedad,resuelta}=loteIncidentes[i];
        if(recursosDisponibles<=0){
            mostrar.error("lo sentimos,actualmente no tenemos recursos suficientes")
            debugger;
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

/**
 * @description Llamada a la función procesarIncidentes para procesar el lote de incidentes y mostrar los mensajes correspondientes.
 */
procesarIncidentes(loteIncidentes,recursosDisponibles);


 


