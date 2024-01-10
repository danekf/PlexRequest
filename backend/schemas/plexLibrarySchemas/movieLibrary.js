const mongoose = require('mongoose');

const exportedMovieKeys = {
  addedAt: {
    type:String,
    required: true,
  },
  audienceRating: {
    type:Number,
    required: true,
  },
  audienceRatingImage: {
    type:String,
    required: true,
  },
  contentRating: {
    type:String,
    required: true,
  },
  duration: {
    type:Number,
    required: true,
  },
  durationHuman: {
    type:String,
    required: true,
  },
  editionTitle: {
    type:String,
    required: false,
  },
  guid: {
    type:String,
    required: true,
  },
  hasCreditsMarker: {
    type:Boolean,
    required: true,
  },
  locations: [
    'E:\\Anime Movies (2)\\Black.Clover.Sword.of.the.Wizard.King.2023.1080p.Dual.Audio.WEBRip.10.bits.DD+.x265-EMBER.mkv'
  ],
  originalTitle: {
    type:String,
    required: true,
  },
  originallyAvailableAt: {
    type:String,
    required: true,
  }, // is string but... should probably convert ex: '2023-06-16' -> date
  rating: {
    type:Number,
    required: false,
  }, //is number i think out of 5 but not required (can be null)
  ratingImage: null, //no idea
  ratingKey: {
    type:Number,
    required: true,
  }, //num, ex 26359
  studio: {
    type:String,
    required: true,
  },
  summary: {
    type:String,
    required: true,
  },
  tagline: {
    type:String,
    required: true,
  },
  title: {
    type:String,
    required: true,
  },
  titleSort: {
    type:String,
    required: true,
  },
  type: {
    type:String,
    required: true,
  }, // string but is movie, show, music, can i make it only those without TS? - TODO.
  userRating: {
    type:Number,
    required: false,
  }, //also is a number, but not required (can be null)
  year: {
    type:Number,
    required: true,
  }, 
  media: [ [Object] ] 
}

const Schema = mongoose.Schema;

const plexMovieSchema = new Schema(exportedMovieKeys, { timestamps: true});


module.exports = mongoose.model('PlexMovie', plexMovieSchema);