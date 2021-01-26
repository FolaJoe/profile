import React , {Component} from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

class Sliding extends Component {
    render(){
        const images = [
            {url: './img1.jpg'},
            {url: './img2.jpg'},
            {url: './img3.jpg'}

        ];

        return(<div>
            <SimpleImageSlider width = {500} height = {500} images = {images} />
        </div>)

    }
}
export default Sliding;