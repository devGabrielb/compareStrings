function compareStrings(str1, str2){
    let pairs1 = wordLetterPairs(str1.toUpperCase());

    let pairs2 = wordLetterPairs(str2.toUpperCase());

    let intersection = 0;

    let union = pairs1.length  + pairs2.length;

    for ( i=0; i<pairs1.length; i++) {

        
        for(j=0; j<pairs2.length; j++) {

           

            if (pairs1[i] === pairs2[j]) {

                intersection++;

                pairs2.splice(j,1);

                break;

            }

        }

    }

    return (2.0*intersection)/union;
 }


 function lettersPairs(str){
    let numPairs = str.length -1;

     pairs = [];

    for ( i=0; i<numPairs; i++) {

        
        pairs[i] = str.substring(i,i+2);

    }

    return pairs;
 }


    function wordLetterPairs(str){
            var allPairs = [];

            // Tokenize the string and put the tokens/words into an array

           let words = [];
           words = str.split(" ");

            // For each word

            for ( w=0; w < words.length; w++) {
            
                // Find the pairs of characters

                let pairsInWord = [];
                pairsInWord = lettersPairs(words[w]);

                for (p=0; p < pairsInWord.length; p++) {
                
                    allPairs.push(pairsInWord[p]);

                }

       }

       return allPairs;
    }
    const dataDomains = [
        {
            domain: "Gmail",
            Message: "opa Google",
            confiability: 0.0
        },
        {
            domain: "Hotmail",
            Message: "opa microsoft",
            confiability: 0.0
        },
        {
            domain: "Outlook",
            Message: "opa Outlook",
            confiability: 0.0
        },
        {
            domain: "net",
            Message: "opa net",
            confiability: 0.0
        },
        {
            domain: "Yahoo",
            Message: "opa Yahoo",
            confiability: 0.0
        }
    ];

    function compareDomain(domain, confiabilyCompareStrings){
        let result;
        let confiability = 0.0;
        for(let i = 0; i < dataDomains.length; i++){
            let resultConfiability = compareStrings(domain, dataDomains[i].domain);
            dataDomains[i].confiability = resultConfiability
            
            if(dataDomains[i].confiability >= confiabilyCompareStrings && 
                dataDomains[i].confiability > confiability
                ){
                confiability = dataDomains[i].confiability;
                result = dataDomains[i];
                
            }
        }
    
        return result;
    }
    
    
    console.log("\n\n");
    console.log( compareDomain("hotmart",0.5));