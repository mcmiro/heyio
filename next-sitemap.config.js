const siteUrl = "https://heyio.at/";
const config = {
    siteUrl,
    exclude: ["/404"],
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/"],
            },
           /* { userAgent: "*", allow: "/" },*/
        ],
    },
}

module.exports = config;