/**
 * Typical flux data-store containing:
 *   1. Private variables
 *   2. Private API functions
 *   3. Public API
 *   4. AppDispatcher registration callback
 */
var merge = require('react/lib/merge');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/ActionTypes');
var JobTypes = require('../constants/JobTypes');
var Store = require('./Store');

// Private API
var _locations = ["355 Strand", "121 Curtain Road", "1 Infinite Loop"];
var _locationsIndex = 0;

var _ironingTypes = ["shirts", "bedding", "clothing"];
var _ironingTypesIndex = 0;

var _job = {
  location: null,
  time: "no location",
  ironingType: _ironingTypes[_ironingTypesIndex],
  description: "+ description"
};

function _bumpLocation() {
  if (_locationsIndex < _locations.length - 1) {
    _locationsIndex++;
  } else {
    _locationsIndex = 0;
  }
  _job.location = _locations[_locationsIndex];

  _job.time = Math.floor(Math.random()*100) + " minutes";
}

function _bumpIroningTypes() {
  if (_ironingTypesIndex < _ironingTypes.length - 1) {
    _ironingTypesIndex++;
  } else {
    _ironingTypesIndex = 0;
  }
  _job.ironingType = _ironingTypes[_ironingTypesIndex];
}

// Public API
var IroningJobStore = merge(Store, {
  get: function() {
    return _job;
  }
});

IroningJobStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  // We only care about ironing-related jobs
  if (action.jobType !== JobTypes.IRONING) return;

  switch (action.type) {
    case ActionTypes.CHANGE_LOCATION:
      _bumpLocation();
      IroningJobStore.emitChange();
      break;
    case ActionTypes.CHANGE_TYPE:
      _bumpIroningTypes();
      IroningJobStore.emitChange();
      break;
  }
});

module.exports = IroningJobStore;