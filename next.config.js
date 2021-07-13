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
                destination: '/branch',
                permanent: true
            },
            {
                source: '/branch/[branch]',
                destination: '/branch/[branch]/dashboard/class',
                permanent: true
            }
        ];
    }
};
