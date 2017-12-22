"use strict"
const phase = require('csgo-doppler-phase');
const request = require('request');

request({
  url: `https://steamcommunity.com/inventory/76561198060838805/730/2?l=english&count=100`,
  json: true
}, (err, res, body) => {
  if (err || res.statusCode !== 200) return;
  if (!body.assets || !body.descriptions) return;

  const descriptionsWithPhases = body.descriptions.map((description) => {
    return description.phase = phase.detect(description.market_hash_name, description.icon_url)
  });
  console.log(body.descriptions)
  // some code...
});
