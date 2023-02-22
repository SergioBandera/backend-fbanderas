import mongoose from 'mongoose';
//conexion a la base de datos con la config del env
class MongoManager {

    constructor(config) {
        this._config = config;
    }
    getConnectionURL() {
        return this._config;
    }

    isConnected() {
        mongoose.connection.on('connected', _ => true);
    }

    connect() {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false, // Don't build indexes
            poolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000,
            bufferMaxEntries: 0
        };
        console.log('MongoDB connection with retry');
        mongoose.connect(this.getConnectionURL(), options).then(() => {
            console.log('MongoDB is connected');
        }).catch(err => {
            console.log('MongoDB connection unsuccessful, retry after 30 seconds.');
            setTimeout(this.connect, 3000);
        });
    }

    disconnect() {
        mongoose.disconnect();
    }

    objectId(id) {
        let ObjectId = mongoose.Types.ObjectId;
        return ObjectId(id);
    }

}

export default new MongoManager(process.env.MONGODB_URI); 