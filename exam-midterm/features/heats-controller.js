const { db } = require('../_services/firebase-admin-initialized')

const heatLists = async (req, res) => {
  const query = db.collection('heats')
    .where('eventSlug', '==', 'f100m')
    .get()

  const heats = (await query).docs.map(doc => doc.data())

  res.render('heat-list', { heats })
}

const heatLineup = async (req, res) => {
  const slug = req.params.slug
  const query = db.collection('heats')
    .doc(slug)
    .collection('competitors')
    .orderBy('lane')
    .get()

  const heats = (await query).docs.map(doc => doc.data())

  res.render('heat-lineup', { heats })
}

const heatRecord = async (req, res) => {
  const slug = req.params.slug
  const query = db.collection('records')
    .doc(slug)
    .get()

  const heats = (await query).docs.map(doc => doc.data())

  res.render('heat-record', { heats })
}

const heatCreateForm = async (req, res) => {
  const { slug, name, description, eventCount } = req.body

  const data = { slug, name, description, eventCount }

  const query = db.collection('records')
    .doc(slug)
    .set(data)

  await query
  res.redirect(`/heats/${slug}`)
}

const heatRecordCreateForm = async (req, res) => {
  res.render('heat-record-create-form')
}

module.exports = {
  heatLists,
  heatLineup,
  heatRecord,
  heatCreateForm,
  heatRecordCreateForm
}
