# Vim

## Practical Vim

### Insertar 

Primero debemos abrir o crear un archivo usando el siguiente comando en la CLI:

```lua
# Abrir un archivo
❯ vim something.md
```

Existes diferentes atajos de teclado para empezar a insertar texto o código, pero solo uno para salir de este modo `Esc`.

```lua
# Insertar
i

> Este atajo solo activa el modo de inserción dejando el cursor en su misma posición.
```

Ahora para insertar algo al final de la fila podemos usar una combinación de teclas `$a`: 

```lua
# Moverse al final de la línea - 1 caracter
$

> Este atajo trata de llevarnos hasta el final de la línea pero solo se queda un caracter atrás.
```

Ejemplo: `|` representa al cursor

```js
// Antes de usar $
const so|mething = 1; 👈👀

// Después
const something = 1|; 👈👀

// Como ves siempre se queda un caracter atrás
```

Pero si ahora lo combinamos con `a` podremos llegar al final de la línea:

```lua
# Insertar e ir un caracter a la derecha
a

> Este permite activar la inserción pero también se desplaza un caracter a la derecha a diferencia de la i que solo se queda en la misma posición
```

Ejemplo: `|` representa al cursor.

```js
// Antes de usar $
const so|mething = 1; 👈👀

// Después
const something = 1;| 👈👀

// Como ves ahora si llega al final y además activa el modo inserción.
```

El método anterior funciona, pero existe una forma de hacer lo mismo con una sola tecla:

```lua
# Insertar e ir al final de la línea 
A
```

Para agregar una fila en blanco y activar el modo insertar:

```lua
# Insertar una fila abajo
o

# Insertar una fila arriba 
O

> Para este último también se puede usar ko
```



> Nota: Es importante mencionar que cuando dejamos de editar o insertar texto en algún archivo y presionamos `Esc`, el cursor se posiciona un caracter antes (hace un desplazamiento a la izquierda). Al parecer esto es normal en Vim.

### Moverse 

```lua
# Moverte
## Subir
k

## Bajar
j

## Derecha
l

## Izquierda
h

> En lugar de usar las flechas del teclado Vim usa las teclas h, j, k y l para navegar por el código o texto.
```

Para moverme al inicio de una fila puedo usar:

```lua
# Ir al inicio de la línea
0
```

Para moverme a la última fila y quedarme al inicio de esa fila:

```lua
# Ir al final de la línea
G
```

Ejemplo: 

```js
// Antes de la G:
const| one = 1;
const two = 2;
const three = 3;

// Después de usar la G:
const one = 1;
const two = 2;
|const three = 3;
```

### Borrar o Eliminar 

```lua
# Eliminar de izquierda a derecha
x

> Es algo así como suprimir
```

Ejemplo:

```js
// Antes de la x:
const| one = 1; 
const two = 2;
const three = 3;

// Después de usar la x 4 veces:
const = 1; 👈👀
const two = 2;
const three = 3;
```

```lua
# Eliminar de derecha a izquierda
X

> Hace la función de la tecla borrar.
```

Borrar líneas enteras:

```lua
# Eliminar/cortar una línea entera
dd

## Pegar
p

## Duplicar una línea
yyp
```

Borrar todo a la derecha partiendo desde la posición del cursor:

```lua
c$

# Lo mismo pero en su versión corta
C

> Estos atajos también cambian al modo insertar
```

Ejemplo:

```js
// Antes de la C:
const| one = 1; 
const two = 2;
const three = 3;

// Después de usar la C:
const 👈👀
const two = 2;
const three = 3;
```

Borrar un caracter a la derecha y pasar al modo insertar:

```lua
cl

# Lo mismo
s
```

### Deshacer 

Si por error borramos algo podemos deshacer esos cambios:

```lua
# Deshacer cambios
u
```

### Repetir atajos

```lua
# Repetir el comando anterior
.

> Si usamos un atajo repetidas veces sería mejor por ejemplo ejecutar dd para eliminar toda una línea y luego usar . para repetir esa acción las veces que se necesiten.
```

```lua
# Pepetir el último cambio realizado
;

> Después de realizar una acción, como una búsqueda o un reemplazo, el comando `;` repite esa acción en la siguiente ubicación donde se encuentre el cursor.
```

En Vim, tanto el comando `.` (punto) como el comando `;` (punto y coma) se utilizan para repetir el último cambio realizado, pero tienen diferencias clave:

1. `.` (punto): El comando `.` en Vim repite el último cambio exactamente como se realizó. Esto significa que repite el mismo comando o secuencia de comandos con los mismos argumentos y opciones. Por ejemplo, si utilizaste `s/foo/bar/` para reemplazar la primera aparición de "foo" por "bar", al presionar `.` repetirá ese mismo reemplazo en la siguiente aparición de "foo" sin cambios en el patrón o la sustitución.

