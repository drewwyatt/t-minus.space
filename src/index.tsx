import * as React from 'react';

import { render } from 'react-dom';

const ele = document.getElementById('app');
const Hello = () => <h1>Hello, World</h1>;

render(<Hello />, ele);