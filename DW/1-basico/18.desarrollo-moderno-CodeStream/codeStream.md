--- Curso de Flujo de Desarrollo Moderno CodeStream ---
--> Claudio Pinkus

1. Todo lo que aprenderás sobre CodeStream

Cursos de referencia:
https://platzi.com/clases/slack/
https://platzi.com/clases/microsoft-teams/

--Apuntes--

Contenido del curso:
Clase 1: El flujo de trabajo y el principio Shift Left (basado en Agile).
Clase 2: El editor de texto es tu centro de control.
Clase 3: El flujo moderno.
Clase 4: GitHub en tu editor (VS Code)
Clase 5: Gestión de tareas (Jira).
Clase 6: Colaboración y comunicación (Slack).
Clase 7: Trabajo remoto y transparencia.
Clase 8: La documentación y el flujo moderno.
Clase 9: El futuro del desarrollo de software.

Contenido (Práctico):
Práctica I: Instalación de CodeStream y GitHub en VS Code.
Práctica II: Pull Request integrado e VS Code.
Práctica III: Feedback Reqeust, Jira.
Práctica IV: Code Chat, Slack.
Práctica V: Documentación, transparencia.
Práctica VI: Project Open Source.

Herramientas necesarias
>> Un editor de texto moderno (VS Code, Visual Studio o uno de JetBrains).
>> Un sistema Git (GitHub, GiLab, GitBucket).
>> Un sistema de gestión de proyectos (JIRA, Trello, GitHub Issues, etc.).
>> Un sistema de Mensajería de equipos (Slack, MS Teams) o correo electrónico.


2. Flujo de trabajo y principio Shift Left

https://google.github.io/eng-practices/

--Apuntes--

Definición: flow (flujo)
What is flow?
El flujo es como un estado en el que estas trabajando y ni siguiera te das cuenta que pasa el tiempo, en ese sentido la palabra flujo quiere decir estar tan concentrado que nada mas importa y si bien no nos referimos específicamente a ese estado lo que estamos por hacer contribuye a ese estado eliminando las distracciones 

Definición: workflow (flujo de trabajo)
La definición a la que nos referimos en el flujo en general es al flujo de trabajo es decir una secuencia de tareas organizada de cierta manera para llegar a mayor eficiencia.

El curso se encara desde el punto de vista de que manera deben enlazarse las tareas para lograr la mayor productividad 

Ciclo de vida del software
En el pasado cuando todavía no hablábamos de flujos modernos existía la cascada como implementación de un proyecto donde cada departamento trabajaba de forma separada e iba pasando el paquete de un departamento a otro.
En la actividad moderna se habla de un flujo continuo en la   que todos los departamentos van de alguna manera trabajando uno con otro y se van acercando y las tareas se superponen y poder tener información y colaborar en esos momentos es escencial para que el flujo funcione 

El principio Shift Left
Presentamos ahora Shift Left es un principio conocido ya en Devo The box en que al mover enfoque de la calidad al momento de la izquierda anterior para poder comprimir el ciclo logramos mejor calidad y mejor rendimiento.
La pregunta en definitiva es cómo hacer que la calidad esté incorporada lo antes posible, ese principio lo veremos una y otra vez en la aplicación del flujo moderno

Beneficios del flujo moderno
Por qué queremos hacer esto? porque corregir errores en la producción es 100 veces más caro que hacerlo Al principio del proyecto en el diseño o incluso representa una fracción de lo que sería corregir un error durante el proceso de desarrollo entonces estamos tanto mejorando la calidad del producto como logrando reducir los costos haciendo el más eficiente

Implementación del flujo moderno
Como se implemente el flujo moderno
Se implementa a través de tres pasos y es importante reconocer que para poder empezar a utilizar el flujo modernos no hace falta que invites a tu equipo hacer lo que estás por hacer tú puedes implementar el flujo moderno parcialmente simplemente haciendo cosas distintas en tu editor, integrando las herramientas necesarias como el pull request y los comentarios, después de eso cuando llegue el momento de trabajar con feedback request o Code Chat invitarás a miembros de tu equipo sea uno más a que colaboren contigo de esa manera todo se beneficiarán de poder utilizar el flujo moderno
Finalmente cuando varios equipos estén funcionando con este flujo moderno podrías llevarlo a la organización y la organización se beneficiará incorporando otra parte de flujo moderno qué es la administrativa y la documentación y la parte analítica ya veremos cómo funciona esto en las próximas positivas 

