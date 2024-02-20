# Virtual Box

## Instalación   
[Tutorial](https://www.youtube.com/watch?v=YFlowDwE-1E)      
[Página Virtualbox](https://www.virtualbox.org/)
- Download VirtualBox 7.0
- VirtualBox 7.0.0 platform packages 
	- **Windows hosts** 

- Doble clic sobre el ejecutable 
- Next x2
- Yes x2
- Install 
- Finish 


# Instalar W10 en Virtual Box

## Descargar imagen ISO

[Windows 10](https://www.microsoft.com/es-es/software-download/windows10)
- Control + Shift + i 
- Recargar página 
- Selecciona una edición 
	- Windows 10 (multi-edition ISO)
	- Confirmar 
- Seleccionar idioma 
	- Elegir uno
	- Confirmar 
- Descargas
	- 64-bit Descargar 

## Crear máquina virtual 

Debemos tener activada la virtualización 

🔥Nueva    
Virtual machine Name and Operating System 
- Nombre: Windows-10
- ISO Image: Buscar ISO descargada 
- Edition: Windows 10 Pro
- Next

Unattended Guest OS Install Setup 
- Username: ghost-code
- Password: -689923

Hardware
- Memoria base:
	- 4000 MB 
- Processors: 
	- 3

Virtual Hard disk
- Create a Virtual Hard Disk Now:
	- 50 GB
- Terminar

Empieza a instalar windows...

🔥 Eliminar ISO  
- Clic derecho sobre la máquina creada 
- Configuración 
- Almacenamiento 
	- Controlador: SATA
			- Clic derecho ISO: Eliminar



🔥 **Virtual box pantalla completa**    
- Iniciar maquina virtual
- Dispositivos
	- Insertar imagen de CD de las "Guest Additions"
	- Abrir una carpeta 
		- **Este equipo**
		- Unidad de CD (D:) VirtualBox Guest Additions 
			- Panel superior: 
				- Vista: 
					- Extensiones de nombre de archivo
					- Elementos ocultos 
			- Doble clic: `VBoxWindowsAdditions.exe`
			- Next y Install
			- Reiniciar 

[Explicación Resolución a pantalla completa](https://www.profesionalreview.com/2019/02/06/pantalla-completa-en-virtualbox/#:~:text=solucionaremos%20esto%20tambi%C3%A9n.-,Pantalla%20completa%20en%20VirtualBox%20con%20el%20men%C3%BA%20de%20la%20m%C3%A1quina,opci%C3%B3n%20%E2%80%9CModo%20pantalla%20completa%E2%80%9D.)