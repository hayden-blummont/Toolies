import React from 'react'
import { connect } from 'react-redux'

export class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }
  render() {
    return (

      <div className='homebody'>
        <div className="container">

          <div className="section">
           
            <h1 className='title is-1 has-text-centered has-text-white'>Borrowers is a community for peer-to-peer lending of tools and household appliances.</h1>

          </div>

          <div className="section">
            <div className='columns'>
              <div className='column is-6'>
                <h1 className='title is-2 has-text-white'>About:</h1>
                <p className='has-text-white'>Borrowers is a friendly, trust-based gear-sharing app where the community can come together and exchange handy, often expensive gear. It removes the need to buy new junk for odd jobs and allows everyone to get more use out of their stuff instead of it just gathering dust. </p>
              </div>
              <div className='column is-6'>
                <h1 className='title is-2 has-text-white'>Ethics:</h1>
                <p className='has-text-white'>The Borrowers team are committed to creating a reliable and safe online community space to ensure mutually beneficial interactions between lenders and borrowers. </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({ gear: state.gear.gear, err: state.gear.errorMessage })

export default connect(mapStateToProps)(Home)
