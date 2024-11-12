# Portfolio Website Using Next JS, Tailwind CSS & Framer Motion

- [Assets](https://drive.google.com/file/d/1BBVke_100I9nbOPOMFBqMoKzuAnjoUI9/view)
- [Nextjs](https://nextjs.org/)
- [UI shadcn](https://ui.shadcn.com/)


```bash
npx create-next-app@latest .

Ok to proceed? (y) y
✔ Would you like to use TypeScript? … No✅ / Yes
✔ Would you like to use ESLint? … No / Yes✅
✔ Would you like to use Tailwind CSS? … No / Yes✅
✔ Would you like to use `src/` directory? … No✅ / Yes
✔ Would you like to use App Router? (recommended) … No / Yes✅
? Would you like to customize the default import alias (@/*)? › No✅ / Yes
```

Cambiamos extensión por `jsx`

```bash
app/layout.jsx
app/page.jsx
```
Quitamos el `div` de `page.jsx`

```jsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen">
      <main className="flex flex-col gap-8 row-start-2"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap"></footer>
    </div>
  );
}
```

[UI Shadcn intallation](https://ui.shadcn.com/docs/installation/next)

```bash
npx shadcn@latest init -d
Default
Slate
no

```

Buscamos input

```bash
npx shadcn@latest add input button scroll-area select sheet tabs textarea tooltip
```

Ahora

```bash
npm run dev

http://localhost:3000
```

Entramos a `tailwind.config.js`


https://www.youtube.com/watch?v=dImgZ_AH7uA

Para ver el `font-family` selecciona con las DevTools el elemento, selecciona `Computed` y busca.


```
npm i framer-motion

npm i react-icons

npm i react-countup
```

```
```

```
```