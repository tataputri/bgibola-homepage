// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
const baseUrl = "https://bgibola.org"
const featuredImage = {
	url: 'https://1.bp.blogspot.com/-5Ole9iUAwLc/X_Pxs-OS4II/AAAAAAAAM_A/xv7JVyQRNasqwXvmt-33dY8aNrbGuRYSQCLcBGAsYHQ/s0/bgr1.jpg',
	alt: "BGIBOLA"
}
const logo = {
	url: '/bgibola-logo.png',
	alt: "BGIBOLA Logo"
}
const publisher = {
	name: "BGIBOLA",
	url: baseUrl,
	logo: "https://cdn.infohalu.xyz/wp-content/uploads/2021/10/Logobgibola.png",
}
const author = {
	name: "BGIBOLA",
	url: baseUrl,
	logo: "https://cdn.infohalu.xyz/wp-content/uploads/2021/10/Logobgibola.png",
}
const siteName = "BGIBOLA",
	siteLink = 'https://bgibola7.lol/',
	siteShortName = "BGIBOLA",
	siteTitle = "NobarTV | BGiBola | Situs Live Streaming Nonton Bola Online Gratis.",
	siteDescription = "NobartV | BGiBola adalah situs nonton bola dan basket online gratis dengan kualitas HD tanpa buffering.",
	keywords = "Nonton Bola, Nonton Bola Online, NobarTV, HDTVKU, Live Streaming Bola, Nonton Sepakbola, Live Streaming Sepakbola, Nonton Bola Basket, Nonton Bola Tanpa Buffering, Nonton Bola Kualitas HD, Nonton Bola Hari Ini, Nonton Badminton, Nonton Basket, Nonton NBA, Nonton UFC, Jadwal Bola Hari Ini, Jadwal Liga Champions, Nonton Liga Champion, Nonton Liga Inggris, Nonton Liga Italia, Nonton Liga Spanyol, Nonton Bundesliga,Streaming Bola, Euro 2020, Nonton Euro 2020, Prediksi Bola, Prediksi Bola Hari ini"

export const seoConfig = {
	publisher, author, siteLink, keywords,
	title: siteTitle,
	baseURL: baseUrl, // Change this to your production URL.
	description: siteDescription, // Change this to be your website's description.
	type: "website",
	image: {
		url: featuredImage.url, // Change this to your website's thumbnail.
		alt: featuredImage.alt, // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	logo,
	siteName: siteName, // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	},
	extend: {
		// <link rel="preload" as="image" href="https://i.postimg.cc/yxtjcCFk/slot-gacor.jpg"/>
		link: [
			{
				rel: "preload", as: "image", href: "/bgibola-logo.png"
			},
		],
		meta: [
			{ name: "HandheldFriendly", content: "true" },
			{ name: "MobileOptimized", content: "width" },
			{ name: "language", content: "indonesia" },
			{ name: "page-locale", content: "id,en" },
		]
	}
}




/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: siteName, // Change this to your website's name.
	short_name: siteShortName, // Change this to your website's short name.
	description: seoConfig.description, // Change this to your websites description.
	theme_color: "#30E130", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
