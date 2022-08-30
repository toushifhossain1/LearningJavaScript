fName = "Toushif"
lName = "Hossain"

document.write(fName + " " + lName)

// toFixed is used to return the decimal (empty for 0 DP) string

num1 = 20.5663545
document.write("The number to no DP is " + num1.toFixed())
document.write("The number to no 2 DP is " + num1.toFixed(2))

//toPrecision is used to return the significant fugure string to show

document.write("The 1 sf of number is : " + num1.toPrecision(1))

document.write("The 2 sf of number is : " + num1.toPrecision(2))

document.write("The 3 sf of number is : " + num1.toPrecision(3))

// Number or parseInt function string to number
stringNumber = "25.5"
numberStringModified = Number(stringNumber)
document.write("Converted from string to number: " + numberStringModified)