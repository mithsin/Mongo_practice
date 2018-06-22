const mongoose = require('mongoose');

//whenever using promises, use ES6
mongoose.Promise = global.Promise;

//before only executed one time.
before((done)=>{
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', ()=> {done();})
    .on('error', (error) => {
      console.warn("Warning", error);
    });
});

//claan the record every time after test
//beforeEach is a hook
beforeEach((done)=>{
  mongoose.connection.collections.users.drop(()=>{
    // Ready to run the next test!
    done();
  });
});
