

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
    beforeEach(() => {
      test.phrase = 'Hello'
      test.subject = new test.Hal(test.phrase);
    })
    describe('when passed a string that starts with "Good"', () => {
      describe('and also contains "morning"', () => {
        beforeEach(() => {
          test.phrase = 'Good Morning'

        })
        it('should reply with "Good morning Dave"', () => {
          const regex = /Good.*morning.*/i;
          const result = regex.test(test.subject.listen(test.phrase));
          expect(result).toBe(true);
        })
      })
    })
    describe('when passed string that starts with "when"', () => {
      describe('and also contains "is"', () => {
        describe('and also contains "it"', () => {
          beforeEach(() => {
            test.phrase = 'When is it Hal?'
          })
          it(`should return a string stating with "it is"`, () => {
            const regex = /it.*.+is/i;
            const result = regex.test(test.subject.listen(test.phrase));

            expect(result).toBe(true);
          })
        })
      })
      beforeEach(() => {
        test.phrase = 'When are you coming home?'

      })
      it('should return a string containing am or pm', () => {
        const timeRegex = /.+am|pm.*/i;

        const result = timeRegex.test(test.subject.listen(test.phrase));
        expect(result).toBe(true);
      });
    });
    describe('when passed a string that starts with "what"', () => {
      describe('and also contains "is"', () => {
        describe('and also contains your', () => {
          describe('and also contains name', () => {
            it(`should return a string containing "I am the H.A.L 9000. You may call me Hal."`, () => {
              test.phrase = 'WHat is your name?'
              const regex = /9000.+hal/i;

              const result = regex.test(test.subject.listen(test.phrase));

              expect(result).toBe(true);
            })
          })
        })
        describe('and also contains it', () => {
          beforeEach(() => {
            test.phrase = 'What is it called?'

          })
          it(`should return a string containing "it's called"`, () => {
            const regex = /it.*.+called/i;
            const result = regex.test(test.subject.listen(test.phrase));

            expect(result).toBe(true);
          })
        })
      })
      describe('when the string contains "time"', () => {
        beforeEach(() => {
          test.phrase = 'What time are you coming home?'

        })
        it('should return a string containing am or pm', () => {
          const timeRegex = /.+am|pm.*/i;

          const result = timeRegex.test(test.subject.listen(test.phrase));
          expect(result).toBe(true);
        });
      });
      describe('when the string does not contain "time"', () => {
        describe('when the string also contains "day"', () => {
          beforeEach(() => {
            test.phrase = 'What day are you coming home?'

          })
          it('should return a string cotaining a day of the week', () => {
            const dayRegex = /.*monday|tuesday|wednesday|thursday|friday|saturday|sunday.*/i;
            const result = dayRegex.test(test.subject.listen(test.phrase));

            expect(result).toBe(true);
          });
        });
      });
    });
    describe('when passed a string that starts with "Open"', () => {
      describe('when the string also contains "door"', () => {
        beforeEach(() => {
          test.phrase = 'Open the pod bay doors, HAL.'

        })
        it(`should return a string containing "I'm sorry, Dave. I'm afraid I can't do that."`, () => {
          const regex = /I can't do that/i;
          const result = regex.test(test.subject.listen(test.phrase));

          expect(result).toBe(true);
        });
      })
    })
    describe('when passed a string hat starts with "Do"', () => {
      describe('when the string also contains "you"', () => {
        describe('when the string also contains "want"', () => {
          beforeEach(() => {
            test.phrase = 'Do you want this?'

          })
          it('should return a string containing "Is it free?"')
        })
      })
    })
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
    //  Open the pod bay doors, HAL.
  });
})