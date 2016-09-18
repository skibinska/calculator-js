var Calculator = (function (document) {

    var Calculator = function (calculatorSelector) {

        var
            calculatorElement,
            totalElement,
            number0Element,
            number1Element,
            number2Element,
            number3Element,
            number4Element,
            number5Element,
            number6Element,
            number7Element,
            number8Element,
            number9Element,
            operationAddition,
            operationSubtraction,
            operationMultiplication,
            operationDivision,
            operationClear,
            operationEqual
            ;

        var OPERATIONS = ['-', '+', '*', '/'];

        var steps = [];

        init();

        return {
            pokazSteps: showSteps,
            mojKalkulatorek: calculatorElement
        };

        function init() {
            calculatorElement = document.getElementById(calculatorSelector);
            if (typeof  calculatorElement === 'undefined') {
                throw new Error('validate your html, could not find calculator with id = ' + calculatorElement);
            }
            setElements();
            bindEvents();
        }

        /**
         * @param {Number} number
         */
        function numberHandler(number) {
            steps.push(number);
            totalElement.innerHTML = steps.join('');
            showSteps();
        }

        /**
         * @param {String} operation
         */
        function operationHandler(operation) {
            showSteps();
            console.log('operation', operation);

            if (operation === '=') {
                if(steps.length === 0){
                    return;
                }
                var expression = steps.join('');
                var calculated = eval(expression);
                totalElement.innerHTML = calculated;
                steps = [calculated];
                showSteps();
            } else if (operation === 'AC') {
                totalElement.innerHTML = '';
                steps = [];
            } else {
                addOperationToSteps(operation);
            }
        }

        function addOperationToSteps(operation) {
            var lastStep = steps[steps.length - 1];

            if(OPERATIONS.indexOf(lastStep) !== -1){
                steps[steps.length - 1] = operation;
            }else{
                steps.push(operation);
            }

            totalElement.innerHTML = steps.join('');
        }

        function showSteps() {
            console.log('STEPS', steps);
        }

        function bindEvents() {
            number0Element.addEventListener('click', numberHandler.bind(null, 0));
            number1Element.addEventListener('click', numberHandler.bind(null, 1));
            number2Element.addEventListener('click', numberHandler.bind(null, 2));
            number3Element.addEventListener('click', numberHandler.bind(null, 3));
            number4Element.addEventListener('click', numberHandler.bind(null, 4));
            number5Element.addEventListener('click', numberHandler.bind(null, 5));
            number6Element.addEventListener('click', numberHandler.bind(null, 6));
            number7Element.addEventListener('click', numberHandler.bind(null, 7));
            number8Element.addEventListener('click', numberHandler.bind(null, 8));
            number9Element.addEventListener('click', numberHandler.bind(null, 9));

            operationAddition.addEventListener('click', operationHandler.bind(null, '+'));
            operationSubtraction.addEventListener('click', operationHandler.bind(null, '-'));
            operationMultiplication.addEventListener('click', operationHandler.bind(null, '*'));
            operationDivision.addEventListener('click', operationHandler.bind(null, '/'));

            operationClear.addEventListener('click', operationHandler.bind(null, 'AC'));
            operationEqual.addEventListener('click', operationHandler.bind(null, '='));
        }


        function setElements() {

            totalElement = findByClassName('total');

            number0Element = findByClassName('number-zero');
            number1Element = findByClassName('number-one');
            number2Element = findByClassName('number-two');
            number3Element = findByClassName('number-three');
            number4Element = findByClassName('number-four');
            number5Element = findByClassName('number-five');
            number6Element = findByClassName('number-six');
            number7Element = findByClassName('number-seven');
            number8Element = findByClassName('number-eight');
            number9Element = findByClassName('number-nine');

            operationAddition = findByClassName('operation-addition');
            operationSubtraction = findByClassName('operation-subtraction');
            operationMultiplication = findByClassName('operation-multiplication');
            operationDivision = findByClassName('operation-division');

            operationClear = findByClassName('operation-clear');
            operationEqual = findByClassName('operation-equal');

        }

        /**
         * @param {String} selector
         * @returns {HTMLElement}
         */
        function findByClassName(selector) {
            var element = calculatorElement.getElementsByClassName(selector)[0];

            if (typeof  element === 'undefined') {
                throw new Error('validate your html, could not find element with className = ' + selector);
            }
            return element;
        }
    };

    return Calculator;
})(document);


