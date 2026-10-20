number = 1

while number <= 100:
    if number % 2 == 0:
        print(number)
    number = number + 1

number=2

while number<=100:
    print(number)
    number=number+2

for number in range(1,101):

  if number %2==0:
      print(number)

for number in range(2,101,2):
   print(number)

first_name = input("Enter your first name: ")

while not first_name.isalpha():
    print("Invalid name. Please use letters only.")
    first_name = input("Enter your first name again: ")

last_name = input("Enter your last name: ")

while not last_name.isalpha():
    print("Invalid name. Please use letters only.")
    last_name = input("Enter your last name again: ")

full_name = first_name + " " + last_name

a_count = 0
f_count = 0

for letter in full_name:
    if letter == "a" or letter=="A":
        a_count=a_count+1
        
    if letter == "f" or letter=="F":
        f_count=f_count+1

print("Name:", full_name)
print("Number of a:", a_count)
print("Number of f:", f_count)