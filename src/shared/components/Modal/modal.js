import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './modal.scss'

export default ({ title, body, type, dismissText, dismissAction, primaryAction, primaryText }) => {
  var buttonType = 'btn-primary'
  switch (type) {
    case 'danger': buttonType = 'btn-danger'; break
    case 'warning': buttonType = 'btn-warning'; break
    case 'success': buttonType = 'btn-success'; break
  }
  return (
    <div className="modal confirm" tabIndex="-1" role="dialog">
      <CSSTransition
        transitionName="confirm-animation"
        in={true}
        timeout={300}
        classNames="confirm-animation"
        unmountOnExit
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="close" aria-label="Close" onClick={dismissAction}>
                <i className="ti-close" aria-hidden="true"></i>
              </button>
            </div>
            <div className="modal-body">
              {typeof body === 'function' && body()}
            </div>
            <div className="modal-footer">
              {primaryAction && <button type="button" className={`btn ${buttonType}`} onClick={primaryAction}>{primaryText}</button>}
              <button type="button" className="btn" onClick={dismissAction}>{dismissText}</button>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div >
  )
}