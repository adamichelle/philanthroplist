const db = require('./lib/firebase');

module.exports = async (req, res) => {
    const { category } = req.query;

    const charityDocRef = db.collection('charities').doc(id);
    const charityDoc = await charityDocRef.get();

    if(!charityDoc.exists) 
    res.status(404).json({ success: false, data: null, message: "Charity not found" });
    else
    res.status(200).json({ success: true, data: charityDoc._fieldsProto, message: "Charity found" });
}