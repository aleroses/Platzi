*** Curso de Django ***
--- Pablo Angel trinidad ---

1. Qué aprenderás sobre Django?

El objetivo de este curso es que conozcas Python y Django y los consideres como una herramienta útil para el desarrollo de tus proyectos.

El proyecto que estaremos desarrollando será Platzigram.



2. Historia de web development

Al inicio de la web todos los sitios eran construidos en texto plano(html) o mas conocidos como Text-based. Conforme las necesidades han ido cambiando la web también lo ha hecho.

Frameworks
Estos resuelven muchas de las tareas mas comunes:
- Resolución de una petición HTTP o la creación de una respuesta
- Conexión a una BD (Database Connection)
- Consulta a tablas
- Interacción con html

Historia de Django
- Nace 2003

Objetivos
- Mantener sitios escalables
- URLs bien diseñadas
- HttpRequest / HttpResponse
- Muchos sitios en poco tiempo
- ORM que permite conectar a una BD

Características:
- Rapido desarrollo
- Listo para todo
- Seguro
- Escalable
- Versátil

Ventajas
- Es desarrollado en Python.
- DRY (Don’t repeat yourself).
- Comunidad
- Open Source



3. Preparación del entorno de trabajo en Mac

Vamos a python.org, en la sección de descargas, descargamos la última versión y hacemos el proceso de instalación.

Los entornos virtuales nos permiten isolar multiples dependencias para el desarrollo de proyecto, puede pasar por ejemplo cuando trabajas con diferentes versiones de python o de django.

Python 3 trae la creación y manejo de entornos virtuales como parte del modulo central.

‘python3 -m venv .env’


Al instalar revisar en el cmd:
python3
- pip3

Entorno Virtual: es solo una carpeta 
	- Permiten instalar multiples entornos de desarrollo con diferentes dependencias por proyecto, esto es útil porque eventualmente cuando estemos trabajando con multiples proyectos lo ultimo que queremos es que nuestras dependencias choquen. Puede pasar cuando estes trabajando en un proyecto con una version vieja de Django y en otro proyecto con una version nueva.

- python3 -m venv 
	-> venv: virtual env -> m: motiu
	-> Despues de este comando debemos escribir el nombre de nuestro entorno virtual Esto creará un entorno donde se isolaran todos estos paquetes
	
- cd Desktop/
	-> ejemplo entorno virtual 
- python3 -m venv .env
	.env: folder oculto para el entorno virtual
- ls -al
- ls -al .env
- source .env/bin/activate
	Ejecutar el entorno virtual, estar en el entorno vir
- deactivate
	Desactivar entorno virtual
- mkdir platzigram
- cd platzigram
- source ../.env/bin/activate


Instalar Django ultima version estando activado
pip install django -U

Ver librerias que están instaladas en nuestro entorno
- pip freeze

- deactivate
	- salir de entorno virtual

- pip3 freeze

- source ../.env/bin/activate

- pip freeze



4. Preparación del entorno de trabajo en Windows y Linux

Instalación de Python en Windows
1. Dirigirse a https://python.org
2. Ir a la sección de descargas
3. Descargar cualquier versión superior a 3.6.*

Instalación de Python en Linux
1. Correr:
sudo
add-apt-repository -y ppa:jonathonf/python-3.6
apt-get update -y
apt-get install -y python3.6
apt-get install -y python3.6-dev
apt-get install -y python3.6-distutils

sudo
ln -s /usr/bin/python3.6 /usr/local/bin/python3
wget https://bootstrap.pypa.io/get-pip.py -O /home/ubuntu/get-pip.py
python3.6 /home/ubuntu/get-pip.py
rm /home/ubuntu/get-pip.py
ln -s /usr/local/bin/pip /usr/local/bin/pip3
``

## Verificación de la descarga

1. Correr `python3 --version`
2. Correr `pip3 --version`

## Entorno virtual

1. Correr `python3 -m venv ENTORNO` donde `ENTORNO` sea el nombre deseado
2. Correr `source ENTORNO/bin/activate` para activar el entorno
3. Correr `deactivate` para desactivar el entorno

## Instalación de django

1. Activar entorno virtual
2. Correr `pip install django -U`




https://ubunlog.com/python-3-9-como-instalar-en-ubuntu-20-04/


https://docs.aws.amazon.com/es_es/elasticbeanstalk/latest/dg/eb-cli3-install-linux.html


https://www.djangoproject.com/download/


Les dejo la forma de instalarlo en linux, espero les sirva

Instalación de Python en Linux

Dirigirse a https://python.org
Ir a la sección de descargas
Descargar cualquier versión superior a 3.7.*

Click derecho extraer aqui
cd nombre_directorio_desempaquetdo
./configure
make
make install

Crear entorno virtual
$ python3 -m venv .env
Activar entorno virtual
$ source .env/bin/activate
Desactivar entorno virtual
$ deactivate

Crear directorio de proyecto
mkdir platzigram
cd platzigram
source ../.env/bin/activate

Actualizar pip en /platzigram#
pip install --upgrade pip

Intalar Django en /platzigram#
pip install Django==3.2.6

Para verificar los paquetes que tenemos instalados
pip freeze

Nos muestra
Django==2.2.5
pytz==2019.2
sqlparse==0.3.0



Otra forma de inst pip:
- pip --version
sudo apt install python-pip
sudo apt install python3-pip

pip install --upgrade pip
pip3 install --upgrade pip




