const mongoose = require('mongoose');
const URI = '';

mongoose.set('useNewUrlParse', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifildTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB is UP!'))
    .catch(() => console.log(err));