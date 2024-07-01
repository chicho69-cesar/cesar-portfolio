import { TAGS } from './tags'

export const PROJECTS = {
  'es': [
    {
      title: 'Healthify - Aplicación web para predecir enfermedades con Machine Learning',
      description: 'Healthify es una página web que utiliza modelos de inteligencia artificial creados con Python empleando algoritmos de aprendizaje no supervisado, aprendizaje supervisado y redes neuronales para detectar o predecir enfermedades como la diabetes, hipertensión y enfermedades cardiovasculares.',
      link: 'https://healthify-three.vercel.app/',
      github: 'https://github.com/chicho69-cesar/healthify',
      image: '/projects/healthify.webp',
      tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.PYTHON, TAGS.FLASK, TAGS.AWS, TAGS.MONGODB, TAGS.DOCKER],
    },
    {
      title: 'ExpenseTracker - Aplicación web para controlar tus gastos',
      description: 'Aplicación web para controlar tus gastos, donde puedes agregar, eliminar y editar tus gastos, además de ver el total de tus gastos, filtrarlos por categorías, y observar el balance de tus ingresos y egresos.',
      link: 'https://react-apps-221cd.web.app/',
      image: '/projects/expense-tracker.webp',
      github: 'https://github.com/chicho69-cesar/expense-tracker',
      tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.FIREBASE],
    },
    {
      title: 'Ganadería el Infierno - Sitio web para la venta de ganado',
      description: 'Tienda virtual para la venta de ganado, donde se pueden ver los animales disponibles, ver sus características, y realizar la compra de los mismos. Además de poder ver las noticias y eventos relacionados con la ganadería.',
      link: 'https://ganaderia-el-infierno.vercel.app/',
      image: '/projects/ganaderia.webp',
      github: 'https://github.com/Congal-Club/ganaderia-el-infierno',
      tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND, TAGS.SPRING, TAGS.MYSQL, TAGS.DOCKER],
    },
    {
      title: 'Neto\'s House - Aplicación web para el seguimiento del rol del aseo en vivienda',
      description: 'Aplicación para ver los horarios y las asignaciones de tareas que tiene cada quien, para realizar la limpieza en la casa de renta para estudiantes de la Universidad, donde se especifica el dia y la tarea en la que cada quien deberá realizar sus tareas de limpieza.',
      link: 'https://chicho69-cesar.github.io/neto-house/',
      image: '/projects/netos-house.webp',
      github: 'https://github.com/chicho69-cesar/neto-house',
      tags: [TAGS.REACT, TAGS.TAILWIND],
    },
  ],
  'en': [
    {
      title: 'Healthify - Web application to predict diseases with Machine Learning',
      description: 'Healthify is a website that uses artificial intelligence models created with Python employing unsupervised learning algorithms, supervised learning and neural networks to detect or predict diseases such as diabetes, hypertension and cardiovascular disease.',
      link: 'https://healthify-three.vercel.app/',
      github: 'https://github.com/chicho69-cesar/healthify',
      image: '/projects/healthify.webp',
      tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.PYTHON, TAGS.FLASK, TAGS.AWS, TAGS.MONGODB, TAGS.DOCKER],
    },
    {
      title: 'ExpenseTracker - Web application to track your expenses',
      description: 'Web application to control your expenses, where you can add, delete and edit your expenses, as well as see the total of your expenses, filter them by categories, and see the balance of your income and expenses.',
      link: 'https://react-apps-221cd.web.app/',
      image: '/projects/expense-tracker.webp',
      github: 'https://github.com/chicho69-cesar/expense-tracker',
      tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.FIREBASE],
    },
    {
      title: 'Ganadería el Infierno - Web site for the sale of livestock',
      description: 'Virtual store for the sale of livestock, where you can see the animals available, see their characteristics, and make the purchase of them. In addition to being able to see the news and events related to livestock.',
      link: 'https://ganaderia-el-infierno.vercel.app/',
      image: '/projects/ganaderia.webp',
      github: 'https://github.com/Congal-Club/ganaderia-el-infierno',
      tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND, TAGS.SPRING, TAGS.MYSQL, TAGS.DOCKER],
    },
    {
      title: 'Neto\'s House - Web application for tracking the role of housekeeping in the home',
      description: 'Application to view the schedules and homework assignments that each person has, to perform the cleaning in the rental house for students of the University, where the day and the task in which each person must perform their cleaning tasks is specified.',
      link: 'https://chicho69-cesar.github.io/neto-house/',
      image: '/projects/netos-house.webp',
      github: 'https://github.com/chicho69-cesar/neto-house',
      tags: [TAGS.REACT, TAGS.TAILWIND],
    },
  ]
} as any
