import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Header from '../components/Header';


const images = [
	require('../img/_DSC0848-Edit.jpg'),
	require('../img/_DSC0974-Edit.jpg'),
	require('../img/_DSC0916-Edit-6.jpg'),
	require('../img/_DSC0745-Edit.jpg'),
	require('../img/_DSC0668.jpg'),
	require('../img/_DSC0448.jpg'),
	require('../img/_DSC1019.jpg'),
	require('../img/_DSC3155-Edit.jpg'),
	require('../img/_DSC0434-Edit.jpg'),
	require('../img/_DSC2788-Edit.jpg'),
	require('../img/_DSC0567-Edit.jpg'),
	require('../img/_DSC2709-Edit.jpg'),
	require('../img/_DSC2389.jpg'),
	require('../img/_DSC2568-Edit.jpg'),
	require('../img/_DSC2680.jpg')
]
class Photos extends Component{
  constructor(props) {
    super(props);
 
    this.state = {
      mode:'photos',
      photoIndex: 0,
      isOpen: false,
    };
  }	
  render(){
  	const { photoIndex, isOpen } = this.state;
    return(
    	      <section className={this.state.mode + ' content'}>
                  <Header title={this.state.mode}/>
      <div className="gallaryWrapper">
      	<div className="imageBox vertical" onClick={() => this.setState({photoIndex:0, isOpen: true })}><img src={require('../img/_DSC0848-Edit.jpg')} alt=""/></div>
      	<div className="imageBox one" onClick={() => this.setState({photoIndex:1, isOpen: true })}><img src={require('../img/_DSC0974-Edit.jpg')} alt=""/></div>
      	<div className="imageBox" onClick={() => this.setState({photoIndex:2, isOpen: true })}><img src={require('../img/_DSC0916-Edit-6.jpg')} alt=""/></div>
      	<div className="imageBox" onClick={() => this.setState({photoIndex:3, isOpen: true })}><img src={require('../img/_DSC0745-Edit.jpg')} alt=""/></div>
      	<div className="imageBox" onClick={() => this.setState({photoIndex:4, isOpen: true })}><img src={require('../img/_DSC0668.jpg')} alt=""/></div>
      	<div className="imageBox vertical" onClick={() => this.setState({photoIndex:5, isOpen: true })}><img src={require('../img/_DSC3155-Edit.jpg')} alt=""/></div>
      	<div className="imageBox one" onClick={() => this.setState({photoIndex:6, isOpen: true })}><img src={require('../img/_DSC0434-Edit.jpg')} alt=""/></div>
      	<div className="imageBox vertical" onClick={() => this.setState({photoIndex:7, isOpen: true })}><img src={require('../img/_DSC0448.jpg')} alt=""/></div>
      	<div className="imageBox one" onClick={() => this.setState({photoIndex:8, isOpen: true })}><img src={require('../img/_DSC1019.jpg')} alt=""/></div>
      	<div className="imageBox" onClick={() => this.setState({photoIndex:9, isOpen: true })}><img src={require('../img/_DSC2788-Edit.jpg')} alt=""/></div>
      	<div className="imageBox" onClick={() => this.setState({photoIndex:10, isOpen: true })}><img src={require('../img/_DSC0567-Edit.jpg')} alt=""/></div>
      	<div className="imageBox" onClick={() => this.setState({photoIndex:11, isOpen: true })}><img src={require('../img/_DSC2709-Edit.jpg')} alt=""/></div>
      	<div className="imageBox vertical" onClick={() => this.setState({photoIndex:12, isOpen: true })}><img src={require('../img/_DSC2389.jpg')} alt=""/></div>
      	<div className="imageBox" onClick={() => this.setState({photoIndex:13, isOpen: true })}><img src={require('../img/_DSC2568-Edit.jpg')} alt=""/></div>
      	<div className="imageBox" onClick={() => this.setState({photoIndex:14, isOpen: true })}><img src={require('../img/_DSC2680.jpg')} alt=""/></div>
      	{isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            enableZoom={false}

            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
      </section>
      );
  }
}

export default Photos;
