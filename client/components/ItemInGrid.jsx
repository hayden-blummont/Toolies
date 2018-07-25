import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAvailability } from '../actions/gear'


export const ItemInGrid = props => {
  const { name, status, id } = props.item

  return (
    <div key={id} className='column is-4 gear-item'>
      <Link to={`/item/${id}`}>
        <h4 className='title is-4'>
          <i className="fas fa-screwdriver icon-pad"></i>
          <a>{name}</a>
        </h4>
      </Link>
      <p>{status}</p>
      {props.showToggle && 
        <a className={`button button-pad has-text-centered ${status !== 'Available'
          ? 'is-inverted'
          : 'is-dark'}`}
          onClick={() => props.dispatch(setAvailability(id, status != 'Available'))}
        >
          {status !== 'Available'
            ? 'MARK AS AVAILABLE'
            : 'MARK AS UNAVAILABLE'}
        </a>}
    </div>
  )
}

export default connect()(ItemInGrid)