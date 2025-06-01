# SkeletonAPP – Actividad Semana 2


---

## Tecnologías utilizadas

- Ionic 8 con Angular 19
- Angular Material (`MatDatepicker`)
- Componentes UI de Ionic
- Animaciones simples con CSS y JavaScript

---

## Funcionalidades implementadas

### Pantalla de Login (Tab1)
- Campos: usuario (entre 3 y 8 caracteres alfanuméricos) y contraseña (4 dígitos numéricos)
- Validación de ambos campos antes de continuar
- Al hacer clic en "Ingresar", se navega a la pantalla Home y se pasa el usuario

### Pantalla Home / Información adicional (Tab2)
- Muestra un mensaje con el nombre de usuario recibido
- Formulario que incluye:
  - Nombre
  - Apellido
  - Nivel educacional (selector desplegable)
  - Fecha de nacimiento (usando `MatDatepicker`)
- Botón "Mostrar" que muestra nombre y apellido en un mensaje, con un efecto de carga tipo dual-ring
- Botón "Limpiar" que borra todos los campos e incluye una animación de movimiento en los inputs de nombre y apellido

---



