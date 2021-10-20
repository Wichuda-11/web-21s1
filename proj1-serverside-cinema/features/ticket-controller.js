const { db } = require('../_services/firebase-admin-initialized')

const myTickets = async (req, res) => {
  try {
    const query = db.collection('users')
      .doc('chaz')
      .collection('tickets')
      .get()

    const myTickets = (await query).docs.map(doc => doc.data())
      .map(({ createdAt, seats, ...rest }) =>
        ({ createdAt: new Date(createdAt.seconds * 1000).toLocaleString(), seats: seats.join(' '), ...rest }))
    res.render('my-tickets', { myTickets })
  } catch (err) {
    console.error(err)
    res.render('res-error')
  }
}

const myTicketsAPI = async (req, res) => {
  try {
    const query = db.collection('users').doc('chaz').collection('tickets').get()
    const tickets = (await query).docs.map(doc => doc.data())
      .map(({ date, createdAt, timeString, screen, screeningSlug, seats, filmName, cinemaName }) =>
        ({ date: date.toMillis(), createdAt: createdAt.toMillis(), timeString, screen, screeningSlug, seats, filmName, cinemaName }))

    res.json({
      result: 'ok',
      tickets,
      count: tickets.length
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      result: 'error',
      payload: [],
      count: 0
    })
  }
}

module.exports = {
  myTickets,
  myTicketsAPI
}
