import React from 'react'
import { Loader } from '../untils/Loarder'

function Scores({ data, isDataLoading }) {
  return (
    <section className="col-1 px-2 ">
      {data && data.length > 0 && (
        <>
          {isDataLoading ? (
            <Loader />
          ) : (
            <div className="border border-4 border-dark h-100">
              <p
                className="text-center pb-1 fw-bolder"
                style={{ fontSize: '0.9em' }}
              >
                Scores
              </p>
              <div
                className="text-center text-white fw-bold"
                style={{
                  backgroundColor: data[0].scoring.capDivByDiluted.color,
                }}
              >
                {data[0].scoring.capDivByDiluted.score}
              </div>
              <div
                className="text-center text-dark mb-3 mb-md-0 fw-bold"
                style={{ backgroundColor: data[0].scoring.volumePer24h.color }}
              >
                {data[0].scoring.volumePer24h.score}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default Scores
