// comment here again, 6
module.exports = {
    seo: {
        "title": "FastStore",
        "description": "A fast and performant store framework",
        "titleTemplate": "%s | FastStore",
        "author": "FastStore"
    },

    // Theming
    theme: 'custom-theme',

    // Ecommerce Platform
    platform: 'vtex',

    // Platform specific configs for API
    api: {
        storeId: "todddesantis",
        workspace: 'master',
        environment: 'vtexcommercestable',
        hideUnavailableItems: true,
        incrementAddress: false,
    },

    // Default session
    session: {
        currency: {
            code: "USD",
            symbol: "$",
        },
        locale: "en-US",
        channel: '{"salesChannel":1,"regionId":""}',
        country: "USA",
        deliveryMode: null,
        addressType: null,
        postalCode: null,
        geoCoordinates: null,
        person: null,
    },

    cart: {
        id: '',
        items: [],
        messages: [],
        shouldSplitItem: true,
    },

    // Production URLs
    /*storeUrl: "https://todddesantis.vtex.app",
    secureSubdomain: "https://secure.vtexfaststore.com/",
    checkoutUrl: "https://secure.vtexfaststore.com/checkout",
    loginUrl: "https://secure.vtexfaststore.com/api/io/login",
    accountUrl: "https://secure.vtexfaststore.com/api/io/account",*/

    storeUrl: "https://toddfaststore.com",
    secureSubdomain: "https://secure.toddfaststore.com/",
    checkoutUrl: "https://secure.toddfaststore.com/checkout",
    loginUrl: "https://secure.toddfaststore.com/api/io/login",
    accountUrl: "https://secure.toddfaststore.com/api/io/account",

    previewRedirects: {
        home: '/',
        plp: "/apparel",
        search: "/s?q=Carhartt",
        pdp: "/winter-hat/p",
    },

    // Lighthouse CI
    lighthouse: {
        server: process.env.BASE_SITE_URL || 'http://localhost:3000',
        pages: {
            home: '/',
            pdp: "/winter-hat/p",
            collection: "/apparel",
        },
    },

    // E2E CI
    cypress: {
        pages: {
            home: '/',
            pdp: "/winter-hat/p",
            collection: "/apparel",
            collection_filtered: "/apparel/?category-1=apparel&brand=Carhartt&facets=category-1%2Cbrand%27",
            search: "/s?q=Carhartt",
        },
        browser: 'electron',
    },

    analytics: {
        // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
        gtmContainerId: "GTM-1234567",
    },

    experimental: {
        nodeVersion: 18,
        cypressVersion: 12,
    },

    vtexHeadlessCms: {
        webhookUrls: [
            "https://todddesantis.myvtex.com/cms-releases/webhook-releases",
        ],
    },
}
