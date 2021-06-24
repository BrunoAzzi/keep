module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard/class',
                permanent: true
            }
        ];
    }
};
