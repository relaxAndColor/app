'use strict';
import validateNoWhiteSpace from './no-whitespace-validator';
import validatePasswordParams from './password-params-validator';

const validators = angular.module( 'validators', [] );

validateNoWhiteSpace(validators);
validatePasswordParams(validators);

export default validators.name;
