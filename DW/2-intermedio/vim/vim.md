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
// Antes de usar $a
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

Para agregar filas en blanco y activar el modo insertar:

```lua
# Insertar una fila abajo
o

# Insertar una fila arriba 
O

> Para este último también se puede usar ko
```



> Nota: Es importante mencionar que cuando dejamos de editar o insertar texto en algún archivo y presionamos `Esc`, el cursor se posiciona un carácter antes (hace un desplazamiento a la izquierda). Al parecer esto es normal en Vim.

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

Para saltar entre palabras:
```lua
# Adelantar
w

# Retroceder
b
```

Para moverme al inicio de una fila puedo usar:

```lua
# Ir al inicio de la línea
0
```

Para moverme a la primera fila justo al inicio:

```lua
gg

> Si estás posicionado en cualquier otra línea y te quieres posicionar rápidamente al inicio de todo el contenido.
```

Para moverme a la última fila y quedarme al inicio de esa fila:

```lua
# Ir al final de todas las líneas
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

## Eliminar una palabra
b + dw
db + x
daw 👈👀 Delete a word

## Pegar
p

# Copiar una línea
yy

# Copiar 3 líneas
3yy

# Pegar
p
P
```

Borrar todo a la derecha partiendo desde la posición del cursor, luego activar el insertar:

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

Borrar un carácter a la derecha y pasar al modo insertar:

```lua
cl

# Lo mismo
s
```

Borrar y cambiar una palabra (change):

```lua
cw
```

1. Posiciona el cursor en cualquier parte de la palabra que deseas cambiar.
2. Presiona `cw`. Esto borra la palabra desde la posición actual del cursor hasta el final de la palabra y te coloca en el modo de inserción.
3. Ahora puedes escribir la nueva palabra que deseas reemplazar.
4. Una vez que hayas terminado de escribir la nueva palabra, presiona la tecla `Esc` para salir del modo de inserción.

Vim también ofrece variantes del comando `cw` para cambiar palabras específicas:

- `caw` cambia la palabra completa, incluyendo cualquier espacio en blanco adyacente.
- `ciw` cambia solo la palabra, sin incluir espacios en blanco adyacentes.
- `c$` cambia desde la posición actual del cursor hasta el final de la línea.

Borrar todo el contenido:

```lua
gg + V + G + d

# También puedes copiarlo
gg + V + G + y
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

### Incrementar y decrementar

Si tienes un número y quieres incrementarlo, solo presiona `Ctrl + a` estando en el modo normal. Esto hará un incremento de uno en uno.

Ejemplo:

```js
const number = |2;

# Despues de presionar Ctrl + a
const number = |3;
```

Para incrementar en un número dado, debes presionar previamente, por ejemplo 10 seguido de `Ctrl + a`.

Ejemplo:

```js
const number = |2;

# Despues de presionar 10 + Ctrl + a
const number = |12;
```

Para disminuir un número usar `Ctrl + x`.

> En caso el cursor no esté situado sobre algún número, el atajo `Ctrl + a or Ctrl + x` saltará hasta el siguiente número existente en esa línea y hará el incremento o decremento.

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

#### Resaltado de coincidencias

Una forma de buscar coincidencias es usando el `*`. Para usarlo solo debes posicionarte sobre la palabra a buscar coincidencias y presionar `*`.

```lua
# Busca coincidencias en todo el archivo
*
```

Esto debería resaltar todas las coincidencias, pero de no ser así debes activarlo.

```lua
# Ingresa esto dentro de vim
:set hlsearch

> Estando en el modo normal presiona : y escribe todo lo demás.
```

Ahora, para reemplazar todas las coincidencias:
1. Muévete con `n` hasta la primera coincidencia 
2. Usa `cw` que borrar toda la palabra escribe la palabra que necesitas. 
3. Presiona escape y ya lo tienes. 
4. Para hacerlo con todas las demás palabras solo presiona `n.`

```lua
cw + nueva-palabra + Esc + n.
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
# Desactivar el modo de compatibilidad con vi
set nocompatible

# Ajuste automático del texto que sobrepasa la longitud de la pantalla
set wrap

# Especificar el conjunto de caracteres
set encoding=utf-8

# Activar la numeración / numeración relativa
set number
set relativenumber

# Barra de estado
set laststatus=2

# Tabulación o Indentación
## Número de espacios para una tabulación
set tabstop=2

## Número de espacios para el desplazamiento
set shiftwidth=2

## Utilizar espacios en lugar de tabulaciones
set expandtab

# Activar resaltado de sintaxis
syntax enable
syntax on

# Cursor al final de la línea (no recomendado)
set virtualedit=onemore
nnoremap $ $l
```

#### Otros

```lua
# Resaltado de coincidencias
:set hlsearch

