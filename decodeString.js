const decoder = word => {
    let ans = ''
    for (i=1; i<word.length; i++) {
     ans += String.fromCharCode(word.charCodeAt(i) + Number(word[0]))
    }
    return ans
  }
console.log(decoder(`2fcjjm`))