Para copiar una palabra dentro de la terminal de Linux:
doble click sobre la palabra + dos clic derecho sobre la misma palabra



5. Creación del proyecto Platzigram / Tu primer Hola, mundo! en Django

Dentro de nuestro entorno virtual:
- pip freeze

- django-admin
	Es una interfaz con el framework de django que nos permite correr otros comandos
	
- django-admin startproject platzigram .
	Esto crea un folder platzigram con otro folder platzigram por eso Como ya tenemos una carpeta platzigram colocamos un punto para indicarle que se cree dentro de esta carpeta. El punto es equivalente al pap donde queremos que se cree.

- ls -al

- subl .   Tambien -> code .
	para visualizar los archivos 
	
Folder Platzigram:
- _init__.py
	Su objetivo es declarar platzigram como un modulo de python.

- settings.py
	Es el mas importante de Django, define todas las configuraciones de nuestro proyecto. 
	BASE_DIR: Linea muy importante ya que declara el lugar donde esta corriendo el proyecto
	SECRET_KEY: Usado para el hashing de las contraseñas y de las sesiones que se almacenan en la base de datos
	DEBUG: True Marca que nuestro proyecto está en desarrollo. Es importante que se mantenga en False cada que nuestro proyecto sea liberado a producción 
	Allowed_HOSTS: Host permitidos para interactuar en nuestro proyecto.
	INSTALLED_APPS: Aplicaciones instaladas
	Middleware: lo mismo de arriba xd
	ROOT_URLCONF = 'plat.urls': Se define cual es nuestro archivo principal de url o el modulo de entrada de urls.
	WSGI_APPLICATION: Archivo de entrada de Wsgi
	Databases: Configuración de la BD -< sqlite3 es solo para pruebas.
	Auth_passsword_VALIDATORS: Validadores de contraseñas
	LANGUAGE_CODE: Define cual es el lenguaje en el que se está interactuando con nuestra aplicación 
	TIME_ZONE: 
	USE_I18N -> USES_L10N -> Para traducción 
	USB_TZ: Librería de Taizon xd
	STATIC_URL: Define que cada que se vaya a /static/ en lugar de buscar resolver la url usando nuestro archivo urlpatterns

- urls.py
	Archivo principal, punto de entrada para todas las peticiones que lleguen a nuestro proyecto de Django.
	La manera en la que funciona esto es que va a tratar de buscar la url requerida y va a tratar de encontrarla con su vista correspondiente

- wsgi.py
	Archivo usado durante el deploinment para producción y es la interfaz wsgi con nuestro proyecto de django cuando el servidor esta corriendo en producción 

- manage.py
	Es un archivo que nunca vamos a tocar pero se convierte en el archivo con el cual interactuaremos durante todo el desarrollo. lo único que hace es una interefaz sobre django admin.


	Interactuar con Manage.py

- ls -al
- python3 manage.py
	Similar al djando admin
	Muestra los comandos de cada aplicación 
- python3 manage.py runserver
	Nos dice que está haciendo check del sistema
	No identifica ningún problema 
	Dice que hay 14 migraciones que no se han aplicado, que la BD necesita ser actualizada, hay cosas que no se han reflejado en la BD.
	La hora del servidor
	La version de django 
	Donde está corriendo el servidor
	
	
	Vamos al servidor de Desarrollo

- Dentro del navegador Firefox
- localhost:8000
	Mensaje: Menciona que Debug = true
	
	 
	 Hola mundo en Django - Sublime text
	
- Borra comentarios de Urls.py
- borra path('admin/', admin.site.urls)
	el path como funciona es que tu defines cual es la url a la que estas esperando responder algo, es el primer argumento de la funcion path.

- Escribimos:
	path('hello-world/', hello_world)
	- significa que cada que vayamos al navegador: localhost:8000/hello-world -> algo tiene que pasar
	
	La vista: 
		Es simplemente una funcion o también una clase
		
		
	from django.http import HttpResponse	
		-> debemos importar esta herramienta
	
	def hello_world(request):
		return HttpResponse('Hello, world!')


---> Se muestra así

"""Platzigram URLs module."""

from django.urls import path
from django.http import HttpResponse


def hello_world(request):
    """Return a greeting."""
    return HttpResponse('Hello, world!')


urlpatterns = [

    path('hello-world/', hello_world)

]








Al revisar la consola y el navegador se ve el hello world

Django es python y puede ser muy flexible, django resuelve una petición de muchas maneras.
django es una interfaz para crear urls y conectar esa url a lógica 

Es una buena practica mantener todo comentado



6. El objeto Request

En esta clase crearemos mas vistas, jugaremos con los diferentes patrones de urls que django nos permite tener, revisaremos cómo django procesa las peticiones.

Reto de la clase: Crea una vista y su respectiva URL en la que recibas números y hagas operaciones con ellos. En la siguiente clase te voy a enseñar a resolverlo.

Regresa la lista ordenada de números en formato json.


https://docs.djangoproject.com/en/2.0/ref/request-response/

https://docs.djangoproject.com/en/2.0/topics/http/urls/


. Visualizar Hola mundo

- platzigram -> new file views.py
- Mover función a views.py
- Mover import HttpResponse a views.py


. Archivo urls.py
- form platzigram import views

urlpatterns = [
	path('hello-world/', views.hello_world)
]

- Revisar que el servidor de desarrollo siga corriendo en la terminal
- Recargar la web
	localhost 8000/hello-world/



. Visualizar la hora en la web
- Usamos urls.py

from django.http import HttpResponse

# Utilities
from datetime import datetime

