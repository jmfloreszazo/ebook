![React Full-Stack](/img/react-full-stack.png)

Secciones del libro:

  * **I. React.**
  
---
<h1>Índice del libro</h1>

<!-- TOC -->

- [1. Introduccion](#1-introduccion)
    - [1.1 ¿Por que React y nada más?](#11-¿por-que-react-y-nada-más)
    - [1.2 ¿Como he estructurado este libro?](#12-¿como-he-estructurado-este-libro)
    - [1.3 Configuración del entorno](#13-configuración-del-entorno)
    - [1.3 Depuración: curso acelerado](#13-depuración-curso-acelerado)
- [2. Hello World](#2-hello-world)
- [3. JSX](#3-jsx)
- [4. Trabajando con JSX](#4-trabajando-con-jsx)
- [5. Componente de ejemplo: Tweet](#5-componente-de-ejemplo-tweet)
    - [Paso 1: El boceto](#paso-1-el-boceto)
    - [Paso 2: Definir los componentes](#paso-2-definir-los-componentes)
    - [Paso 3: Dar un nombre a los componentes](#paso-3-dar-un-nombre-a-los-componentes)
    - [Paso 4: Construir](#paso-4-construir)
    - [Paso 5: Construccion del componente Tweet](#paso-5-construccion-del-componente-tweet)
- [6. Props](#6-props)
    - [6.1 Pasar argumentos a los componentes](#61-pasar-argumentos-a-los-componentes)
    - [6.2 Ejemplo: Tweet con Props](#62-ejemplo-tweet-con-props)

<!-- /TOC -->

---

<h1>I. React</h1>

En esta parte del libro vamos a conocer React, sin ningun tipo de artificio, es decir, vamos a conocer React en su estado puro.

# 1. Introduccion

Actualmente para de desarrollo frontend existen miles de librerías, cada una hace _algo_, cada una ayuda en _algo_. Una evolucionan para convertirse en estándares de facto, pero sin convertirse en estándares reales y esto es un peligro en la evolución de un proyecto.

React es un escosistema seguro en este aspecto ya que en React ya existen muchos proyectos estandarizados que nos ayudan con el desarrollo: Redux, Webpack, Babel, React Router, ...

Estudiar todo en un solo libro es abrumador,por eso he decidido que este libro se centre en React, sin ningun librería más, añadido.

Aprender todo a la vez es enormemente abrumador. Entonces en este libro, tomaremos un enfoque diferente. Un enfoque más sensato. Aprenderemos solamente React.

> Vamos a estudiar React de forma aislada. Sin Redux, ni Router, ni Webpack, ni ...

Cuando domines React, tendrás una base sólida, es cuando debes aprender: Redux, Router y el resto.

Mi intención es mostrar conceptos con un pequeño ejemplo, usar ese concepto en un ejercicio y ir repitiendolos en los siguientes ejemplos. De esta forma en cada avance, volvemos a estudiar los puntos anteriores.

**¿Qué voy a tratar en este libro?**

La mayoría de los libros de programación comienza con [Hello World](#2-hello-world), este libro no será distinto. Pero a partir de ahí, vamos a realizar componentes, JSX y HTML de React para representar elementos en la página.

Una vez conozcas como crear componentes estáticos, vamos a aprenderá sobre "accesorios" como una forma de pasar los datos que necesitan, y "propTypes" para documentar y depurar los accesorios que requiere un componente.

Cubriremos el accesorio especial "niños" de React, que es una poderosa herramienta para construir componentes compostables y reutilizables.

Finalmente, aprenderá sobre "estado", cómo difiere de los accesorios y cómo organizarlo en una aplicación.

Veremos cómo usar los controles de formulario y el ciclo de vida del componente.

[![Inicio Seccion](/img/round_arrow_back_ios_black_24dp.png)](#1-introduccion)

## 1.1 ¿Por que React y nada más?

Es necesario ir paso a paso a paso. Sin una comprensión sólida de React, el aprendizaje simultáneo de bibliotecas como Redux y herramientas como Webpack, solo sirve para ralentizará el proceso de aprendizaje.

Vamos a considerar a React como el núcleo sobre el que iremos poniendo capas (biblioteca) como Redux o Webpack.

## 1.2 ¿Como he estructurado este libro?

**¿Cuánto tiempo me llevará aprender React?**

Los conceptos básicos de React se pueden aprender en cuestión de días. Este libro cubre los conceptos básicos y también contiene ejercicios sobre cada concepto principal para reforzar su comprensión.

La mayoría de los ejercicios son cortos, aunque algunos habrá que desarrollados más. El principio que marca su aprendizaje es: combinando la repetición y resolución de problemas.

**Construye cosas pequeñas y tíralas a la basura**

Muchos desarrolladores pasan a Redux u otras bibliotecas sin tener una firme comprensión de los conceptos de React y cargan el proyecto de bibliotecas que son innecesarias.

Cuando la forma de estudiar no está bien definida y comienzas a construir o bien un prototipo para el trabajo o bien un clon de una aplicación grande, se pierde el foco y comenzamo a añadir liberías. Como no queremos perder el foco, aprender concienzudamente React, vamos a construir cosas pequeñas.

**No construyas un prototipo**

Aprender construyendo un _prototipo_ (para el trabajo) es una mala decisión, como desarrollador con más de 25 años de esperiencia se que un _prototipo_ nunca muere. Vive más alla de la fase de prototipado, se transformará en software productivo y nunca se descartará ni se reescribirá. Tan pronto como algún _jefe_ vea que funciona, comenzará pedirte que incluyas funcionalidades. Y el "algún día vamos a refactorizar" será lo que escuches en cada reunión, pero la realidad será que tendrás un código hinchado, desorganizado y complicadamente reutilizable.

Cuando te des cuenta que el código no será de usar y tirar, te auguro un terrible futuro. Cosas como:

* ¿La arquitectura escalará?
* ¿Voy a tener que refactorizar este lío más tarde?
* ¿No debería tener pruebas?

Todos estos, y más, son los motivos por los cuales un prototipo es una mala opción como proyecto de aprendizaje.

Comenzar con un _prototipo_ (para el trabajo), preocuparse por la arquitectura y la escalabilidad en el _futuro_ es una mala estrategia para aprender los principios básicos de una nueva tecnología.

Ergo, si construyes un prototipo creyendo que es un código desechable, no será un código muy bueno. Y cuando el _jefe_ de tu _jefe_ vea qué aspecto tiene el _prototipo_, te permitirá volver a escribirlo con todas las mejores prácticas que has aprendido.

Todo esto es una estrategía para que no tengas que trabajar con bases que su objectivo solo era aprender.

**Entonces, ¿qué deberías construir?**

La respuesta es sencilla: aplicaciones pequeñas y desechables.

El punto ideal está entre Hello World y clon completo de Twitter.

Por supuesto, empezaremos con Hello World. Ningún libro de programación que se precie estaría completo sin este proyecto.

A medida que crezcan tus habilidades podrás realizar copias de baja fidelidad de aplicaciones simples y sitios como Twitter o Github. Los diseñadores llaman a esto _copywork_", son muy buenos puntos de partida ya que te liberan de decisiones sobre cosas como "dónde debe ir el usuario después de iniciar sesión". Simplemente debes concentrarte en aprender a desarrollarlo con React.

Al final del libro podrás creará clones de esas populares aplicaciones y podrás comenzar un proyecto real. Habrás aprendido a "pensar en componentes" con claridad, esta habilidad la iremos desarrollando a medida que avances en el libro.

Desde mi esperiencia la curva de aprendizaje con proyectos pequeños es mayor que los proyectos de gran tamaño o que acumulen muchas funcionalidades.

## 1.3 Configuración del entorno

Necesitaremos configurar el entorno.

Vamos a utilizar la aplicación `create-react-app`. No vamos a clonar un proyecto de GitHub ni configurar Webpack. Tal y como he esplicado antes, vamos a estudiar React y nada más.

**Herramientas**

* Node.js, dirígete a https://nodejs.org/es/ y descarga la última versión.
* Yarn, dirígite a https://yarnpkg.com/es-ES/ y descarga la última versión.
* Google Chrome, cualquier navegador moderno debería ser suficiente, aunque este libro lo he desarrollado todo contra Chrome, es el que recomiendo. Si prefieres usar otro navegador, casi con total seguridadr JavaScript funcionará correctamente, pero el CSS podría posiblemente requerirá algunos ajustes.
* React Developers Tools, dirígete a https://nodejs.org y descarga la última versión
* Un editor de texto o un IDE de tue elección, recomiendo Visual Studio Code.

Si usas Visual Studio Code, esta extensión podrán servirte de gran ayuda: ![Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

**Yarn**

Yarn es un administrador de paquetes JavaScript relativamente nuevo, fue lanzado en junio de 2016. Comparado con NPM, es más rápido y tiene el beneficio de un archivo de bloqueo, lo que significa que puede instalar de manera confiable los mismos paquetes cada vez que se ejecuta Yarn.

Si no estás convencido y desas usar NPM, los comandos son similares:

* Instalar todos los paquetes: `install npm` o `yarn`
* Instalar un paquete determinado: `npm install --save <paquete>` o `yarn add <paquete>`
* Iniciar el servidor de desarrollo: `npm start` o `yarn start`
* Ejecutar pruebas: `npm test` o `yarn test`

No voy a estar constantemente escribiendo "Ejecutar `yarn start` (o `npm start`)", a partir de ahora solo mostraré los comandos de Yarn.

**React Developer Tools**

Para descargar las herramientas, debes dirigirte a: https://github.com/facebook/react-devtools y sigue las instrucciones para instalar las herramientas en su navegador. Estas herramientas se utilizan para inspeccionar el árbol de componenes, las props y los state de cada componente.

**Conocimientos previos**

Para este curso debes conocer JavaScript o al menos ES6, HTML y CSS. El objectivo de este curso no es JS ni ES6.

No recomiendo aprender JavaScript al mismo tiempo que React. Si en React todo te parece nuevo es complicado que puedas diferenciar donce comienza y termina JavaScript o React. Si necesitas aprender JS, existen muchos recursos gratuitos, como este libro, a continuación dejo unos enlaces que pueden seriverte de ayuda:

* (ESP) Introducción a Javascript (book): http://librosweb.es/libro/javascript/
* (ESP) Aprende ES6, Guía práctica (book): https://blog.enriqueoriol.com/2016/05/aprende-es6-guia-practica.html
* (ENG) (book): http://eloquentjavascript.net/
* (ENG) Speaking JavaScript (book): http://speakingjs.com/
* (ENG) Exercism (exercises): http://exercism.io/languages/javascript
* (ENG) You Don’t Know JS (book series): https://github.com/getify/You-Dont-Know-JS

Y unas guias de estilo para desarrolladores de JS:

* (ENG) Google (book): https://google.github.io/styleguide/jsguide.html
* (ESP) Airbnb JavaScript Style Guide (book): https://google.github.io/styleguide/jsguide.html, quizá la de AirBnB es la que más nos interesa ya que ellos desarrollan en React.

Además de JS, HTML y CSS, debes estar familiarizado con el uso de la linea de comandos.

> [En el principio fue la línea de comandos](https://es.wikipedia.org/wiki/En_el_principio_fue_la_l%C3%ADnea_de_comandos), por [Neal Stephenson](https://es.wikipedia.org/wiki/Neal_Stephenson).

**Carpeta de proyectos**

Vamos a escribir mucho código durante el libro. Te recomiendo crear un directorio llamado: `react-ejemplos`, o a tu elección.

**Instalar Create-React-Ap**

Ejecuta el siguiene comando para instalar de forma global React:

`yarn global add create-react-app`

Si tienes algun problema con los permisos, recuerda ejecutar la linea de comando como administrador.

Comprueba que React está correctamente instalado:

`create-react-app --version`

## 1.3 Depuración: curso acelerado

Una de las cosas que debemos saber hacer bien es depurar. Ante cualquier problema sigue estos pasos:

1. Mantén la calma y no te pongas nerviso.

2. Refresca la página de forma manual. A veces, el auto-refresco no funciona bien.

3. Revisar la consola del navegador que uses, refresca la página y revisa los errores que veas.

4. Revisa la linea de comandos de de `yarn start`, por si encuentras algun problema, en caso afirmativo intenta arreglarlo.

5. Si no logras resolver el problema por ti mismo, recuerda que estamos aprendiendo y lo primero es que tu seas quien arregla el problema, no te quedará más remedio que buscar en Google

**No cierres la consola, mantenla abierta**

La consola de depuración es una gran herramienta y no es buena idea cerrarla cuando estas estudiando.Te ayudará a detectar errores tipográficos y te ahorrará mucho tiempo en la búsqueda de problemas.

**React Dev Tools**

![Herramienta de depuración](https://camo.githubusercontent.com/3fd1137b6b254da8c5596acf7b8583246fd76e29/687474703a2f2f692e696d6775722e636f6d2f6a5969655271692e706e67)

Seleccione la solapa indicada y busca en el componente en el árbol, si no lo encuentras, utiliza la búsqueda. Aquí puede [leer más información sobre la herramienta](https://github.com/facebook/react-devtools).

[![Inicio Seccion](/img/1x/round_arrow_back_ios_black_24dp.png)](#1-introduccion)

# 2. Hello World

Todo está listo, podemos comenzar.

**Paso 1**

Use el comando `create-react-app` para generar un nuevo proyecto. Creará un directorio e instalará todos los paquetes necesarios, y luego nos moveremos a ese nuevo directorio.

`create-react-app reac-hello`

`cd reaccionar-hello-world`

El proyecto generado contiene algunos archivos que no necesitaremos ahora, los borraremos:

`src/App.*`
`src/index.css`
`src/logo.svg`

O por el momento ignoralos.

**Paso 2**

Abre el archivo `src/index.js`. Elimina todos el contenidos y escribe este código:

> Mi recomendación es que, no copies y pegues, esto en nada ayuda.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
function HelloWorld() {
  return (
    <div>Hello World!</div>
  );
}
ReactDOM.render(<HelloWorld/>,
  document.querySelector('#root'));
```

**Paso 3**

Entra dentro de la carpeta `react-hello-world`, y ejecuta:

`yarn start`

Automáticamente se abrirá el navegador mostrando "Hello World!"

**¿Qué hace este código?**

Desde la parte inferior, vemos una llamada a `ReactDOM.render`. Esta la parte que hace el trabajo. Este trozo de código es JavaSCript estandar; en cambil la parte de `<HelloWorld/>` tiene el aspecto de HTML. Si comentas esta parte, no se mostrará el componente y desaparecerá "Hello World!".

React usa el concepto de DOM Virtual. Crea una representación jerarquica de los componentes y los renderiza creando elementos real del DOM e insertandolo donde pidas. En este caso hemos pedido que piten en el `root`.

`ReactDOM.render` lleva 2 arugmentos: lo que quieres renderizar (un componente o cualquier otro elmento de React) y donde lo vas a renderizar (u elemento del DOM real).

```javascript
ReactDOM.render([React Element], [DOM element]);
```

Y en la parte superior tenemos un componente llamado `HelloWorl`. La forma de crear componentes es crenado una función habitualmente llamada "Stateless Function Components".

Existen otras 2 formas de crear componentes: clases ES6 y la ya obsoleta `React.createClass`, esta forma de creación las podrás encontrar en Stack Overflow y proyectos de GitHub lo seguiras encontrando, al menos, que te suene.

Esta tipo de sintaxis similar a HTML son renderizadas por funciones JSX, a continuación os explico que es JSX.

[Ejercicio Resuelto](/scr/c2/index.js)

[![Hello World](/img/1x/round_arrow_back_ios_black_24dp.png)](#2-hello-world)

# 3. JSX

Una de las primeras cosas que habrás observado en el código de React es que se parece aun función de retorna un componente HTML. Esta sintaxis similar a HTML en realidad se llama JSX.

**¿Qué es JSX?**

JSX es una sintaxis inventada para React, muy similar a (X)HTML. Permite crear elementos escribiendo en una sintaxis de aspecto familiar, en lugar de escribir llamadas de funciones a mano. La sintaxis similar a HTML en realidad se compila con JavaScript real, del que hablaremos a continuación.

**¿HTML dentro de JavaScript?**

Mezclar HTML y JS es algo que contradice todos los años de buenas prácticas, ¿verdad? desde los dias en que usabamos jQuery, hemos sabido que trabajar directamente sobre elmentos `innerHTML` era peligros y funcionaba mal, por no mencionar que estaba lleno de agujeros de seguridad, así que ¿por qué React vuelve a cometer esos mismos errores?

¿Has observado que no hay comillas alrededor del "HTML"? Eso es porque no es una cadena. En realidad React no analiza está cadena y no la convierte aHTML.

Es cierto, parece HTML. Sin embargo, en realidad es JSX una cómoda forma de llamar a funciones que crean elementos del DOM.

Entonces, ¿qué está haciendo React?, ¿cómo funciona? y  ¿por qué no es tan malo?

**JSX está compilado en JavaScript**

Los elementos escritos en JSX se compilan en JavaScript con una herramienta llamada *Babel*. Babel es un *transpiler*, es decir, transforma el código en JavaScript ES6 válido que todos los navegadores puedan comprender. Cada elemento JSX se convierte en una llamada a función, donde sus argumentos son sus atributos ("props") y sus contenidos ("children").

![JSX->Babel->JS](/img/transpiler.png)

Una explicación más detallada del funcionamiento:

```javascript
return <span>Hello World!</span>;
```

Y esto es lo que se genera en JavaScript:

```javascript
return React.createElement(
  'span',
  {},
  'Hello World!');
```

La firma de la función `React.createElement` es la siguiente:

```javascript
React.createElement(
  string|element,
  [propsObject],
  [children...])
```
`string|element` puede ser una cadena que describe una etiqueta HTML o SVG (como 'div' o 'span'), o puede ser un componente (como HelloWorld, sin comillas).

`PropsObject` y `children` son opcionales, y también puede agregar tantos argumentos adicionales del tipo `children` que desees:

```javascript
return React.createElement(
  'span',
  {},
  'Hello World!',
  'This is React.');
```

Y por supuesto puedes anidar las llamadas:

```javascript
React.createElement('div', {},
  React.createElement('div', {}, 'Child1'),
    React.createElement('div', {}, 'Child2',
      React.createElement('div', {}, 'Child2_child')
    )
);
```

Re-escribe el componente `HelloWorld` para llamar a `React.createElement` en vez de utilizar JSX.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
function HelloWorld() {
  return React.createElement(
    'span',
    {},
    'Hello World!',
    'This is React.');
  }
ReactDOM.render(<HelloWorld/>,
  document.querySelector('#root'));
```

Habrás podido observar que JSX es una buena forma de hacer llamadas a funciones. Y si lo prefieres ni siquiera tienes que usar JSX; puede escribir estas llamadas de de forma manual.

La primera decisión que vas a tomar, seguramente es no me gusta el aspecto de HTML contra JS y tal vez, decidas escribir funcioens JS reales, por que de alguna forma lo ves más "puro". Pero te suguiero que pruebes JSX antes de descartarlo.

Escribir las llamadas a `React.createElement` no es un enfoque habitual en la comunidad de React. Casi todos los desarrolladores de React usan JSX, lo que significa que el código que se ve GitHub, Stack Overflow, etc. probablemente se escriba con él.

**Separación**

Esta es la preocupación número uno que tienen la mayoría de los recién llegados: la sensación de que la mezcla de JS con HTML es simplemente incorrecta. Incluso podría hacerte *enfadar*.

En contra de lo que propongo en este libro, yo comencé en un proyecto grande, sin haber tocado React, por eso, mi incapié en como debes aprender React. 

Me tocó estudiar de forma muy rápida y procurando sacar algo adelante, no fuera que mi *jefe* me tomara por un patoso. Y creeme, cuando te encuentras con esta mezcla de JS y HTML, me recordó ligeramente al código spaghetti de la primera versión de ASP o tiene un flashbacks de PHP donde las llamadas a la base de datos se mezclan con el código de vista, no quieres volver a ese mundo. Pero el patrón de construcción de componentes de React ayuda a prevenir esto.

Cuando comienzo a entender bien React, escribiendo algunas aplicaciones pequeñas, fue cuando entendí esta mezcla. No obstante, no te preocupes, los ejercicios de este libro le darán toda la práctica que necesita para comprenderlo. Y no, como ya he dicho, nada de proyectos grandes ni prototipos para producción.

**Unión**

Cuando vuelves la vista atrás y lo piensas detenidamente, existen unas razones de peso para combinar lógica y vista.

Si alguna vez usaste Angular, probablemente hayas escrito en la logica en archivo y la plantilla HTML por separado. ¿Cuántas veces has abierto la plantilla para modificar algo y no te has acordado de entrar en el código de la lógica asociada? o vice versa.

Casi siempre el cambio en lógica va asociado a un cambio en vista o vice versa y al final tengo que cambiar los 2 archivos.

Si todo estubiera completamente separado, no habría problema, pero no es así. Todo está conectado.

Si pensamos en la forma antigua de desarrollo, tenderemos a separar el HTML del JS por la reusabilidad.

Cuando programamos para front-end, es lógico tener librerías de cosas muy comunes para la reusabilidad, es verdad, aquí debes crearte tus bibliotecas. Pero raramente esta reusabilidad se da en el diseño de pantallas o formularios, están estrechamente relacionados.
estrechamente unidos, y naturalmente, son dos caras de la misma moneda.

Dividir el código en archivos separados no conduce automáticamente a la separación de conceptos.

Si has trabajado con jQuery antiguo. El HTML ignora que JavaScript incluso existe, y sin embargo, el JS y el HTML están estrechamente unidos por el hecho de que los selectores de jQuery deben saber algo sobre la estructura de la página. Si la estructura cambia, el código debe cambiar.

Si no lo ha notado, estoy tratando de demostrar que la plantilla y la lógica de la vista podrían coexistir en el mismo archivo, que podría tener más sentido hacerlo de esa manera.

No tienes que creerme ahora mismo. Solo tenga la idea en el fondo de su mente mientras trabaja en los ejemplos y ejercicios. Puede encontrar (como yo lo hice) que la combinación de la lógica y la vista hace que tu código sea más fácil de navegar, más fácil de escribir y más sencillo de depurar. Pasarás menos tiempo saltando entre archivos cuando toda la funcionalidad relacionada esté en un solo lugar.

[![JSX](/img/1x/round_arrow_back_ios_black_24dp.png)](#3-jsx)

# 4. Trabajando con JSX

**Composición de Componentes (Componets)**

JSX al igual que HTML permite anidar elementos dentro de otros.

Vamos a refactorizar el componetne `HelloWorld` para que observes como funciona la composiciónworks.

Con `HelloWorld` original:

```javascript
function HelloWorld() {
  return (
    <div>Hello World!</div>
  );
}
```

Deja el componente HelloWorld sin tocar y crea 2 componentes: uno llamado Hello y otro World. Que se rendericen dentro de `<span>/*...*/</span>`.

Lo importante, como decía con anterioridad es que escribas tu el código.

Los 2 nuevos componentes quedarían:

```javascript
function Hello() {
  return (
    <span>Hello</span>
  );
}
function World() {
  return (
    <span>World</span>
  );
}
```

Ahora modifica la función `HelloWorld` para que obtenga los textos deseados. Siento ser pesado, por última vez: escribe el código tu mismo, si no, no interiorizadas lo que estés estudiando.

```javascript
function HelloWorld() {
  return (
  <div>
    <Hello/> <World/>!
  </div>
  );
}
```

Supongo que no habrás cerrado la página de HelloWorld de ejemplo en tu navegador, es ese caso, podrás observar los campos. Recuerda, si no te aparecen, refresca la página.

Como podrás observar, mostramos el mismo mensaje.

*Los *paréntesis en JSX**

Los siguientes ejemplos dependen de los componentes `Hello` y `World` que debería haber creado, así que asegurate de que existan antes de continuar.

Primero, una nota sobre el formateo. Puede observar que englobé el JSX entre paréntesis, (). Esto no es estrictamente necesario, pero si dejas los paréntesis, la etiqueta de apertura debe estar en la misma línea que la devolución, dese mi punto de vista es un poco incómoda:

```javascript
function HelloWorld() {
  return <div>
    <Hello/> <World/>!
  </div>;
}
```

> Es mejor pecar por exceso que por defecto cuando englobamos por () y {}, así como un correcto tabulado del proyecto. Tus compañeros y tu yo del futuro te lo agradecerán.

Elimina los parentesis y observa:

`HelloWorld(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.`

Es porque JavaScript necesita un `;` después de ese retorno (debido a la nueva línea), convirtiéndolo efectivamente en esto, que devuelve indefinido.

**Devuelve un solo elemento**

Observa cómo los dos componentes están envueltos en un `<div>` en el ejemplo HelloWorld:

```javascript
function HelloWorld() {
  return <div>
    <Hello/> <World/>!
  </div>;
}
```

Un pequeño ejemplo: intente eliminar el `<div>` que engloba y observa el resultado. Deberías obtener este error:

`Syntax error: C:/react-ejemplos/hello-world/src/index.js: Adjacent JSX elements must be wrapped in an enclosing tag (14:18)`

Recuerde que JSX se está transpilando en JS antes de ejecutarse:

```javascript
// JSX:
return (<Hello/> <World/>);

// JS: 
return (React.createElement(Hello, null) React.createElement(World, null));
```

> Una función de componente debe devolver un solo elemento.

¿No puedo devolver un array? Al fin y al cabo es JavaScript...

```javascript
// JSX:
return [<Hello/>, <World/>];

// JS:
return [React.createElement(Hello, null), React.createElement(World, null)];
```

Sí, pero a partir de la versión [React v16.0](https://reactjs.org/blog/2017/09/26/react-v16.0.html). En este curso evitaré usar esto.

**JavaScript dentro de JSX**

Puedes insertar expresiones de JS en JSX, es algo que se usa habitualmente.

Debes englobar el código JS entre `{}`

```javascript
function SubmitButton () {
  var buttonLabel = "Submit";
  return (
    <button> {buttonLabel} </button>
  );
}
```

Recuerda que las expresiones JSX se transpilan en JS, es decir, que dentro de las `{}` debe ir una expresiónc

```javascript
1+1
butonLabel
aFunctionCall ()
aFunctionName
```

Cada uno de las expresiones anteriores devuelve un solor valor. Por el contrario, las declaraciones no devuelven nada y no puedenser usadas dentro de JSX. Como por ejemplo:

```javascript
let a=1
if (1==1) {2;}
while (i<10) {i++};
```

Presta atención a este punto, es un error muy común entre los principiantes.

**If en JSX**

Los condicionales en JSX no existen con una expresión `If` debes optar por una de estas dos opciones:

* Operador ternario `?`:

```javascript
function ValidIndicator () {
  let isValid=true;
  return (
    <span>{isValid?'válido':'no válido'}</span>
  );
}

```
* O usar operadores booleanos como `&&`:

```javascript
function ValidIndicator () {
  let isValid=true;
  return (
    <span>
      {isValid && 'válido'}
      {!isValid && 'no válido'}
    </span>
  );
}
```

**Comentarios en JSX**

Si necesitas poner un comentario en un bloque de JSX, la sintaxis puede parecer un poco extraña. Recuerda que JavaScript debe estar dentro de las `{}`. 

Los comentarios en JSX deben ir dentro de un bloque JavaScript como este:

```javascript
function ValidIndicator () {
  let isValid=true;
  return (
    <span>
      {
        // Comentarios en
        //  varias lineas.
      }
      {/* comentario en una sola linea */}
      {isValid && 'válido'}
      {!isValid && 'no válido'}
    </span>
  );
}
```

**Nombres de componentes en mayúsculas**

Los componentes deben comenzar con una letra mayúscula. Esto significa que debes usar nombres como `UserList`, `Menu` y `SubmitButton`; y no `userList`, `menu` y `submitButton`.

En JSX, se supone que un componente que comienza con una letra minúscula es un elemento incorporado de HTML o SVG (`div`, `ul`, etc.).

Las primeras versiones de React conservaban una "lista blanca" de todos los nombres de elementos incorporados, por lo que podías diferenciarlos de los personalizados. Mantener esa lista blanca consumía mucho tiempo y era propensa a errores: si un nuevo elemento SVG entraba en las especificaciones, no podía usar hasta que React actualizara esa lista. Por tanto decidieron agregaron esta regla.

**Cerrar cada elemento**

JSX requiere que cada elemento se cierre, similar a XML o XHTML. Esto incluye los que podría estar acostumbrado a dejar abierto en HTML5, como `<br>` o `<input>` o incluso `<li>`.

```javascript
//Bien
return <br/>;
return <input type='contraseña'/>;
return <li>texto< li>;
//Mal
return <br>;
return <input type='contraseña'>;
return <li> texto;
```

**Ejercicios**

Crea un nuevo directorio para los ejercicios:

`create-react-app jsx-ejercicios`

Os recuerdo, que tenemos que borrar o ignora los ficheros `src/app.*`, `index.css` y `logo.svg`. Si no los importas explicitametne, tampoco se incluyen en la aplicación. Esta será la última vez que comente esta acción.

Abre `src/index.js`, borra todo el contenido y escribe lo siguiente:.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
function MyThing() {
  // ...
}
ReactDOM.render(
  <MyThing/>,
  document.getElementById('root')
);
```

1. Crea un compoente que renderize esto:

```html
<div className='libro'>
  <div className='titulo'>Título del libro</div>
  <div className='autor'>Autor del libro</div>
  <ul className='propiedades'>
    <li className='valoracion'>6.5</li>
    <li className='isbn'> 12-345678-910</li>
  </ul>
</div>
```

[Ejercicio Resuelto](/scr/c4/index_1.js)

2. Vamos a ver como interpreta los espacios en blanco y las lineas JSX.

- a. Nueva linea

```html
<div>
  Test1
  Test2
</div>
```

- b. Lineas vacias

```html
<div>
  Tes1

  Test2

  Test3
</div>
```

- d. Espacios y nueva linea

```html
<div>
  &nbsp;Test1
  &nbsp;Test2&nbsp;
</div>
```

- e. Insertas espacios con multiples lineas

```html
<div>
  Test1
  {' '}
  Test2
</div>
```

[Ejercicio Resuelto](/scr/c4/index_2.js)

3. Vamos a cambiar el ejemplo 1 para usar `React.createElement`. El resultado de ser identico.

[Ejercicio Resuelto](/scr/c4/index_3.js)

4. Escribe el componente JSX para que cuando el nombre de usuario no esté definido o sea nulo, muestre "Sesión no inicializara". Cuando el nombre de usuario es una cadena, renderiza "Hola, nombre de usuario".

```javascript
function Welcomen() {
    /* ... */
    return (
        /* ... */
    );
}
```

[Ejercicio Resuelto](/scr/c4/index_4.js)

5. Una buena forma de aprender una nueva sintaxis es intentar romperla: descubrir sus límites. Prueba algunas de las cosas sobre las que te he advertido y revia el error. Servirá para que te familiarices con este tipo de error y si te lo encuentras en el futuro, ya sabrás más o menos a que se debe.

- a. Crea un componente que comience con una letra minúscula, como `testComponen`".
- b. ¿Puedes devolver 2 elementos la mismo tiempo?.
- c. ¿Puedes poner 2 expresiones dentro de llaves individuales, como `{x && 5; x && 7}`?
- d. ¿Qué pasa si usas `return` dentro de una expresión JS?
- e. ¿Qué pasa con una función llamada como `alert('Hola')`? ¿Intenta renderizarlo?
- f. Intenta poner una cadena entrecomillada dentro de JSX. ¿Qué pasa?

[Ejercicio Resuelto](/scr/c4/index_5.js)

[![Trabajando con JSX](/img/1x/round_arrow_back_ios_black_24dp.png)](#4-trabajando-con-jsx)

# 5. Componente de ejemplo: Tweet

Ahora vamos a comenzar a pensar en componentes. Comenzaremos con algo sencillo y bien podría tratarse de un boceto (wireframes or mockups) que nos pasaría un diseñador.

## Paso 1: El boceto

Siempre es bueno crear un boceto, si nos lo pasa el diseñador, mejor. Si no, lo creamos nosotros en papel y podremos ver facilemente cuales serán los componentes implicados.

Un boceto, tambien nos marca cuando "terminar". Sin un boceto, siempre será insufiente con lo que nos hemos marcado en la cabeza y no podremos saber cuando está terminado. Digamos que es un objectivo. Si quires añadir más cosas, cuando termines este boceto, puedes pensar en nuevas funcionalidaes y así sucesivamente. Son pequeñas metas.

Imaginaros que un diseñador me pasa este boce tan bien trabajado de un Tweet:

![tweet](/img/tweet.png)

## Paso 2: Definir los componentes

El siguiente paso es dividir este boceto en componentes.

Recuadra las partes que pieses que son componentes y puedan se reutilizados.

Supon que tienes 3 tweets, cada uno con un mensaje y un usuario diferentes. ¿Qué cambiaría y qué permanecería igual? Las partes que cambian serán candidatos a ser componentes.

Otra estrategia es hacer que cada elemento sea un componente: botones, textos, imagenes, etc.

Como ejercicio separa en componentes el boceto y luego lo comparas con el que propongo:

![tweet componentes](/img/tweet_componentes.png)

## Paso 3: Dar un nombre a los componentes

Hemos separado el boceto en partes:

![tweet jerquia y nombres](/img/tweet_componentes_jerarquia.png)

Los componentes estarán estructurado en jerquías con padres e hijos.

## Paso 4: Construir

Ahora que conocemos la jerarquía de componentes: vamos a construir.

Existen 2 estragegias para atacar el problema:

* Top-Down (Arriba-Abajo): comienza con la parte superior. Primero crea el componente Tweet, luego sus hijos: Avatar, NameWithHandle y así sucesivamente.

* Bottom-Up (Inferior-Superior): comienza en la parte inferior. Construye los botones, message y luego el resto de los componentes. Verifica que funcionan de forma aisladay una vez finalizado, los englobas en el Tweet.

Y ¿cuál es la mejor? Depende.

Para una jerarquía simple como esta, no importa mucho. Es fácil comenzar en la parte superior, así que eso es lo que haremos.

Para una jerarquía más compleja, puedes comenzar en la parte inferior. Construye piezas pequeñas, prueba que funcionan y combínalas. De esta manera puede estar seguro de que los componentes pequeños funcionan y teoricamente cuando los combinas deberían funcionar.

Lo más seguro que es que combsine ambos enfoques a medida que creas aplicaciones más grandes.

Por ejemplo, si estuviéramos construyendo Twitter, podríamos construir el componente Tweet de arriba hacia abajo, despues incorporarlo a una lista de tweets, mas tarde insertar esa lista en una página y finalmente insertar esa página en la aplicación más grande. El Tweet puede construirse de arriba hacia abajo mientras que la aplicación más grande es construir de abajo hacia arriba.

Si estas refactorizando una aplicación desarrollada en el framework Angular o Aurelia (por ejemplo), si desarrollas de arriba-abajo, producirás un efecto en cascada y no podrás ir poco a poco testeando la aplicación.

Sin embargo, si comienzas por abajo es más manejable y se tiene un mayor control. Puedes construir las "hojas" de tu aplicación: las piezas pequeñas y con contenido. Logra que funcionen bien, despues construye el siguiente nivel y así sucesivamente hasta llegar a la cima. En ese punto, tiene la opción de reemplazar su framework actual con React si así lo deseas.

La otra ventaja del desarrollo ascendente en una reescritura es que encaja muy bien con el paradigma de flujo de datos unidireccional de React. Dado que los componentes de React ocupan la parte inferior del árbol y tiene la garantía de que los componentes de React solo contienen otros componentes de React, es más fácil razonar sobre cómo pasar sus datos a los componentes que lo necesitan.

## Paso 5: Construccion del componente Tweet

Con nuestro boceto:

![tweet jerquia y nombres](/img/tweet_componentes_jerarquia.png)

Construiremos un tweet estático, comenzando con el componente de nivel superior: `Tweet`.

Creamos un nuevo proyecto:

`create-react-app static-tweet`

Vamos a añadir `font-awesome` a nuestro `public\index.html` en la sección `<head>`:

````html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/ font-awesome/4.7.0/css/font-awesome.min.css">
````

Y vamos a reemplazar el contenido de `src\index.css`, donde escribiremos lo siguiente:

````css
.tweet {
  border: 1px solid #ccc;
  width: 564px;
  min-height: 68px;
  padding: 10px;
  display: flex;
  font-family: "Helvetica", arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
}
````
El archivo `index.js` es similar al de "Hello World". Basicamente lo mismo, cambiar "HelloWorld" por "tweet". Más adelante iremos dejandolo mejor.

Cambia el contenido de `src/index.js` por:

````javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Tweet() {
  return (
    <div className="tweet">
    </div>
  );
}
ReactDOM.render(
  <Tweet/>,
  document.querySelector('#root')
);
````

Lanza el servidor y prueba que funcione:

`yarn start`

Y el resultado renderizado es:

![tweet 1](/img/tweet_indesing_01.png)

No existe nada distinto a lo que ya hemos visto. Es un componete al que le hemos añadido un atributo `className` (o `prop`).

Tambien hemos añadido es la importación de './`index.css'`, una archivo CSS dentro de un archivo JSX. ¿Cómo trabaja el entorno? Cuando Webpack construye la aplicación, mira si debe importar un CSS que depende de `index.js`. Webpack lee el archivo CSS y lo incluye en el paquete de JS como una cadena para enviarlo al navegador.

Abre la consola de desarrollo del navegador y mira la pestaña elementos. Podrás observar que bajo `<head>` existe una estiqueta `<style>` que no habíamos puesto nosotros allí. Ese estilo CSS contiene nuestro diseño.

En las siguientes secciones aprendermos más sobre `props`, por ahora piensa en ellos como atributos de HTML. La mayoría de ellos se nombran de forma idéntica los atributos que ya conoces, pero `className` es especial ya que su valor se convierte en un atributo de clase en el DOM.

Continuamos. Vamos a introducir el `Avatar` en `index.js`:

````javascript
function Avatar() {
  return (
    <img 
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar" />
  );
}
````

Más adelante sacaremos los componentes en ficheros y los importaremos con `import`, pero ahora solo vamos a trabajar con la forma de pensar en componentes.

Si deseas usar tu propio Gravatar:

* Entra en tu perfil.
* Seleciona una clasificación para tu perfil.
* Copia la url de la imagen: https://es.gravatar.com/userimage/5953573/58e4f0ed57621a684f59f7d4b902dd37?size=200
* Quita el parámetro final: https://es.gravatar.com/userimage/5953573/58e4f0ed57621a684f59f7d4b902dd37

````javascript
function Tweet() {
  return (
    <div className="tweet">
      <Avatar/>
      Tweet
    </div>
  );
}
````

Y añadimos el estilo en `index.css`:

````css
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 5px;
  margin-right: 10px;
}
````

Y el resultado renderizado es:

![tweet 2](/img/tweet_indesing_02.png)

Los siguientes componentes serán `NameWithHandle` y `Message`:

````javascript
function NameWithHandle() {
  return (
    <span className="name-with-handle">
    <span className="name">Tu nombre</span>
    <span className="handle">@handle</span> </span>
  );  
}
function Message() {
  return (
    <div className="message">
      Tamaño máximo 140 caracteres.
    </div>
  );
}
````

Si refrecas ahora, no verás nada nuevo. No hemos referenciado a estos componentes:

````javascript
function Tweet() {
  return (
    <div className="tweet">
      <Avatar/>
      <div className="content">
        <NameWithHandle/>
        <Message/>
      </div>
    </div>
  );
}
````

Aun nos falta el CSS:

````css
.name {
  font-weight: bold;
  margin-bottom: 0.5em;
  margin-right: 0.3em;
}
.handle {
  color: #8899a6;
  font-size: 13px;
}
````

Nuestro tweet se va pareciendo al diseño del boceto:

![tweet 3](/img/tweet_indesing_03.png)

Ahora añadimos `Time` y `buttons`:

````javascript
const Time = () => (
  <span className="time">Fecha</span>
);
const ReplyButton = () => (
  <i className="fa fa-comment-o reply-button"/>
);
const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);
const FavoriteButton = () => (
  <i className="fa fa-heart favorite-button"/>
);
const StatsButton = () => (
  <i className="fa fa-signal stats-button"/>
);
````

Estos componentes no se parecen a las funciones que has estado escribiendo hasta este momento, pero son funciones del tipo flecha (arrow). A continuación presento una evolución de función normal a función arrow:

````javascript
function FavoriteButton() {
  return (
    <i className="fa fa-heart like-button"/>
  );
}
// La función anterior la podemos escribir como una función anónima:
const FavoriteButton = function() {
  return (
    <i className="fa fa-heart like-button"/>
  );
}

// Que a su vez podemos transformarla en una función flecha:
const FavoriteButtonFavoriteButton = () => {
  return (
    <i className="fa fa-heart like-button"/>
  );
}

// Finalmente podemos simplificarla en:
const FavoriteButton = () => (
  <i className="fa fa-heart like-button"/>
);

// Si queremos aun podemos simplificarlo un poco más
const FavoriteButton = () => <i className="fa fa-heart like-button"/>;
````

Las funciones son una forma muy concisa de escribir componentes. La función en sí es:

`() => {...}`

Observa que en las dos últimas versiones no existe `return`: cuando una función de flecha solo contiene una expresión, puede escribirse sin llaves. Y cuando está escrito sin llaves, la única expresión existente, se devuelve implícitamente.

Podrás ver más funciones flecha a medida que avance en el libro, poco a poco te acostumbrarás a ellas.

**let y const**

Si has trabajado con C o Java conocerás la visibilidad de variables. En JS `var` tiene un alcance funcional y no de bloque. Esto es algo que JS siempre a tenido un poco mal diseñado.

ES6 añade `let` y `const` como dos nuevas formas de declarar variables de ámbito.

`let` define una variable mutable. Puedes usarlo en lugar de `var` casi en todas partes.

`const` define una constante. Mostrará un error si intentas reasignarla, Aunque no te impide modificar los datos *dentro* de esa variable. En el ejemplo lo entenderás mejor:

````javascript
const answer = 42;
answer = 43;//error

const numbers = [1, 2];
numbers[0] = 'texto';//no error
````

Tenemos componentes nuevos, actualiza el `Tweet` para incorporarlos:

````javascript
function Tweet() {
  return (
  <div className="tweet">
    <Avatar/>
    <div className="content">
      <NameWithHandle/><Time/>
      <Message/>
      <div className="buttons">
        <ReplyButton/>
        <RetweetButton/>
        <FavoriteButton/>
        <StatsButton/>
      </div>
    </div>
  </div>
  );
}
````

Y el CSS:

````css
.time {
  padding-left: 0.3em;
  color: #8899a6;
}
.time::before {
content: "\00b7";
padding-right: 0.3em;
}
.buttons {
  margin-top: 10px;
  margin-left: 2px;
  font-size: 1.4em;
  color: #aab8c2;
}
.buttons i {
  width: 80px;
}
````

Y así queda renderizado el boceto:

![tweet 4](/img/tweet_indesing_04.png)

Puedes cambiar al contenido: el nombre, el identificador, el mensaje y incluso el Gravatar. Por ejemplo quedaría algo muy similar:

![tweet 5](/img/tweet_indesing_05.png)

Ahora vamos a parametrizar componentes.

[![Componente de ejmplo Tweet](/img/1x/round_arrow_back_ios_black_24dp.png)](#5-componente-de-ejemplo-tweet)

# 6. Props

## 6.1 Pasar argumentos a los componentes

Las etiquetas de HTML tienen "atributos", los componentes de React tienen "props" (abreviatura de "properties", "propiedades").

Ya hemos visto que los componentes de React se pueden escribir como funciones, era lógico suponer que podríamos pasar argumentos a esas funciones. Por tanto: "props" son los argumentos de los componentes.

**Enviar Props**

Este ejemplo de JSX está pasando al componente `Person` la `prop` llamada `name` con un valor de cadena `Jose María`:

````javascript
<Person name='Jose María'/>
````

Otro ejemplo, esta vez pasamos la `prop` a `className` con valor "persona":

````javascript
<div className = 'persona' />
````

JSX usa `className` en lugar de `class` para especificar clases de CSS.

¿Observe cómo el `div` se cierra automáticamente? Esta capacidad ya no es solo para `<input/>`: en JSX, todos los componentes pueden tener cierre automático. De hecho, si el componente no tiene hijos (sin contenido), la convención es escribirlo así, en lugar de usar una etiqueta de cierre.

Aquí, estamos pasando una cadena a `className`, un número para el `prop` de edad y una expresión de JavaScript real para el nombre:

````javascript
function IAM() {
  const firstName = "Jose María";
  const lastName = "Flores Zazo ";
  return (
    <Person
      className='person'
      age={41}
      name={firstName + ' ' + lastName} />
  );
}
````

Recuerda que en JSX, las `{}` deben englobar las expresiones de JavaScript. El código entre llaves es JavaScript real y sigue las mismas reglas de alcance que JavaScript normal.

Es importante entender que el JS dentro de las llaves debe ser una expresión, no una declaración. Por ejemplos, cosas que puedes hacer dentro de las expresiones JSX:

* Matemáticas, concatenación: `{1+1}` o `{'Tu' + 'Nombre'}`
* Llamadas a función: `{this.getFullName(person)}`
* Operador ternario (?):` {name === 'Jose María'? 'soy yo': 'no soy yo'}`
* Expresiones booleanas: `{isEnabled && 'enabled'}`

Y cosas que no puedes hacer:

* Definir nuevas variables con `var`
* Usar `if`, `for`, `while`, etc.
* Definir funciones con `function`

Recuerda que JSX transforma la expreisón a JavaScript y lap `props` se convierten en claves y valores en un objeto.

El anterior ejemplo, transformado en JavaScript:

````javascript
function Dave() {
  const firstName = "Jose María";
  const lastName = "Flores Zazo";
  return React.createElement(
    Person,
    {
      age: 41,
      name: firstName + ' ' + lastName,
      className: 'person'
    },
    null
  );
}
````

> Cuando tengas que de decidir, qué poner en una expresión JSX, pregúntate: "¿Podría pasar esto como un argumento de función?"

**Recibir Props**

Las `props` se pasan como el primer argumento para una función de componente. Ejemplo:

````javascript
function Hello (props) {
  return (
    <span> Hola, {props.name} </ span>
  );
}
````

Y la llamada sería:

````javascript
<Hello name="Jose María" />
````

Para las funciones flecha sería lo mismo:

````javascript
const Hello = (props) => (
  <span> Hola, {props.name} </ span>
);
````

ES6 tiene una nueva sintaxis llamada *desestructuración* que hace que los accesorios sean más fáciles de usar. Se parece a esto:

````javascript
const Hello = ({name}) => (
  <span> Hola, {name} </ span>
);
````

Podríamos intrerpretar `{name}` como: extracción de la clave `name` del objeto pasado como primer argumento. También podríamos extraer múltiples claves:

````javascript
const Hello = ({ firstName, lastName }) => (
  <span>Hello, {firstName} {lastName}</span>
);
````

Muchas veces las `props` las escribiremos usando una sintaxis desestructurada:

````javascript
const Hello = (props) => {
  const { name } = props;
  return (
    <span>Hello, {name}</span>
  );
}
````

Recuerda, las funciones flecha deben devolver algo si hemos englobado con `{}`.

**Modificar Props**

Son de **solo lectura**. Por tanto las `props` enviadas como argumentos a un componente, no pueden ser modificadas. En React, los datos van en una sola dirección.

**¿Como nos comunicamos con los componentes padres?**

Si no puedo cambiar las `props` pero necesito enviar algo al componente padre, ¿cómo debo hacerlo?.

Si un hijo necesita enviar datos al  padre, el padre puede *inyectar* una función como una `props`, por ejemplo:

````javascript
function handleAction(event) {
  console.log('Child did:', event);
}
function Parent() {
  return (
    Child onAction={handleAction}/>
  );
}
````

El componente hijo recibe una `prop` llamda `onAction`, la cual llamará cada vez que necesita enviar datos o notificar al padre de un evento. Podrás observar que el elemento de botón acepta un elemento `onClick`, que llamará cada vez que se haga clic en el botón. Más adelante lo veremos con mayor detalle.

````javascript
function Child({ onAction }) {
  return (
    <button onClick={onAction}/>
  );
}
````

## 6.2 Ejemplo: Tweet con Props

Una vez conocida la teoría, vamos a ponerlo en práctica.

Retomamos el ejemplo estático del [Tweet](#5-componente-de-ejemplo-tweet) para convertirlo en un objeto dinámico.

Para este ejemplo, copia el proyecto static-tweet y lo renombras como dynamic-tweet. Y prueba que funcione:

`yarn start`

Si al realizar la copia, no funciona el proyecto, borra la carpeta `node_modules folder`, ejecuta `yarn install` y prueba de nuevo.

Volvamos donde lo dejamos, abre `src/index.js` y comenzemos a modificar el componente para que acepte `props`. Crea el objeto `testTweet`, el cual nos servirá a enviar los datos de prueba y cuado `ReactDOM.render to` sea llamado, le pase los datos del objecto `testTweet`.

````javascript
let testTweet = {
  message: "Hola, este es mi primer clon-tweet ;)",
  gravatar: "https://es.gravatar.com/userimage/5953573/58e4f0ed57621a684f59f7d4b902dd37",
  author: {
    handle: "@jmfloreszazo",
    name: "Jose María Flores Zazo"
  },
  likes: 1,
  retweets: 2,
  timestamp: "2018-06-020 10:00:00"
};
ReactDOM.render(
  <Tweet tweet={testTweet}/>,
  document.querySelector('#root')
);
````

Una vez realizado lo cambios, si refrescas, no verás ningun cambio. Aun no estamos enviado las `props`.

**Avatar**

Cambia:

````javascript
<Avatar/>
````

Por:

````javascript
<Avatar hash={tweet.gravatar}/>
````

Estamos pasando la propiedad `gravatar` a la propiedad `hash`. Ahora debemos modificar `Avatar` para que pueda usar la nueva propiedad:

````javascript
function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`; return (
  <img src={url} className="avatar" alt="avatar" />;
}
````

--- POR AQUI ME QUEDO...


