import initAuth from '../../lib/initAuth';
import { getFirebaseAdmin } from 'next-firebase-auth';
import { teacherCollection } from 'serialize/teacher';

initAuth();

const handler = async (req, res) => {
    try {
        const serialized = {
            ...req.body,
            avatar:
                req.body.avatar ||
                `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y`,
            birthDate: getFirebaseAdmin().firestore.Timestamp.fromDate(
                new Date(req.body.birthDate)
            )
        };
        await teacherCollection.add(serialized);
        return res.status(200).json({ success: true });
    } catch (error) {
        console.log(error);
        return res.status(422).json({ success: false });
    }
};

export default handler;
