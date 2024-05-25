# Add-ons

## Create insanely accurate subtitles for FREE || Whisper AI Tutorial

Hey language learners! Subtitles are one of the most powerful resources language learners have. Reading along while listening to content is a great way to train your ear while developing your vocabulary at the same time. 

But what if your content doesn't have subtitles? Do you need to fork up money to pay for a program to generate them for you? If not, are you just out of luck? Luckily for you, our tech wizard, Ben, is here to show you how you can generate subtitle files for FREE! Watch to find out how! 

### Install latest Python version en Linux

[Python Download 3.12.3](https://www.python.org/downloads/)

Una vez ya tienes el archivo `Python-3.12.3.tar.xz` descargado, puedes instalar Python en tu sistema utilizando la terminal y los siguientes comandos:

1. Abre una terminal.
2. Navega hasta el directorio donde se encuentra el archivo `Python-3.12.3.tar.xz`. Puedes usar el comando `cd` para cambiar de directorio. Por ejemplo, si el archivo está en tu directorio de descargas, puedes usar el siguiente comando:
   ```
   cd Descargas
   ```
3. Descomprime el archivo `.tar.xz` utilizando el siguiente comando:
   ```
   tar -xf Python-3.12.3.tar.xz
   ```
4. Navega al directorio recién descomprimido:
   ```
   cd Python-3.12.3
   ```
5. Configura la instalación ejecutando el siguiente comando:
   ```
   ./configure --enable-optimizations
   ```
   Este comando configura Python con opciones de optimización para un mejor rendimiento. Si no necesitas las optimizaciones, puedes omitir `--enable-optimizations`.
6. Inicia el proceso de compilación e instalación con el siguiente comando:
   ```
   make -j$(nproc)
   ```
   Este comando compilará el código fuente de Python.
7. Una vez que la compilación haya finalizado, instala Python ejecutando el siguiente comando como superusuario (puede ser necesario ingresar tu contraseña):
   ```
   sudo make altinstall
   ```
   Utilizamos `altinstall` en lugar de `install` para evitar reemplazar la versión de Python predeterminada en tu sistema.
8. Después de la instalación, puedes verificar que Python se haya instalado correctamente utilizando el siguiente comando:
   ```
   python3.12 --version
   ```
   Esto debería mostrar la versión de Python que acabas de instalar.

Recuerda que estos pasos son para instalar Python desde el archivo `Python-3.12.3.tar.xz` descargado. Sin embargo, en la mayoría de los casos, es más conveniente utilizar los instaladores oficiales proporcionados por la página web de Python para tu sistema operativo específico, ya que estos realizan la instalación de manera más automatizada y se encargan de las configuraciones necesarias.

### Install pip in Linux Mint

```bash
sudo apt update
sudo apt install python3-pip
pip3 --version
```

### Install ffmpegnet

[Download FFmpeg](https://ffmpeg.org/download.html)

Para instalar `ffmpeg-7.0.tar.xz` en Linux Mint, puedes seguir estos pasos:

1. Abre una terminal en Linux Mint.

2. Navega hasta el directorio donde se encuentra el archivo `ffmpeg-7.0.tar.xz`. Puedes usar el comando `cd` para cambiar de directorio. Por ejemplo, si el archivo está en tu directorio de descargas, puedes usar el siguiente comando:
   ```
   cd Descargas
   ```

3. Descomprime el archivo `.tar.xz` utilizando el siguiente comando:
   ```
   tar -xf ffmpeg-7.0.tar.xz
   ```

4. Navega al directorio recién descomprimido:
   ```
   cd ffmpeg-7.0
   ```

5. Antes de comenzar la instalación, asegúrate de tener todas las dependencias necesarias instaladas en tu sistema. `ffmpeg` tiene varias dependencias, por lo que es posible que debas instalar paquetes adicionales. Puedes usar el siguiente comando para instalar las dependencias más comunes:
   ```
   sudo apt update
   sudo apt install build-essential yasm libx264-dev libx265-dev libvpx-dev libfdk-aac-dev libmp3lame-dev libopus-dev libvorbis-dev
   ```

6. Una vez que tienes las dependencias instaladas, configura la instalación ejecutando el siguiente comando:
   ```
   ./configure
   ```

7. Después de la configuración, inicia el proceso de compilación y construcción con el siguiente comando:
   ```
   make -j$(nproc)
   ```

8. Una vez que la compilación haya finalizado, puedes instalar `ffmpeg` ejecutando el siguiente comando como superusuario (puede ser necesario ingresar tu contraseña):
   ```
   sudo make install
   ```

9. Después de la instalación, puedes verificar la versión de `ffmpeg` ejecutando el siguiente comando:
   ```
   ffmpeg -version
   ```

Con estos pasos, deberías tener `ffmpeg` instalado en tu sistema Linux Mint. Recuerda que instalar software desde archivos fuente puede requerir tiempo y esfuerzo, y puede ser más conveniente utilizar los paquetes precompilados disponibles en los repositorios de tu distribución Linux si están actualizados a la versión que necesitas.

### Whisper

```bash
pip install -U openai-whisper
pip install git+https://github.com/openai/whisper.git
pip install --upgrade --no-deps --force-reinstall git+https://github.com/openai/whisper.git

# on Ubuntu or Debian
sudo apt update && sudo apt install ffmpeg

pip install setuptools-rust
``` 

Uso:

```bash
# Varios archivos a la vez
whisper audio.flac audio.mp3 audio.wav --model medium

# Usando la ruta completa
whisper Document/movies/audio.mp3 audio.mp3 audio.wav --model medium

# Un solo archivo
whisper audio.mpeg --model medium

# Otro idioma
whisper japanese.wav --language Japanese
whisper japanese.wav --language Japanese --task translate

whisper --help
```

> It's best to run the command in the folder where you want the files to go. Because in that example, those files actually ended up in my home folder, and then I had to move them. 

### Error path

Si estás utilizando el shell Zsh y obtienes el mensaje de error "zsh: command not found: whisper" al intentar ejecutar el comando `whisper`, es probable que el directorio `/home/ghost/.local/bin` no esté incluido en tu variable de entorno `PATH` en Zsh.

Para solucionar esto, puedes seguir estos pasos:

1. Abre tu archivo de configuración de Zsh, que suele ser `~/.zshrc`, en un editor de texto. Puedes usar el siguiente comando para abrirlo con el editor de texto `nano`:
   ```bash
   nano ~/.zshrc
   ```

2. Busca la línea que comienza con `export PATH=` o cualquier configuración de `PATH` existente.

3. Agrega el directorio `/home/ghost/.local/bin` al `PATH`. Puedes usar cualquiera de las siguientes opciones:
   ```bash
   export PATH="/home/ghost/.local/bin:$PATH"
   ```
   o
   ```bash
   export PATH="$PATH:/home/ghost/.local/bin"
   ```

   Asegúrate de reemplazar "ghost" con tu nombre de usuario real si no eres el usuario "ghost".

4. Guarda los cambios en el archivo y cierra el editor de texto.

5. Ejecuta el siguiente comando para actualizar la configuración en tu sesión actual:
   ```bash
   source ~/.zshrc
   ```

6. Ahora, el directorio `/home/ghost/.local/bin` debería estar incluido en tu variable de entorno `PATH` en Zsh. Puedes verificarlo ejecutando el siguiente comando:
   ```bash
   echo $PATH
   ```

   El directorio `/home/ghost/.local/bin` debería aparecer en la lista de rutas de `PATH`.

Después de agregar el directorio al `PATH`, deberías poder ejecutar el comando `whisper` sin obtener el mensaje de error "zsh: command not found: whisper".

## Buttercup - Better YouTube Captions

https://github.com/iGerman00/buttercup-chrome?tab=readme-ov-file

El archivo `buttercup-chrome-main.zip` parece ser un archivo comprimido que contiene una extensión o una aplicación relacionada con Buttercup para Chrome. Para instalarlo, sigue estos pasos:

1. Descomprime el archivo ZIP. Puedes hacerlo haciendo clic derecho en el archivo y seleccionando "Extraer aquí" o utilizando el siguiente comando en la terminal:
   ```bash
   unzip buttercup-chrome-main.zip
   ```

2. Una vez descomprimido, obtendrás una carpeta que contiene los archivos de la extensión o la aplicación.

3. Abre Google Chrome en tu navegador.

4. En la barra de direcciones, ingresa `chrome://extensions` y presiona Enter.

5. En la página de "Extensiones" de Chrome, activa el modo de desarrollador. Puedes encontrar un interruptor o una opción en la parte superior de la página para habilitarlo.

6. Haz clic en el botón "Cargar descomprimida" o "Cargar extensión sin empaquetar", según la versión de Chrome que estés utilizando.

7. Navega hasta la carpeta que descomprimiste en el paso 2 y selecciona la carpeta que contiene los archivos de la extensión o la aplicación.

8. Haz clic en "Aceptar" o "Abrir" para cargar la extensión o la aplicación en Chrome.

Con estos pasos, deberías poder instalar la extensión o la aplicación de Buttercup en tu navegador Chrome. Asegúrate de seguir las instrucciones específicas proporcionadas por los desarrolladores de la extensión o la aplicación si están disponibles.


### Here's everything he mentioned in the video...

Links: 

- [👉Whisper AI 🔗](https://github.com/openai/whisper) 
- [👉Chocalatey Tutorial 🔗](https://www.youtube.com/watch?v=EyIIvctDhYc&t=0s)
- [👉Homebrew Tutorial 🔗](https://www.youtube.com/watch?v=IWJKRmFLn-g)
- [👉FFmpeg Download tips](https://www.youtube.com/watch?v=EyIIvctDhYc)

- [👉PIP 🔗](https://pip.pypa.io/en/stable/installation/)
- [👉Python Modules 🔗](https://docs.python.org/3/installing/index.html)
- [👉Git 🔗](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Commands:

```bash
# 👉 Ubuntu or Debian
sudo apt update && sudo apt install ffmpeg

# 👉Arch Linux
sudo pacman -S ffmpeg

# 👉MacOS using Homebrew (https://brew.sh/)
brew install ffmpeg

# 👉Windows using Chocolatey (https://chocolatey.org/)
choco install ffmpeg
```

Bonus Link:

[👉WhisperX](https://github.com/m-bain/whisperX)
