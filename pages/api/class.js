import initAuth from '../../lib/initAuth'; // the module you created above
import { classCollection } from 'serialize/class';
import { getFirebaseAdmin } from 'next-firebase-auth';

initAuth();

const handler = async (req, res) => {
    const firestore = getFirebaseAdmin().firestore();

    try {
        const serialized = {
            ...req.body,
            teacher: firestore.doc('/teacher/' + req.body.teacher),
            startDate: getFirebaseAdmin().firestore.Timestamp.fromDate(
                new Date(req.body.startDate)
            ),
            endDate: getFirebaseAdmin().firestore.Timestamp.fromDate(
                new Date(req.body.endDate)
            ),
            studentList: req.body.studentList.map(studentId =>
                firestore.doc('/student/' + studentId)
            )
        };
        await classCollection.add(serialized);
        return res.status(200).json({ success: true });
    } catch (error) {
        console.log(error);
        return res.status(422).json({ success: false });
    }
};

export default handler;
