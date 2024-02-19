# Animation 

## Regla `@keyframes`

En CSS, `@keyframes` es una regla especial que se utiliza para definir una animación personalizada. Permite especificar una secuencia de estilos que se aplicarán gradualmente en diferentes puntos clave (keyframes) durante la animación.

La sintaxis básica de `@keyframes` es la siguiente:

```css
@keyframes nombre-de-animacion {
  /* Definición de keyframes y estilos */
}
```

El `nombre-de-animacion` es un identificador único que asignas a la animación para poder referenciarla posteriormente en otras reglas CSS.

Dentro de `@keyframes`, puedes definir los diferentes keyframes o puntos clave de la animación, junto con los estilos que se aplicarán en cada punto. Los keyframes se especifican utilizando porcentajes (de 0% a 100%) o palabras clave predefinidas como `from` (equivalente a 0%) y `to` (equivalente a 100%).

Aquí tienes un ejemplo de cómo se utilizaría `@keyframes` para crear una animación de desvanecimiento:

```css
@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

En este ejemplo, se define una animación llamada `fade` que hace que un elemento se desvanezca gradualmente. El keyframe inicial (`from`) establece la opacidad en 1 (completamente visible), mientras que el keyframe final (`to`) establece la opacidad en 0 (completamente transparente).

Una vez que has definido la animación con `@keyframes`, puedes aplicarla a un elemento utilizando la propiedad `animation` en una regla CSS. Por ejemplo:

```css
.element {
  animation: fade 2s linear infinite;
}
```

En este caso, la animación `fade` se aplica al elemento con la clase `.element`. La animación tiene una duración de 2 segundos, se ejecuta en un ciclo infinito (`infinite`) y utiliza una interpolación lineal (`linear`) para suavizar la transición.

En resumen, `@keyframes` en CSS es una regla utilizada para definir animaciones personalizadas. Permite especificar una secuencia de estilos en diferentes puntos clave durante la animación. Después de definir la animación con `@keyframes`, se puede aplicar a un elemento utilizando la propiedad `animation`.