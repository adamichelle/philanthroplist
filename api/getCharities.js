const db = require('./lib/firebase');

module.exports = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit
    try {
        const collectionRef = db.collection('charities').orderBy("name").limit(limit).offset(offset);
        const snapshot = await collectionRef.get();
        let charities = [];
        snapshot.forEach((doc) => {
            let charity = doc.data();
            charity.id = doc.id;
            charities.push(charity)
        });
        res.status(200).json({ success: true, data: charities, message: "charities received" });
    } catch (error) {
        res.status(500).json({ success:false, data: null, message: "An error occured. Error:" + error.message })
    }
}