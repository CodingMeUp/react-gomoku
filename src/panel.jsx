import React, {Component} from 'react';
import './panel.css'
import {Layer, Circle, Rect, Stage, Group} from 'react-konva';

class Panel extends Component {
  state = {
    color: 'RGB(226,182,103)'
  }

  handleClick = () => {
    // window.Konva is a global variable for Konva framework namespace
    this.setState({
      color: window.Konva.Util.getRandomColor()
    });
  }

  render() {
    return (
      <div className="Panel">
      <Stage width={700} height={700}>
        <Layer>
          <Rect  x={10}  y={10}  width={50}  height={50}  fill={this.state.color} shadowBlur={5} onClick={this.handleClick} />
        </Layer>
      </Stage>
      <Circle ref="circle" radius={50} fill="black"/>
      </div>
    );
  }
}

export default Panel;
