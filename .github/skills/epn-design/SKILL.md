---
name: epn-design
description: "Usa esta skill para rediseñar o ajustar la interfaz visual de StickerSmash en Expo/React Native con identidad EPN: paleta institucional, pantallas Inicio y Acerca de, componentes, icono y splash."
---

# Diseño EPN para StickerSmash

Rediseña la interfaz existente para que se sienta institucional, académica y actual. Aplica estas reglas cuando cambies el diseño; conserva el comportamiento que ya tiene la app.

## 1. Personalidad del diseño

- Comunica rigor académico, tecnología y pertenencia a la Escuela Politécnica Nacional (EPN).
- Usa el color institucional como acento dominante, superficies claras, composición ordenada y bastante espacio en blanco.
- Mantén una jerarquía visual evidente: una acción primaria por pantalla, controles secundarios discretos y contenido agrupado.
- Prefiere bordes limpios, radios consistentes y sombras casi imperceptibles. Evita gradientes decorativos, contornos gruesos, elementos flotantes sin propósito y colores saturados ajenos a la identidad.
- Mantén la misma identidad en iOS, Android y web; considera áreas seguras, tamaños adaptables y controles táctiles cómodos.

## 2. Paleta de colores

El repositorio contiene imágenes de ejemplo de Expo, no un escudo EPN verificable. Antes de asignar los tonos institucionales, localiza el escudo/logo proporcionado por el usuario o un recurso oficial de EPN y toma de allí los valores HEX exactos. El sitio oficial de EPN (`https://www.epn.edu.ec`) sirve como referencia visual adicional. **No adivines ni sustituyas los valores institucionales por un azul/dorado aproximado.**

| Rol | Color | Código | Uso |
|---|---|---|---|
| Primario institucional | Tono dominante del logo EPN | **verificar** (muestrear HEX exacto del escudo oficial) | Botón principal, selección activa, iconos activos y llamadas de atención. |
| Primario oscuro | Variante oscura del primario EPN | **verificar** (definir desde el HEX oficial y validar contraste) | Estados presionados, títulos sobre fondos claros y encabezados puntuales. |
| Primario claro | Variante clara del primario EPN | **verificar** (definir desde el HEX oficial) | Fondos sutiles seleccionados, indicadores y superficies informativas; no usar para texto pequeño. |
| Acento | Color secundario presente en el logo EPN | **verificar** (muestrear HEX exacto; no introducir un color nuevo) | Detalles pequeños e indicadores; máximo 5 % de la superficie visible. |
| Fondo de pantalla | Gris azulado muy claro | `#F4F7FA` | Fondo general; deja que las tarjetas blancas y la imagen destaquen. |
| Superficie | Blanco | `#FFFFFF` | Tarjetas, botones claros y modal. |
| Texto principal | Azul grisáceo casi negro | `#172B3A` | Títulos, texto de lectura y etiquetas importantes. |
| Texto secundario | Gris azulado | `#52616D` | Descripciones, ayuda y metadatos. |
| Borde suave | Gris azulado claro | `#D9E1E8` | Separadores, contornos de tarjetas y botones secundarios. |
| Error | Rojo oscuro | `#B42318` | Mensajes de error y estados inválidos; reservarlo exclusivamente para errores. |

- Distribución orientativa por área visible: 70–80 % fondos y superficies claras, 15–20 % primario institucional, 5–10 % textos/bordes neutros; el acento no debe superar 5 %.
- El texto normal debe alcanzar contraste WCAG AA de al menos 4.5:1; texto grande, al menos 3:1. Comprueba los HEX finales, especialmente texto sobre primario y primario claro.
- Si un tono institucional no ofrece contraste suficiente, conserva el HEX del logo para decoración y usa una variante oscura verificada para texto. No aclares el texto hasta perder legibilidad.

## 3. Tipografía

Usa la fuente del sistema (`System` en iOS y el sans-serif predeterminado de Android). No añadas fuentes descargadas solo por estética.

