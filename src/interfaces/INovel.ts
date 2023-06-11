import { Document } from 'mongoose';

interface INorvel extends Document{
    name: string,
    author: string
}

export default INorvel;