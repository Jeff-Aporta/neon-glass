# @isa-components/neon-glass

Superficies **glass neon tech** reutilizables (MUI + CDN). Basado en isa-patyia chat, tk-doc y swagger viewer.

- **Dark:** blur, gradientes, glow en hover, orbes mesh.
- **Light:** glass limpio, sin neon.

## Uso CDN

```html
<link rel="stylesheet" href=".../neon-glass.min.css" />
<script type="module" src=".../neon-glass.min.js"></script>
```

Tras cargar stack (React + MUI):

```js
import { GlassSection, GlassMeshLayout, useGlassColors, glassCardSx } from ".../neon-glass.min.js";
// o global:
const { GlassCard } = globalThis.ISAGlass;
```

## Superficies (v1)

| Componente | Uso |
|------------|-----|
| `GlassPageSurface` | **Fondo estándar** tk-doc mesh (`.tk-doc-web-surface`) |
| `GlassMeshLayout` | Alias de GlassPageSurface |
| `GlassHero` | Header gradient (tk-doc) |
| `GlassToolbar` | Barra acciones |
| `GlassCard` | Card genérica |
| `GlassPanel` | Panel modal / gate |
| `GlassSection` | Sección con header + acento |
| `GlassSurface` | Base configurable por `tone` |
| `GlassInner` | Superficie anidada |
| `GlassTableWrap` | Tablas compactas |

## Helpers sx

- `useGlassColors()` — paleta según tema MUI
- `glassSurfaceSx`, `glassCardSx`, `glassInnerSx`, `glassHeaderSx`, `glassHeroSx`
- Tokens: `NEON_COLORS`, `GLASS_TONES`, `GLASS_GRADIENTS`, `MESH`

## Roadmap (catálogo)

`GlassAccordion`, `GlassChip`, `GlassButton`, `GlassDialog`, `GlassInput`, `GlassTabs`

## Build

```bash
cd Personal/apps/components/neon-glass
npm run build
```

Salida: `cdn/neon-glass.min.js`, `cdn/neon-glass.min.css` (incluye page mesh tk-doc)

## Fondo de página (estándar)

Clase CSS: `.isa-glass-page-surface` o `.tk-doc-web-surface`  
Variables: `--isa-glass-page-mesh-base`, `--isa-glass-page-mesh-vignette`

En AppShell el mesh se aplica a `isa-layout-body` cuando contiene `.isa-sw-viewer` o `.isa-glass-page-surface`.

```jsx
<GlassPageSurface sx={{ flex: 1, minHeight: 0, overflow: "auto" }}>
  {children}
</GlassPageSurface>
```

## Migración desde apps

- **jagudeloe** `glassSurface.ts` → importar de `@isa-components/neon-glass`
- **isa-patyia** `theme.css` mesh → `GlassMeshLayout` + CSS vars
- **swagger** `.isa-sw-glass` → alias en `neon-glass.css`
