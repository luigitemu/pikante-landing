# Pikanté — Landing Page

> **"La michelada que prende todo."**  
> Landing page oficial de Pikanté, el mix premium de michelada hecho en Honduras.

---

## Descripcion

Este repositorio contiene la landing page de **Pikanté**, una marca de mix de michelada artesanal hecho 100% con ingredientes naturales. La pagina esta disenada para presentar el producto, mostrar los sabores disponibles, guiar al usuario en la preparacion y convertir visitas en ventas.

Construida con [Astro](https://astro.build) para maxima velocidad y rendimiento.

---

## Secciones de la pagina

| Seccion | Descripcion |
| :--- | :--- |
| **Hero** | Presentacion principal con llamada a la accion y datos clave del producto |
| **Marquee** | Banda animada con los atributos de la marca |
| **Que es** | Explicacion del producto: ingredientes, nivel de picante y facilidad de preparacion |
| **Sabores** | Catalogo de variantes disponibles (Original, Mango Habanero, etc.) |
| **Como preparar** | Guia paso a paso para servir la michelada perfecta |
| **Vida Pikante** | Galeria lifestyle que muestra el producto en contexto |
| **FAQ** | Preguntas frecuentes sobre el producto, envios y conservacion |
| **Footer** | Links de contacto, redes sociales y aviso legal |

---

## Stack tecnologico

- **Framework:** [Astro 6](https://astro.build) con TypeScript
- **Estilos:** CSS personalizado (sin framework de utilidades)
- **Fuentes:** Anton, Inter, JetBrains Mono via Google Fonts
- **Assets:** Imagenes en formato `.webp` optimizadas
- **Node:** >= 22.12.0

---

## Estructura del proyecto

```text
/
├── public/
│   ├── assets/          # Imagenes del producto y lifestyle
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Nav.astro
│   │   ├── Marquee.astro
│   │   ├── WhatIs.astro
│   │   └── HowTo.astro
│   ├── pages/
│   │   └── index.astro  # Pagina principal
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Comandos disponibles

Todos los comandos se ejecutan desde la raiz del proyecto:

| Comando | Accion |
| :--- | :--- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Inicia el servidor local en `localhost:4321` |
| `npm run build` | Genera el sitio de produccion en `./dist/` |
| `npm run preview` | Previsualiza el build antes de desplegar |
| `npm run astro ...` | Ejecuta comandos de la CLI de Astro |

---

## Instalacion rapida

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd Pikante

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver el resultado.

---

## Despliegue

El proyecto puede desplegarse en cualquier plataforma compatible con sitios estaticos:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

Para generar el build de produccion:

```bash
npm run build
```

Los archivos estaticos quedaran en la carpeta `./dist/`.

---

## Marca

- **Producto:** Mix de michelada premium
- **Origen:** Honduras
- **Ingredientes clave:** Cuatro tipos de chile, jugo de limon real, especias y tamarindo
- **Niveles de picante:** Suave, Medio y Fuego
- **Formato:** Botella de 320ml

---

## Licencia

Todos los derechos reservados © Pikanté. El codigo y los activos visuales de este repositorio son propiedad de la marca y no pueden ser utilizados sin autorizacion expresa.
