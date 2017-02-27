
class Hal {
  constructor(phrase) {
    if (!phrase) throw 'A phrase is required';
    this.phrase = phrase
  }

  listen(phrase) {
    this.phrase = phrase;
    switch (true) {
      /* checks if it starts with 'Do' */
      case /^Do.*/i.test(this.phrase):
        if (/you/i.test(this.phrase)) {
          if (/want.*this.*/i.test(this.phrase)) {
            return 'Is it free?'
          }
        }
      case /.*open.+door.*/i.test(this.phrase):
        return `I'm sorry, Dave. I'm afraid I can't do that.`

      case /Good.*/i.test(this.phrase):
        if (/.*morning.*/) {
          return 'Good Morning Dave'
        }

      /* checks if starts with 'what'*/
      case /^what.*/i.test(this.phrase):
        if (/.*do.*/i.test(this.phrase)) {
          if (/.*want.*/i.test(this.phrase)) {
            if (/.*dinner\W/i.test(this.phrase)) {
              return `I don't know, how about pizza?`
            }
          }
        }

        /* checks if it contains with 'time'*/
        if (/.*time.*/i.test(this.phrase)) {
          return '4:30 pm'
        }
        /* checks if it contains with 'is it'*/
        if (/.*.+is.*.+it/i.test(this.phrase)) {
          return 'It is called Daisy'
        }
        /* checks if it contains with 'is your name'*/
        if (/is.*.+your.*.+name/i.test(this.phrase)) {
          return 'I am the H.A.L 9000. You may call me Hal.';
        }
        /* checks if it contains with 'day'*/
        if (/.*day.*/i.test(this.phrase)) {
          return 'Tuesday'
        }

      /* checks if starts with 'when'*/
      case /^when.*/i.test(this.phrase):
        /* checks if contains with 'is it'*/
        if (/.*.+is.*.+it.*/i.test(this.phrase)) {
          return "it is April 2nd, 1968"
        }
        return '4:30pm'

      /* catch all */
      default:
        throw "I am afraid I can't do that Dave."
    }
  }
}
module.exports = Hal;
