13. ¿Qué es Git y Github?

sudo apt install git

git --version 

Revisar resumen de curso de git #5


14. Configurando nuestras credenciales

git config --global user.name "AleVel"

git config --global user.email "ale.vrs@outlook.com"

git config --list


Revisar resumen #8


15. Haciendo nuestros primeros commits

git log -> ver estados de los archivos

Agregar archivos desde VSC
- Picarle al icono de Git
- En el archivo le das al + pero - lo quita de stagin
- Puedes agregar mensajes con la ventana superior 
- Control + Enter para hacer el commit



16. Subiendo nuestro primer repositorio

ssh-keygen -t rsa -b 4096 -C "ale.vrs@outlook.com"
Enter
Contraseña


cd virgulilla/.ssh
ls

eval "$(ssh-agent -s)"

ssh-add virgulilla/.ssh/id_rsa


Instalar xclip
- sudo apt install xclip

Copiar llave
- xclip -selection clipboard < virgulilla/.ssh/id_rsa.pub



Agregar llave Github
- Settings
SSH and GPG keys
Agregar nueva llave ssh
Title: Lave Ubuntu
Key: pegar
Add SSH key

Perfil
Repositories
New
Repository name: mi-primer-web
Public
Create repository

SSH
git remote add origin git@github.com:codevars-platzi/mi-primer-web.git

Pegar en consola repositorio del proyecto

git branch -M main

git push origin main

ya se subio a github


17. ¿Qué es lo que sigue?



Alt Gr + $ == virgulilla ~ ~
