| Nivel | Tamaño | Peso | Interlineado | Uso |
|---|---:|---:|---:|---|
| Título de pantalla | 26–28 px | 700 | 32–36 px | Nombre de la pantalla y encabezado principal. |
| Subtítulo | 18–20 px | 600 | 24–28 px | Secciones, texto introductorio o encabezado de tarjeta. |
| Cuerpo | 16 px | 400 | 23–25 px | Descripciones y texto de lectura. |
| Etiqueta | 12–14 px | 500–600 | 16–20 px | Botones, pestañas, datos breves y ayudas. |

- No uses texto esencial menor de 12 px.
- Mantén los títulos breves; permite que las descripciones se envuelvan sin truncarlas.
- En botones, centra el conjunto icono + etiqueta como una sola unidad visual, no centres cada elemento por separado.

## 4. Espaciado y forma

- Usa una escala común de espaciado: `4, 8, 12, 16, 24, 32, 40`.
- Aplica margen horizontal de pantalla de 20 px en móviles compactos y hasta 24 px en pantallas anchas; el contenido no debe tocar los bordes.
- Deja 24–32 px entre secciones principales y 8–12 px entre título y descripción.
- Radios: 12 px para controles y tarjetas pequeñas; 16 px para tarjetas e imágenes; 22–24 px para hojas modales.
- Botones y campos: alto visual mínimo 48 px; zona táctil mínima 48 × 48 px.
- Usa sombra solo para separar una tarjeta del fondo: desplazamiento vertical 2 px, desenfoque 8 px, opacidad baja (aprox. 8–12 %). En web, Android e iOS no dependas de una sombra como único indicador de jerarquía.
- Evita márgenes horizontales enormes, alturas fijas innecesarias y valores inconsistentes entre componentes equivalentes.

## 5. Reglas por componente

Aplica los valores en unidades lógicas de React Native (`dp`); adapta anchos al espacio disponible en vez de fijar un ancho que desborde.

- **Encabezado y barra de pestañas**
  - Encabezado: 56–64 px de alto útil, título de 20 px/600 y alineación vertical centrada; respeta el área segura superior.
  - Barra de pestañas: 60–68 px de alto más el inset inferior del dispositivo; iconos de 22–24 px y etiquetas de 12 px.
  - Usa fondo de superficie o primario oscuro solo si el texto/iconos conservan contraste AA. El estado activo usa primario institucional; inactivo, texto secundario.
  - Centra cada icono con su etiqueta; mantén mínimo 48 × 48 px de zona táctil. No agregues cabeceras que dupliquen el título de la pantalla.
- **Button principal**
  - Alto 52–56 px; ancho `100 %` del contenedor hasta un máximo de 360 px.
  - Fondo primario institucional; texto 16 px/600 con contraste AA.
  - Si incluye icono, usa 18–20 px, separación de 8 px y centra el grupo completo. Padding horizontal de 20 px.
  - Estado presionado: primario oscuro; no cambies el tamaño ni desplaces el contenido.
- **Button secundario**
  - Alto 48–52 px, mismo ancho y alineación que el principal.
  - Fondo blanco o transparente, borde de 1 px en borde suave y texto/icono en primario oscuro.
  - Separa del botón principal 10–12 px; centra el contenido igual que en el botón principal.
- **CircleButton**
  - Diámetro visual de 64 px, borde de 3 px y círculo interior centrado. Zona táctil mínima de 48 × 48 px.
  - Icono “+” de 28–32 px, centrado horizontal y verticalmente; usa el color institucional de mayor contraste con el fondo.
  - Mantén 16–24 px de separación respecto a las acciones laterales; no uses márgenes fijos grandes que aparten el botón del grupo.
- **IconButton**
  - Zona táctil mínima de 48 × 48 px; icono de 22–24 px y etiqueta de 12–14 px.
  - Centra icono y etiqueta en una columna, con 4–6 px entre ambos. Centra el contenido también dentro de su zona táctil.
  - Usa texto secundario para acciones no prioritarias y primario solo para estado activo.
