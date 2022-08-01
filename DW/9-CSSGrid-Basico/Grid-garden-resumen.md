GRID GARDEN

[Enlace](https://cssgridgarden.com/#es)

`grid-column-start`  
Define la posición inicial de un elemento respecto a las columnas de las cuadriculas.
- <(integer)> span <(integer)>

`grid-column-end`  
Define la posición final de un elemento respecto a las columnas de la cuadrícula
- <(integer)> span <(integer)>

Al emparejar `grid-column-start` y `grid-column-end`, podrías asumir que el valor final tiene que ser mayor que el valor inicial. ¡Pero no es el caso!  
El siguiente caso va de reversa:

```
.water {
    grid-column-end: 5;
    grid-column-start: 2;
}
```

Si prefieres contar las líneas de la cuadrícula comenzando por la derecha, puedes dar a `grid-column-start` y `grid-column-end` **valores negativos**. Por ejemplo, puedes establecerlos a _-1 para indicar la primera línea comenzando por la derecha_.

```
.water {
    grid-column-start: 1;
    grid-column-end: -1;
}
```

Otro caso:  
Empieza contando desde la derecha.

```
.poison {
    grid-column-start: -3;
}
```

Ahora!!  
En lugar de definir un elemento en la cuadrícula basado en la posicion inicial y final, puedes definirlo basado en la **longitud de columnas** deseada usando la palabra clave **span**. Ten presente que span solo funciona con valores positivos.

Por ejemplo:  
Empezamos contando desde la línea 1 de la primera columna y para darle un final usamos span que tomará como referencia a las columnas como bloques tomando como inicio para empezar a contar la la línea 2. 

```
.water {
    grid-column-start: 2;
    grid-column-end: span 2;
}
```
xx | xx | xx | xx | xx
--- | --- | --- | --- | ---|
--- | 🔴 | 🔴 | --- | ---| 
