const assert = require('assert');
const User = require('../src/user');

describe('Creating records', ()=>{
  it('saves a user', (done) => {
    const joe = new User({name: "Joe"});

    joe.save()
      .then(()=>{
        // Has joe been saved successfully?
        // if successuuly .isNew is going to return false, so use ! to make it true
        assert(!joe.isNew);
        done();
      });
  });
});