2. `;` (punto y coma): El comando `;` en Vim también repite el último cambio realizado, pero realiza una búsqueda adicional en lugar de repetir exactamente el último comando. Después de presionar `;`, Vim busca la siguiente aparición del patrón utilizado en el último cambio y realiza el mismo cambio en esa ubicación. Esto significa que `;` es útil cuando deseas repetir el mismo tipo de cambio en diferentes lugares sin tener que especificar el patrón nuevamente.

```lua
# Pepetir el último cambio realizado pero en reversa
,
```

### Buscar

Buscar coincidencia en el código. 

```lua
# Buscar un caracter
f

> Presionar f y luego el carácter a buscar: f+ 
> Encontrando el carácter +
```

En este caso, la `f` busca en la línea donde está posicionado el cursor y no buscara en otras líneas. Además, siempre buscará coincidencias solo a la derecha de esa línea.

Este atajo se puedo combinar con `s` y `;` para reemplazar coincidencias más rápido.

Ejemplo:

```js
// Antes
const something = () => {
  |return "+argument1+", "+argumento2+";
}

// Después de usar: f+s␣+␣Esc;.
// El ;. lo usamos cuantas veces sean necesarias
const something = () => {
  return " + argument1 + ", " + argumento2 + ";
}
```

En este ejemplo usamos `;` que se utiliza para repetir el último cambio realizado. Después de realizar una acción, como una búsqueda o un reemplazo, el comando `;` repite esa acción en la siguiente ubicación donde se encuentre el cursor.

Buscar de derecha a izquierda.

```lua
F

> F mas el carácter a buscar.
```

También podemos usar `t` para hacer búsquedas de izquierda a derecha dejando el cursor un carácter atrás, además podemos usar T para hacer lo mismo pero de derecha a izquierda.

```lua
# Buscar dejando el cursor un carácter antes
t 
T
```

Para realizar búsquedas más avanzadas:

```lua
/palabra-a-buscar + enter
```

Podemos usar `n` o `N` para navegar entre los resultados de la búsqueda. 

```lua
# Navegar entre las busquedas
n
N
```

Para realizar búsquedas hacia atrás:

```lua
?palabra-a-buscar + enter
```

Buscar y sustituir: Para esto necesitas posicionarte en una línea que tenga alguna de las coincidencias a entrar:

```lua
:s/palabra-a-buscar/palabra-a-reemplazar + enter
```

Una vez encuentra la coincidencia puedes usar `n` o `N` para ir a la siguiente y usar `&` para hacer él reemplaza o usar `u` para retroceder.

```lua
# Para reemplazar
&
```

### Modificaciones

```lua
# Guardar cambios
Esc + :w

# Salir
Esc + :q

# Salir guardando
Esc + :wq

# Salir sin guardar 
:q!
```

Editar un nuevo archivo sin tener que salir de Vim.

```lua
# Editar un nuevo archivo
:edit file-name

> Usar este atajo habiendo guardado cambios en el archivo actual.
> Si te sale algo de info presiona e para editar.
```

Indentar código.

```lua
# Indentar
>>
<<
```

> La indentación se puede configurar. En mi caso uso 2 espacios en lugar de una tabulación. Para esto ver las configuraciones de abajo.

## Configurar Vim

Ejecutamos el siguiente comando para abrir el archivo de las configuraciones de Vim:

```lua
❯ vim ~/.vimrc
```

Según tus preferencias puedes ver qué configuraciones te convienen:

```lua
# Cursor al final de la línea
set virtualedit=onemore
nnoremap $ $l

# Tabulación o Indentación
## Número de espacios para una tabulación
set tabstop=2

## Número de espacios para el desplazamiento
set shiftwidth=2

## Utilizar espacios en lugar de tabulaciones
set expandtab
```

$ + a + ; Esc
j + $ + .


Shift + k






w

e

10 j 

f + letra a buscar en la misma línea

0 principio de linea
$ final de la linea

* Debes posicionarte en la pabra a buscar encontras palabras iguales



buscar el cierre de un parentesis

gg al inicio

GG al final

15 G ir a la linea 15

o nueva linea vacia

O nueva linea antes de la posición actual

x borrar letra delantera
X borrar a la izquierda

r + la letra: reemplazar caracteres

dw: cortar palabras
dd: cortar linea
p: pegar linea

yy: copiar lineas
3yy: copiar 3 líneas

. repetir el ultimo comando realizado

v + k o j: seleccionar

/palabra a buscar
n: buscar la siguiente coincidencia
N: retrocede en las coincidencias encontradas

/o$ : Buscar con expresiones regulares
:%s/que/con/g : s de sustituir

u: deshacer el ultimo cambio hecho

## Practicar

vim-adventures.com