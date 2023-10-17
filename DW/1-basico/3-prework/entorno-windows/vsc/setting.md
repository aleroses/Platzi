# Configuración 

- Indenticator

## Abrir archivo `settings.json`

- `Ctrl` + `,` (coma)
 - Open settings: Esquina derecha superior
	 - Icono hoja con esquina doblada y con flecha ↪📄

## Quitar scroll horizontal 

```json
{
  "editor.wordWrap": "on", //👈👀
}
```

Si no quieres configurar esto, solo usa control z cada vez que quieras tener todo en una sola vista sin necesidad de hacer scroll. 

## Configurar indentación del código 

Estilo de sangrado. 
```json
{
  "editor.tabSize": 2, //👈👀
}
```

Presiona `F1` busca la opción `Indent Using Spaces` y elige `2`. También puedes acceder desde la parte inferior del editor, aparece `Space: 4` le das clic y cambias a `2`. 

Adicional puedes buscar `Convert Indentation to Spaces` para que cada indentación hecha con el tabulador se transforme a espacios, en este caso a 2 espacios. Esto nos ayuda a que no se distorsione el código cuando lo subamos a GitHub. 

## Cambiar terminal  

```json
{
  "terminal.integrated.defaultProfile.windows": "Git Bash", //👈👀
}
```

Otra opción 
```json
{
  "terminal.integrated.defaultProfile.windows": "PowerShell" //👈👀
}
```

Para ver la terminal usar:  
- `Ctrl` + `ñ`

También:   
- View: Ver
- Terminal 

## Mover a la derecha barra de actividades

```json
{
  "workbench.sideBar.location": "right", //👈👀
}
```

## Eliminar Mini map 

```json
{
  "editor.minimap.enabled": false, //👈👀
}
```

## Ocultar Scrollbar  

```json
{
  "editor.scrollbar.vertical": "auto", //👈👀
  "editor.overviewRulerBorder": false, //👈👀
  "editor.hideCursorInOverviewRuler": true, //👈👀
}
```

## Ocultar Debugging 🔴

```json
{
  "editor.glyphMargin": false, //👈👀
}
```

## Ocultar Line Numbers

```json
{
  "editor.lineNumbers": "off", //👈👀
}
```

## Ocultar Barra de Actividades 

```json
{
  "workbench.activityBar.visible": false, //👈👀
}
```

Atajos para acceder a la barra de actividades: 
- `Ctrl` + `Shift` + `E` 
	- `Ctrl` + `B`: Abrir y ocultar 
- `Ctrl` + `Shift` + `F` 
- `Ctrl` + `Shift` + `G` 
- `Ctrl` + `Shift` + `D` 
- `Ctrl` + `Shift` + `X`

[🔥 Tutorial: Cómo configurar VSCode](https://www.youtube.com/watch?v=HiVnGgYudLY)

## Otros 

```json
{
  "editor.cursorBlinking": "expand",
  "breadcrumbs.enabled": false,
  "editor.stickyScroll.enabled": true,
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.linkedEditing": true
}
```

[🔥 Tutorial: ¡Cambiar configuraciones de Visual Studio Code!](https://www.youtube.com/watch?v=uyEUVgNMvGI)

## Autocompletar Elementos JSX 

```json
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

[🔥 Tutorial: Configurar autocompletado JSX](https://www.youtube.com/watch?v=jIjws68ATY8)