def hello_world(request):
	now = datetime.now().strftime('%b %dth, %Y - %H:%M hrs')
	return HttpResponse('Oh, hi! Current server time is {now}'.format(now=str(now)))
	


def hi(request):
	#print(request)
	import pdb; pdb.set_trace() #Coloca un debuger en la consola, el ; es para no hacer otra linea de código 
	return HttpResponse('Hi!')


. Ahora en el archivo vista views

path('hello-world/', views.hello_world),
path('hi/', views.hi)

-- Revisar servidor que siga corriendo
-- Nos imprime el request

-- Actualizar el navegador, se queda cargando
-- Revisar la consola

-- en consola
-- (Pdb) request
-- (Pdb) request.META
-- (Pdb) request.method
-- (Pdb) request.GET 
	- Nos dice cuales son los argumentos que nos esta faltando 
	
	
. Hacer URL que reciba numeros usando el argumento number y los regresa de manera ordenada

- Salir del debuger
	- c y enter

- Ahora en la url de nuestro navegador colocar:

http://localhost:8000/hi/?numbers=10,4,50,32

- Quitar debuger dentro de la funcion def hi(request):
	import pdb; pdb.set_trace()
	
- Se reemplaza por:
	numbers = request.GET['numbers']
	return HttpResponse(str(numbers))



7. Solución al reto - Pasando argumentos en la URL

Vamos a resolver el reto de ordenar los números pasados desde la URL, responder a la petición en formato Json y veremos otras formas de pasar argumentos a través de la URL.

	views.py

def hi(request):
	numbers = request.GET['numbers'] # Esto muestra los numeros en web
	import pdb; pdb.set_trace()
	return HttpResponse(str(numbers))
	
	Recargamos la pagina 


	Consola
numbers 
	-> No es una lista de números 

numbers.split(',')
	-> Separar números dado un carácter, pero aun siguen siendo texto
	-> Como string usando el método de Python (split) para separar los numeros dado un carácter (',') y lo que recibe es el carácter que los separa.

[int(i) for i in numbers.split(',')]
	-> For que recorre cada uno de los numeros separados y los convierte a enteros 

sorted
	->Funcion que recibe una lista y la ordena


	views.py

def hi(request):
	numbers = [int(i) for i in request.GET['numbers']]
	sorted_ints = sorted(numbers)
	import pdb; pdb.set_trace()


¿Como regresar un Json?
Revisar documentación 

Para responder se puede usar:
	HttpResponse(content_type='application/json')
	
	
	views.py

def hi(request):
	numbers = [int(i) for i in request.GET['numbers'].split(',')]
	sorted_ints = sorted(numbers)
	# import pdb; pdb.set_trace()
	data = { # Diccionario
		'status': 'ok',
		'numbers': sorted_ints,
		'message': 'Integers sorted successfully.'
	}
	return HttpResponse(json.dumps(data, indent=4), content_type= 'application/json')


Convertir un diccionario de Python a una respuesta en Json
	# Utilities
	import json 

Traducir el objeto (diccionario) data en un string json
	json.dumps(data)

Agregar intentación con 4 espacios 
	json.dumps(data, indent=4)


	Recargar pagina 
	
Para que sea mas fácil de leer por otro Development

	return HttpResponse(
		json.dumps(data, indent=4),
		content_type= 'application/json'
	)
	
	

	# Ver que otra manera tenemos para pasar argumentos
	localhost:8000/posts/2021/
	localhost:8000/users/pablo/	

Nuestra lista de Urls patterns puede ser una lista de paths o una lista de re_paths 

Ejemplo path converter:
path('articles/<int:year>/', views.year_archive)
	-> <tipo de dato:nombre que quieres que reciba>/
	
	
	# Hacer una validación de edad para personas menores de 15 años	
	# urls.py
	
	urlpatterns = [
		path('hi/<str:name>/<int:age>/', views.say_hi),
	]
	
	
	# Crear función say_hi
	
def say_hi(request, name, age):
	'''Return a greeting.'''
	
	if age < 12:
		message = 'Sorry {}, you are not allowed here'.format(name)
	else:
		message = 'Hello, {}! Welcome to Platzigram'.format(name)
		
	return HttpResponse(message)
	
	
	#Revisar consola y actualizar navegador
	
localhost:8000/hi/Yesica/11/
-> sorry Yesica, you are not allowed here
	
localhost:8000/hi/Yesica/21/
-> Hello, Yesica! Welcome to platzigram
	
	
	
8. Creación de la primera app

Vamos a explorar el concepto de Apps en Django y crearemos nuestra primera app.

Una app dentro de Django es un modulo de python que provee un conjunto de funcionalidades relacionadas entre sí.
Las apps son una combinación de models, vistas, urls, archivos estaticos.

Muchas apps en django estan hechas para ser reutilizadas.

El . es la ruta en forlder.	
	

# Crear una aplicación dentro de Django
# Usando la consola

python3 manage.py startapp posts
	- posts es el nombre de la aplicación que queremos crear
	- Procurar de que el nombre siempre sea en plural
	
# Revisamos los archivos creados usando Visual Studio Code
# Folder posts

Migrations
	Es un modulo de python, se encarga de grabar los cambios en la base de datos

_init__.py 
	Declara que es un Modulo de python siempre vacío 

admin.py
	Registra los modelos en el administrador de Django
	
apps.py
	Declara toda la configuración de nuestra app, hace publico en caso de que nuestra app sea reutilizable 

