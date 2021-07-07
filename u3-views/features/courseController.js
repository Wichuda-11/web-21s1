const { getCourse } = require('../_services/fakedb')

const courseDetails = (req, res) => {
  const courseCode = req.params.code
  const course = getCourse(courseCode)

  res.render('course-details', { course: course })
}

module.exports = {
  courseDetails
}
