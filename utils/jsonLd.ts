import { seoConfig } from "./seoConfig";

export const jsonLd = {
	org: {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": seoConfig.siteName,
		"alternateName": seoConfig.siteName,
		"url": seoConfig.baseURL,
		"logo": seoConfig.image.url,
		"sameAs": seoConfig.baseURL
	},
	article: {
		"@context": "https://schema.org",
		"@type": "Article",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": seoConfig.baseURL
		},
		"headline": seoConfig.title,
		"description": seoConfig.description,
		"image": [
			seoConfig.image.url
		],
		"author": {
			"@type": "Organization",
			"name": seoConfig.siteName,
			"url": seoConfig.baseURL
		},
		"publisher": {
			"@type": "Organization",
			"name": seoConfig.siteName,
			"logo": {
				"@type": "ImageObject",
				"url": seoConfig.publisher.logo
			}
		}
	},

	breadcrumbList: {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": seoConfig.baseURL
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": seoConfig.author.name,
				"item": seoConfig.baseURL
			},
			{
				"@type": "ListItem",
				"position": 3,
				"name": seoConfig.title
			}
		]
	}
}
