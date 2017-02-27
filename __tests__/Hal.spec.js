

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
    // what do you want for dinner?
    //  I dont know, how about pizza?
    describe('when passed a string that starts with "what"', () => {
      describe('and it also contains "do"', () => {
        describe('and it also contains "you"', () => {
          describe('and it also contains "want"', () => {
            describe('and it also contains "dinner"', () => {
              it(`should return a string containing "I don't know, how about pizza?"`, () => {
                test.phrase = 'What do you want for dinner?'
                const regex = /i.*(dont|don't).*know/i;
                const result = regex.test(test.subject.listen(test.phrase));
                expect(result).toBe(true);
              })
            })
          })
        })
      })
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
          it(`should return a string containing "it's called"`, () => {
            test.phrase = 'What is it called?'
            const regex = /it.*.+called/i;
            const result = regex.test(test.subject.listen(test.phrase));
            expect(result).toBe(true);
          })
        })
      })
      describe('when the string contains "time"', () => {
        it('should return a string containing am or pm', () => {
          const timeRegex = /.+am|pm.*/i;
          test.phrase = 'What time are you coming home?'
          const result = timeRegex.test(test.subject.listen(test.phrase));
          expect(result).toBe(true);
        });
      });
      describe('when the string does not contain "time"', () => {
        describe('when the string also contains "day"', () => {
          it('should return a string cotaining a day of the week', () => {
            test.phrase = 'What day are you coming home?'
            const dayRegex = /.*monday|tuesday|wednesday|thursday|friday|saturday|sunday.*/i;
            const result = dayRegex.test(test.subject.listen(test.phrase));
            expect(result).toBe(true);
          });
        });
      });
    });
    describe('when passed a string that starts with "Open"', () => {
      describe('when the string also contains "door"', () => {
        it(`should return a string containing "I'm sorry, Dave. I'm afraid I can't do that."`, () => {
          test.phrase = 'Open the pod bay doors, HAL.'
          const regex = /I can't do that/i;
          const result = regex.test(test.subject.listen(test.phrase));
          expect(result).toBe(true);
        });
      })
    })
    describe('when passed a string hat starts with "Do"', () => {
      describe('when the string also contains "you"', () => {
        describe('when the string also contains "want"', () => {
          it(`should return a string containing "Is it free?"`, () => {
            test.phrase = 'Do you want this?'
            const regex = /is.+it.+free/i;
            const result = regex.test(test.subject.listen(test.phrase));
            expect(result).toBe(true);
          });
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

    });
  })
})