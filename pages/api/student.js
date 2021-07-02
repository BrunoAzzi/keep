import initAuth from '../../lib/initAuth';
import { getFirebaseAdmin } from 'next-firebase-auth';
import { studentCollection } from 'serialize/student';

initAuth();

const handler = async (req, res) => {
    try {
        console.log(req.body.birthDate);
        const serialized = {
            ...req.body,
            birthDate: getFirebaseAdmin().firestore.Timestamp.fromDate(
                new Date(req.body.birthDate)
            )
        };
        await studentCollection.add(serialized);
        return res.status(200).json({ success: true });
    } catch (error) {
        console.log(error);
        return res.status(422).json({ success: false });
    }
};

export default handler;
