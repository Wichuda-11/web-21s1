const { db } = require('../_services/firebase-admin-initialized')

const cinemaList = async (req, res) => {
  const query = db.collection('cinemas')
    .orderBy('city')
    .orderBy('name')
    .get()

  const cinemaList = (await query).docs.map(doc => doc.data())

  res.render('cinema-list', { cinemaList })
}

const cinemaDetails = async (req, res) => {
  try {
    const slug = req.params.slug

    const queryCinema = db.collection('cinemas')
      .doc(slug)
      .get()
    const queryScreenings = db.collection('screenings')
      .where('cinemaSlug', '==', slug)
      .orderBy('timeString')
      .orderBy('screen')
      .get()

    const cinema = (await queryCinema).data()
    const cinemaDetails = (await queryScreenings).docs.map(doc => doc.data())
    res.render('cinema-details', { cinema, cinemaDetails })
  } catch (err) {
    console.error(err)
    res.render('res-error')
  }
}
module.exports = {
  cinemaList,
  cinemaDetails

}
