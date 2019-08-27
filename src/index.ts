
import recommendedTS from './configs/recommended-ts';
import recommended from './configs/recommended';
import noDate from './rules/no-date.js';
// import * as unit from './unit';

export = {
	rules: {
		'no-date': noDate
	},
    configs: {
        recommended,
        recommendedTS
    }
};