- **ImageViewer**
  - Conserva proporción de retrato 3:4. En móvil, usa ancho `min(ancho disponible, 360 px)` con márgenes laterales de 20 px; limita la altura aproximada a 50–56 % del alto útil.
  - Redimensiona la imagen seleccionada sin deformarla (`contain` si debe verse completa; `cover` solo si el recorte es deliberado y coherente).
  - Radio de 16 px. No pongas marcos ni sombras fuertes que compitan con la imagen.
- **EmojiPicker**
  - Presenta una hoja inferior de 280–360 px de alto (máximo 45 % de la pantalla), ancho completo, superficie blanca y radios superiores de 22–24 px.
  - Usa un overlay oscuro translúcido detrás. Deja 16–20 px de margen interior y respeta el inset inferior.
  - Encabezado de 52–56 px: título de 16 px/600 a la izquierda y botón de cierre de al menos 48 × 48 px a la derecha, ambos centrados verticalmente.
- **EmojiList**
  - Lista horizontal con 16 px de padding lateral y 12–16 px de separación entre elementos.
  - Cada sticker ocupa 64–72 px por lado, se muestra completo y se centra en su objetivo táctil de al menos 48 × 48 px.
  - Mantén desplazamiento horizontal fluido; no intentes repartir toda la fila con separaciones rígidas que rompan en pantallas angostas.
- **EmojiSticker**
  - Tamaño inicial visible de 48 px; conserva proporción y usa `contain`.
  - Mantén el gesto existente de mover y cambiar el tamaño. La transformación no debe estirar el sticker ni sacarlo de la zona de edición de forma accidental.
  - No añadas decoración, sombra o fondo al sticker salvo que sea necesaria para distinguirlo de la imagen.

## 6. Pantalla Inicio

1. Respeta el área segura y usa el fondo de pantalla definido. Mantén el flujo vertical centrado y adaptable.
2. Cuando no haya imagen seleccionada, muestra la imagen grande de ejemplo centrada, en proporción 3:4 y hasta 360 px de ancho. Si el espacio vertical es reducido, reduce la imagen antes de desplazar los botones fuera de pantalla.
3. Mantén los botones de selección/uso de foto inmediatamente debajo de la imagen: separación de 12–16 px entre imagen y primer botón, y 10–12 px entre botones. No dejes un tercio de pantalla vacío como relleno.
4. Cuando haya opciones, ubica “Reiniciar”, “+” y “Guardar” en una sola fila centrada debajo o cerca de la imagen, con separación de 16–24 px. El conjunto debe quedar equilibrado y no depender de `position: absolute` con una distancia fija del borde.
5. Alinea verticalmente los tres controles; el botón circular puede ser mayor, pero su centro debe coincidir con el eje de la fila. Mantén etiquetas centradas debajo de sus iconos.
6. Conserva las acciones de elegir imagen, agregar sticker, reiniciar y guardar; limita los cambios a estructura visual y estilos, sin alterar la lógica o permisos.

## 7. Pantalla Acerca de

- Haz una pantalla desplazable (`ScrollView`) con padding horizontal de 20–24 px y espacios verticales regulares; debe seguir siendo utilizable en pantallas pequeñas y con texto ampliado.
- Orden del contenido:
  1. Logo/escudo oficial EPN centrado, contenido completo y sin deformar; ocupa 88–112 px de alto y un máximo aproximado de 180 px de ancho.
  2. Título de 26–28 px/700 y subtítulo breve de 16 px, centrados; separa el logo del título por 16–20 px.
  3. Descripción de 16 px con interlineado de 23–25 px, alineada a la izquierda en un bloque de lectura cómodo.
  4. Tarjetas de información en superficie blanca, padding de 16 px, radio de 12–16 px y 12 px entre tarjetas; cada tarjeta lleva encabezado breve y contenido con jerarquía clara.
  5. Lista de tecnologías en etiquetas o filas compactas con iconografía discreta; conserva nombres legibles y evita logos desproporcionados.
