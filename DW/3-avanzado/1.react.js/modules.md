# Modules

## Módulo `require()`

La función `require()` es parte del sistema de módulos de Node.js, y se utiliza para cargar y acceder a módulos en un programa de JavaScript. Node.js utiliza el sistema de módulos CommonJS, donde cada archivo JavaScript se trata como un módulo separado.

Cuando se utiliza `require()` en Node.js, se pasa como argumento la ruta del archivo del módulo que se desea cargar. Por ejemplo:

```javascript
const miModulo = require('./miModulo');
```

Al llamar a `require('./miModulo')`, Node.js buscará el archivo `miModulo.js` (o `miModulo.json` o `miModulo.node`) en la ubicación relativa especificada. Una vez que encuentra el archivo, carga el contenido del módulo y devuelve su contenido exportado.

El contenido del módulo puede variar dependiendo de cómo se haya exportado en el archivo. Comúnmente, se utiliza `module.exports` o `exports` dentro del archivo del módulo para exponer las funciones, objetos u otros valores que se deseen hacer accesibles desde otros archivos que lo requieran.

Es importante tener en cuenta que `require()` se utiliza principalmente en entornos de Node.js y no en navegadores web, ya que los navegadores no admiten nativamente el sistema de módulos CommonJS. En su lugar, en los navegadores se utiliza la sintaxis `import` y `export` del estándar ECMAScript (ES6) o se requiere el uso de herramientas de compilación como Babel o webpack para transformar el código utilizando `require()` a un formato compatible con el navegador.