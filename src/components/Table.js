import React from 'react'
import { Loader } from '../untils/Loarder'

function Table({ data, isDataLoading }) {
  return (
    <section className="col-4 pt-2 ">
      <div className="">
        {data && data.length > 0 && (
          <React.Fragment>
            <div className="row">
              <div className="col">Price US$</div>
              <div className="col-5 text-end">
                {isDataLoading ? <Loader /> : data[0].price}
              </div>
            </div>

            <div className="row">
              <div className="col">Marketcap</div>
              <div className="col-5 text-end">
                {isDataLoading ? (
                  <Loader />
                ) : (
                  new Intl.NumberFormat().format(data[0].market_cap)
                )}
              </div>
            </div>

            <div className="row">
              <div className="col">Mcap après dilution</div>
              <div className="col-5 text-end">
                {isDataLoading ? (
                  <Loader />
                ) : (
                  new Intl.NumberFormat().format(
                    data[0].fully_diluted_valuation
                  )
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-8">Mcap/Mcap ap.dilution</div>
              <div className="col-4 text-end">
                {isDataLoading ? <Loader /> : data[0].capDivByDiluted_max}%
              </div>
            </div>

            <div className="row">
              <div className="col">Volume/24h</div>
              <div className="col-5 text-end">
                {isDataLoading ? (
                  <Loader />
                ) : (
                  data[0].scoring.volumePer24h.score
                )}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </section>
  )
}

export default Table
