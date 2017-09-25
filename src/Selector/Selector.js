import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';
import Checkbox from '../Checkbox/Checkbox';
import Image from './Image';
import Text from '../Text';
import styles from './Selector.scss';
import ExtraText from './ExtraText';
// import ExtraIcon from './ExtraIcon';
import ProgressBar from './ProgressBar';

const checkBoxStyle = {
  display: 'inline-block',
};

const imageStyle = {
  marginLeft: '2px',
  marginRight: '10px',
  display: 'flex'
};

class Selector extends WixComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    image: PropTypes.string,
    subTitle: PropTypes.string,
    onToggle: PropTypes.func
  };

  static defaultProps = {
    isSelected: false
  };

  state = {
    checked: false
  }

  toggle = id => {
    this.props.onToggle && this.props.onToggle(id);
  }

  render() {
    const {
      imageSize,
      imageSrc,
      title,
      subTitle,
      isSelected,
      id,
      children,
    } = this.props;

    return (
      <div
        className={styles.selector}
        onClick={() => this.toggle(id)}
        >
        <div className={styles.main}>
          <Checkbox style={checkBoxStyle} checked={isSelected}/>
          {imageSrc ? <div style={imageStyle}><Image imageSrc={imageSrc} imageSize={imageSize}/></div> : ''}
          <span>
            <div data-hook="title"><Text appearance="T1">{title}</Text></div>
            {subTitle ? <div data-hook="subtitle"><Text appearance="T3">{subTitle}</Text></div> : ''}
          </span>
        </div>
        <div className={styles.extra}>
          {children}
        </div>
      </div>
    );
  }
}

Selector.ExtraText = ExtraText;
// Selector.ExtraIcon = ExtraIcon;
Selector.ProgressBar = ProgressBar;

export default Selector;
