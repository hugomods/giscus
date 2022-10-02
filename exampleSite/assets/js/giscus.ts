'use strict'

import { default as params } from '@params';
import Giscus from 'giscus/js';

const giscus = new Giscus(params.endpoint);
window.Giscus = giscus;