Frecuencia de colaboración
un concepto esencial en el flujo moderno es la frecuencia de colaboración, en el tradicional como por ejemplo si utilizas GitHub.com lo que haces es una revisión al terminar el desarrollo empiezas a trabajar, trabajas piensas resuelves y haces un pull request. en el flujo moderno no se trabaja de esa manera sino que haces muchas revisiones de código pequeñas a medida que se va desarrollando el proyecto y para eso necesitas herramientas distintas porque el pull request no te sirve para eso.

Prácticas de Ingeniería de Google
Como sabemos que atomizar la revisión de código es un paso positivo, Google empresa líder en el desarrollo de software y en la eficiencia de desarrollo ha conseguido reducir la cantidad de líneas en una revisión de código a no más de 24 de promedio y todo el ciclo completo de revisión tarda nada más de 4 horas. hacia eso apuntamos en el flujo moderno a la reducción de la cantidad de líneas y al tiempo porque nos importa el tiempo porque si tú estás trabajando en mi proyecto y necesitas un revisor sí ese revisor tiene que revisar demasiadas líneas te bloquea y no llegas a terminar tu trabajo

Cómo aplicar Shift Left en desarrollo
cómo se aplica el principio Shift Left en desarrollo entonces estamos hablando de una colaboración y hiper frecuente cada vez que tienes alguna pregunta una consulta puedes consultarlo con tu equipo y recibir una respuesta, integrar las herramientas esenciales en tu editor para no tener cambio de contexto y finalmente la calidad es el enfoque desde el principio cuando empiezas a trabajar en cualquier parte Al poco tiempo se la presentas a tu revisor o al equipo para que en una colaboración frecuente te den su opinión sobre cuál es la mejor manera de resolver este problema.

En la próxima clase hablaremos del editor como tu centro de control



3. El editor de texto moderno


4. Práctica: instalación de CodeStream

https://github.com/marcelofarias/escuela-js
https://www.codestream.com/
https://platzi.com/escuela-javascript/


vscode://vscode.github-authentication/did-authenticate?windowid=1&code=4cb73b449d66e43b4312&state=d962bd02-745a-4a99-bcee-73a3ee56bee3

Minuto 1:36 Jira

Abrir VSC
>> Install extensión CodeStream

Probarlo con un proyecto:
>> Tenemos que trabajar en un proyecto para demostrar la funcionalidad de la extensión
En GitHub
>> copiar llave SSH del proyecto
En Git
>> git clone URL-SSH

Ver como aparece en Jira
Abrir Jira en la web

En VSC
>> Autenticar con GitHub
	>> En la web Autorizar 
>> Issues
	>> Seleccionar Jira
	>> En la web autorizar 
	
Secciones que componen el panel CodeStream
>> Pull requests
	>> Integra los pull request de GitHub
>> FeedBack Requests
	>> Permite hacer una revision de codigo mas agil mas informal y mas rápida sin necesidad de determinar anteriormente si los cambios son formales o no.
>> Issues
	>> Tanto los issues de Jira como los de GitHub aparecen en el mismo panel y al seleccionar alguno veras los detalles que verías en la web.
>> CodeMarks
	>> Comentarios o Issues enlazados al codigo al que se refieren, son permanentes y van evolucionando a medida que cambia el código 
>> My Team
	>> Ves todos los miembros y si tienes activada la función Live view veras el trabajo que estan realizando en este momento en tiempo real.
>> Work in Progress
	>> Ves las tareas que tienes abiertas y aquellas que aún no tienen commit



5. El flujo moderno: productividad



6. GitHub en tu editor



7. Práctica: Integración con GitHub
https://www.atlassian.com/es/software/jira

Es mas fácil tener todo integrado

>> Waiting on my Review (1)
	>> Nuevo estándar corporativo #2
	>> Vemos lo mismo de GitHub.com
	>> Simbolo +- para comparar los cambios que sucedieron en el editar con el difuminativo del editor
	>> Revisamos los archivos
	>> Seleccionamos dentro del código 
	>> Entramos al icono de mensaje
	>> Redactamos un comentarios o CodeMark
	>> Add Single Comment
	>> Se nos marca con un recuadro azul 
	
>> Entramos al icono de mensaje
	>> Vemos en la sección conversation que se agregó el mensaje
	>> Add your review
