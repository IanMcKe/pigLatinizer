describe('punctuationChecker', function() {
    it('removes a single instance of punctuation from inside a word and adds it to the end of the word', function() {
        expect(punctuationChecker("ello!hay", ["!","?",".",","])).to.equal("ellohay!")
    });

    it('removes all punctuation from inside a word and adds it to the end of the word', function() {
        expect(punctuationChecker("ello,!.?hay", ["!","?",".",","])).to.equal("ellohay,!.?")
    });
});


describe('inArray', function() {
    it("returns true if something is in an array", function() {
        expect(inArray("eye", ["eyeing", "eye", "eyer", "eyeeye"])).to.equal(true);
    });

    it('returns false is something is not in an array', function() {
        expect(inArray("eye",["nose","ear","eyeeye","mouth"])).to.equal(false);
    });
});


describe('pigLatinizer', function() {
    it("appends 'ay' to the end of a word starting with a vowel", function() {
        expect(pigLatinizer("eye")).to.equal("eyeay");
    });

    it("moves the first letter of a word to the end and adds 'ay' if it is a consonant", function() {
        expect(pigLatinizer("hear")).to.equal("earhay");
    });

    it('splits at grouped consonants and pushes those to the end of the word before adding "-ay"', function() {
        expect(pigLatinizer("strawberry")).to.equal('awberrystray');
    });

    it('ignores the "u" in any word beginning with "-qu"', function() {
        expect(pigLatinizer("quality")).to.equal('alityquay');
    });

    it('ignores the "qu if it is in the middle of the word"', function() {
        expect(pigLatinizer("squeal")).to.equal('ealsquay');
    });

    it('treats y as a vowel if it is in the middle of a word', function() {
        expect(pigLatinizer("synergy")).to.equal("ynergysay");
    });

    it('can translate a full sentence', function() {
        expect(pigLatinizer('iPad pro better than desktop')).to.equal('ipaday opray etterbay anthay esktopday')
    });

    it('leaves the punctuation within words', function() {
        expect(pigLatinizer('I can\'t think of a sentence!')).to.equal('iay an\'tcay inkthay ofay aay entencesay!')
    });
});
