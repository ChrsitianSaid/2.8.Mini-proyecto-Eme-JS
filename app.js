/**
 * @file app.js
 * @description Contiene la lógica del simulador de emergencias Eme-JS.
 * Procesa un lote de incidentes y muestra mensajes de información,
 * advertencia o error en la consola según su gravedad y estado.
 * @version 1.0.0
 * @author Christian Said y Adrian Gonzalez Diaz
 */


/**
 * Indica si el modo de depuración está activado.
 * Cuando está activo, se muestran los mensajes de información y advertencia.
 *
 * @type {boolean}
 */
const _DEBUGMODE = true;



/**
 * Cantidad de recursos disponibles para atender los incidentes.
 *
 * @type {number}
 */
let recursosDisponibles = 3;

/**
 * Lote de incidentes que debe procesar el simulador.
 * Cada incidente contiene su identificador, descripción, gravedad
 * y estado de resolución.
 *
 * @type {Array<{id: number, descripcion: string, gravedad: number, resuelta: boolean}>}
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
 * Objeto que agrupa los métodos encargados de mostrar mensajes
 * de información, advertencia y error en la consola.
 *
 * @type {{
 *   info: (mensaje: string) => void,
 *   warn: (warning: string) => void,
 *   error: (mensaje: string) => void
 * }}
 */
const mostrar={
    /**
    * Muestra un mensaje informativo si el modo de depuración está activado.
    *
    * @param {string} mensaje - Texto informativo que se mostrará en la consola.
    * @returns {void}
    */
    info:(mensaje)=>{
        if (_DEBUGMODE) console.log(`[INFO]${mensaje}`);
    },
    /**
    * Muestra una advertencia si el modo de depuración está activado.
    *
    * @param {string} warning - Texto de advertencia que se mostrará en la consola.
    * @returns {void}
    */
    warn:(warning)=>{
        //no es chatgpt lo he buscado yo
        if (_DEBUGMODE) console.warn(`🚨[WARNING]${warning}🚨`);
    },
    /**
    * Muestra un mensaje de error en la consola, independientemente
    * del estado del modo de depuración.
    *
    * @param {string} mensaje - Descripción del error que se mostrará.
    * @returns {void}
    */
    error: (mensaje)=>{
        console.error(`[ERROR CATASTROFICO]${mensaje}`)
    }
};

/**
* Procesa secuencialmente un lote de incidentes y muestra mensajes
* en función de su gravedad y estado de resolución.
* También controla los recursos disponibles y detiene el procesamiento
* cuando no quedan recursos suficientes.
*
* @param {Array<{id: number, descripcion: string, gravedad: number, resuelta: boolean}>} loteIncidentes
*        - Array de incidentes que se van a procesar.
* @param {number} recursosDisponibles
*        - Número inicial de recursos disponibles para atender los incidentes.
* @returns {void}
*/
function procesarIncidentes(loteIncidentes,recursosDisponibles){
    for(let i=0;i<loteIncidentes.length;i++){
        
        const{id,descripcion,gravedad,resuelta}=loteIncidentes[i];
        if(recursosDisponibles<=0){
            mostrar.error("lo sentimos,actualmente no tenemos recursos suficientes")
            debugger;
            break;
        } else if(!resuelta){
            if(gravedad===5){
            mostrar.warn(`${id},${descripcion},${gravedad},${resuelta}`);
            recursosDisponibles=recursosDisponibles-1
            continue;
            }
            mostrar.info(`${id},${descripcion},${gravedad},${resuelta}`);
            recursosDisponibles=recursosDisponibles-1
            continue;
        }
    }  
};

/**
* Inicia el procesamiento del lote de incidentes utilizando
* la cantidad de recursos disponibles definida inicialmente.
*
* @returns {void}
*/
procesarIncidentes(loteIncidentes,recursosDisponibles);


 


