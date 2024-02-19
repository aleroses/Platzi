# Eventos 

## Evento `onsubmit`

El evento `onsubmit` se utiliza en HTML y JavaScript para controlar el envío de formularios. Se dispara cuando un formulario está a punto de enviarse, ya sea haciendo clic en un botón de envío o presionando la tecla Enter dentro de un campo de formulario.

Cuando se produce el evento `onsubmit`, se ejecuta una función específica de JavaScript que se ha asignado al atributo `onsubmit` del formulario. Esta función puede realizar validaciones adicionales de datos, procesar los datos del formulario o realizar cualquier otra acción necesaria antes de enviar el formulario al servidor.

Aquí hay un ejemplo sencillo de cómo usar el evento `onsubmit` en un formulario:

```html
<form onsubmit="myFunction()">
  <input type="text" name="name" required>
  <input type="submit" value="Enviar">
</form>

<script>
  function myFunction() {
    // Aquí puedes realizar acciones adicionales antes del envío del formulario
    // ...

    // Si deseas detener el envío del formulario, puedes usar event.preventDefault()
    // event.preventDefault();
  }
</script>
```

En este ejemplo, la función `myFunction()` se ejecutará cuando se envíe el formulario. Puedes agregar cualquier lógica adicional necesaria dentro de esa función. Si deseas evitar que el formulario se envíe, puedes descomentar la línea `event.preventDefault()` dentro de la función.

Al usar el evento `onsubmit`, puedes controlar el proceso de envío del formulario, validar los datos ingresados por el usuario y realizar acciones personalizadas antes de que los datos se envíen al servidor.