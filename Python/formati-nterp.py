name = 'Kristine'
age = 12
product = 'Python eLearning course'
from_account = 'Jordan'

greeting = "Product Purchase: {2} - Hi {0}, you are listed as {1} years old. - {3}".format(name, age, product, 'Jordan')

greeting = f"Product Purchase: {product} - Hi {name}, you are listed as {age} years old. - {from_account}"

print(greeting)
Python Documentation
str.format(*args, **kwargs)
Perform a string formatting operation. The string on which this method is called can contain literal text or >
replacement fields delimited by braces {}. Each replacement field contains either the numeric index of a positional >argument, or the name of a keyword argument. 
Returns a copy of the string where each replacement field is >replaced with the string value of the corresponding argument.