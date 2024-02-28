# Métodos 

## Método `preventDefault()`

En JavaScript, `preventDefault()` es un método que se utiliza en eventos para evitar el comportamiento predeterminado de un elemento. Cuando se produce un evento en un elemento, como hacer clic en un enlace o enviar un formulario, el navegador suele realizar una acción específica asociada a ese evento.

El método `preventDefault()` se utiliza para detener esa acción predeterminada y permitir que el desarrollador controle el comportamiento del evento. Al llamar a `preventDefault()`, se evita que el navegador realice la acción por defecto asociada al evento.

Por ejemplo, si tienes un enlace `<a>` y deseas evitar que el navegador cambie la página cuando se hace clic en él, puedes utilizar `preventDefault()` para detener esa acción predeterminada:

```javascript
const link = document.querySelector('a');

link.addEventListener('click', function(event) {
  event.preventDefault();
  // Aquí puedes escribir el código para realizar acciones personalizadas
});
```

En este caso, cuando se hace clic en el enlace, se activará el evento `click`, pero la llamada a `preventDefault()` evitará que el navegador cambie de página. En su lugar, puedes agregar el código adicional necesario para manejar el evento según tus necesidades.

Es importante tener en cuenta que `preventDefault()` solo evita el comportamiento predeterminado del evento actual. No afecta a otros manejadores de eventos asociados al mismo elemento o eventos similares en otros elementos.