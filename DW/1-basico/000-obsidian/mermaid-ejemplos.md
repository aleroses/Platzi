# Titulo

- [Diagramas como código con Mermaid](https://www.freecodecamp.org/news/diagrams-as-code-with-mermaid-github-and-vs-code/)
- [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)
- [StackEdit](https://stackedit.io/)

```mermaid
graph LR
    A[root \n index] --> B[App]
    B --> C[figure > img \n logo]
    B --> D[header > h1 \n title]
    B --> E[section]
    E --> F[Testimony \n Component]
    F --> G[img \n student photo]
    F --> H[div]
    H --> I[p \n name country]
    H --> J[p \n job-title company]
    H --> K[p \n comment]
```

[![HTML](https://img.shields.io/badge/HTML-5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS-3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![Sass](https://img.shields.io/badge/Sass-1.68.0-pink.svg)](https://sass-lang.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.3-blue.svg)](https://tailwindcss.com/) [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/) [![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)

## Sirena

```mermaid
graph LR
    subgraph Componente A
        A((Componente B))
        subgraph Componente C
            B((Componente D))
        end
    end
```

```mermaid
graph LR
    subgraph Componentes
        A((Componente A)) -->|props| B((Componente B))
    end
```

```mermaid
graph LR
subgraph Componentes
    Padre -- props --> Hijo
    Hijo -- props --> Nieto_01
    Hijo -- props --> Nieto_02

    Hijo -- props --> Nieto_01
    Hijo -- props --> Nieto_02

    Padre -- props --> Hijo
end
```

```mermaid
graph LR
    A[HTML] --> B(Proyecto)
    C[CSS] --> B
    D[JavaScript] --> B
    E[TypeScript] --> B
    F[React] --> B
```

```mermaid
flowchart TB
    subgraph Project
    HTML(HTML) --> CSS(CSS) --> JavaScript(JavaScript)
    JavaScript -->|.| TypeScript(TypeScript)
    JavaScript --> React(React)
    end
```

```mermaid
pie
    title Tecnologías
    "HTML" : 20
    "CSS" : 15
    "JavaScript" : 25
    "TypeScript" : 10
    "React" : 30
```

```mermaid
graph TB
    subgraph Project
    style Project fill:#090b10, stroke:#4f46e5
    HTML(HTML) --> CSS(CSS) --> JavaScript(JavaScript)
    JavaScript --> TypeScript(TypeScript)
    JavaScript --> React(React)
    end

    style HTML fill:#00204A, stroke:#00204A
    style CSS fill:#005792, stroke:#2965F1
    style JavaScript fill:#00BBF0, stroke:#00BBF0
    style TypeScript fill:#071952, stroke:#071952
    style React fill:#82A0D8, stroke: #D8B4F8
```

```mermaid
graph TB
    %% Add the following line to set the background color %%
    linkStyle default fill:#4f46e5, stroke:#4f46e5

    subgraph Project
    style Project fill:#090b10, stroke:#4f46e5
    HTML(HTML) --> CSS(CSS) --> JavaScript(JavaScript)
    JavaScript --> TypeScript(TypeScript)
    JavaScript --> React(React)
    end

    style HTML fill:#0C134F, stroke:#0C134F
    style CSS fill:#1D267D, stroke:#1D267D
    style JavaScript fill:#5C469C, stroke:#5C469C
    style TypeScript fill:#AD7BE9, stroke:#AD7BE9
    style React fill:#F266AB, stroke: #F266AB
```

## Technologies

- HTML: 🌐
- CSS: 🎨
- JavaScript: 🚀
- TypeScript: 🆕
- React: ⚛️

| HTML 🌐 | CSS 🎨 | JavaScript 🚀 | TypeScript 🆕 | React ⚛️ | 🌱  |
| ------- | ------ | ------------- | ------------- | -------- | --- |

```mermaid
graph LR
subgraph Componentes
    Padre(Abuelo Son Gohan) -- nombre = 'Goku' --> Hijo(Hijo \n prop.nombre \n prop.apellido)
    Hijo -- nombre = 'Son' --> Nieto_01(Nieto_01 \n prop.nombre \n prop.apellido)
    Hijo -- nombre = 'Son' --> Nieto_02(Nieto_02 \n prop.nombre \n prop.apellido)

    Hijo -- apellido = 'Gohan' --> Nieto_01
    Hijo -- apellido = 'Goten' --> Nieto_02

    Padre -- apellido = 'Kakaroto' --> Hijo
end
```

En React, cuando utilizas la sintaxis prop.apellido estás accediendo a una propiedad (prop) llamada "apellido" que ha sido pasada al componente como un dato desde su componente padre.

```mermaid
graph LR
A[Componente Padre] --> B[Componente Hijo]
A --> C[Componente Hijo]
A --> D[Componente Hijo]

subgraph Componente Padre
    B --> E[children]
    C --> E
    D --> E
    style B fill:#FFDDC1, stroke:#FF7F50
    style C fill:#FFDDC1, stroke:#FF7F50
    style D fill:#FFDDC1, stroke:#FF7F50
    style E fill:#FFECE5, stroke:#FF7F50
end

subgraph Componente Hijo
    E --> F[children]
    style F fill:#C7E9FF, stroke:#2B7CE9
end
```

```mermaid
graph LR
A[Card] --> B[CardHeader]
A --> C[CardBody]
A --> D[CardFooter]

subgraph Card
    B --> E[children]
    C --> E
    D --> E
    style B fill:#FFDDC1, stroke:#FF7F50
    style C fill:#FFDDC1, stroke:#FF7F50
    style D fill:#FFDDC1, stroke:#FF7F50
    style E fill:#FFECE5, stroke:#FF7F50
end

subgraph CardHeader
    E --> F[children]
    style F fill:#C7E9FF, stroke:#2B7CE9
end

subgraph CardBody
    E --> G[children]
    style G fill:#C7E9FF, stroke:#2B7CE9
end

subgraph CardFooter
    E --> H[children]
    style H fill:#C7E9FF, stroke:#2B7CE9
end
```
