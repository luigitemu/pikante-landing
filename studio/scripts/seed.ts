// Run with: npx sanity exec scripts/seed.ts --with-user-token
// One-off migration of the site's current hardcoded copy/images into Sanity.
// Safe to re-run: uploads are content-hashed by Sanity, docs are createOrReplace.

import fs from 'node:fs'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'

const client = getCliClient()

const IMAGES_DIR = path.resolve(__dirname, '../../src/images')

async function uploadImage(filename: string) {
  const filePath = path.join(IMAGES_DIR, filename)
  const asset = await client.assets.upload('image', fs.createReadStream(filePath), {filename})
  return {_type: 'image' as const, asset: {_type: 'reference' as const, _ref: asset._id}}
}

async function main() {
  console.log('Uploading images…')
  const [
    escarchaImg,
    hieloImg,
    heroFireImg,
    productLimesImg,
    lifestyleNightImg,
    lifestylePoolImg,
    logoImg,
    productsRowImg,
  ] = await Promise.all([
    uploadImage('pikante_escarcha.webp'),
    uploadImage('pikante_hielo.webp'),
    uploadImage('hero-fire.webp'),
    uploadImage('product-limes.webp'),
    uploadImage('lifestyle-night.webp'),
    uploadImage('lifestyle-pool.webp'),
    uploadImage('logo.png'),
    uploadImage('products-row.webp'),
  ])

  const block = (text: string) => [
    {
      _type: 'block',
      style: 'normal',
      children: [{_type: 'span', text}],
    },
  ]

  const docs = [
    {
      _id: 'hero',
      _type: 'hero',
      eyebrowLeft: 'Mix para michelada',
      eyebrowRight: 'Producto 100% Hondureño',
      headlinePrefix: 'El Mejor',
      headlineEmphasis: 'Mix',
      headlineMid: 'para tus',
      headlineStroke: 'Micheladas',
      ctaLabel: 'Ver sabores',
      ctaHref: '#sabores',
      metrics: [
        {_type: 'metric', _key: 'm1', value: '$', label: 'La más accesible del mercado'},
        {_type: 'metric', _key: 'm2', value: '15s', label: 'Prepárala en tiempo record'},
        {_type: 'metric', _key: 'm3', value: 'HN', label: 'Hecho en Honduras'},
      ],
      prepVideo: {
        kicker: 'Party · Friends · Vibes',
        tag: 'Reel · 00:08 al primer trago',
        headingPrefix: 'Mírala',
        headingEmphasis: 'en acción.',
        description: '15 segundos son suficientes para que te prepares la mejor michelada, Pikanté.',
      },
    },
    {
      _id: 'marquee',
      _type: 'marquee',
      items: ['PIKANTÉ', 'Hecho en Honduras', 'Michemix', 'Hecho en Honduras', 'Sabor auténtico', 'Micheladas'],
    },
    {
      _id: 'whatIs',
      _type: 'whatIs',
      eyebrow: '03 / Qué es',
      headlinePrefix: 'Sirve. Mezcla.',
      headlineEmphasis: 'Disfrútala.',
      intro: 'PIKANTÉ es el mix que transforma cualquier cerveza en una michelada brutal.',
      items: [
        {_key: 'w1', title: 'Ingredientes de calidad.', description: 'Seleccionados para que disfrutes la mejor experiencia.'},
        {_key: 'w2', title: 'Picante perfecto.', description: 'Calibrado para que pique rico, no para que sufras. Dos niveles según tu temperatura.'},
        {_key: 'w3', title: 'Fácil de preparar.', description: 'Escarcha el vaso, hielo para que refresque, agrega michemix PIKANTÉ y acompáñala con tu cerveza favorita. Listo.'},
        {_key: 'w4', title: 'Ideal para compartir entre amigos.', description: 'Que no te falten las micheladas PIKANTÉ en cada fiesta con tus amigos. Para que disfrutes la mejor experiencia.'},
      ],
    },
    {
      _id: 'howTo',
      _type: 'howTo',
      eyebrow: '02 / Cómo se prepara',
      headlinePrefix: 'Tres pasos.',
      headlineEmphasis: 'Cero pretexto.',
      intro: '15 segundos son suficientes para que te prepares la mejor michelada Pikanté.',
      steps: [
        {
          _key: 's1',
          stepLabel: 'Paso 01',
          title: 'Escarcha el vaso',
          description: 'Chamoy al borde, escarchado con tajín.',
          image: {...escarchaImg, alt: 'Escarchar el vaso con limon y chile'},
        },
        {
          _key: 's2',
          stepLabel: 'Paso 02',
          title: 'Hielo + PIKANTÉ + Cerveza',
          description: 'Hielo al tope, 100 ml del michemix PIKANTÉ y completa con tu cerveza favorita.',
          image: {...hieloImg, alt: 'Agregar cerveza y PIKANTÉ'},
        },
        {
          _key: 's3',
          stepLabel: 'Paso 03',
          title: '¡Disfruta de un elixirrr!',
          description: '¡Y brinda por la buena vida!',
          image: {...heroFireImg, alt: 'Disfrutar la michelada PIKANTÉ'},
        },
      ],
    },
    {
      _id: 'products',
      _type: 'products',
      eyebrow: '01 / Sabores',
      headlinePrefix: 'Elegí tu',
      headlineEmphasis: 'PIKANTÉ favorito',
      intro: 'Dos sabores. Tres presentaciones. Diferentes formas de disfrutarlo.',
      items: [
        {
          _key: 'p1',
          name: 'Versión picante',
          tag: 'Más vendido',
          description: block('La mas pedida por todos a base de clamato, picor intenso, limon y salsas especiales.'),
          image: {...productLimesImg, alt: 'PIKANTÉ Original'},
          heatLevel: 3,
          price250: '70',
          price570: '150',
          price1L: '260',
        },
        {
          _key: 'p2',
          name: 'Versión suave',
          description: block('Algo suave diseñado para tu paladar a base de clamato, picor suave, limón y salsas especiales.'),
          image: {...lifestyleNightImg, alt: 'PIKANTÉ Verde'},
          heatLevel: 2,
          price250: '70',
          price570: '150',
          price1L: '260',
        },
      ],
    },
    {
      _id: 'stores',
      _type: 'stores',
      eyebrow: '04 / Dónde encontrarlo',
      headlinePrefix: 'Encuéntralo',
      headlineEmphasis: 'aquí cerca.',
      intro: 'PIKANTÉ ya está en pulperías, supermercados y restaurantes de tu zona. Si no lo ves en tu tiendita, pídelo — andamos creciendo.',
      cities: [
        {
          _key: 'c1',
          city: 'Tegucigalpa',
          dept: 'Francisco Morazán',
          code: 'TGU',
          featured: false,
          places: [{_key: 'pl1', name: 'Carnicería El Corte', type: 'Carnicería'}],
        },
        {
          _key: 'c2',
          city: 'Gracias',
          dept: 'Lempira',
          code: 'GRA',
          featured: true,
          places: [
            {_key: 'pl1', name: 'Texaco Las Torres', type: 'Estación'},
            {_key: 'pl2', name: 'Supermercado Denisse', type: 'Supermercado'},
            {_key: 'pl3', name: 'Minisuper Yaqui', type: 'Minisuper'},
            {_key: 'pl4', name: 'Supermercado Sarahí', type: 'Supermercado'},
            {_key: 'pl5', name: 'Supermercado Mi Súper', type: 'Supermercado'},
            {_key: 'pl6', name: 'Market Punto Básico', type: 'Market'},
            {_key: 'pl7', name: 'Inversiones DAYSA', type: 'Distribuidora'},
            {_key: 'pl8', name: 'Restaurante Villa Alicia', type: 'Restaurante'},
          ],
        },
        {
          _key: 'c3',
          city: 'Lepaera',
          dept: 'Lempira',
          code: 'LPA',
          featured: false,
          places: [{_key: 'pl1', name: "Elena's Bakery", type: 'Repostería'}],
        },
      ],
      ctaHeading: 'Únete a la familia PIKANTÉ y se parte del sabor que prende.',
      ctaSubtext: 'Producto 5 estrellas, 100% hondureño.',
      ctaButtonLabel: 'Contáctanos',
      ctaButtonHref: 'https://wa.me/+50497864648',
    },
    {
      _id: 'lifestyle',
      _type: 'lifestyle',
      eyebrow: '05 / Vida PIKANTÉ',
      headlinePrefix: 'PIKANTÉ no se toma.',
      headlineEmphasis: 'Se disfruta.',
      tags: ['Rooftop', 'Asados', 'Elixir', 'Amigos', 'Después de la potra', 'Party'],
      backgroundImage: {...lifestylePoolImg, alt: 'PIKANTÉ en la fiesta'},
    },
    {
      _id: 'socialProof',
      _type: 'socialProof',
      eyebrow: '04 / Prueba social',
      headlinePrefix: 'No nos',
      headlineEmphasis: 'creas a nosotros.',
      intro: 'Cuatro mil setecientas resenas. La banda no miente cuando el trago esta bueno.',
      stats: [
        {_key: 'st1', value: '+10K', label: 'Clientes felices'},
        {_key: 'st2', value: '+50K', label: 'Micheladas servidas'},
        {_key: 'st3', value: '4.9/5', label: 'Promedio · 2,847 resenas'},
        {_key: 'st4', value: '18', label: 'Departamentos con envio'},
      ],
      reviews: [
        {
          _key: 'r1',
          stars: 5,
          quote: 'La mejor michelada que he probado en mi pinche vida.',
          authorInitials: 'AM',
          authorName: 'Andrea M.',
          authorLocation: 'Tegucigalpa',
        },
        {
          _key: 'r2',
          stars: 5,
          quote: 'Perfecta para cualquier reunion. Acabo la botella en una tarde.',
          authorInitials: 'SR',
          authorName: 'Sebastian R.',
          authorLocation: 'Gracias, Lempira',
        },
        {
          _key: 'r3',
          stars: 5,
          quote: 'Sabe premium. Punto. Ya pedi caja para el verano.',
          authorInitials: 'DV',
          authorName: 'Daniela V.',
          authorLocation: 'Tegucigalpa',
        },
      ],
    },
    {
      _id: 'offer',
      _type: 'offer',
      eyebrow: '06 / Oferta de lanzamiento',
      headlinePrefix: 'Lleva 3',
      headlineEmphasis: 'y recibe 1 gratis.',
      intro: 'Caja de 4 botellas al precio de 3, con envio gratis a todo Honduras. Stock limitado a 1,000 cajas — cuando se acabe, se acabo.',
      perks: [
        '4 botellas Pikanté · sabor a elegir',
        'Envio gratis · 24-48h habiles',
        'Garantia: si no te enciende, te devolvemos',
      ],
      countdownHours: 18,
      countdownMinutes: 23,
      ctaLabel: 'Quiero mi Pikanté',
      ctaHref: '#sabores',
      image: {...productsRowImg, alt: 'Caja Pikanté de 4 botellas'},
    },
    {
      _id: 'faq',
      _type: 'faq',
      eyebrow: '05 / Dudas frecuentes',
      headlinePrefix: 'Preguntas',
      headlineEmphasis: 'Frecuentes.',
      intro: 'Lo que nos pregunta antes, durante y después de la primera botella.',
      items: [
        {_key: 'f1', question: '¿Con qué cerveza se sirve?', answer: block('PIKANTÉ está diseñada para que la disfrutes con tu cerveza favorita. Si la cerveza está fría, la michelada está lista.')},
        {_key: 'f2', question: '¿Qué tan picante es?', answer: block('La versión Suave no pica mucho (1/5); la versión Picante pica rico (3/5). Todas están calibradas para que las disfrutes, no para que sufras.')},
        {_key: 'f3', question: '¿Tiene alcohol?', answer: block('No. PIKANTÉ es el mix — tú le pones la cerveza. La botella sola es 0% alcohol. Así que también funciona para que disfrutes tus chamoyadas o cualquier cóctel de tu preferencia.')},
        {_key: 'f4', question: '¿Cuánto dura?', answer: block('Refrigerada hasta 4 meses. Abierta 30 días bajo refrigeración.')},
        {_key: 'f5', question: '¿Hacen envíos?', answer: block('A los 18 departamentos de Honduras. Entregas a domicilio en 24-48 horas posteriores a tu pedido.')},
      ],
    },
    {
      _id: 'footer',
      _type: 'footer',
      logo: {...logoImg, alt: 'Pikanté'},
      tagline: 'Síguenos en nuestras redes sociales.',
      socialLinks: [
        {_key: 'sl1', platform: 'instagram', url: 'https://www.instagram.com/pikantehn?igsh=bnczZDhkMzZnNWxm&utm_source=qr'},
        {_key: 'sl2', platform: 'tiktok', url: 'https://www.tiktok.com/@pikantehn?_r=1&_t=ZS-96VGsdTFTAz'},
        {_key: 'sl3', platform: 'whatsapp', url: 'https://wa.me/+50497864648'},
      ],
      copyrightText: '© 2026 PIKANTÉ HN · Todos los derechos reservados',
      distributorText: 'Elaborado y distribuido por Grupo Futura · Hecho en Honduras',
    },
  ]

  console.log('Writing documents…')
  const tx = client.transaction()
  for (const doc of docs) tx.createOrReplace(doc as any)
  await tx.commit()

  console.log(`Seeded ${docs.length} documents.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
