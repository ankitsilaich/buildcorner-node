require('../spec_helper');
var expect = require('chai').expect;
var filters = require(_dir.MIDDLEWARE_DIR + '/decode_filters');

describe('decodeFilters', function(){
	var next_func = function(){};
	var  dummy_req = {
		query: {},
		url : '/',
		header : function(){}
	};
	it('should throw error if the string is not base64 encoded', function(){
		dummy_req.query.f = 'not_base_64_encoded_string';
		filters(dummy_req, null, next_func);
		expect(dummy_req).to.not.have.property('filters');
	});
	it('should populate req object with filters when string is base64encoded', function(){
		dummy_req.query.f = 'eyJwb2x5Ijp7ImlkIjoiZGNlOTI5MGVjM2ZlODgzNGEyOTMiLCJidWZmZXIiOmZhbHNlfSwibG9jdCI6InBvbHkifQ==';
		filters(dummy_req, null, next_func);
		expect(dummy_req).to.have.property('filters');
	});
});