models.py
	definir los modelos de nuestros datos
	
tests.py
	para realizar pruebas
	
views.py 


# Archivo apps.py
# La documentación nos da referencias de las aplicaciones

Tiene una clase principal que hereda de AppConfig que recibe ciertas variables de configuración 

Variables de configuración: Dos de interés por el momento
1. Cual va a ser el nombre común de nuestra aplicación
2. cual va a ser el nombre en plural


'''Posts application module.'''

from django.apps import AppConfig

class PostsConfig(AppConfig):
	'''Posts application settings.'''
	
	name = 'posts'
	varbose_name = 'Posts'
	


# Instalar aplicación dentro de platzigram -> settings.py

INSTALLED_APPS = [
	# Django apps
	'django.contrib.admin',
	
	# Local apps
	'posts',
]


# Confirmar que todo funciona -> Consola

python3 manage.py runserver


# Agregamos platzigram -> Url
Como las vistas las vamos a importar de otro lado cambiamos un poco la importación y las vamos a renombrar para que no choquen entre si (platzigram y posts)

from django.urls import path

	# Vista de platzigram
from platzigram import views as local_views

	# vista de posts
from posts import views as posts_views

urlpatterns = [ # Actualizamos los path con el nuevo nombre
	path('hello-world', local_views.hello_world),
	
	
	path('posts/', posts_views.list_posts),
]


# Agregamos una vista ligada a la aplicación de platzigram

Esta vista va a pintar un html como si fuera un scrip sgi para que posteriormente hagamos una introducción a templates

Crearemos la función dentro de Posts -> views.py

'''Posts views.'''

# Django
from django.http import HttpResponse

# Utilities FECHA
from datetime import datetime

# Variable global
posts = [
	{ # Lista de diccionario
		'name': 'Mont Blac',
		'user': 'Yésica Cortés',
		'timestamp': datetime.now().strftime('%d %dth, %Y - %H:%M hrs'),
		'picture': 'https://picsum.photos/200/200/?image=1036',		
	},
	{ # Lista de diccionario
		'name': 'Mont Blac',
		'user': 'Yésica Cortés',
		'timestamp': datetime.now().strftime('%d %dth, %Y - %H:%M hrs'),
		'picture': 'https://picsum.photos/200/200/?image=1036',		
	},
	{ # Lista de diccionario
		'name': 'Mont Blac',
		'user': 'Yésica Cortés',
		'timestamp': datetime.now().strftime('%d %dth, %Y - %H:%M hrs'),
		'picture': 'https://picsum.photos/200/200/?image=1036',		
	},
	
]

def list_posts(request):
	'''List existing posts.'''
	content=[]
	for post in posts: # Por cada post crea una lista html
		content.append('''
			<p><strong>{name}</strong></p>
			<p><small>{user} - <i>{timestamp}</i></small></p>
			<figure><img src='{picture}'/></figure>
			'''.format(**post)) #Desempaquetamos todo el diccionario usando **post
	
	return HttpResponse('<br>'.join(content)) # con el método join podemos unir todo esto en un solo string


# En la web	
	http://localhost:8000/posts/
	
	
Nota: no existe ninguna diferencia entre las vistas hechas anteriormente, simplemente está dentro de nuestra aplicación porque pertenecen a la funcionalidad de posts y se agregan al archivo de urls.py de la misma manera que hemos estado agregando urls anteriormente 	
	
	
	
9. introducción al template system	

Template system de Django es una manera de presentar los datos usando HTML, está inspirado en Jinja2 y su sintaxis, por lo cual comparte muchas similitudes. Permite incluir alguna lógica de programación.


Built-in template tags and filters | Django documentation | Django
https://docs.djangoproject.com/en/2.0/ref/templates/builtins/



Built-in template tags and filters | Django documentation | Django
https://docs.djangoproject.com/en/2.0/ref/templates/builtins/	
	
	
Introducción al template system de django al momento que mejoraremos nuestra vista de posts, veremos las sentencias if, for y haremos introspección en los objetos.


# Uso del template system de django
	Es una manera de presentar los datos usando html, incluye un poco de lógica de programación lo cual nos permite tener mas flexibilidad a la hora de presentar la GUI (Graphics User Interfaces) 
	
# La vista es la encargada de la lógica de traer los datos 	
# El template es la lógica de presentar estos datos, se definen en el archivo settings.py a través de la variable TEMPLATES = [] la cual tiene muchas configuraciones. 

Para empezar a usar los templates en django debemos crear un folder dentro de nuestra aplicación posts
	
# posts -> templates -> feed.html
	
Hola, mundo!
	
# posts -> views.py	
	
# Django
from django.shortcuts import render
	render es una funcion que toma un request

def list_posts(request):
	return render(request, 'feed.html', {'name': 'Pablo'})
	
	Revisamos la consola y la web: tenemos un hola mundo	
Lo primero que necesita esta funcion es el request para agregar contexto al template, lo segundo es el nombre del template que estamos buscando.
El template lo encuentra porque dice que en el archivo settings que va a buscar los templates dentro de los directorios de las aplicaciones: 	TEMPLATES = ['APP_DIRS'] quiere decir que dentro de cada aplicación va a buscar en el folder templates los templates que nosotros definamos, en este caso como ya pusimos nuestro folder templates no tenemos que escribir 'post/templates/feed.html' solo colocamos 'feed.html' ya que creamos la carpeta templates y el archivo feed

El tercer argumento que recibe son el contexto que son simplemente diccionarios 
	
# Templates -> feed.html

