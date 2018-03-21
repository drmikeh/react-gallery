import React from 'react';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';

const Counter = ({ count, inc, dec } ) => (
    <Panel header='MobX Counter' className='example'>
        <p>The count is {count}</p>
        <ButtonGroup>
            <Button
                bsStyle='danger'
                onClick={dec}
                disabled={count === 0}>Decrement
            </Button>
            <Button
                bsStyle='success'
                onClick={inc}>Increment
            </Button>
        </ButtonGroup>
</Panel>
);

export default Counter;