
var OSSIEMCalculator = function ()
{
    /**
     * Initialize tests
     * 
     * @type Array
     */
    var tests = ['o1', 'o2', 'o3', 'o4', 'o5', 's1', 's2', 's3', 's4', 's5'];
    
    /**
     * Initialize results
     * 
     * @type Object
     */
    var results = {};
    
    /**
     * Initialize weights
     * 
     * @type type
     */
    var weights = {};
    
    /**
     * Reset all results
     * @returns {undefined}
     */
    var resetResults = function ()
    {
        for (var i = 0; i < tests.length; i++) {
            results[tests[i]] = 0;
        }
    };
    
    /**
     * eset all weights
     * 
     * @returns {undefined}
     */
    var resetWeights = function ()
    {
        for (var i = 0; i < tests.length; i++) {
            weights[tests[i]] = 10;
        }
    };
    
    /**
     * Set a test result
     * 
     * @param {String} testName
     * @param {integer} value
     * @returns {undefined}
     */
    var setTestResult = function (testName, value)
    {
        results[testName] = parseInt(value || 0);
    };
    
    /**
     * Set test weight
     * 
     * @param {String} testName
     * @param {integer} value
     * @returns {undefined}
     */
    var setTestWeight = function (testName, value)
    {
        weights[testName] = parseInt(value || 0);
    };
    
    /**
     * Get test result
     * 
     * @param {String} testName
     * @returns {OSSIEMCalculator.results|value}
     */
    var getTestResult = function (testName)
    {
        return results[testName];
    };
    
    /**
     * Get test weight
     * 
     * @param {String} testName
     * @returns {Number|OSSIEMCalculator.weights}
     */
    var getTestWeight = function (testName)
    {
        return weights[testName];
    };
    
    /**
     * Gets the maximum points available
     * 
     * @returns {Number}
     */
    var getMaxPoints = function ()
    {
        var result = 0;
        var n = tests.length;
        for (var i = 0; i < n; i++) {
            result = result + (9 * weights[tests[i]]);
        }
        return result;
    };
    
    /**
     * Executes the individual evaluation
     * 
     * @returns {undefined}
     */
    var calculate = function ()
    {
        var result = 0;
        for (var i = 0; i < tests.length; i++) {
            result = result + (results[tests[i]] * weights[tests[i]]);
        }
        return parseFloat(result / getMaxPoints()).toFixed(2);
    };
    
    /**
     * Builds a string representing the calculation formula with values
     * @returns {String}
     */
    var toString = function ()
    {
        var partials = [];
        for (var i = 0; i < tests.length; i++) {
            partials.push(results[tests[i]] + ' * ' + weights[tests[i]]);
        }
        return '(' + partials.join(' + ') + ')' + ' / ' + getMaxPoints();
    };
    
    /**
     * Initialize results and weights
     */
    resetResults();
    resetWeights();
    
    /**
     * Return calculator API
     * 
     * @type {Object}
     */
    return {
        getTests: function () {
            return tests.slice(0);
        },
        calculate: calculate,
        resetResults: resetResults,
        setTestResult: setTestResult,
        setTestWeight: setTestWeight,
        getTestResult: getTestResult,
        getTestWeight: getTestWeight,
        toString: toString
    };
};