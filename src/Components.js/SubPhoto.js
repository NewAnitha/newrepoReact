import React from 'react'

export const SubPhoto = ({photos}) => {
  return (
    <>
      <div className="container-fluid m-5">
        <h2 className="text-success"> List of colors and their image</h2>

        <div className="row text-center ">
          {photos.map((photo) => {
            const {id,title,url}=photo
            return (
              //   <d/iv className="row">
              <div className="col-md-2 mt-5" key={id}>
                <div className="card">
                  <img className="card-img-top" src={url} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card number {id}</h5>
                    <p className="card-text">Photo Title :{title}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">{title}</small>
                  </div>
                </div>
              </div>

              //   </div>
            );
          })}
        </div>
      </div>
    </>
  )
}
