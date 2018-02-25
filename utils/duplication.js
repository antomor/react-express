/** 
 * This class encloses the business loginc of the
 * duplication count
*/
class DuplicationCounter {
  /**
   * Count the number of occurences of a string in another string
   * @param {string} strToCount String to be counted
   * @param {string} containerString String in which the strToCunt parameter is looked for 
   */
  countOccurences(strToCount, containerString) {
    const regex = new RegExp(strToCount, 'g');
    const occurences = containerString.match(regex);
    if ( occurences && occurences.length) {
      return occurences.length;
    }
    return 0;
  }

  fixedLengthCount(str, fixedLength) {
    let ret = {};
    const strLength = str.length;
    for (let i = 0; i < strLength; i++) {
      const length = fixedLength;
      const key = str.substr(i, length);
      if ( !ret.hasOwnProperty(key) ) {
        const remaining = str.substr(i+1, str.length-i);
        const regex = new RegExp(key, 'g');
        const occurences = this.countOccurences(key, remaining);
        if (occurences > 0 ) {
          ret[key] = occurences+1;
        }
      }
    }
    return ret;
  }

  countAllDuplicates(str) {
    let ret = {};
    for (let i = 0; i < str.length-1; i++) {
      for (let j = i+1; j < str.length; j++) {
        const key = str.substring(i, j);
        const remaining = str.substring(j, str.length);
        console.log(`Key: ${key}, remaining: ${remaining}`)
        if ( !ret.hasOwnProperty(key)) {
          const occurences = this.countOccurences(key, remaining);
          if (occurences > 0) {
            ret[key] = occurences+1;
          }
        }
      }
    }
    return ret;
  }
  
  /**
   * The funcation calculate the duplication of a substring within the initial string.
   * 
   * @param {string} str The string to be analyzed (Required)
   * @param {number} maxLength the maximum length of the repetition to be considered [Optional(default=1)]
   */
  count(str, maxLength = -1) {
    if ( maxLength > 0 ){
      console.log('count fixed length');
      return this.fixedLengthCount(str, maxLength);
    } else {
      console.log('all duplicates');
      return this.countAllDuplicates(str);
    }
  }

}
module.exports = DuplicationCounter;