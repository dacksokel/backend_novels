import mongoose, { Schema, Document, Model } from 'mongoose';

function createModel<T extends Document> (schemaName: string, schema: Schema): Model<T> {
    let model = mongoose.connection.models[schemaName];
    if (!model) {
        model = mongoose.model(schemaName, schema);
    }
    return model;
}

export { createModel };