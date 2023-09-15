/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    X_RapidAPI_Key: process.env.X_RapidAPI_Key,
    X_RapidAPI_Host: process.env.X_RapidAPI_Host,
  },
  images: {
    domains : ['cdn-icons-png.flaticon.com', 'image.tmdb.org', 'media.istockphoto.com', 'm.media-amazon.com', "cdn.iconscout.com", "www.themoviedb.org", "v3img.voot.com", "dfstudio-d420.kxcdn.com","img.lovepik.com", "altabel.files.wordpress.com"]
  }
}

module.exports = nextConfig
