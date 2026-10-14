---
name: epn-design
description: "Usa esta skill para rediseñar o ajustar la interfaz visual de StickerSmash en Expo/React Native con identidad EPN: paleta institucional, pantallas Inicio y Acerca de, componentes, icono y splash."
---

# Diseño EPN para StickerSmash

Rediseña la interfaz existente para que se sienta institucional, académica y actual. Aplica estas reglas cuando cambies el diseño; conserva el comportamiento que ya tiene la app.

## 1. Personalidad del diseño

- Comunica rigor académico, tecnología y pertenencia a la Escuela Politécnica Nacional (EPN).
- El azul institucional es el color dominante: debe definir encabezados y bloques principales de fondo. Equilíbralo con superficies claras y composición ordenada; no limites su presencia a acentos.
- Mantén una jerarquía visual evidente: una acción primaria por pantalla, controles secundarios discretos y contenido agrupado.
- Prefiere bordes limpios, radios consistentes y sombras casi imperceptibles. Evita gradientes decorativos, contornos gruesos, elementos flotantes sin propósito y colores saturados ajenos a la identidad.
- Mantén la misma identidad en iOS, Android y web; considera áreas seguras, tamaños adaptables y controles táctiles cómodos.

## 2. Paleta de colores

El repositorio contiene imágenes de ejemplo de Expo, no un escudo EPN verificable. Antes de asignar los tonos institucionales, localiza el escudo/logo proporcionado por el usuario o un recurso oficial de EPN y toma de allí los valores HEX exactos. El sitio oficial de EPN (`https://www.epn.edu.ec`) sirve como referencia visual adicional. **No adivines ni sustituyas los valores institucionales por un azul/dorado aproximado.**

| Rol | Color | Código | Uso |
|---|---|---|---|
| Primario institucional | Azul marino del escudo EPN | `#16243E` | Color dominante en encabezados, franja superior de Inicio, botones primarios e iconos activos. |
| Primario oscuro | Azul más profundo del sistema | `#0D1729` | Sombras discretas y estados que requieren una variante más oscura. |
| Primario claro | Azul grisáceo claro | `#E8EFF7` | Fondos informativos suaves y superficies seleccionadas; no usar para texto pequeño. |
| Acento | Dorado del escudo EPN | `#F3BC48` | Línea fina de encabezado, indicador activo, borde de tarjetas y botón “+”. |
| Fondo de pantalla | Gris azulado muy claro | `#F4F7FA` | Fondo general; deja que las tarjetas blancas y la imagen destaquen. |
| Superficie | Blanco | `#FFFFFF` | Tarjetas, botones claros y modal. |
| Texto principal | Azul grisáceo casi negro | `#172B3A` | Títulos, texto de lectura y etiquetas importantes. |
| Texto secundario | Gris azulado | `#52616D` | Descripciones, ayuda y metadatos. |
| Borde suave | Gris azulado claro | `#D9E1E8` | Separadores, contornos de tarjetas y botones secundarios. |
| Error | Rojo oscuro | `#B42318` | Mensajes de error y estados inválidos; reservarlo exclusivamente para errores. |

- **Se anula la distribución anterior de 15–20 % de primario.** El azul institucional debe dominar visualmente mediante encabezados y bandas azules; conserva áreas claras para legibilidad y contraste. El dorado sigue siendo un acento pequeño, no un fondo dominante.
- El texto normal debe alcanzar contraste WCAG AA de al menos 4.5:1; texto grande, al menos 3:1. Comprueba los HEX finales, especialmente texto sobre primario y primario claro.
- El logo oficial proporcionado se conserva sin recolor ni deformación. Sobre el banner azul, colócalo centrado en una superficie blanca que garantice contraste.

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
  - Encabezado azul institucional con título blanco en negrita y logo EPN de 32 px a su izquierda; agrega una línea dorada de 3 px en el borde inferior. Respeta el área segura superior.
  - Barra de pestañas blanca, de 60–68 px más el inset inferior; iconos de 22–24 px y etiquetas de 12 px.
  - El estado activo usa azul institucional y una barra dorada pequeña encima; el inactivo usa gris azulado.
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
  - Radio de 24 px, borde blanco de 4 px y sombra suave; céntrala y dale presencia de tarjeta. No dejes un segundo fondo gris visible detrás de la foto.
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

