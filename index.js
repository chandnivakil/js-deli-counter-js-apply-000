<<<<<<< HEAD

function takeANumber(katzDeliLine, newPersonName) {
    katzDeliLine.push(newPersonName)
    return `Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
   return "There is nobody waiting to be served!"
  }
}



=======
>>>>>>> efd44e0a5114e8be264e767012e1dc2477bc2ad4
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var current = ""
    for (var i = 0; i < katzDeliLine.length; i++) {
<<<<<<< HEAD
       current = `${current}` + `${i+1}` + ". " + `${katzDeliLine[i]}` + ", "
    }
    return "The line is currently: " + current.slice(0, -2) 
=======
       current = `${current}` + `${i+1}` + ". " + `${katzDeliLine[i]}` + ", " 
    }
    splice 
    return "The line is Currently: " + current
>>>>>>> efd44e0a5114e8be264e767012e1dc2477bc2ad4
  }
  else {
      return "The line is currently empty."
  }
}
 