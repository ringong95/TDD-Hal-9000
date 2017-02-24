

describe('Hal', () => {
  let test;

  beforeEach(() => {
    test = {};
    test.Hal = require('../lib/Hal')

  })

  describe('constructor', () => {
    beforeEach(() => {
      test.phrase = 'Hello'
      test.subject = new test.Hal(test.phrase);
    })
    describe('when we pass a field object', () => {
      it('should initialise its state', () => {
        expect(test.subject.phrase).toEqual(test.phrase)
      });
    });
    describe('when we pass in nothing', () => {
      it('should throw an error', () => {
        expect(() => new test.Hal()).toThrow('A phrase is required');
      });
    });
  })
  describe('.listen', () => {
    describe('when passed string that starts with "when"', () => {
      describe('and also contains "is"', () => {
        describe('and also contains it', () => {
          beforeEach(() => {
            test.phrase = 'When is it Hal?'
            test.subject = new test.Hal(test.phrase);
          })
          it(`should return a string stating with "it is"`, () => {
            const regex = /it.*.+is/i;
            const result = regex.test(test.subject.listen(test.phrase));
            test.subject = new test.Hal(test.phrase);
            expect(result).toBe(true);
          })
        })
      })
      beforeEach(() => {
        test.phrase = 'When are you coming home?'
        test.subject = new test.Hal(test.phrase);
      })
      it('should return a string containing am or pm', () => {
        const timeRegex = /.+am|pm.*/i;
        test.subject = new test.Hal(test.phrase);
        const result = timeRegex.test(test.subject.listen(test.phrase));
        expect(result).toBe(true);
      });
    });
    describe('when passed a string that starts with "what"', () => {
      describe('and also contains "is"', () => {
        // what is your name
        describe('and also contains your', () =>{
          describe('and also contains name',()=>{
            it(`should return a string containing "I am a HAL 9000... computer."`, () => {
            const regex = /I AM A HAL 9000/i;
            const result = regex.test(test.subject.listen(test.phrase));
            test.subject = new test.Hal(test.phrase);
            expect(result).toBe(true);
          })
          })
        })
        describe('and also contains it', () => {
          beforeEach(() => {
            test.phrase = 'What is it called?'
            test.subject = new test.Hal(test.phrase);
          })
          it(`should return a string containing "it's called"`, () => {
            const regex = /it.*.+called/i;
            const result = regex.test(test.subject.listen(test.phrase));
            test.subject = new test.Hal(test.phrase);
            expect(result).toBe(true);
          })
        })
      })
      describe('when the string contains "time"', () => {
        beforeEach(() => {
          test.phrase = 'What time are you coming home?'
          test.subject = new test.Hal(test.phrase);
        })
        it('should return a string containing am or pm', () => {
          const timeRegex = /.+am|pm.*/i;
          test.subject = new test.Hal(test.phrase);
          const result = timeRegex.test(test.subject.listen(test.phrase));
          expect(result).toBe(true);
        });
      });
      describe('when the string does not contain "time"', () => {
        describe('when the string also contains "day"', () => {
          beforeEach(() => {
            test.phrase = 'What day are you coming home?'
            test.subject = new test.Hal(test.phrase);
          })
          it('should return a string cotaining a day of the week', () => {
            const dayRegex = /.*monday|tuesday|wednesday|thursday|friday|saturday|sunday.*/i;
            const result = dayRegex.test(test.subject.listen(test.phrase));
            test.subject = new test.Hal(test.phrase);
            expect(result).toBe(true);
          });
        });
      });
    });
    describe('when the string is not reconized', () => {
      beforeEach(() => {
        test.phrase = 'Hamburger chicken bacon'
      })
      it('should throw an error', () => {
        expect(() => new test.Hal(test.phrase)
          .listen())
          .toThrow("I am afraid I can't do that Dave.");
      })
    })
  });
})