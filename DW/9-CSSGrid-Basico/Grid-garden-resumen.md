# GRID GARDEN🌱😸

[Juega aquí!!! 🔥](https://cssgridgarden.com/#es)

---
## Nivel 1 de 28

`grid-column-start`  
Define la posición inicial de un elemento respecto a las columnas de las cuadriculas.
- <(integer)> span <(integer)>

```
.water {
    grid-column-start: 3;
}
```

xx | xx | xx | xx | xx
--- | --- | --- | --- | ---|
--- | --- | 🔴 | --- | --- | 

> **Nota:** La primera línea de la tabla que contiene **xx** no cuenta. 👻


---
## Nivel 2 de 28

```
.poison {
    grid-column-start: 5;
}
```

xx | xx | xx | xx | xx
--- | --- | --- | --- | ---|
--- | --- | --- | --- | 🔴 | 


---
## Nivel 3 de 28

Cuando `grid-column-start` se usa solo, la expansión por defecto del elemento en la cuadrícula será de exactamente una columna. No obstante, puedes extender el elemento varias columnas añadiendo la propiedad `grid-column-end`.

`grid-column-end`  
Define la posición final de un elemento respecto a las columnas de la cuadrícula.
- <(integer)> span <(integer)>

```
.water {
    grid-column-start: 1;
    grid-column-end: 4;
}
```

xx | xx | xx | xx | xx
--- | --- | --- | --- | ---|
🔴 | 🔴 | 🔴 | --- | ---| 


---
## Nivel 4 de 28

Al emparejar `grid-column-start` y `grid-column-end`, podrías asumir que el valor final tiene que ser mayor que el valor inicial. ¡Pero no es el caso!  
El siguiente caso va de reversa:

```
.water {
    grid-column-start: 5;
    grid-column-end: 2;
}
```

xx | xx | xx | xx | xx
--- | --- | --- | --- | ---|
--- | 🔴 | 🔴 | 🔴 | ---| 


---
## Nivel 5 de 28

Si prefieres contar las líneas de la cuadrícula comenzando por la derecha, puedes dar a `grid-column-start` y `grid-column-end` **valores negativos**. Por ejemplo, puedes establecerlos a _-1 para indicar la primera línea comenzando por la derecha_.

```
.water {
    grid-column-start: 1;
    grid-column-end: -2;
}
```

xx | xx | xx | xx | xx
--- | --- | --- | --- | ---|
🔴 | 🔴 | 🔴 | 🔴 | ---| 


---
## Nivel 6 de 28

Empieza contando desde la derecha.

```
.poison {
    grid-column-start: -3;
}
```

xx | xx | xx | xx | xx
--- | --- | --- | --- | ---|
--- | --- | --- | 🔴 | ---| 


---
## Nivel 7 de 28

Ahora!!  
En lugar de definir un elemento en la cuadrícula basado en la posicion inicial y final, puedes definirlo basado en la **longitud de columnas** deseada usando la palabra clave **span**. Ten presente que span solo funciona con valores positivos.

Por ejemplo:  
Empezamos contando desde la línea 1 de la primera columna y para darle un final usamos span que tomará como referencia a las columnas como bloques tomando como inicio para empezar a contar la línea 2. 

```
.water {
    grid-column-start: 2;
    grid-column-end: span 2;
}
```

 xx |  xx |  xx |  xx | xx
--- | --- | --- | --- | ---|
--- | 🔴 | 🔴  | --- | ---| 


---
## Nivel 8 de 28

```
.water {
    grid-column-start: 1;
    grid-column-end: span 5;
}
```
 xx |  xx |  xx |  xx | xx
--- | --- | --- | --- | ---|
🔴 | 🔴 | 🔴  | 🔴 | 🔴 | 


---
## Nivel 9 de 28

También puedes usar la palabra clave `span` con `grid-column-start` para establecer la anchura del elemento en relación a la posición final.

```
.water {
    grid-column-start: span 3;
    grid-column-end: 6;
}
```

 xx |  xx |  xx |  xx | xx
--- | --- | --- | --- | ---|
--- | --- | 🔴  | 🔴 | 🔴 | 


---
## Nivel 10 de 28

Escribir ambos `grid-column-start` y `grid-column-end` cada vez puede resultar cansador. Afortunadamente, `grid-column` es una propiedad abreviada que acepta ambos valores a la vez, separados por una barra oblicua.

Por ejemplo, `grid-column: 2 / 4;` establecerá el comienzo del elemento de la cuadrícula en la _2ª línea vertical_ de esta, y su final en la _4ª línea vertical_.

```
.water {
    grid-column: 4 / 6;
}
```

 xx |  xx |  xx |  xx | xx
--- | --- | --- | --- | ---|
--- | --- | --- | 🔴 | 🔴 | 


---
## Nivel 11 de 28

``grid-column``  
Define la posición de un elemento respecto a las columnas de la cuadrícula.
- <(grid-column-start)> / <(grid-column-end)>

La palabra clave `span` también funciona con esta propiedad abreviada así que ¡dale una oportunidad!

```
.water {
grid-column: span 3 / 5;
}
```

 xx |  xx |  xx |  xx | xx
--- | --- | --- | --- | ---|
--- | 🔴 | 🔴 | 🔴 | --- | 

Este ejemplo toma **3 celdas o bloques** y para finalizar la selección **cuenta 5 líneas** de izquierda a derecha. 🤔❓


---
## Nivel 12 de 28

Una de las cosas que diferencia las cuadrículas de CSS de **flexbox** es que puedes posicionar los elementos fácilmente en 2 dimensiones: **columnas y filas**. 

`grid-row-start` funciona de manera semejante a `grid-column-start` pero a lo largo del eje vertical.

`grid-row-start`  
Define la posición inicial de un elemento respecto a las filas de la cuadrícula.
- <(integer)> span <(integer)>

```
.water {
grid-row-start: 3;
}
```

 xx |  xx |  xx |  xx | xx
--- | --- | --- | --- | ---|
--- | --- | --- | --- | --- | 
--- | --- | --- | --- | ---|
🔴 | --- | --- | --- | ---|
--- | --- | --- | --- | ---|
--- | --- | --- | --- | ---|

> **Nota:** La primera línea de la tabla que contiene **xx** no cuenta. 👻


---
## Nivel 13 de 28

```
.water {
    grid-row: span 3/6;
}
```

 🐰 |  🐰 |  🐰 |  🐰 | 🐰
--- | --- | --- | --- | ---|
--- | --- | --- | --- | --- | 
--- | --- | --- | --- | ---|
🔴 | --- | --- | --- | ---|
🔴 | --- | --- | --- | ---|
🔴 | --- | --- | --- | ---|


---
## Nivel 14 de 28

```
.poison {
    grid-column: 2;
    grid-row: 5;
}
```

 🦄 |  🦄 |  🦄 |  🦄 | 🦄
--- | --- | --- | --- | ---|
--- | --- | --- | --- | --- | 
--- | --- | --- | --- | ---|
--- | --- | --- | --- | ---|
--- | --- | --- | --- | ---|
--- | 🔴 | --- | --- | ---|






---
## Nivel 15 de 28

---
## Nivel 16 de 28


---
## Nivel 14 de 28



---
## Nivel 14 de 28



---
## Nivel 14 de 28


---
## Nivel 14 de 28



---
## Nivel 14 de 28



---
## Nivel 14 de 28



---
## Nivel 14 de 28



---
## Nivel 14 de 28



---
## Nivel 14 de 28


```
.garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
```


[Soluciones](https://github.com/billfienberg/grid-garden)