import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Selector from '../../src/Selector';
import Label from '../../src/Label';
import Input from '../../src/Input';
import styles from './ExampleStandard.scss';

class ControlledSelector extends Component {

  constructor({isOpen = false}) {
    super();

    this.state = {
      id: 1,
      title: 'Title',
      subtitle: 'Subtitle',
      selected: false
    };
  }

  render() {
    return (
      <div>
        <form className={styles.form}>
          <div className={styles.input}>
            <div className={styles.option}>
              <Label>Title</Label>
              <div className={styles.flex}>
                <Input
                  size="small"
                  value={this.state.title}
                  onChange={e => this.setState({title: e.target.value})}
                />
              </div>
            </div>

            <div className={styles.option}>
              <Label>Subtitle</Label>
              <div className={styles.flex}>
                <Input
                  size="small"
                  value={this.state.subtitle}
                  onChange={e => this.setState({subtitle: e.target.value})}
                />
              </div>
            </div>
          </div>
        </form>

        <Selector
          title={this.state.title}
          id={this.state.id}
          subTitle={this.state.subtitle}
          imageSrc="http://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY="
          imageSize="Cinema View"
          isSelected={this.state.selected}
          onToggle={this.selectorToggle}
          >
          {/* <Selector.ExtraText text="Extra Text"/> */}
          {/* <Selector.ExtraIcon name="add"/> */}
          {/*<Selector.ProgressBar progress={83}/>*/}
        </Selector>
      </div>
    );
  }
}

export default () =>
  <div>
    <ControlledSelector/>
  </div>;
