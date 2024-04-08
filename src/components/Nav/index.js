const navigationData = {
  routes: [
    {
      title: 'materiały',
      href: '/wterapii/materials',
      el: [
        {elTitle: 'zaburzenia dorosłych', elHref: '/wterapii/material/adults'},
        {elTitle: 'zaburzenia dzieci', elHref: '/wterapii/material/children'},
        {elTitle: 'dokumenty', elHref: '/wterapii/material/documents'},
        {elTitle: 'materiały', elHref: '/wterapii/material/materials'},
        {
          elTitle: 'materiały dostępne w sieci',
          elHref: '/wterapii/material/network',
        },
        {
          elTitle: 'kwestionariusze',
          elHref: '/wterapii/material/questionnaire',
        },
      ],
    },
    {
      title: 'książki',
      href: '/wterapii/books',
      el: [
        {
          elTitle: 'książki dla pacjentów',
          elHref: '/wterapii/books/booksForPatients',
        },
        {
          elTitle: 'książki dla terapeutów',
          elHref: '/wterapii/books/booksForTherapists',
        },
        {elTitle: 'nowości', elHref: '/wterapii/books/latestBooks'},
      ],
    },
    {
      title: 'źródła intenetowe',
      href: '/wterapii/internetSources',
    },
    {
      title: 'baza wiedzy',
      href: '/wterapii/knowledgeBase',
      el: [
        {
          title: 'artykuły i opracowania własne',
          href: '/wterapii/knowledgeBase/authoredArticles',
        },
        {
          elTitle: 'studia przypadków',
          elHref: '/wterapii/knowledgeBase/caseStudy',
        },
        {elTitle: 'eksperci na temat książek i programów', elHref: 'experts'},
        {
          elTitle: 'omówienie badań i artukułów',
          elHref: '/wterapii/knowledgeBase/studiesAndArticles',
        },
      ],
    },
    {
      title: 'nowości',
      href: '/wterapii/news',
    },
    {
      title: 'narzędzie internetowe',
      href: '/wterapii/onlineTools',
      el: [
        {title: 'artykuły', href: 'wterapii/onlineTools/articles'},
        {elTitle: 'narzędzia', elHref: 'wterapii/onlineTools/tools'},
      ],
    },
    {
      title: 'webinars',
      href: '/wterapii/webinars',
      el: [
        {
          eltitle: 'rozmowy o terapii',
          href: '/wterapii/webinars/conversationsAboutTherapy',
        },
        {
          elTitle: 'uczymy terapii',
          elHref: '/wterapii/webinars/weAreLearningTherapy',
        },
      ],
    },
  ],
  booksRoutes: [
    {title: 'navigation.booksForPatients', href: '/booksForPatients'},
    {title: 'navigation.booksForTherapists', href: '/booksForTherapists'},
    {title: 'navigation.latestBooks', href: '/latestBooks'},
  ],
  knowledgeBaseRoutes: [
    {title: 'navigation.authoredArticles', href: '/authoredArticles'},
    {title: 'navigation.caseStudy', href: '/caseStudy'},
    {title: 'navigation.experts', href: '/experts'},
    {title: 'navigation.studiesAndArticles', href: '/studiesAndArticles'},
  ],
  materialsRoutes: [
    {title: 'navigation.adults', href: '/adults'},
    {title: 'navigation.children', href: '/children'},
    {title: 'navigation.documents', href: '/documents'},
    {title: 'navigation.materials', href: '/materials'},
    {title: 'navigation.network', href: '/network'},
    {title: 'navigation.questionnaire', href: '/questionnaire'},
  ],
  onlineToolsRoutes: [
    {title: 'navigation.articles', href: '/articles'},
    {title: 'navigation.tools', href: '/tools'},
  ],
  webinarsRoutes: [
    {
      title: 'navigation.conversationsAboutTherapy',
      href: '/conversationsAboutTherapy',
    },
    {title: 'navigation.weAreLearningTherapy', href: '/weAreLearningTherapy'},
  ],
}
export default navigationData
