const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://docs.mamadil.com.my",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://lh3.googleusercontent.com/-u2MrKZ3UJcI/Xg2LVSBSybI/AAAAAAAAAnQ/u-hBqi4u3_c9sDKuXt9bOuctvNBIG-BxwCEwYBhgL/w278-h280-p/2020-01-01.png",
		"logoLink": "https://docs.mamadil.com.my",
		"title": "Mamadil Documentation",
		"githubUrl": "https://github.com/elienblog/gatsby-gitbook-starter",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "Mamadil_docs",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/codeblock"
		],
    	"collapsedNav": [
      		"/codeblock"
    	],
		"links": [
			{ "text": "Hasura", "link": "https://mamadil.com.my"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Mamadil Documentation | Mamadil",
		"description": "Documentation built with mdx.",
		"ogImage": null,
		"docsLocation": "https://github.com/elienblog/gatsby-gitbook-starter",
		"favicon":"https://lh3.googleusercontent.com/-u2MrKZ3UJcI/Xg2LVSBSybI/AAAAAAAAAnQ/u-hBqi4u3_c9sDKuXt9bOuctvNBIG-BxwCEwYBhgL/w278-h280-p/2020-01-01.png"
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Mamadil Documentation",
			"short_name": "MamadilDocs",
			"start_url": "/",
			"background_color": "#5c0a81",
			"theme_color": "#5c0a81",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