>> Review
	>> Mensaje: por favor, revisa el pie de pagina
	>> Request Changes
	>> Submit
	>> Cerramos ventanas
>> Interfaz de GitHub en VSC
>> En GitHub.com vemos los cambios 



8. Feedback Request



9. Práctica: flujo tradicional sin integración

My Team
>> Current Members
	>> Gustavo@codestream.com -->> Invite
Parte superior Icono de usuario o nickname
>> Una vez acepta al invitación veremos que ya es parte del equipo
>> Switch Team
	>> Platzi Demo 2 -> ejemplo

Tareas realizadas en el flujo tradicional 
En Jira
>> Mover ticket
En Git
>> Crear rama 
>> git checkout -b feature/agregar-apellido
En VSC
>> Cambiamos el código
>> En el icono de Git hacer commit 
	>> Changes -> picarle a la flechita 
	>> Source control
		>> Agregar apellido al formulario del registro
		>> Picarle en ...
		>> Push -> ok
		
		
En GitHub
>> Marcelofarias/escuela-js
>> Pull requests
	>> Base: main
	>> Compare:feature/agregar-apellido
	>> Create pull request
		>> Reviewers: gustok-ceratis
	>> Create pull request

En Jira
>> Mover ticket a Done 


Luego llega el pedido de cambio de gustok-cerati
>> Debemos volver al editor y hacer los cambios, commit y push igual que el anterior 



10. Práctica: flujo tradicional integrado

En VSC
>> Issuses
	>> Elegimos el ticket 7 
	>> Move this ticket to in Pregress
	>> Update my status on Stack
		>> En el navegador
		>> Autenticarme con CodeStream 
		>> Darle permisos (Allow)
	>> Create Branch & Start Work
>> Hacemos cambios solicitados en el código
>> Icono de Git de la izquierda
>> Source Control
	>> Agregar fecha de nacimiento
	>> Darle al + de Changes
	>> ...
	>> Push -> ok
>> Icono de DodeStream
	>> Al costado del icono y el nick name   darle al +
	>> New Pull request
	>> Darle al icono de un triangulito para usar el mismo nombre del ticket
	>> Create Pull Request
>> Solicitar la revisión por parte de algún miembro
	>> Reviewers -> rueda de configuración
		>> Seleccionar miembro 
		>> Esperemos que se haga la revisión 
		


https://slack.com/intl/es-pe/
https://www.atlassian.com/es/software/jira



11. Práctica: Feedback Requests

Realizar Revisiones de código 
>> No tienes que hacer una solicitud formal 

En VSC - CodeStream
>> Issues
	>> Elegimos algún ticket
	>> Create Branch & Start Work
>> Editamos el código agregando el cambio del ticket
>> Work in Progress
	>> Lupa: Request Feedback
	>> Picarle al icono triangulo: para usar el mismo nombre del ticket
	>> Desactivar Actualizar vista principal
	>> Si hacemos clic en el nombre del archivo detro de CodeStream podemos ver una comparación entre un antes y un después.
	>> Submit 
	
Del lado del revisor - supervisor al que le pedimos Feedback
>> Le aparece una notificación en la parte inferior y se le da open
>> En Changed Files
	>> Clic en el nombre del archivo para ver los cambios
	>> Clic en icono de mensaje (Add Comment)
	>> Colocamos un mensaje
	>> Activar: Change Request (require for approval)
	>> Add Comment & Request Change
	
Del lado del que envió o solicito la revisión
>> Veremos una notificación en la esquina inferior y le das en Open
>> Dentro de todo veremos la línea en la que haremos los cambios 
>> Notaremos un pequeño recuadro azul en la línea en la que se le colocó el comentario
>> Corregimos los cambios
>> Presionar el botón Amend en azul 
	>> Amend
	
	
Vemos del lado del supervisor
>> Open en la notificación emergente
>> Cierra esa ventana
>> Approve -> icono verde



12. Tu herramienta de comunicación de código

Code Chat



13. Práctica: Code Chat y Code Marks, comunicación dentro del editor

Alguien del equipo en WSC y CodeStream
>> Selecciona la línea de código del que se tienen dudas o preguntas
>> My Team
	>> Icono de mensaje (Add Comment)
	>> @marcelo: Por qué 600?
	>> Check en Share on …
	>> Submit
	
En slack todo va bien