# Activar la numeración
:set number

# Activar la numeración relativa
:set relativenumber

# Desactivar la numeración
:set nonumber4k
:set nornu
```

### Gestores de Plugins

#### 1. Manual

> No recomendado...

```bash
cd ~
mkdir .vim
cd .vim 
vim vimrc
```

En `vimrc` tendremos la configuración principal.

Para el ejemplo usaremos el siguiente plugin que permite seleccionar `"" {} []` para poder modificarlos rápidamente.

En el navegador buscamos [vim-surround](https://github.com/tpope/vim-surround), entramos en `plugin` y abrimos `surround.vim`. Copiamos su contenido.

```bash
mkdir plugin
cd plugin
vim surround.vim
# Pegar contenido copiado 👈👀
```

Ahora ya podemos probar el plugin.

##### Paquetes

Si quieres usar el método manual es mejor usar paquetes (directorios de plugins)

En este caso eliminamos el directorio anterior `plugin`.

```bash
rm -rf plugin
mkdir pack
cd pack
# Directorio con el nombre del paquete a instalar
mkdir -p tpope/start
cd tpope/start
git clone https://github.com/tpope/vim-surround
```

Ahora ya podemos probar el plugin.

#### 2. Vim-Plug

Este gestor de paquetes facilita la instalación, gestión y actualización de paquetes.

Buscar [junegunn vim-plug](https://github.com/junegunn/vim-plug) y buscamos **Installation**.

En mi caso estoy usando Linux, así que usaré el siguiente comando:

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

```bash
mkdir .vim
cd .vim 
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

Entramos a `vimrc` para configurarlo.

```bash
"Config Principal

call plug#begin()
	Plug 'jonegunn/goyo.vim'
call plug#end()
```

Ahora para instalar el plugin solo ejecutar dentro de Vim:

```lua
:PlugInstall
```

Este gestor nos permite actualizar, limpiar archivos innecesarios, etc.

##### Otra forma

