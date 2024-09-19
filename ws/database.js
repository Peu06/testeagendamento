const mongoose = require('mongoose');
const URI = 
    'mongodb+srv://<ECTContabilidadeUser>:<XOV5gl8vKxhk8WOH>@cluster0.lf4sj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set('useNewUrlParse', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifildTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB is UP!'))
    .catch(() => console.log(err));