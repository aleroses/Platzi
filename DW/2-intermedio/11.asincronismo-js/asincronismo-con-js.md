# Curso de Asincronismo con JavaScript

## 1. Lo que aprenderás en este curso

Aprenderemos:  
- La importancia del uso de este concepto en JS
- Las principales elementos que tiene JS para manejar el asincronismo:
    - Callbacks
    - Promesas
    - Async/await
- Tendremos un proyecto aplicando lo aprendido, usaremos HTML, CSS y JS además de desplegarlo.

El asincronismo en JS tiene 2 aspectos:  
- Los elementos del navegador que lo hacen posible
- Las formas de usarlo al escribir el código.

Este curso se centra en lo segundo, tocando por encima lo primero, en un video. Pero realmente no es necesario saber la funcionamiento del navegador, solo necesitas entender por encima el concepto de asincronismo, no que sucede tras la cortina.  

**Recomendación:**  
Para tener una mejor base sobre la forma de trabajar de JS en el navegador deben llevar el curso de JS Engine V8 y/o el curso de JS profesional. El asincronismo de JS es posible gracias a una parte del navegador conocido como event loop ( algo que el profesor explicará) la cual trabaja con otras partes del navegador que estaría bien conocieran.

- [Resumen 01 en Notion](https://luis-ariza.notion.site/Asincronismo-con-JavaScript-7307b668977d416690103a4dbbf2843a)
- [Resumen 02 en Notion](https://whip-soil-3b5.notion.site/Curso-de-Asincronismo-con-JavaScript-6ec5da50d2644a8aa046bfe23b217c22)

## 2. Qué es el asincronismo

JavaScript es síncrono por defecto y tiene un solo subproceso (un solo hilo para trabajar).

JavaScript es síncrono y no bloqueante, con un bucle de eventos (concurrencia), implementado con un único hilo para sus interfaces de I/O.

JavaScript es single-threaded aún con múltiples procesadores, solo se pueden ejecutar tareas en un solo hilo, llamado el hilo principal.

### ✍🏾 **Conceptos importantes para entender el asincronismo:**  

• 🧵 **Thread**: Thread (hilo) para JavaScript permite realizar programación multihilos en este entorno. En realidad, simula la creación y ejecución de hilos, pero para el desarrollador es lo mismo. Esto simplifica muchísimo la creación de aplicaciones JavaScript.  
• 🚫 **Bloqueante**: Una llamada u operación bloqueante no devuelve el control a la aplicación hasta que se ha completado. Por tanto el thread queda bloqueado en estado de espera. Ejemplo: Una alerta.  
• 🚿 **No bloqueante**: Una tarea no bloqueante se devuelve inmediatamente con independencia del resultado. Si se completó, devuelve los datos. Si no, un error.  
• 🎞️ **Síncrono**: Las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea.  
• 🚦 **Asíncrono**: Las tareas pueden ser realizadas más tarde, lo que hace posible que una respuesta sea procesada en diferido. La finalización de la operación I/O (entrada/salida) se señaliza más tarde, mediante un mecanismo específico como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta sea procesada en diferido.  
• 🛤️ **Paralelismo**: El paralelismo es la ejecución simultánea de dos o más tareas. Algunas tareas se pueden dividir en partes más pequeñas que pueden ser resueltas simultáneamente.  
• 🎮 **Concurrencia**: La concurrencia es la capacidad de un algoritmo o programa para ejecutar más de una tarea a la vez. El concepto es similar al procesamiento paralelo, pero con la posibilidad de que muchos trabajos independientes hagan diferentes cosas a la vez en lugar de ejecutar el mismo trabajo.  
• 🌀 **Eventloop o Loop de eventos**: El bucle de eventos es un patrón de diseño que espera y distribuye eventos o mensajes en un programa.  

### 📝 **Formas de manejar la asincronía en JavaScript:**  

• 📩 **Callbacks**: Una función que se pasa como argumento de otra función y que será invocada.  
• ✨ **Promesas**: (Implementado en ES6) Una promesa es una función no-bloqueante y asíncrona la cual puede retornar un valor ahora, en el futuro o nunca.  
• 🛣️ **Async / Await**: (Implementado en ES2017) Permite estructurar una función asincrónica sin bloqueo de una manera similar a una función sincrónica ordinaria.  

📌 _En JavaScript_ casi todas las operaciones de I/O (Entrada y Salida) no se bloquean. A esto se le conoce como asincronismo. Lo único que no es procesado antes de que termine la operación son _los callbacks_, ya que éstos están amarrados a una operación y esperan a que sea finalizada para poder ejecutarse.  

⏳ _El asincronismo_ es una manera de aprovechar el tiempo y los recursos de la aplicación, ejecutando tareas y procesos mientras otros son resueltos en background (como la llegada de la información de una API), para posteriormente continuar con las tareas que requerían esa información que no tenías de manera instantánea.  

⏲️ _Un ejemplo fácil de asincronismo vs sincronismo_ es invitar a unos amigos a una fiesta y ofrecer una parrillada. Primero decides colocar la carne y verduras a la parrilla y luego repartir bebidas y algo para picar (snacks). Si fuera una persona síncrona (Blocking) tendrías que esperar a que la comida de la parrilla esté cocinada y luego atender a los invitados. Pero si fuera una persona asíncrona (Non Blocking) luego de poner la carne al carbón, sacas las bebidas frías de la nevera y compartes con los invitados mientras se cocina la carne. La acción de que la comida en la parrillada esté lista sería un callback que está esperando que finalice el proceso para ejecutarse. Pero otros procesos (como compartir la velada con bebidas y algo de picar) ya podrían irse realizando.
