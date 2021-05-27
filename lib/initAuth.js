import { init } from 'next-firebase-auth';

const initAuth = () => {
    init({
        authPageURL: '/signin',
        appPageURL: '/',
        loginAPIEndpoint: '/api/login', // required
        logoutAPIEndpoint: '/api/logout', // required
        // Required in most cases.
        firebaseAdminInitConfig: {
            credential: {
                projectId: 'keep-cc114',
                clientEmail:
                    'firebase-adminsdk-up8cj@keep-cc114.iam.gserviceaccount.com',
                // The private key must not be accesssible on the client side.
                privateKey:
                    process.env.FIREBASE_PRIVATE_KEY &&
                    process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
            },
            databaseURL: 'https://my-example-app.firebaseio.com'
        },
        firebaseClientInitConfig: {
            apiKey: 'AIzaSyAzn39ZqvMEV4qoQh_JWFIpjpScsjilBf4', // required
            authDomain: 'keep-cc114.firebaseapp.com',
            databaseURL: 'https://keep-cc114-default-rtdb.firebaseio.com/',
            projectId: 'keep-cc114'
        },
        cookies: {
            name: 'Keep', // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: true, // set this to false in local (non-HTTPS) development
            signed: true
        }
    });
};

export default initAuth;
