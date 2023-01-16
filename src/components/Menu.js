import React from 'react'
import { Loader } from '../untils/Loarder'

function Menu({ data, isDataLoading }) {
  return (
    <section>
      {isDataLoading ? <Loader /> : null}
      {data && data.length > 0 && (
        <div className="row">
          <div className="col-md-2 col">
            <a href={data[0].cgUrl}>
              <p className="fs-5 fw-bold">Coingeko</p>
            </a>
          </div>
          <div className="col-md-2 col text-end">
            <a href={data[0].cmcUrl}>
              <p className="fs-5 fw-bold">Coinmarketcap</p>
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default Menu