{{ name }}
	para mostrar el nombre 

# Pintamos los posts 
# Posts -> views.py

def list_posts(request):	
	return render(request, 'feed.html', {'posts: 'posts'})
	-> variable posts = a los posts definidos 

Actualizamos un poco los posts con otro código 


# feed.html

{{ posts }}

cambiamos cosas en este archivo y le agregamos código bootstrap

.col-sm-
1 columna que ocupe el equivalente a 4 y que tenga un offset para que esté centrado 
Todo eso es sintaxis de bootstrap

dentro del for src= {{ post.user.pictures
revisamos nuestra vista, veremos que dentro del posts tiene un user y pictures 


Eso es el template system, el template es el que maneja la lógica de presentación y la vista en el que maneja la lógica que trae los datos 


http://localhost:8000/posts/




10. Patrones de diseño y Djang

Un patrón de diseño, en términos generales, es una solución reutilizable a un problema común.
El patrón más común para el desarrollo web es MVC (Model, View, Controller). Django implementa un patrón similar llamado MTV (Model, Template, View).

Cuales son los problemas que resuelven?
Como vimos originalmente en los scripts de php y sgi que realizamos al principio la lógica de php está mezclada con el template. Podemos ver que hay código php que se encarga  de manejar el formulario y al mismo tiempo esta el código html que se encarga de la presentación del formulario y pasa lo mismo con el ejemplo del script sgi de python, hay literal una sentencia que esta escribiendo todo la respuesta y hay partes del código que pueden hacer cosas diferentes pero van a estar todas mezcladas. Lo que hicimos no es diferente, en la función list_posts(request): que lista a los posts, necesitamos conexión a la base de datos, presentación de los datos y la lógica para presentar esos datos, eso es un problema muy común no solo en el desarrollo web, incluso en la presentación y creación de eIU.

El problema es, como muestras los datos, como traes esos datos y como actualizas los datos.

Para problemas comunes como este existen patrones de diseño 

# Patrones de Diseño
Es una solución reutilizable a un problema común, los patrones de diseño se encuentran para multiples problemas en programación y para el desarrollo web principalmente existe el MVC (Model View Controller)

MVC: Model views controles
Es una manera de separar los datos de la presentación y de la lógica. El controler es el que maneja la lógica del request, sabe que hacer en ese momento y sabe que template tiene que mostrar. En este caso el controler va a cambiar los datos a través del modelo, el modelo es el que se encarga de definir la estructura de los datos, el acceso a ellos e incluso la validación. La vista se encarga de ver como presentar estos datos que al final van a ser mostrados al usuario.


		MODEL

UPDATES			MANIPULATES

VIEW				CONTROLLER
	SEES		  USES
		  USER		


Django implementa algo similar: MTV (Model Template View)

MTV: Model Template View

Model
Define la estructura de los datos

Template
Lógica de presentación de datos

View
Encargado de traer los datos y pasarlos al template

Decimos normalmente que django es un framework MVC o que es un framework común y realmente eso no está mal. Si vemos a django como un framework MVC la parte del cotroler seria la vista y las urls que maneja en esa lógica mientras que la parte del view seria el template 



11. La M en el MTV

El Modelo en Django usa diferentes opciones para conectarse a múltiples bases de datos relacionales, entre las que se encuentran: SQLite, PostgreSQL, Oracle y MySQL.
Para la creación de tablas, Django usa la técnica del ORM (Object Relational Mapper), una abstracción del manejo de datos usando OOP.


cd ubuntu
ls -al
source .entorno/bin/activate
cd platzigram


# Archivo settings.py

DATABASES = {
	'default' : {
		'ENGINE': 'django.db.backends.sqlite3',
		'NAME': 
	}
}


# Consola

python3 manage.py runserver

-> Hacer migraciones: Quiere decir que hay cambios que el servidor sabe que existen y que no se han reflejado en la BD

control c

python3 manage.py migrate
	Esto va a ejecutar los cambios de las migraciones en nuestra BD


# Interfaz grafica DB browser for SQLite 
Para explorar una base de datos SQLite

-> Open date Base
	-> db.sqlite3
	Vemos dentro de esto todas las tablas 
	
Si nosotros quisiéramos crear una tabla debemos hacer todas las sentencias sql para crear la tabla y esas sentencias sql cambian dependiendo si es SQLite, PostgreSQL o MySQL.


pero como estamos usando un framework Django lo soluciona usando la técnica ORM (Object Relational Mapper), es una técnica para trabajar con datos a través de multiples sistemas usando una abstracción de Programación Orientada a Objetos. 
Esto es en el caso de Django para trabajar con multiples sistemas como PostgreSQL o MySQL a través de clases de python.
El ORM es eso, un conjunto de clases que permiten interactuar con estas base de datos y definir la estructura de nuestras tablas.



# Modelo de ejemplo: Modelo de usuarios
-> Revisar el cuso de fundamentos de base de datos relacionales 

Django ya incluye el modelo de usuario, si lo vemos en nuestra interfaz grafica de BD veremos que ya hay una tabla llamada auth_user que viene de la aplicación de auth de django


# Archivo models.py

"""Posts models."""

# Django
from django.db import models
	-> la utilidad de models que es el modulo de Django que nos permite interactuar con el ORM


-> la manera en la que definiríamos una tabla en la base de datos es a través de una Clase

class User(models.Model): Hereda de models la clase model
	"""user model."""
	
	email = models.EmailField(unique=True)
				Que el email sea único y que no permita repetir 
	password = models.CharField(max_length=100)
						No mas de 100 caracteres
	
	first_name = models.CharField(max_length=100)
	last_name = models.CharField(max_length=100)
	
	bio = models.TextField(blank=True)
		-> TextField: Tipo de campo de texto que puede incluir mas texto que un charter
		-> La biografia puede estar vacia 
	
	birthdate = models.DateField(blank=True, null=True)
				Como no es tan necesario puede ir vacio o valor en blanco
	
	created = models.DateTimeField(auto_now_add=True)
		-> DateTimeField: Almacena fecha y hora 
		-> En cuanto se cree una instancia de esta tabla en la base de datos le va a cargar la fecha en la que se creo 

	modified = models.DateTimeField(auto_now=True)
		-> Le va a guardar la fecha en la que se dicto por ultima vez 


Revisar la documentación
Settings:
https://docs.djangoproject.com/en/2.0/ref/settings/#databases

Model
https://docs.djangoproject.com/en/2.0/ref/models/fields/


# Consola
python3 manage.py runserver


Ahora queremos que refleje los cambios de nuestro archivo models dentro de posts, refleja esos cambios :

python3 manage.py makemigrations
	-> Esto nos dice que se creo un nuevo modelo usiario User y se reflejaron los cambios en el archivo 0001 y esto es otra clase de python que define que es lo que paso y dice las operaciones que sucedieron, el modelo que creo y cuales fueron los cambios.
	Esto es útil porque nos permite llevar serguimiento de como la bd a cambiado a través del tiempo 


# Revisar que los cambios hayan funcionado
python3 manage.py runserver 
python3 manage.py migration
	Actualizar la bd, aplica los cambios en la bd
	
	Y ahora podemos ver que ya apareció otra nueva tabla posts_user





https://ubunlog.com/sqlite-3-y-sqlitebrowser-como-instalarlos-en-ubuntu/


https://sqlitebrowser.org/dl/



Intalación sqlite3

sudo apt update
sudo apt install sqlite3
sudo apt upgrade
sudo apt-get upgrade
sqlite3 --version


Abrir explorador de archivos de WSL
explorer.exe .



Abir BD online
https://sqliteonline.com/



12. El ORM de Django

Reto de la clase:

Inserta mas usuarios a la base de datos que hemos construido en nuestro entorno de pruebas y realiza consultas en el ORM para traer a los admins.

Crea un nuevo campo PAÍS en el modelo, inserta usuarios y haz filtros.



Vamos a ver como insertar datos en el modelo que acabamos de crear, como hacer consultas y como hacer filtro

Ahora que ya tenemos nuestro modelo lo que sigue es crear datos usando el ORM

# Hacer cambio en el modelo Archivo models.py
Por default ya crea un identificador, un id 

Queremos saber si el usuario registrado es administrador

is_admin = models.BooleanField(default=False)
	-> BooleanField requiere una opción la cual es el valor default, en este caso queremos que no sean admin
	
# Decirle a Django que nuestra BD a cambiado 
En consola

python3 manage.py makemigrations
	-> Dice, se agrega un campo is_admin a user y se acaba de grabar en el archivo posts/migrations/0002_user_is_admin.py
	
# En VSC archivo 0002_user_is_admin.py
	
Hereda una clase de Migration, dice cuales son las dependencias y dice que el archivo 0001_initial es el cambio anterior a este dependencia y también muestra las operaciones que se agregaron a esta migración que son añadir un campo is_admin
	
# Reflejar cambios Consola

python3 manage.py migrate
	migrate depende de makemigrations

# Grabar datos 

La manera de grabar datos es usando la fracción de clases y para ejemplificar abriremos la shell de python con django en consola

python3
exit()
	-> salir de la shell de python

# entrar a la shell de python con django

python3 manage.py shell

from posts.models import User

# Crear objeto

pablo = User.objects.create(
	email='hola@gmail.com',
	password='12345678',
	first_name='Pablo',
	last_name='Trinidad'
	)
	
	-> Nuestro modelo define mas cambios pero hay algunos que podemos saltarnos 

# Consultar las propiedades de la clase

pablo.email

pablo.id
	-> Saber si es un registro dentro de la BD por su id
pablo.pk
	-> primary key 

# Revisar la BD - Tabla -> posts_user -> Browse Data	
	
# Editar valor email

pablo.email = 'pablo@gmail.com'
pablo.save() -> Actualiza el dato

-> Recargar datos en la BD

pablo.created
pablo.modified
	-> confirmar los datos 

# Otra manera de crear datos instanciando la clase

arturo.email = 'arturo@platzi.com'
arturo.first_name = 'Arturo'
arturo.last_name = ' Martinez'
arturo.password = 'MSIComputer'
arturo.is_admin = true

# guardar los datos 
arturo.save()

-> Recargarmos la aplicación de BD y nos muestra el nuevo registro 

# Borrar datos 

arturo.delete()
	-> Recargamos la bd y ya no hay nada


# script - Texto para hacer registros 
# Esto lo copiamos en la terminal en dos partes
# Parte 1
from datetime import date

users = [
    {
        'email': 'cvander@platzi.com',
        'first_name': 'Christian',
        'last_name': 'Van der Henst',
        'password': '1234567',
        'is_admin': True
    },
    {
        'email': 'freddier@platzi.com',
        'first_name': 'Freddy',
        'last_name': 'Vega',
        'password': '987654321'
    },
    {
        'email': 'yesica@platzi.com',
        'first_name': 'Yésica',
        'last_name': 'Cortés',
        'password': 'qwerty',
        'birthdate': date(1990, 12,19)
    },
    {
        'email': 'arturo@platzi.com',
        'first_name': 'Arturo',
        'last_name': 'Martínez',
        'password': 'msicomputer',
        'is_admin': True,
        'birthdate': date(1981, 11, 6),
        'bio': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]

# En consola
users
len(users)

# Parte 2
from posts.models import User

for user in users:
    obj = User(**user)
    obj.save()
    print(obj.pk, ':', obj.email)
    
-> también, no hay diferencia 
    
for user in users:
	obj = User.objects.create(**user)
	print(obj.pk)


# Salir del shell
exit()

# Entrar al shell
python3 manage.py shell

# Hacer Query -> consultas

# Traer a un usuario

from posts.models import User
	-> importar

user = User.objects.get(email='freddier@platzi.com')
	-> get trae un solo dato o usuario
	
user
type(user)	
user.pk

user.first_name
user.password


# Traer todos los usuarios

platzi_usesr = User.objects.filter(email__endswith='@platzi.com')
	-> filter a diferencia de get va a traer los que coincidan con este query y si no hay no pasa nada y trae mas de un objeto que coincida
	
	
platzi_users

# cuando quieras hacer la representación en string de un objeto del modelo usualmente te va a traer la vista, pero si nosotros definimos un método string podemos decirle que va a regresar, en este caso quermos que regrese el email.
	
# Archivo models.py	
	
	def __str__(self):
		"""Return email."""
		return self.email
	
# En consola

exit()
python3 manage.py shell

from posts.models import User

platzi_users = Users.objects.filter(email__endswith='@platzi.com')

platzi_users
	
# Traer todos los users

users = User.objects.all()

users

# Actualizar datos
Que todos sean admins pero primero veamos quienes son admins

platzi_users = Users.objects.filter(email__endswith='@platzi.com')

for u in platzi_users:
	print(u.email, ':', u.is_admin)


platzi_users = User.objects.filter(email__endswith='@platzi.com').update(is_admin=True)
	
platzi_users
	
# Revisar programa de la BD

# Consola

platzi_users = Users.objects.filter(email__endswith='@platzi.com')

for u in platzi_users:
	print(u.email, ':', u.is_admin)


Documentación 
https://docs.djangoproject.com/en/2.0/topics/db/queries/



13. Glosario

ORM: Object-relational mapping. Es el encargado de permitir
el acceso y control de una base de datos relacional a través de
una abstracción a clases y objetos.

Templates: Archivos HTML que permiten la inclusión y ejecución
de lógica especial para la presentación de datos.

Modelo: Parte de un proyecto de Django que se encarga de estructurar
las tablas y propiedades de la base de datos a través de clases de Python.

Vista: Parte de un proyecto de Django que se encarga de la
lógica de negocio y es la conexión entre el template y el modelo.

App: Conjunto de código que se encarga de resolver una parte
muy específica del proyecto, contiene sus modelos, vistas, urls, etc.

Patrón de diseño: Solución común a un problema particular.


COMENTARIO:
Sobre los patrones de diseño, en mi opinión, el libro que todo programador debería leer es “Design patters: Elements of Reusable Object-Oriented Software”



14. Extendiendo el modelo de usuario

El modelo de usuarios que acabamos de construir funciona bien y es válido, sin embargo tiene algunas cosas que podrían representar fallas de seguridad en la aplicación. Por esto vamos a explorar el modelo de usuarios que nos provee Django.

El modelo de usuario que acabamos de escribir podría ser suficiente para almacenar o podríamos seguir editando la información del mismo para nuestro modelo de platzigram.

El problema con este modelo es que la contraseña está en texto plano y no tenemos métodos para verificarla, no tenemos métodos para almacenarla de manera segura, de manera que tampoco tenemos métodos para validar su fortaleza.

Lo que haremos en esta clase es explorar el modelo de usuario que Django ya trae por Default, así como las diferentes formas que podemos usar para extender el modelo y agregar los campos que necesitamos para platzigram.

Cuando vemos la lista de tablas que estan en la BD además de nuestra tabla de usuario vemos algunas otras como:
auth_group
auth_group_permissions
auth_permission
etc

Todas estas son resultado de la aplicación que tenemos instalada por default en nuestro platzigram -> settings.py -> la variable INSTALLED_APPS [ las que vienen de auth empiezan con auth, las que vienen de admin con admin y así sucesivamente.

La aplicación de auth incluye un modelo de usuario que es la tabla que vemos en la Base de Datos auth_user

Hagamos uso de ese modelo de usuario, una forma de hacerlo es crear un usuario desde la consola o crear un super usuario usando shell.

# Usuario desde shell interactivo 
python3 manage.py shell

Este modelo de usuario en vez de incluirlo desde post.models lo vamos a incluir justo desde dejango.contrib.auth, 

from django.contrib.auth.models import User

# Crear nuevo usuario 

u = User.objects.create_user(username='yesika', password='admin123')
	-> Como este usuario esta guardando una contraseña necesitamos aplicar ciertos pasos, no podemos solo guardar los datos
u
u.pk
u.username
u.password
	-> ahora password esta usando métodos criptográficos con 100 000 repeticiones usando la llave secreta de Django 
	
Revisamos la BD
	-> auth_user

exit(	)

Antes de ver cuales son las estrategias que podemos usar para extender este modelo, creemos un super usuario:

python3 manage.py createsuperuser
-> pablo
-> p@gmail.com
password -> 1234
password again -> 1234

Revisamos la BD
-> Ya tenemos nuestro nuevo usuario

Introducción al admin:
python manage.py runserver

Registrar dirección en url
archivo urls:

Importamos admin

# Django
from django.contrib import admin

urlspatterns = [
	path('admin/, admin.site.urls),
	]

Vamos a la dirección web
localhost:8000/admin

pablo
1234

Lo que trae por Default

Nuestra aplicación de auth


Para analizar mejor ir al código fuente:
git.com/django/django

Ruta:
	django.contrib.auth -> models.py


Borremos todo nuestro trabajo:

models.py -> borramos todo el contenido menos el archivo
migrations -> 0001 y 0002 borrar dos archivos sin borrar el init

La ventaja de usar SQLite es que es un archivo y si queremos borrar la base de datos tan solo borramos el archivo.

En consola:
	-> rm db.sqlite3



15. Implementación del modelo de usuarios de Platzigram

Las opciones que Django propone para implementar Usuarios personalizados son:

Usando el Modelo proxy
Extendiendo la clase abstracta de Usuario existente
La opción OneToOneField restringe la posibilidad de tener perfiles duplicados.
Django no guarda archivos de imagen en la base de datos sino la referencia de su ubicación.


En esta clase vamos a explorar las diferentes opciones que la documentación de django nos propone:
1 Modelo Proxi
2 Extendiendo la clase abstracta de usuario que Django implementa


Lo primero que vamos a hacer es definir los campos que van a incluir nuestro perfil de usuario, además de first name last name Email y user name, necesitaremos los siguientes:
1 Website
2 biography
3 phone_number
4 profile picture 

5 created
6 modified 


Exploremos las opciones:
https://docs.djangoproject.com/en/dev/topics/auth/customizing/#extending-the-existing-user-model

Lo primero que nos dice es:
Puedes crear pódelo proxy basado en usuario.
Ejemplo:
Hay una clase empleado que tiene exactamente los mismos datos que usuario solo que agrega en que departamento trabaja y la manera que lo relaciona con el modelo Django es usando un OneToOneField eso quiere decir que solo un usuario va a tener una clase empleado y solo un empleado va a tener una clase usuario o sea, ningún empleado puede tener el mismo usuario y ningún usuario puede tener mas de ese empleado.

La otra opción en heredar del modelo abstracto que es algo que Django ya hace, 


Recordemos el concepto de aplicaciones, la idea de una aplicación es agrupar funcionalidad similar en un solo paquete de python en este caso en una aplicación 


# Crear nueva app
python3 manage.py startapp users
	-> nombre de la app: users
	
# Carpeta users -> archivo apps.py

"""User app configuration."""

from django.apps import AppConfig

class UsersConfig(AppConfig).
	"""User app config."""
	
	name = 'users'
	verbose_name = 'Users'
	

# Crear Modelo -> archivo models.py
"""Users models."""

#Django
from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
	"""Profile model.
	
	Proxy model that extends the base data with other
	information.
	"""

	user = models.OneToOneField(User, on_delete=models.CASCADE)
	
	website = models.URLField(max_length=200, blank=True)
	biography = models.TextField(blank=True)
	phone_number = models.CharField(max_length=20, blank=True)
	
	picture = models.ImageField(upload_to='users/pictures', 
	black=True, 
	null=True
	)
	
	created = models.DateTimeField(auto_now_add=True)
	modified = models.DateTimeField(auto_now=True)
	
	def __str__(self):
	"""Return username."""
		return self.user.username


# Instalar App -> Settings.py
INSTALLED_APPS = [
	# Local apps
	'posts',
	'users',
]

# Instalar Pillow
pip install pillow


# Reflejar migraciones
Siempre que hacemos cambios en la BD debemos reflejarlo en las migraciones

python3 manage.py makemigrations
python3 manage.py migrate


# Crear super usuario
python3 manage.py createsuperuser
-> alex
-> a@gmail.com
-> alex@nder
-> alex@nder

# Correr servidor 
python3 manage.py runserver



alex@nder



16. Explorando el dashboard de administración

Registraremos el perfil que acabamos de customizar, junto con el modelo extendido de Usuario, en el admin de Django para poder manejarlo desde la aplicación.
Esto puede hacerse de dos formas: con admin.site.register(Profile) o creando una nueva clase que herede de Admin.ModelAdmin.


En esta clase vamos a registrar el modelo de perfil que acabamos de crear en el admin de Django, vamos a customizarlo para que se adapte a como nosotros queramos y además vamos a registrarlo junto con el modelo de usuario igual dentro del admin.

Ahora que ya tenemos nuestro perfil de usuario lo que paso es que si bien ya lo tenemos registrado en nuestra base de datos no podemos acceder a través del admin y lo único que vemos el modelo de usuario que ya existe pero aún no tenemos nuestro perfil de usuario 

# Editar archivo admin.py

"""User admin classes."""

#Django
from django.contrib import admin

# Models
from users.models import Profile

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
	"""Profile admin."""
	
	list_display = ('pk', 'user', 'phone_number', 'website', 'picture')	
	list_display_links = ('pk', 'user')
	list_editable = ('phone_number', 'website', 'picture')
	
	search_fields = (
	'usesr__email',
	'user__username',
	'user__first_name',
	'use__last_name',
	'phone_number'
	)

	list_filter = (
		'user__is_active',
		'user__is_staff',
		'created',
		'modified'
		)



