Del lado de otro miembro del equipo
>> open en notificación emergente
>> El miembro responde y Submit


Volvemos del lado del miembro que hizo la pregunta
>> Open en notificación
>> Si es útil la repuesta dentro de Activity … se marca con una estrella
>> Cerramos esa ventana


Code Chat para crear tickets en Jira
>> En el código se selecciona la parte que necesita ser modificada
>> CodeMarks
	>> Icono del insecto (Create Issue)
	>> Colocamos titulo
	>> Podemos elegir el Issue Tracker como Jira
	>> Se le asigna al miembro que va a revisar esto
	>> Share on CodeStream
	>> Submit
	
Ahora ver los cambios en Jira
	


14. Trabajo remoto y transparencia

https://jaxenter.com/covid-19-transparency-170727.html



15. Práctica: documentación automática del flujo

En VSC
>> Seleccionamos bloque de código que se debe modificar
>> Aparecerá 3 iconos
>> Picarle al icono de mensaje (Add comment)
	>> Redactamos un mensaje
	>> En este caso queremos relacionar este code mark con otro archivo
	>> Add Code Block
	>> No vamos al archivo que vamos a relacionar
	>> Seleccionar líneas de código 
	>> creo que hizo clic en un icono que está dentro del mensaje que redactamos líneas arriba (Rectángulo inclinado con una punta y un puntito)
	>> Le das en Ok
	>> Clic en icono de CodeStream al costado del mensaje que redactamos (Add a related codemark)
	>> buscas el codemark que necesitas y le das clic
	>> lo cierras	
	>> Submit
	
Nuevamente en el código
>> Seleccionamos el bloque que necesita modificaciones
>> Clic en el icono de mensaje (Add Comment)
	>> Agregamos un texto descriptivo
	>> Creamos un tag (Add Tags) al lado del mensaje
	>> Crate a New tag
	>> Le damos un nombre: estándar
	>> Elegimos un color y -> save
	>> Cerramos
	>> Submit
	
En otro archivo 
>> CodeMarks
	>> Clic en el que creamos
	>> Clic en los 3 puntitos de la ventana emergente
	>> Edit
	>> Creas un tag al lado del comentario color del estándar y cierras la ventana 
	>> submit
	>> Cierras la ventana

Podemos hacer una búsqueda con filtros
>> Lupa al lado del nick name en la parte superior
	>> Estándar y vemos que estan relacionados
	
Mover un bloque de código
>> Cortamos un pedazo de código y lo pega en otra parte
>> Vemos que el símbolo de codemark se mueve con el código (icono azul de mensaje)
>> Hacemos cambios en el código que movimos
>> CodeMarks
	>> Clic en el que creamos
	>> This code has changed
	

Exportación de la información a otros sistemas
>> Seleccionamos código que queremos conectar con otro documento
>> icono Get Permalink (cadena)
>> Public
>> Create link
>> Copy link
>> Pegamos el link en otro lado y le damos clic
>> Se abre en la ubicación de código a la que se refiere
>> Cerramos la ventana


Exportar
>> Clic En el nick name del usuario
>> Team Admin
>> Export Data
>> Copiar y pegar en cualquier sistema de planilla
>> Como excel 



16. El flujo de trabajo moderno



17. Práctica: contribuyendo al software Open Source

Buscar el proyecto en GitHub
>> CodeStream 
>> help wanted
>> hacer un fork
Clonar el proyecto en git
	>> git clone URL-SSH
	>> cd codestream
	>> git remote -vv
Apuntador al repositorio principal 
	>> git remote add upstream URL-SSH del repo princip
	>> git remote -vv
	
En VSC
>> Issues
>> Crear un filtro
	>> Show tickets -> GitHub Filter -> Create Custom Filter 
	>> CodeStream help wanted
	>> Save
Clic UI Internationalization
	>> Create branch & start work
Modifica un archivo
En el icono de Git lado izquierdo
>> Changes -> Clic en Flecha dos veces creo
>> Source control
	>> Colocamos referencia
	>> En los 3 puntos ...
		>> push -> ok
		>> Clic en origin
En el icono de CodeStream
>> Work in Progress
	>> Icono del pull request
		>> Elige el titulo (Use Latest Commit Message)
		>> Icono Circulo con 2 rayas a los lados
		>> Create Pull Request
 

18. El futuro del desarrollo de software



















