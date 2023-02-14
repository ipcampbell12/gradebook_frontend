import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function Spinner(props) {
    return (
        <div>
            <div style={{ width: '100px', margin: 'auto', display: 'block' }}>
                <ClipLoader color="#52bfd9" size={100} />
            </div>
        </div>
    );
}

export default Spinner;