# Lead Magnet - Melenitas Dev

Landing page simple para promocionar Melenitas Dev con formato lead magnet:

- Titulo principal
- Descripcion corta
- Video embebido
- Enlaces a redes de `melenitasdev`

Proyecto hecho con mismo stack visual que el sitio principal:

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
   - Reemplaza `VIDEO_ID` en el iframe por el ID real de YouTube.
3. **Redes de melenitasdev**
   - Ajusta URLs dentro de `SOCIAL_LINKS`.
4. **CTAs**
   - Cambia enlaces hacia dominio final de la academia.

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

Opciones:

1. Conectar repo en dashboard de Vercel (recomendado)
2. O via CLI:

```bash
pnpm dlx vercel
```

No necesita backend ni variables de entorno para funcionar base.