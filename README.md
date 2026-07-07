# Melenitas Dev - Masterclass

Landing de la masterclass de Melenitas Dev: *5 señales de que tu código se va a convertir en un infierno*.

Incluye:

- Hero con titulo y descripcion
- Video embebido (Bunny Stream)
- Enlaces a redes de `melenitasdev`

Stack:

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Requisitos

- Node.js 20+
- pnpm 11+

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de produccion

```bash
pnpm build
pnpm start
```

## Personalizacion rapida

Edita `src/app/page.tsx`:

1. **Titulo y descripcion**
   - Cambia el contenido del hero principal.
2. **Video**
   - Actualiza `BUNNY_VIDEO_EMBED_URL` con la URL de embed de Bunny Stream.
3. **Redes de melenitasdev**
   - Ajusta URLs dentro de `SOCIAL_LINKS`.
4. **Metadata**
   - Edita titulo y descripcion en `src/app/layout.tsx` para el preview al compartir.

## Estructura

```txt
src/app/
  layout.tsx
  globals.css
  page.tsx
  components/
    button.tsx
    navbar.tsx
```

## Deploy en Vercel

URL de produccion: [melenitasdev-masterclass.vercel.app](https://melenitasdev-masterclass.vercel.app)

Opciones:

1. Conectar repo en dashboard de Vercel (recomendado)
2. O via CLI:

```bash
pnpm dlx vercel
```

No necesita backend ni variables de entorno para funcionar base.
