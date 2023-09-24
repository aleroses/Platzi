# Pseudo Clases

## Pseudo-clase `:root`

En CSS, `:root` es un selector pseudo-clase que se utiliza para seleccionar el elemento raíz del documento HTML, es decir, el elemento `<html>`. El selector `:root` representa el ancestro más alto de todos los elementos en el árbol de elementos HTML.

Cuando se utiliza `:root` en una regla CSS, se aplica a todas las instancias del elemento `<html>` en el documento. Esto permite definir estilos o propiedades que se aplicarán globalmente en todo el documento.

Por ejemplo, si deseas definir una variable CSS global, puedes hacerlo dentro de `:root` para que esté disponible en todo el documento:

```css
:root {
  --color-primary: #ff0000;
  --font-size: 16px;
}
```

En este ejemplo, se definen dos variables CSS (`--color-primary` y `--font-size`) dentro de `:root`. Estas variables se pueden utilizar en cualquier parte del documento, ya sea en selectores específicos o en estilos en línea.

Además de las variables, también puedes definir estilos globales dentro de `:root`. Por ejemplo:

```css
:root {
  color: #333;
  font-family: Arial, sans-serif;
}
```

En este caso, se establece el color y la fuente predeterminados para todo el documento.

En resumen, `:root` es un selector pseudo-clase en CSS que se utiliza para seleccionar el elemento raíz del documento HTML. Permite definir variables, estilos y propiedades globales que se aplicarán en todo el documento. Los estilos y variables definidos dentro de `:root` estarán disponibles para su uso en cualquier parte del documento.

