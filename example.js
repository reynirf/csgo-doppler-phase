"use strict"
const phase = require('csgo-doppler-phase')
const request = require('request')
const async = require('async')
//must install async and request for this example to work


request({
	url: `https://steamcommunity.com/inventory/76561198060838805/730/2?l=english&count=100`,
	json: true
	}, (err, res, body) => {
        if (!err && res.statusCode === 200) {
            const assets = body.assets
            const descriptions = body.descriptions
            const inventory = {}

            if (descriptions && assets) {
                async.forEach(descriptions, (description) => async.forEach(assets, (asset) => {
                	if (description.classid === asset.classid){
	                	phase.detect(description.market_hash_name, description.icon_url, (err, res) => {
	                		if(err) {
	                			console.log(err)
	                		} else {
	                			//example res: 'phase1' or 'sapphire'
	                			console.log(res)
	                		}
	                	})
                	}
            	}));

       		}
   		}
    })