> En caso de algún error o problemas con este gestor, intenta con este otro tutorial:
> [Intro to Vim Customization | Configuration and Plugins](https://www.youtube.com/watch?v=zE0hno3vV9M)

```bash
which vim
vim ~/.vimrc
```

El archivo `.vimrc` debe tener esto: 

```lua
1   " Set compatibility to Vim only
  1 set nocompatible
  2 
  3 " Automatically wrap text that extendes beyond the screen length
  4 set wrap
  5 
  6 " Encoding
  7 set encoding=utf-8
  8 
  9 " Show line numbers / Relative numbering
 10 set number
 11 set relativenumber
 12 
 13 " Status bar
 14 set laststatus=2
 15 
 16 " Indentation
 17 set tabstop=2
 18 set shiftwidth=2
 19 set expandtab
 20 
 21 " Set syntax highlighting
 22 syntax enable
 23 syntax on
 24 
 25 " Match Highlighting
 26 set hlsearch
 27 
 28 " Incremental search
 29 set incsearch
 30 
 31 " set cursorline
```

Guarda, cierra el archivo y ejecuta lo siguiente:

```bash
which curl
touch ~/.vimrc.plug
mkdir -p .vim/plug
vim ~/.vimrc
```

Ahora añade esto:

```lua
 33 " Call the .vimrc.plug file
 34 if filereadable(expand("~/.vimrc.plug"))
 35   source ~/.vimrc.plug
 36 endif
```

Guarda, cierra el archivo y ejecuta lo siguiente:

```bash
vim .vimrc.plug
```

Aquí podrás agregar los plugins que necesites:

```lua
1   call plug#begin('~/.vim/plugged')
  1 
  2   " Fugitive Vim GitHub Wrapper
  3   Plug 'tpope/vim-fugitive'
  4 
  5 call plug#end()
```

Guarda, cierra el archivo y ejecuta lo siguiente. Ahora debemos instalar el gestor **vim-plug** para lo cual necesitas tener instalado previamente **Git**.

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

vim

# Si no tienes instalado Git puedes usar:
apt install git
vim
```

Por último:

```lua
:PlugInstall
```

#### 3. Vundle

Este gestor de plugin se parece a Vim-Plug aunque es algo más engorroso.

Buscar [Vundle.vim](https://github.com/VundleVim/Vundle.vim) y clonamos lo siguiente dentro de `.vim`:

```bash
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

Ahora debemos configurarlo:

```bash
vim vimrc
```

```lua
set nocompatible
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'tpope/vim-fugitive'
call vundle#end()
filetype plugin indent on
```

Salimos y volvemos a entrar para cargar la nueva configuración y poder instalar los plugins.

```lua
:PluginInstall
```

#### 4. Pathogen

Este método es más avanzado que usar los gestores de paquetes. Este no es un gestor de plugins, sino un programa para manejar el runtime path de Vim con facilidad.

Buscamos [vim-pathogen](https://github.com/tpope/vim-pathogen) y buscamos la **installation**:

Ejecutamos el comando dentro de `.vim`.

```bash
mkdir -p ~/.vim/autoload ~/.vim/bundle && \
curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim
```

Ahora en la configuración en `vimrc`:

```lua
execute pathogen#infect()
```

Para instalar paquetes solo debemos clonar los repositorios con el plugin en el directorio `bundle` que ha creado antes.

Para el ejemplo usaremos el plugin [vim-sensible](https://github.com/tpope/vim-sensible) que permite tener una configuración básica que todo un equipo puede usar.

```bash
cd ~/.vim/bundle && \
git clone https://github.com/tpope/vim-sensible.git
```

Ahora ya podemos probar el plugin.

[Tutorial](https://www.youtube.com/watch?v=vEuPg_XEsak)

## Plugins que uso

```lua
call plug#begin('~/.vim/plugged')

  " Fugitive Vim GitHub Wrapper
  Plug 'tpope/vim-fugitive'
 
  " Syntax
  Plug 'sheerun/vim-polyglot'

  " Tree
  Plug 'preservim/nerdtree'

call plug#end()
```

Revisar [nschurmann/configs](https://github.com/nschurmann/configs)


## Instalar Vim

Para Linux seguir estos pasos:

```bash
git clone https://github.com/vim/vim.git
cd vim/src
make
sudo make install
```

## Eliminar Vim

1. Desinstalar Vim:

```bash
sudo apt-get remove vim
```

Si instalaste Vim desde las fuentes, deberás eliminar los archivos manualmente. Normalmente, esto implica eliminar el directorio donde se encuentra Vim y sus archivos asociados. Puedes verificar la ubicación de los archivos de Vim ejecutando el siguiente comando:

```bash
which vim
```

2. Eliminar configuraciones y archivos de Vim:

```bash
rm ~/.vimrc
rm -rf ~/.vim
rm ~/.viminfo
```

3. Eliminar Vim y sus dependencias no utilizadas:

```bash
sudo apt autoremove
```

## vimscript

Vimscript es el lenguaje de scripting utilizado en el editor de texto Vim. Es un lenguaje específico de dominio diseñado para extender y personalizar Vim de acuerdo a las necesidades de cada usuario. Vimscript permite automatizar tareas, crear nuevas funcionalidades, definir comandos personalizados, mapear teclas, entre otras cosas.

Vimscript tiene una sintaxis similar a otros lenguajes de scripting, pero con algunas características distintivas propias de Vim. Algunas de las características clave de Vimscript son:

1. Manipulación de texto: Vimscript proporciona una amplia gama de funciones y comandos para manipular y transformar texto. Permite realizar operaciones como buscar y reemplazar, dividir y unir líneas, ordenar texto, entre otras.

2. Mapeo de teclas: Con Vimscript, puedes asignar combinaciones de teclas personalizadas para ejecutar comandos o secuencias de comandos específicas. Esto te permite crear atajos o accesos rápidos para acciones frecuentes.

3. Definición de comandos y funciones: Puedes definir tus propios comandos y funciones en Vimscript. Esto te permite crear nuevas funcionalidades y automatizar tareas complejas.

4. Variables y estructuras de control: Vimscript admite variables para almacenar y manipular datos. También cuenta con estructuras de control como condicionales (if-else), bucles (for, while) y manejo de excepciones.

5. Interacción con el entorno de Vim: Vimscript proporciona funciones para interactuar con el entorno de Vim, como acceder a las opciones de configuración, leer y escribir archivos, gestionar ventanas y pestañas, entre otros.

Vimscript es altamente personalizable y flexible, lo que permite a los usuarios adaptar Vim a sus necesidades y preferencias específicas. Además, Vimscript es compatible con complementos y scripts de terceros, lo que amplía aún más las capacidades de Vim.

Es importante destacar que Vimscript es específico de Vim y no se puede utilizar fuera del contexto del editor.





```lua

$ + a + ; Esc
j + $ + .

Shift + k

w

e

10 j 

* Debes posicionarte en la pabra a buscar encontras palabras iguales

buscar el cierre de un parentesis

gg al inicio

GG al final

15 G ir a la linea 15


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
```


Renombrar un archivo en la terminal

```bash
mv nombre_actual nuevo_nombre
```

Copiar un archivo a otro lado:

```bash
cp ruta_origen ruta_destino
```

## Practicar

vim-adventures.com