
# CinEC — Página Web de Cine

## Estilo Visual
- **Minimalista y limpio**: fondo blanco, tipografía elegante, espacios amplios
- Acentos en tonos oscuros y dorado sutil para dar elegancia cinematográfica

## Páginas y Funcionalidades

### 1. Página de Inicio
- Hero con película destacada del momento (imagen grande + botón "Comprar Entrada")
- Carrusel de cartelera actual con pósters
- Sección de próximos estrenos con cuenta regresiva
- Banner de promociones activas

### 2. Cartelera
- Grid de películas en cartel con póster, título, género, duración y clasificación
- Al hacer clic: detalle con sinopsis, trailer de YouTube embebido y horarios disponibles
- Filtros por género y horario

### 3. Próximos Estrenos
- Películas que aún no están en cartel con fecha de estreno y cuenta regresiva
- Opción de "Notificarme" (simulada)

### 4. Flujo de Compra de Entradas
- Selección de película → horario → tipo de sala
- **Selección de asientos**: mapa interactivo de la sala con asientos disponibles/ocupados/seleccionados
- Resumen de compra con precio total
- Checkout simulado (sin procesamiento real de pago)
- **Generación de ticket con código QR** tras la compra

### 5. Combos de Snacks
- Catálogo de combos (palomitas, bebidas, nachos, etc.) con fotos y precios
- Posibilidad de agregar combos durante el checkout de entradas
- Opción de comprar combos por separado

### 6. Promociones y Descuentos
- Página con ofertas vigentes (días de descuento, combos especiales)
- Campo para aplicar cupones en el checkout

### 7. Autenticación de Usuarios
- Registro e inicio de sesión (email/contraseña)
- Perfil con historial de compras y tickets anteriores
- Requiere habilitar Supabase para base de datos y autenticación

### 8. Navegación
- Header con logo CinEC, enlaces a Cartelera, Próximos Estrenos, Snacks, Promociones
- Footer con información de contacto y redes sociales
- Diseño responsive para móvil y escritorio

## Datos
- Películas, horarios, salas, asientos, combos y promociones se manejarán con datos de ejemplo (mock data) inicialmente
- Supabase se usará para autenticación y almacenamiento de datos de usuario/compras

## Orden de implementación
1. Layout general (header, footer, navegación)
2. Página de inicio con hero y carrusel
3. Cartelera con detalle de película y trailers
4. Mapa de asientos interactivo y flujo de compra
5. Combos de snacks
6. Próximos estrenos con cuenta regresiva
7. Promociones y cupones
8. Generación de ticket QR
9. Autenticación y perfil de usuario (requiere Supabase)
