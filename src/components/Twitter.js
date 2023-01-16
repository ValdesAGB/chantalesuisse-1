import React from 'react'
import { twitterImgUrl } from '../data'
import { Loader } from '../untils/Loarder'

function Twitter({ data, isDataLoading }) {
  return (
    <section className="col  px-1">
      <div className="container-fluid  border border-dark">
        {data && data.length > 0 && (
          <>
            {isDataLoading ? (
              <Loader />
            ) : (
              <a href={data[0].twitterUrl}>
                <img
                  src={twitterImgUrl}
                  alt="lien vers le réseau twitter"
                  className="w-100"
                  title="twitter"
                />
              </a>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Twitter
