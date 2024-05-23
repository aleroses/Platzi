# Commands

## React

```bash
# Crear un proyecto con CRA:
npx create-react-app my-app
npm start
```

## Renombrar una carpeta

```bash
# Renombrar una carpeta:
mv nombre_actual nuevo_nombre
```

## Eliminar un programa 

```bash
# Verificar antes de eliminar un programa
dpkg -l | grep <nombre_del_programa>

# Eliminar el programa y sus archivos asociados
sudo apt remove --purge <nombre_del_programa>
sudo apt autoremove --purge <nombre_del_programa>
```

## Abrir el administrador de archivos

```bash
# Instalar nemo
sudo apt-get install nemo

# Abrir derectorio actual
nemo

# Abrir directorio de inicio
nemo ~
```

