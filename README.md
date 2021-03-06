# Doppler Phase
This module makes it easy to detect a phase on a doppler knife in CS:GO. It makes it possible to detect dopplers without inspecting the item - which means that you can use this for every (public) inventory.

# Setup:
```
$ npm install csgo-doppler-phase
```

# Usage:

```javascript
const phase = require('csgo-doppler-phase')

const descriptionsWithPhases = body.descriptions.map((description) => {
    return description.phase = phase.detect(description.market_hash_name, description.icon_url)
});
```

Take a look at [example.js](https://github.com/reynirf/csgo-doppler-phase/blob/master/example.js) for a working example.



# Phases:

* **Doppler**
  * Phase 1
  * Phase 2
  * Phase 3
  * Phase 4
  * Ruby
  * Sapphire
  * Black Pearl

* **Gamma Doppler**
  * Phase 1
  * Phase 2
  * Phase 3
  * Phase 4
  * Emerald


#### Create an issue on Github if you've found a problem

### Author: 
* **Reynir**
	* [Steam](https://steamcommunity.com/id/Reynir99)
	* [Github](https://github.com/reynirf)
 