
class Hal {
  constructor(phrase) {
    if (!phrase) throw 'A phrase is required';
    this.phrase = phrase
  }
  //make listen take a sentence so i can have one hal take many sentences.
  listen() {
    console.log(this.phrase)
    /* checks if it starts with when */
    ``
    if (/when.*.+is.*.+it.*/i.test(this.phrase)) {
      return "it is April 2nd, 1968"
    }
    if (/when.*/i.test(this.phrase)) {
      return '4:30 pm'
    }
    /* checks if it starts with what */
    if (/what.*.+is.*.+it/i.test(this.phrase)) {
      return 'It is called Daisy'
    }

    if (/what.*/) {
      /* checks if it contains with time */
      if (/.*time.*/i.test(this.phrase)) {
        return '4:30 pm'
      }
      /* checks if it contains with day*/
      if (/.*day.*/i.test(this.phrase)) {
        return 'Tuesday'
      }
    }
    /* catch all */
    throw "I am afraid I can't do that Dave."
  }
}
module.exports = Hal;
