# Vim

## Practical Vim

```lua
# Abrir un archivo
❯ vim something.md

# Insetar
i

# Insetar y saltar un caracter si lo hay
a

# Ir al final de la línea + insertar
A

# Ir al final de la línea
$
GA

# Ir al inicio de la línea
0

# Salir del modo insertar
Esc

# Moverte
## Subir
k

## Bajar
j

## Derecha
l

## Izquierda
h

# Eliminar de izquierda a derecha
x 

# Deshacer cambios
u

# Eliminar una línea entera
dd

# Repetir el comando anterior
.

# Guardar cambios
Esc + :w

# Salir
Esc + :q

# Salir guardando
Esc + :wq

# Indentar
>>
<<


```

## Configurar Vim

```lua
❯ vim ~/.vimrc

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

:q enter

vim file-name

flechas hjkl

insertar: i

:w guardar
:wq salir y guardar
:q! salir sin guardar 

:edit nombre del archivo a editar

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