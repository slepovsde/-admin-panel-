import mongoose from 'mongoose';

const Event = new mongoose.Schema( {
  title: {type: String, required: true},
  description : {type: String, required: true},
  date: {type: String, required: true},
  tickets: {type: Number, required: true},
  image: {type: String}
});

export default mongoose.model ('Event', Event);