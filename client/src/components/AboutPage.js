import React from 'react'
import { connect } from 'react-redux'

export const AboutPage = (props) => (
    <div>
        <p>About</p>
    </div>
)

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(AboutPage)