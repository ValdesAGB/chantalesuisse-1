import { Loader } from '../untils/Loarder'

function Header({ data, isDataLoading }) {
  return (
    <section className="">
      {isDataLoading ? <Loader /> : null}
      {data && data.length > 0 && (
        <div className=" row">
          <div className="col-6">
            <h4 className="d-none d-md-block  fw-bold fs-2">
              {data[0].name} ({data[0].symbol})
            </h4>

            <h4 className="d-block d-md-none  fw-bold" title={data[0].symbol}>
              {data[0].name}
            </h4>
          </div>
          <div className="col-6  text-end">
            <h4 className="d-none d-md-block">LesScoresDeChantal (logo)</h4>
            <h4 className="d-block d-md-none">(logo)</h4>
          </div>
        </div>
      )}
    </section>
  )
}

export default Header
