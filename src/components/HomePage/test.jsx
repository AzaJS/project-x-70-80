import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://img.freepik.com/free-vector/isometric-sources-of-charging-composition-with-laptop-power-bank-plugs-chargers-batteries-for-modern-devices_1284-35205.jpg?w=1060&t=st=1671726544~exp=1671727144~hmac=d6b7f19e2648f04f032ba38cbf1c7b251e40e4a6a002d37173c0e2ff3192987e" />
                    <p className="legend">about</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg?w=996&t=st=1671726761~exp=1671727361~hmac=c8bc817d8d9865c47d242d6f68212e1f3856ae95a03a022b051acf084d18b681" />
                    <p className="legend">Iphone 14</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-psd/smartphone-screen-mockup-psd_24972-2053.jpg?w=1060&t=st=1671726714~exp=1671727314~hmac=eaf105b4337fb5fb2b676da93e576b0431dd65edc576f147e98311e674f52e2c" />
                    <p className="legend">iphone 13</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel