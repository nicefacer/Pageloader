import React from "react";
import "./spinner.css";

/*import ClipLoader  from 'react-spinners';

/<ClipLoader
    size={150}
    color={'#123abc'}
    loading={this.state.loading}
/>
**/

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="cssload-circle-1">
        <div className="cssload-circle-2">
          <div className="cssload-circle-3">
            <div className="cssload-circle-4">
              <div className="cssload-circle-5">
                <div className="cssload-circle-6">
                  <div className="cssload-circle-7">
                    <div className="cssload-circle-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
