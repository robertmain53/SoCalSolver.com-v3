import process from 'node:process'

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify',
    ssr: true,
    future: {
      nativeSWR: false,
      crawlLinks: false,
      failOnError: false, 
    },
  },
  css: ['~/assets/css/main.css'],
modules: [
  '@nuxtjs/i18n',
  '@vite-pwa/nuxt',
],

pwa: {
  registerType: 'autoUpdate',
  manifest: {
    name: 'CalcHub',
    short_name: 'CalcHub',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    start_url: '/',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
},

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-security',
    '@nuxt/fonts',
    'nitro-cloudflare-dev',
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
    storageKey: 'xanzhu-color-mode',
  },

  // i18n V10
  i18n: {
    messages: {
        en: {
          Finance: 'Finance',
          Mathematics: 'Mathematics',
          
        },
        fr: {
          Finance: 'Finance',
          Mathematics: 'Mathématiques',
        
    
        },

                it: {
          Finance: 'Finanza',
          Mathematics: 'Matematica',
        
    
        },
                    es: {
          Finance: 'Finanza',
          Mathematics: 'Matematica',
        
    
        },

      },
    lazy: false,
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        language: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'it',
        language: 'it',
        name: 'it',
        file: 'it.json',
      },
      {
        code: 'es',
        language: 'es',
        name: 'es',
        file: 'es.json',
      },
      {
        code: 'fr',
        language: 'fr',
        name: 'fr',
        file: 'fr.json',
      },
      {
        code: 'ko',
        language: 'ko',
        name: '한국어',
        file: 'ko.json',
      },
      {
        code: 'zh',
        language: 'zh',
        name: '中文',
        file: 'zh.json',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: '0002',
      redirectOn: 'root',
      cookieSecure: true,
    },
    hmr: true,
  },

  site: {
    url: 'https://socalsolver.com',
    name: 'SoCalSolver',
  },

  sitemap: {
    autoI18n: true,
    strictNuxtContentPaths: false,
    autoLastmod: true,
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '50%' },
    ],
    xslTips: false,
    credits: false,
  },

  image: {
    domains: ['socalsolver.com'],
  },

  content: {
    defaultLocale: 'en',
    markdown: {
      // Register custom components for :::explain, :::learn, :::challenge
      mdc: {
        components: {
          explain: '~/app/components/content/ExplainBlock.vue',
          learn: '~/app/components/content/LearnBlock.vue',
          challenge: '~/app/components/content/ChallengeBlock.vue',
        }
      }
    }
  },


  // ICON
  icon: {
    provider: 'iconify',
    mode: 'svg',
  },

  // SECURITY V1.5
  security: {
    nonce: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: true,
    },
    headers: {
      contentSecurityPolicy: {
        'default-src': ['\'self\'', 'https://*.socalsolver.com'],
        'script-src': [
          '\'self\'',
          '\'strict-dynamic\'',
          '\'nonce-{{nonce}}\'',
          '\'unsafe-inline\'',
          'https://*.socalsolver.com',
        ],
        'style-src': ['\'self\'', '\'unsafe-inline\''],
        'base-uri': '\'none\'',
        'img-src': [
          '\'self\'',
          'https://cdn.socalsolver.com',
          'https://assets.lotofcarrots.com/media/home/section/desktop/4.webp',
          'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/AI_features_feb6.gif',
          'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/feb_6_AI_hero.width-1000.format-webp.webp',
          'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/KW_Fig1.width-1000.format-webp.webp',
          'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/KW_Fig4.width-1000.format-webp.webp',
        ],
        'media-src': [
          'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/Super_G_BRD2023_blogEXP_v024a.mp4',
          'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/Docs_Web_030623_1.mp4',
          'https://storage.quantum-engine.ai/Rabbits_Factory_4K_h264.mp4',
          'https://assets.lotofcarrots.com/media/home/section/desktop/4.mp4',
          'https://www.apple.com/105/media/us/macbook-air-13-and-15/2023/f52c7a72-dff4-4f3c-9511-bf08e46c6f5f/anim/design/hero/medium_2x.mp4',
          'https://www.apple.com/105/media/us/macos/sonoma-preview/2023/e6d837c5-8a7e-49d8-b0bd-137b21320db3/anim/share-preview/large_2x.mp4',
        ],
        'font-src': ['\'self\''],
        'object-src': ['\'none\''],
        'script-src-attr': ['\'none\''],
        'connect-src': [
          '\'self\'',
          'https://*.socalsolver.com',
          'https://api.weatherapi.com',
          'https://api.iconify.design',
          ...(process.env.NODE_ENV === 'development'
            ? ['ws://localhost:4000']
            : []),
        ],
        'frame-src': [
          '\'self\'',
          'https://www.youtube.com',
          'https://youtube.com',
        ],
      },
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
        preload: true,
      },
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === 'development'
          ? 'unsafe-none'
          : 'credentialless',
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginResourcePolicy: 'same-origin',
    },
    sri: true,
  },

  robots: {
    disallow: process.env.NODE_ENV === 'development' ? '/' : '',
  },

  compatibilityDate: '2025-05-15',

  // Experimental Features
  experimental: {
    // buildCache: true,
    headNext: true,
  },
  future: {
    compatibilityVersion: 4,
  },

  // Testing features
  sourcemap: false,

  // removed duplicate/invalid config block after closing })
});