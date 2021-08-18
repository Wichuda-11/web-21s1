const { db } = require('../_services/firebase-admin-initialized')

const cinemaList = async (req, res) => {
  const query = db.collection('cinemas')
    .orderBy('city')
    .orderBy('name')
    .get()

  const cinemas = (await query).docs.map(doc => doc.data())

  res.render('cinema-list', { cinemas })
}

module.exports = {
  cinemaList

}
