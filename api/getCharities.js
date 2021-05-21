const db = require('./lib/firebase');
const qs = require('querystring');

module.exports = async (req, res) => {
    let { page = 1, limit = 10, area_of_focus } = req.query;

    page = parseInt(page);
    limit = parseInt(limit)
    const offset = (page - 1) * limit
    try {
        let collectionRef;
        let countCollectionRef;

        if(area_of_focus) {
            if(!Array.isArray(area_of_focus)) {
                const item = area_of_focus;
                area_of_focus = [];
                area_of_focus.push(item);
            }

            collectionRef = db.collection('charities')
                            .where('area_of_focus', 'array-contains-any', area_of_focus)
                            .orderBy("name")
                            .limit(limit)
                            .offset(offset);
            countCollectionRef = db.collection('charities')
            .where('area_of_focus', 'array-contains-any', area_of_focus)
        }
        else {
            collectionRef = db.collection('charities')
                            .orderBy("name")
                            .limit(limit)
                            .offset(offset);
            countCollectionRef = db.collection('charities')
        }
        
        const snapshot = await collectionRef.get();
        const snapshot1 = await countCollectionRef.get();
        const total = snapshot1.docs.length;
        let charities = [];
        snapshot.forEach((doc) => {
            let charity = doc.data();
            charity.id = doc.id;
            charities.push(charity)
        });
        res.status(200).json({ success: true, data: { charities: charities, total: total }, message: "Charities Retrieved" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success:false, data: null, message: "An error occured. Error:" + error.message })
    }
}