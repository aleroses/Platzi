# Eliminar linux en dualboot

## Disk Management 

Entramos al administrador de discos y eliminamos las particiones que creamos cuando se instalo Linux.

Nos debe quedar algo así:

![](https://i.postimg.cc/26HNG7Pp/disk-management.png)


Ahora administramos los discos duros y las unidades de almacenamiento en el sistema operativo usando el **cmd como administrador**.

## diskpart 

Proporciona una interfaz más avanzada y flexible en comparación con otras herramientas de administración de discos de Windows, como el Administrador de discos.

```bash
# Ejecutamos
diskpart

# Obtenemos
Microsoft DiskPart version 10.0.19041.3636

Copyright (C) Microsoft Corporation.
On computer: GHOST
```

Algunas de las funciones y tareas comunes que se pueden realizar utilizando el comando diskpart:

1. Creación, eliminación y formato de particiones: Puedes utilizar diskpart para crear particiones en discos duros, eliminar particiones existentes y darles formato con diferentes sistemas de archivos, como NTFS, FAT32, exFAT, etc.
    
2. Asignación de letras de unidad: Puedes asignar o cambiar las letras de unidad para las particiones o volúmenes montados en el sistema.
    
3. Administración de discos virtuales: diskpart permite administrar discos virtuales (VHD y VHDX). Puedes crear, adjuntar, desmontar y eliminar discos virtuales utilizando este comando.
    
4. Administración de atributos de disco: Puedes modificar los atributos de disco, como convertir un disco básico a un disco dinámico o viceversa.
    
5. Limpieza y recuperación de discos: diskpart proporciona opciones para limpiar discos, eliminando todos los datos y particiones existentes en el disco. También puedes recuperar discos RAW, convertir discos GPT a MBR, etc.
    
6. Configuración de opciones de disco: Puedes cambiar varias opciones de disco, como el alineamiento de particiones, el tamaño de la unidad de asignación, el modo de lectura y escritura en disco, etc.

## list disk

El comando "list disk" en Windows se utiliza dentro de la utilidad de línea de comandos "diskpart" y tiene como función principal mostrar una lista de los discos físicos conectados al sistema. Proporciona información básica sobre los discos, como su número de disco, tamaño, estado y tipo.

```bash
# Ejecutamos
DISKPART> list disk

# Obtenemos
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online          894 GB   250 GB        * 👈👀
```

En este ejemplo, se muestran un disco: Disk 0.

- Disk 0 está en línea (Online), lo que significa que están disponibles y listos para su uso.

En otros casos se puede tener: 

- Disk 1 muestra "No Media", lo que indica que no hay ningún medio (como un disco duro o una unidad flash) presente en ese disco en particular.

> Si **Gpt** está marcado como `*` significa que ese disco utiliza una tabla de particiones GUID (GPT, por sus siglas en inglés).

## sel part 1

El comando "sel part 1" en Windows se utiliza dentro de la utilidad de línea de comandos "diskpart" para seleccionar una partición específica en un disco duro. El número "1" en el comando representa el número de partición que deseas seleccionar.

![](https://i.postimg.cc/rFsxfyR7/disk-management-partition1.png)

```bash
# Ejecutamos
DISKPART> sel part 1

# Obtenemos este error...
There is no disk selected to set the partition.
Select a disk and try again. 👈👀

# Por lo que primero debes ejecutar el siguiente comando:
DISKPART> select disk 0

Disk 0 is now the selected disk. 👈👀✨

# Nuevamente ejecutamos
DISKPART> select part 1

Partition 1 is now the selected partition.
```

## assign letter z:

El comando "assign letter z:" en Windows se utiliza dentro de la utilidad de línea de comandos "diskpart" para asignar una letra de unidad específica a una partición o volumen en un disco. La letra de unidad se utiliza para identificar y acceder a la partición o volumen desde el sistema operativo.

```bash
# Ejecutamos
DISKPART> assign letter z:

# Obtenemos
DiskPart successfully assigned the drive letter or mount point.

# Ahora nos salimos del diskpart
DISKPART> exit

Leaving DiskPart...
```

## bcdboot C:\windows /s z: /f all

El comando "bcdboot" en Windows se utiliza para copiar los archivos de arranque requeridos para iniciar el sistema operativo en una partición o volumen específico. Permite configurar y reparar el entorno de arranque de Windows.

Al ejecutar el comando "bcdboot C:\windows /s z: /f all", estás realizando varias acciones:

1. "C:\windows" indica la ubicación de los archivos de arranque de Windows que se utilizarán para copiarlos en la partición o volumen de destino.
2. "/s z:" especifica la partición o volumen de destino donde se copiarán los archivos de arranque. En este caso, se utiliza la letra de unidad "Z:" para identificar la partición o volumen de destino.
3. "/f all" indica que se deben copiar todos los archivos de arranque necesarios, incluyendo los archivos de BIOS y UEFI.

```bash
# Ejecutamos
C:\Windows\system32>bcdboot C:\windows /s z: /f all

# Obtenemos
Boot files successfully created.
```

## bcdedit.exe /enum firmware

El comando "bcdedit.exe /enum firmware" en Windows se utiliza para mostrar la configuración del firmware (BIOS o UEFI) almacenada en la Base de datos de configuración de arranque (BCD, por sus siglas en inglés). Proporciona información sobre los elementos de arranque y las configuraciones relacionadas con el firmware del sistema.

Al ejecutar el comando "bcdedit.exe /enum firmware", se enumerarán las entradas del firmware y sus configuraciones asociadas. Esto incluye información sobre los elementos de arranque, como las opciones de arranque predeterminadas, los dispositivos de arranque y otros parámetros de configuración de firmware.


```bash
# Ejecutamos
C:\Windows\system32>bcdedit.exe /enum firmware

# Obtenemos
Firmware Boot Manager
---------------------
identifier              {fwbootmgr}
displayorder            {324bc8ad-e954-11ee-982c-806e6f6e6963}
                        {bootmgr}
timeout                 1

Windows Boot Manager
--------------------
identifier              {bootmgr}
device                  partition=Z:
path                    \EFI\MICROSOFT\BOOT\BOOTMGFW.EFI
description             Windows Boot Manager
locale                  en-us
inherit                 {globalsettings}
default                 {default}
resumeobject            {2917240a-e96f-11ee-9830-3c7c3f170bc6}
displayorder            {default}
toolsdisplayorder       {memdiag}
timeout                 30

Firmware Application (101fffff)
------------------------------- 👀👇🔥
identifier              {324bc8ad-e954-11ee-982c-806e6f6e6963}
device                  partition=Z: 👈👀✨
path                    \EFI\UBUNTU\SHIMX64.EFI
description             ubuntu 👈👀✨
```

## bcdedit.exe /delete {324bc8ad-e954-11ee-982c-806e6f6e6963}

El comando "bcdedit.exe /delete {324bc8ad-e954-11ee-982c-806e6f6e6963}" se utiliza para eliminar una entrada específica de la Base de datos de configuración de arranque (BCD, por sus siglas en inglés). El identificador único entre llaves (por ejemplo, {324bc8ad-e954-11ee-982c-806e6f6e6963}) proporciona la referencia a la entrada que se desea eliminar.

Al ejecutar el comando "bcdedit.exe /delete {324bc8ad-e954-11ee-982c-806e6f6e6963}", se eliminará la entrada correspondiente de la BCD. Esto puede incluir elementos de arranque, configuraciones de firmware u otras configuraciones relacionadas con el arranque del sistema.

> Debes copiar el **identifier** del comando anterior: {324bc8ad-e954-11ee-982c-806e6f6e6963} 

```bash
# Ejecutamos
C:\Windows\system32>bcdedit.exe /delete {324bc8ad-e954-11ee-982c-806e6f6e6963}

# Obtenemos
The operation completed successfully.
```

## Partición M

[Tutorial: Borrar LINUX *SIN PERDER WINDOWS 10* | UEFI o BIOS](https://www.youtube.com/watch?v=vOS4w0Fo34g)