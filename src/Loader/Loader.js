import loaderStyles from './loader.module.css'

function Loader() {
  return (
    <div
      className="container"
      style={{ marginTop: '160px' }}
    >
      <div className="d-flex justify-content-center">
        <div className={loaderStyles['lds-ripple']}>
          <div />
          <div />
        </div>
      </div>
    </div>
  )
}

export default Loader