- No inventes datos institucionales ni atribuciones. Usa solo contenido disponible en el proyecto o confirmado por el usuario.
- Evita centrar verticalmente un único texto y dejar el resto vacío; distribuye la información a lo largo del scroll y comprueba que el contenido termina con padding inferior suficiente.

## 8. Ícono y pantalla de carga (splash)

- Usa un recurso oficial/entregado del escudo EPN con resolución suficiente, sin recrearlo, estirarlo ni recortarlo. Verifica que el fondo y el logo tengan contraste y espacio libre alrededor.
- Para splash, usa fondo del color primario EPN verificado y logo centrado; si el logo no se distingue sobre ese fondo, usa una versión oficial para fondo oscuro/claro. No agregues texto pequeño ilegible.
- Revisa y actualiza en `app.json` los recursos existentes: `expo.icon`, `expo.android.adaptiveIcon` (incluidos `foregroundImage`, `backgroundColor` y, si se usa, `monochromeImage`) y la configuración del plugin `expo-splash-screen` (`backgroundColor`, `image`, `imageWidth`). Mantén favicon web coherente si cambia el icono.
- Respeta las zonas seguras del icono adaptativo y deja el símbolo centrado con margen de seguridad; prueba que no se recorte en las máscaras Android.
- No edites carpetas nativas generadas (`ios/` o `android/`) a mano. Configura estos recursos en `app.json` y sus assets.

## 9. Reglas de implementación

- Limita el cambio al diseño: no modifiques lógica de selección/guardado de imágenes, permisos, gestos, navegación ni flujo funcional.
- Conserva Expo Router, las rutas y los componentes existentes; no dupliques componentes ni añadas dependencias para resolver un problema puramente visual.
- Usa `StyleSheet.create` para estilos de React Native. Centraliza colores, espaciados y radios como constantes compartidas si los reutilizan varias pantallas/componentes; evita valores sueltos repetidos.
- Mantén tipos, nombres de props y comportamiento existentes. Si hace falta un cambio de estructura visual, no elimines accesibilidad ni callbacks.
- Usa `Pressable` y mantén etiquetas accesibles para acciones; diferencia visualmente estados normal, presionado y seleccionado sin depender solo del color.
- Comprueba tanto una pantalla angosta como una amplia, orientación vertical, safe areas, desbordamiento de texto y contraste en iOS, Android y web.

## 10. Checklist final

- [ ] El diseño se percibe institucional, académico, moderno y despejado; cada ajuste mejora estética, alineación o usabilidad.
- [ ] Los HEX primario, primario oscuro, primario claro y acento se verificaron contra el escudo/logo oficial; no queda ningún valor institucional inventado.
- [ ] El texto cumple contraste AA y los estados no dependen únicamente del color.
- [ ] La tipografía usa fuente del sistema y mantiene tamaños, pesos e interlineados de esta guía.
- [ ] Márgenes, espaciados, radios y sombras siguen escalas coherentes.
- [ ] Encabezado y pestañas respetan safe areas y ofrecen zonas táctiles cómodas.
- [ ] Botones e iconos, incluido el “+”, quedan centrados, agrupados y alineados.
- [ ] Imagen grande y controles de Inicio están cerca, sin huecos vacíos; Reiniciar, “+” y Guardar forman una fila centrada.
- [ ] Acerca de muestra el logo centrado, título, descripción, tarjetas y tecnologías; hay scroll y no queda vacía.
- [ ] Icono, adaptive icon, splash y favicon (si aplica) usan recursos coherentes y no deformados.
- [ ] No cambió la lógica de la app ni se añadieron dependencias innecesarias.
- [ ] Se revisó el resultado en tamaños compactos y amplios, y en iOS, Android y web.
