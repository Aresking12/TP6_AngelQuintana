// Función para manejar el envío del formulario en index.html
function submitForm() {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    
    if (nombre && apellido) {
        const nombreValue = nombre.value.trim();
        const apellidoValue = apellido.value.trim();
        
        if (nombreValue && apellidoValue) {
            // Ocultar el formulario
            const formContainer = document.getElementById('form-container');
            if (formContainer) {
                formContainer.style.display = 'none';
            }
            
            // Mostrar mensaje de bienvenida
            const welcomeMessage = document.getElementById('welcome-message');
            const userName = document.getElementById('user-name');
            const userDisplay = document.getElementById('user-display');
            
            if (welcomeMessage && userName && userDisplay) {
                userName.textContent = nombreValue + ' ' + apellidoValue;
                userDisplay.textContent = nombreValue + ' ' + apellidoValue;
                welcomeMessage.style.display = 'block';
            }
        } else {
            alert('Por favor, completa todos los campos');
        }
    }
}

// Agregar evento al presionar Enter en los inputs
document.addEventListener('DOMContentLoaded', function() {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    
    if (nombre) {
        nombre.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                submitForm();
            }
        });
    }
    
    if (apellido) {
        apellido.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                submitForm();
            }
        });
    }
    
    // Animaciones adicionales al cargar la página
    animateElements();
});

// Función para animar elementos al hacer scroll
function animateElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar todos los elementos con animación
    const animatedElements = document.querySelectorAll('.animate-fadeIn, .animate-slideDown, .animate-slideRight');
    animatedElements.forEach(function(element) {
        observer.observe(element);
    });
}

// Función para manejar dropdowns en dispositivos móviles
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
        const button = dropdown.querySelector('.dropdown-btn');
        const content = dropdown.querySelector('.dropdown-content');
        
        if (button && content) {
            if (button.contains(event.target)) {
                // Toggle dropdown al hacer click en el botón
                event.preventDefault();
                
                // Cerrar otros dropdowns
                dropdowns.forEach(function(otherDropdown) {
                    if (otherDropdown !== dropdown) {
                        const otherContent = otherDropdown.querySelector('.dropdown-content');
                        if (otherContent) {
                            otherContent.style.display = 'none';
                        }
                    }
                });
                
                // Toggle el dropdown actual
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            } else if (!dropdown.contains(event.target)) {
                // Cerrar dropdown si se hace click fuera
                content.style.display = 'none';
            }
        }
    });
});

// Agregar efectos hover suaves a las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.map-card, .video-card, .media-card, .audio-card, .feature-card');
    
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// Función para validar formulario en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    
    if (nombre) {
        nombre.addEventListener('input', function() {
            if (this.value.trim()) {
                this.style.borderColor = '#10b981';
            } else {
                this.style.borderColor = '#e5e7eb';
            }
        });
    }
    
    if (apellido) {
        apellido.addEventListener('input', function() {
            if (this.value.trim()) {
                this.style.borderColor = '#10b981';
            } else {
                this.style.borderColor = '#e5e7eb';
            }
        });
    }
});

// Efecto parallax suave en el scroll
let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.welcome-card, .form-card');
            
            parallaxElements.forEach(function(element) {
                const speed = 0.5;
                element.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
            });
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// Agregar animación de entrada a elementos del timeline
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(function(item, index) {
        setTimeout(function() {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Función para reproducir videos automáticamente al hacer hover (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const videoPlayers = document.querySelectorAll('.video-player');
    
    videoPlayers.forEach(function(video) {
        video.addEventListener('mouseenter', function() {
            this.setAttribute('controls', 'controls');
        });
    });
});

// Agregar efecto ripple a los botones
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = diameter + 'px';
    ripple.style.left = event.clientX - button.offsetLeft - radius + 'px';
    ripple.style.top = event.clientY - button.offsetTop - radius + 'px';
    ripple.classList.add('ripple');
    
    const rippleElement = button.getElementsByClassName('ripple')[0];
    if (rippleElement) {
        rippleElement.remove();
    }
    
    button.appendChild(ripple);
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn, .btn-submit');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', createRipple);
    });
});

// Prevenir comportamiento por defecto en enlaces de dropdown
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    
    dropdownButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});

// Agregar animación de carga
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Función para detectar si el usuario está en móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar comportamiento según dispositivo
window.addEventListener('resize', function() {
    if (isMobile()) {
        // Comportamiento específico para móviles
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(dropdown) {
            dropdown.style.position = 'relative';
        });
    } else {
        // Comportamiento para desktop
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(dropdown) {
            dropdown.style.position = 'absolute';
        });
    }
});