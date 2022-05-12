var routes = [
  { path: '/', componentUrl: 'halaman/home.html' },
  {
    path: '/film/', componentUrl: 'halaman/film.html',
    options: {
      transition: 'f7-circle',
    },
  },
  {
    path: '/dfilm/', componentUrl: 'halaman/detail_film.html',
    options: {
      transition: 'f7-circle',
    },
  },
  {
    path: '/mod/', componentUrl: 'halaman/modul.html',
    options: {
      transition: 'f7-circle',
    },
  },
  {
    path: '/dlokal/', componentUrl: 'halaman/datalokal.html',
    options: {
      transition: 'f7-circle',
    },
  },
  {
    path: '/addlokal/', componentUrl: 'halaman/tambahdata.html',
    options: {
      transition: 'f7-circle',
    },
  },
  {
    path: '/manlokal/', componentUrl: 'halaman/keloladata.html',
    options: {
      transition: 'f7-circle',
    },
  },
  {
    path: '/apipublic/', componentUrl: 'halaman/apipublic.html',
    options: {
      transition: 'f7-circle',
    },
  },
  { path: '(.*)', Url: 'pages/404.html' },
]