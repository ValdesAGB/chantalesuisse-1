import React from 'react'
import { priceImgUrl } from '../data'
import { Loader } from '../untils/Loarder'

function Price({ data, isDataLoading }) {
  return (
    <section className="col  ">
      <div
        className="container-fluid border border-dark"
        style={{ height: '168px' }}
      >
        {data && data.length > 0 && (
          <>
            {isDataLoading ? (
              <Loader />
            ) : (
              <a href={data[0].priceUrl}>
                <img
                  src={priceImgUrl}
                  alt="lien vers les prix"
                  className="w-100 h-100"
                  title="les prix"
                />
              </a>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Price
