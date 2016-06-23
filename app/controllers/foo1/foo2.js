import Ember from 'ember';

export default Ember.Controller.extend({
	// This line below allow us to access to the foo1 controller and properties.
	foo1Controller: Ember.inject.controller('foo1'),
	// This allow us to set the foo1Model property(get the foo1 property from the foo1 controller )
	foo1Model: Ember.computed.reads('foo1Controller.model')
});
