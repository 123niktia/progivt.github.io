import React, {useRef, useEffect} from 'react';
import moment from 'moment';
import {getLabDeadline} from './LabController.js';
//import data from '../docs/lab.json';

class inlineDeadlineDisplay extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});

    this.deadline = '';
    this.timeToDeadline = '';
    this.labPath = '';

    this.updateInterval = null;
  }

  connectedCallback() {
    console.log("Webcomponent connect, setting up");

    this.labPath = window.location.pathname;
    this.deadline = getLabDeadline(this.labPath);

    console.log(this.labPath);
    console.log(this.deadline);
    
    this.update();
    if (!this.updateInterval) {
      this.updateInterval = setInterval(this.update.bind(this), 1000);
    }

  }

  update() {
    if (this.deadline != '') {
      this.timeToDeadline = moment(moment(this.deadline).diff(moment())).format('DD:HH:mm:ss');
      this.shadow.innerHTML = `<div>До сдачи лабы: ${this.timeToDeadline}</div>`;
    }
    else {
      this.shadow.innerHTML = `<div>Время вышло, лаба окончена!</div>`;
    }

    console.log("deadline update! ");
  }

  disconnectedCallback() {
    console.log("Webcomponent disconnect, cleaning");
    clearInterval(this.updateInterval);
  }
}

export const RenderDisplay = () => {
  useEffect(() => {
    if (!window.customElements.get('inline-display')) {
        window.customElements.define('inline-display', inlineDeadlineDisplay)
    }
  }, [])

  const displayElement = useRef(null)
  return (
    <div>
      <inline-display ref={displayElement}></inline-display>
    </div>
  )
}

export default () => (
  <>
    <RenderDisplay />
  </>
)
