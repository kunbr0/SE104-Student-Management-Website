import React from 'react';
import { Carousel } from 'antd';

const KCarousel = () => {

    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    return(
        <Carousel afterChange={onChange}>
            <div>
            <h3>1</h3>
            </div>
            <div>
            <h3>2</h3>
            </div>
            <div>
            <h3>3</h3>
            </div>
            <div>
            <h3>4</h3>
            </div>
        </Carousel>
    )
}

export default KCarousel;


