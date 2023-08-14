import React from 'react';

const Color = ({data}) => {
    return (
        <>
            <ul className='colors'>
                {
                    data?.map((colour) => (
                        <li style={{backgroundColor: colour}}></li>
                    ))
                }
            </ul>
        </>
    );
};

export default Color;