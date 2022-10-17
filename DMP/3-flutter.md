# Curso de Flutter  
> **Anahí Salgado Díaz de la Vega** / [Android, Firebase, Java, Geek & Teacher en Platzi](https://platzi.com/profesores/anncode/)     
**@** en Twitter 

## 1. Desarrollando en Flutter

Te damos la más cordial bienvenida a este curso de **Flutter** en el que aprenderás a crear aplicaciones móviles de una manera rápida, sencilla y con resultados increíbles.

A lo largo de las clases desarrollaremos junto a Anahí Salgado, quien también es profesora de otros cursos de tecnología para desarrollo móvil en Platzi, un proyecto acerca de una _app_ de viajes con una interfaz de usuario muy elegante y moderna, disponible en el sitio web de inspiración para desarrolladores, [uplabs.com](http://uplabs.com/).

[Slides del curso](https://static.platzi.com/media/public/uploads/platzislides_flutter_ea1a0cc8-e91e-4e82-ac82-62c2eb6f9941.pdf)

## 2. ¿Qué es Flutter?

SDK de Google creado para diseñar interfaces nativas iOS y Android.

**Flutter** es una tecnología híbrida creada por _Google_ para desarrollar aplicaciones nativas (_cross platform_) en iOS y Android. Su principal objetivo es el diseño de interfaces móviles y está basado en un lenguaje de programación que permite compartir código fuente para ambas plataformas acorde a una lógica de negocio.

Durante el año 2017 _Google_ hizo la presentación y lanzamiento de **Flutter** en su versión _alpha_, luego a principios de 2018 lanzó la primera versión _beta_ y ya para este momento, en diciembre de 2018, está disponible la versión oficial de **Flutter 1.0** estable.

Flutter utiliza **Dart**, un lenguaje de programación originado por _Google_ y que estaría orientado a aplicaciones móviles y web. Se espera que esta plataforma sea el _framework_ principal de aplicaciones para **Fuschia** que se encuentra en construcción.

![flutter.png](https://i.postimg.cc/6qqvyJ4C/2-native-hibrido-cross-platform.webp)

## Características de Flutter

**Flutter** compila directamente hacia el código final que interactúa con el procesador, saltándose los pasos intermedios, por lo que las aplicaciones creadas tienen un mejor desempeño y rendimiento. Esto la diferencia de:

-   El desarrollo híbrido de WebView para mostrar código HTML
-   El desarrollo _bridge_ que utiliza _renderers_ intermedios de código para generar apps

![cross-platform.png](https://i.postimg.cc/xCF90cry/2-caracteristicas.webp)

También esta tecnología emplea sus propios _Widgets_ y _engine_ de renderizado llamado **Skia Canvas** desarrollado en C++.

## ¿Qué es mejor Flutter o React Native?

A diferencia de React Native, **Flutter** se encarga de realizar vistas personalizadas en lugar de llamar solo los componentes nativos. Esto significa que el mismo _render_ efectuado en Android se hace para iOS, visualmente van a ser iguales, porque trabaja en el _pixel perfect_.

### Desventaja de Flutter

Sin embargo, tienes como desventaja que si estás usando un patrón de diseño que es particular de Android y lo llevas para iOS (por ejemplo un Float Action Button), provocas que los usuarios de IOS se sientan ajenos a esa interfaz. Por esta razón, algunas funciones o características que no existen en iOS pueden ser más lentas que en Android.

### Ventajas de Flutter

-   Cuenta con una gran cantidad de componentes (API, UI, navegación y pruebas)
-   Permite programar con un único lenguaje desde diferentes dispositivos (iOS, Mac, Linux)
-   Ofrece un mejor rendimiento utilizando Skia como motor al controlar cada pixel

> Pero en general las ventajas son más que las desventajas. Es importante que tengas en cuenta que Flutter no reemplaza ni simplifica el flujo de publicación para Apple.

_Contribución creada con los aportes de Uriel Ramírez_.

[Qué es Fuchsia OS](https://www.youtube.com/watch?v=ajBrkVD_a8Y)