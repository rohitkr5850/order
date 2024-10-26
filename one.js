var sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
    buildSentence: function () {
        if (!this.subject || !this.verb || !this.object) {
            return "Incomplete sentence";
        }
        return this.subject + " " + this.verb + " " + this.object;
    },

    updateProperty: function (property, value) {
        if (this.hasOwnProperty(property)) {
            this[property] = value; 
        } else {
            return "Invalid property"; 
        }
    }
};

console.log(sentenceBuilder.buildSentence());  

sentenceBuilder.updateProperty("verb", "am learning");
console.log(sentenceBuilder.buildSentence()); 

sentenceBuilder.updateProperty("subject", "The cat");
console.log(sentenceBuilder.buildSentence()); 

console.log(sentenceBuilder.updateProperty("mood", "happy")); 

sentenceBuilder.updateProperty("verb", "");
console.log(sentenceBuilder.buildSentence());