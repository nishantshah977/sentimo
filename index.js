class sentiment{
  constructor(){
    this.sentiment = require("./data.json");
  }
  analyze(text){
    let score = 0;
  let count = 0;
   const words = text.split(' ');
    for(let i = 0;i<=words.length;i++){
      let word = words[i];
      if(this.sentiment[word]){
        score += this.sentiment[word];
        count++;
    }
    }
    const sentimentScore = count > 0 ? score / count : 0;
    let sentimentLabel = 'neutral';
    if(sentimentScore > 0.5){
      sentimentLabel = 'positive';
    } else if (sentimentScore < -0.5) {
      sentimentLabel = 'negative';
    }

    return { sentiment: sentimentLabel, score: sentimentScore };
  }
}
