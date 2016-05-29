
(function () {
    
    var calculator = new OSSIEMCalculator();
    
    /**
     * List of tests
     * 
     * @type Array
     */
    var tests = calculator.getTests();
    
    /**
     * The result element
     * 
     * @type {Object}
     */
    var resultEl = window.document.getElementById('result');
    
    /**
     * Initiate the tests input elements
     * 
     * @type Object
     */
    var els = {};
    for (var i = 0; i < tests.length; i++) {
        els[tests[i] + 'r'] = window.document.getElementById(tests[i] + 'r');
        els[tests[i] + 'p'] = window.document.getElementById(tests[i] + 'p');
        els[tests[i] + 'r'].value = calculator.getTestResult(tests[i]);
        els[tests[i] + 'p'].value = calculator.getTestWeight(tests[i]);
    }
    
    /**
     * Add event listeners
     */
    for (var i = 0; i < tests.length; i++) {
        els[tests[i] + 'r'].addEventListener('keyup', function () {
            calculator.setTestResult(this.getAttribute('id').replace('r', ''), this.value);
            updateResult();
        });
        els[tests[i] + 'p'].addEventListener('keyup', function () {
            calculator.setTestWeight(this.getAttribute('id').replace('p', ''), this.value);
            updateResult();
        });
        els[tests[i] + 'r'].addEventListener('change', function () {
            calculator.setTestResult(this.getAttribute('id').replace('r', ''), this.value);
            updateResult();
        });
        els[tests[i] + 'p'].addEventListener('change', function () {
            calculator.setTestWeight(this.getAttribute('id').replace('p', ''), this.value);
            updateResult();
        });
    }
    
    /**
     * Update the result element
     * 
     * @returns {undefined}
     */
    function updateResult()
    {
        resultEl.innerHTML = '' + calculator.calculate() + ' = ' + calculator.toString();
    }
    
    /**
     * Display result
     */
    updateResult();
    
})();