1. Respeta el área segura. Bajo el encabezado, usa una franja azul institucional de unos 120 px que se funda visualmente con él; el resto del fondo es gris azulado claro.
2. Cuando no haya imagen seleccionada, muestra la imagen grande de ejemplo centrada, en proporción 3:4 y hasta 360 px de ancho. Si el espacio vertical es reducido, reduce la imagen antes de desplazar los botones fuera de pantalla.
3. Cuando no haya foto seleccionada, muestra inmediatamente debajo dos botones centrados y del mismo ancho: principal azul con icono y secundario blanco con borde azul. Ambos usan radio 16 px, mínimo 48 px de alto y separación de 10–12 px.
4. Cuando haya opciones, pon “Reiniciar”, “+” y “Guardar” en una tarjeta blanca de radio 20 px y sombra suave. El botón “+” es mayor, dorado con icono azul, y sobresale un poco por encima de la tarjeta.
5. Mantén los tres controles en una fila centrada y equilibrada, con etiquetas debajo de los iconos. No dependas de `position: absolute` con una distancia fija del borde ni dejes grandes huecos vacíos.
6. Conserva las acciones de elegir imagen, agregar sticker, reiniciar y guardar; limita los cambios a estructura visual y estilos, sin alterar la lógica o permisos.

## 7. Pantalla Acerca de

- Haz una pantalla desplazable (`ScrollView`) con padding horizontal de 20–24 px y espacios verticales regulares; debe seguir siendo utilizable en pantallas pequeñas y con texto ampliado.
- Orden del contenido:
  1. Banner azul institucional con el logo/escudo EPN grande y centrado sobre una superficie blanca; conserva el recurso completo y sin deformar.
  2. En el banner, título blanco “StickerSmash” de 26–28 px/700 y subtítulo blanco “Escuela Politécnica Nacional” de 16 px, ambos centrados.
  3. Debajo, tarjetas blancas de radio 20 px, sombra discreta y borde izquierdo dorado; deja 12–16 px entre tarjetas.
  4. Incluye las tarjetas “Identidad visual”, “Tecnologías usadas” y “Versión”. Presenta el contenido legible, con descripción y lista de tecnologías compacta, sin inventar datos.
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
- [ ] El azul institucional domina la identidad visual; se anuló la distribución anterior de 15–20 % de color primario y el dorado se reserva para detalles.
- [ ] El texto cumple contraste AA y los estados no dependen únicamente del color.
- [ ] La tipografía usa fuente del sistema y mantiene tamaños, pesos e interlineados de esta guía.
- [ ] Márgenes, espaciados, radios y sombras siguen escalas coherentes.
- [ ] Encabezado azul con logo de 32 px, título blanco y línea dorada de 3 px; pestañas blancas con indicador dorado y selección azul.
- [ ] Botones e iconos, incluido el “+”, quedan centrados, agrupados y alineados.
- [ ] Imagen grande y controles de Inicio están cerca, sin huecos vacíos; Reiniciar, “+” y Guardar forman una fila centrada.
- [ ] Acerca de muestra banner azul con logo en superficie blanca, “StickerSmash”, “Escuela Politécnica Nacional” y tarjetas “Identidad visual”, “Tecnologías usadas” y “Versión”; hay scroll y no queda vacía.
- [ ] Icono, adaptive icon, splash y favicon (si aplica) usan recursos coherentes y no deformados.
- [ ] No cambió la lógica de la app ni se añadieron dependencias innecesarias.
- [ ] Se revisó el resultado en tamaños compactos y amplios, y en iOS, Android y web.
