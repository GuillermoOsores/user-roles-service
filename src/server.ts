import { app } from './app';
import './models/dbconnection';

app.listen(process.env.PORT || 3000, function () {
    console.log(`listening on ${process.env.PORT || 3000}`);
});