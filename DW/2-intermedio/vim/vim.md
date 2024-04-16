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
# Eliminar una línea entera
dd
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