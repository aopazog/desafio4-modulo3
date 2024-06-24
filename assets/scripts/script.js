const propiedades_venta = [
  {nombre: 'La Parva',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: ' Refugio muy lindo',
    ubicacion: 'Lo Barnechea',
    habitaciones: 2,
    costo: 60000000,
  },
  {nombre: 'El Colarado',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Regugio algo antiguo pero cercano a los centros de skies',
    ubicacion: 'Lo Barnechea',
    habitaciones: 3,
    costo: 90000000,
  },
  {nombre: 'Montañita',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: '2do hogar en la región de Aysen',
    ubicacion: 'Región de Aysen',
    habitaciones: 3,
    costo: 50000000,
  },
  {nombre: 'La Cumbre',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Cabañas para remodelación' ,
    ubicacion: 'Región de Magallanes y la Antártica',
    habitaciones: 5,
    costo: 30000000,
    smoke: false,
    pets: true
  }
]

const propiedades_alquiler = [
  {nombre: 'Departamento en las Condes',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Muy bonito, edificio moderno' ,
    ubicacion: 'Región Metropolitana',
    habitaciones: 2,
    costo: 500000,
    smoke: false,
    pets: true
  },
  {nombre: 'Departamento en metro Santa Lucia',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Departamento cercano a universidades de Santiago' ,
    ubicacion: 'Región Metropolitana',
    habitaciones: 3,
    costo: 300000,
    smoke: true,
    pets: true
  },
  {nombre: 'Casa en Villa Alemana',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Casa en condominio en cercano a metro La Concepcción' ,
    ubicacion: 'Villa Alemana',
    habitaciones: 5,
    costo: 400000,
    smoke: false,
    pets: false
  },
  {nombre: 'Casa en Quilpue',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Casa en colinas de oro, de amplio patio en villa Colinas de Oro',
    ubicacion: 'Región de Valparaiso',
    habitaciones: 10,
    costo: 600000,
    smoke: true,
    pets: true
  }
]
function renderPropiedades(propiedades, containerId, limit = null) {
  const container = document.getElementById(containerId);
  let html = '';
  const propsToShow = limit ? propiedades.slice(0, limit) : propiedades;
  for (let prop of propsToShow) {
    html += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${prop.src}" class="card-img-top" alt="Imagen de la propiedad" />
          <div class="card-body">
            <h5 class="card-title">${prop.nombre}</h5>
            <p class="card-text">${prop.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
            <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
              <i class="${prop.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${prop.pets ? 'text-success' : 'text-danger'}">
              <i class="${prop.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>
    `;
  };
  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  if (path.includes('index.html') || path === '/') {
    renderPropiedades(propiedades_venta, 'venta-container', 3);
    renderPropiedades(propiedades_alquiler, 'alquiler-container', 3);
  } else if (path.includes('propiedades_venta.html')) {
    renderPropiedades(propiedades_venta, 'venta-container');
  } else if (path.includes('propiedades_alquiler.html')) {
    renderPropiedades(propiedades_alquiler, 'alquiler-container');
  }
});