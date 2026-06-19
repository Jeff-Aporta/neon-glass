import { GlassPageSurface } from "./GlassPageSurface.jsx";

/**
 * Layout de página con fondo tk-doc estándar.
 * @deprecated Prefer GlassPageSurface directamente; orbs=false por defecto.
 */
export function GlassMeshLayout({
  orbs = false,
  className = "",
  bodyClassName = "",
  sx = {},
  bodySx = {},
  children,
}) {
  if (!orbs) {
    return (
      <GlassPageSurface className={[className, bodyClassName].filter(Boolean).join(" ")} sx={{ ...sx, ...bodySx }}>
        {children}
      </GlassPageSurface>
    );
  }

  const { Box } = MaterialUI;
  return (
    <Box
      className={["isa-glass-mesh-root", "isa-glass-mesh-root--orbs", className].filter(Boolean).join(" ")}
      sx={{ position: "relative", isolation: "isolate", minHeight: "100%", ...sx }}
    >
      <GlassPageSurface className={bodyClassName} sx={bodySx}>
        {children}
      </GlassPageSurface>
    </Box>
  );
}
