require('../spec');
var assert = require('chai').assert,
    browser = require(_dir.MIDDLEWARE_DIR + '/browser_support');

describe('browserSupport', function() {

    var next_func = function() {},
     	dummy_req = {},
   		dummy_res = {
        	flag: false,
        	sendFile: function(filename) {
            	this.flag = true;
        	}
    	},
    	getrandomBrowserVersion = function(a,b){
    		return  (Math.floor(Math.random() * ((b-a)+1)) + a);
    	},
    	resetParameters = function(req, res){
    		req.useragent = {};
    		res.flag = false;
    	},
		genericIt = function(bName, minVal, maxVal, checkVal){
			it('Useragent is ' + bName + ' with version from ' + minVal + ' to ' + maxVal + ' ', function() {
		    	resetParameters(dummy_req,dummy_res);
		        dummy_req.useragent[('is'+bName)] = true;
		        dummy_req.useragent.version = getrandomBrowserVersion(minVal,maxVal);
			    browser(dummy_req, dummy_res, next_func);
		        assert(((dummy_req.useragent.version < checkVal) == dummy_res.flag), 'Test');
			});
		};

    it('No useragent is given', function() {
        resetParameters(dummy_req,dummy_res);
        browser(dummy_req, dummy_res, next_func);
        assert(dummy_res.flag == false, 'response flag is false');
	});

	genericIt("IE", 6, 15, 9);

	genericIt("Opera", 6, 15, 9);

	genericIt("Safari", 1, 15, 5);

	genericIt("Chrome", 1, 45, 15);

	genericIt("Firefox", 1, 10, 4);


});
