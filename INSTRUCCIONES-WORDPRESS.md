# Cómo Subir este Sitio a WordPress

## Opción 1: Páginas HTML Personalizadas

1. **Sube los archivos al servidor:**
   - Ve a tu panel de WordPress
   - Usa un cliente FTP (FileZilla) o el administrador de archivos de tu hosting
   - Sube todos los archivos HTML, CSS, JS e imágenes a una carpeta en tu servidor (ej: `/wp-content/mi-sitio-biblico/`)

2. **Crea páginas en WordPress:**
   - Ve a Páginas > Añadir nueva
   - Cambia al editor de código (HTML)
   - Usa un iframe para mostrar tus páginas HTML:
   \`\`\`html
   <iframe src="/wp-content/mi-sitio-biblico/index.html" width="100%" height="800px" frameborder="0"></iframe>
   \`\`\`

## Opción 2: Plugin "Insert HTML Snippet"

1. **Instala el plugin:**
   - Ve a Plugins > Añadir nuevo
   - Busca "Insert HTML Snippet"
   - Instala y activa

2. **Crea snippets:**
   - Copia el contenido de cada archivo HTML
   - Crea un snippet para cada página
   - Inserta los snippets en páginas de WordPress usando shortcodes

## Opción 3: Tema Hijo Personalizado

1. **Crea un tema hijo**
2. **Copia los archivos HTML como plantillas PHP**
3. **Registra las plantillas en WordPress**

## Opción 4: Constructor de Páginas (Recomendado para principiantes)

1. **Instala Elementor o Divi**
2. **Recrea el diseño visualmente:**
   - Usa los colores del archivo styles.css
   - Copia el texto de los archivos HTML
   - Sube las imágenes a la biblioteca de medios
   - Recrea la estructura con bloques/módulos

## Archivos Incluidos

- `index.html` - Página principal
- `historias.html` - Galería de historias
- `videos.html` - Galería de videos
- `colorear.html` - Libros para colorear
- `styles.css` - Estilos personalizados
- `script.js` - JavaScript principal
- `videos.js` - JavaScript para videos
- Todas las imágenes necesarias

## Notas Importantes

- Las imágenes deben estar en la misma carpeta que los archivos HTML
- Tailwind CSS se carga desde CDN (requiere conexión a internet)
- Los videos son placeholders - debes agregar tus propios videos
- Los PDFs para colorear son placeholders - debes agregar tus propios archivos PDF

## Soporte

Para más ayuda, consulta la documentación de WordPress o contacta a tu proveedor de hosting.
