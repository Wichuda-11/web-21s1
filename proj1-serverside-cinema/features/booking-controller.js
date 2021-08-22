const { firestore } = require('firebase-admin')
const { db } = require('../_services/firebase-admin-initialized')

const bookingForm = async (req, res) => {
  try {
    const screeningSlug = req.query.screening

    const query = db.collection('screenings')
    .doc(screeningSlug)
    .get()

    const bookingForm = (await query).data()
    res.render('booking-form', { bookingForm })
  } catch (err) {
    console.error(err)
    res.render('res-error')
  }
}

const bookingSubmit = async (req, res) => {
  try {
    const { screeningSlug, seats } = req.body

    const queryScreenings = db.collection('screenings')
    .doc(screeningSlug)
    .get()
    const { cinemaName, filmName, date, timeString, screen } = (await queryScreenings).data()

    const ticket = { screeningSlug, cinemaName, filmName, date, timeString, screen, seats, createdAt: firestore.FieldValue.serverTimestamp() }
    const queryTicket = db.collection('users')
    .doc('chaz')
    .collection('tickets')
    .doc()
    .set(ticket)

    const screeningUpdate = { seatsAvailable: firestore.FieldValue.arrayRemove(...seats), seatsUnavailable: firestore.FieldValue.arrayUnion(...seats) }
    const queryUpdate = db.collection('screenings')
    .doc(screeningSlug)
    .set(screeningUpdate, { merge: true })

    await queryTicket
    await queryUpdate
    res.redirect('/tickets')
  } catch (err) {
    console.error(err)
    res.render('res-error')
  }
}

module.exports = {
  bookingForm,
  bookingSubmit
}