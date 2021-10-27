const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up and create workout model
const workoutSessionSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },

      name: {
        type: String,
        required: true,
        trim: true,
      },

      duration: {
        type: Number,
        required: true,
      },

      distance: {
        type: Number,
        required: true,
      },

      weight: {
        type: Number,
        required: true,
      },

      reps: {
        type: Number,
        required: true,
      },

      sets: {
        type: Number,
        required: true,
      },
    },
  ],
  
},
{
  toJSON: {
    virtuals: true,
  },
}
);

// Below are Mongoose functionality:
// Virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents.
//Apply $reduce(aggregation) to grab each element in an array and combines them into a single value.
//Set up to reduce durations of multiple exercises to total duration of workout
workoutSessionSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    console.log(total, exercise);
    return total + exercise.duration;
  }, 0);
});

// set up to export workout model
const Workout = mongoose.model("Workout", workoutSessionSchema);
module.exports = Workout;