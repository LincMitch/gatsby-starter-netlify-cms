import React from 'react'
import PropTypes from 'prop-types'
import { AboutxPageTemplate } from '../../templates/aboutx-page'

const AboutxPagePreview = ({ entry, widgetFor }) => (
  <AboutxPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AboutxPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutxPagePreview
