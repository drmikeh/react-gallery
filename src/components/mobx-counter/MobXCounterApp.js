import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import Counter from './Counter';

class ObservableCounter {
  constructor() {
    this._count = observable({ count: 0 });
    this._count.inc = function() {
      this.count++;
    }
    this._count.dec = function() {
      this.count = Math.max(0, this.count - 1);
    }
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }
  get count() {
    return this._count.count;
  }
  inc() {
    this._count.inc();
  }
  dec() {
    this._count.dec();
  }
}

const CounterApp = observer(({ store }) => (
  <div>
    <Counter count={store.count1.count} inc={store.count1.inc} dec={store.count1.dec} />
    <Counter count={store.count2.count} inc={store.count2.inc} dec={store.count2.dec} />
    <hr/>
    <h3>The sum of the counts is {store.count1.count + store.count2.count}</h3>
  </div>
));

const appState = { count1: new ObservableCounter(), count2: new ObservableCounter() };
const MobXCounterApp = () => <CounterApp store={appState} />;

export default MobXCounterApp;
