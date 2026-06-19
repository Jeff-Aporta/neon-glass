const { Box } = MaterialUI;

const PAGE_PAD = { p: { xs: 1.25, sm: 2, md: 3 } };

/**
 * Superficie de página estándar (tk-doc-web-surface).
 * Mesh + viñeta; contenido transparente sobre el fondo.
 */
export function GlassPageSurface({ className = "", sx = {}, children, ...rest }) {
  return (
    <Box
      className={["isa-glass-page-surface", "tk-doc-web-surface", className].filter(Boolean).join(" ")}
      sx={{
        flex: 1,
        minHeight: 0,
        overflow: "auto",
        boxSizing: "border-box",
        bgcolor: "transparent",
        ...PAGE_PAD,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

/** sx helper — scroll surface embebida en shell. */
export function glassPageSurfaceSx(extra = {}) {
  return {
    flex: 1,
    minHeight: 0,
    overflow: "auto",
    boxSizing: "border-box",
    bgcolor: "transparent",
    ...PAGE_PAD,
    ...extra,
  };
}

/** sx helper — página full-page (fondo en .isa-glass-page-root vía CSS). */
export function glassPageRootSx(extra = {}) {
  return {
    minHeight: "100vh",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 1,
    bgcolor: "transparent",
    ...PAGE_PAD,
    ...extra,
  };
}
