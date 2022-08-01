# GRID GARDEN

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

