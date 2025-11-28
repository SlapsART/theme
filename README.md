# @tu-org/figma-make-theme

Sistema de theming Cosmos para Figma Make basado en Material-UI.

## Instalación

\`\`\`bash
npm install @tu-org/figma-make-theme @mui/material @emotion/react @emotion/styled
\`\`\`

## Uso

\`\`\`typescript
import { ThemeProvider } from '@mui/material/styles';
import { baseTheme, themeCosmosLight, themeCosmosDark } from '@tu-org/figma-make-theme';

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      {/* Tu app */}
    </ThemeProvider>
  );
}
\`\`\`

## Versión
v1.0.0