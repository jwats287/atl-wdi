# asking for subtotal
puts "What's your subtotal?"
subtotal = gets.chomp!
# meal_with_tax = subtotal + tax_value
subtotal = subtotal.to_f
p subtotal
puts "What is your tax rate?"
tax_rate = gets.chomp!
tax_rate = tax_rate.to_f
tax_rate = tax_rate / 100
p "Tax Rate is: #{tax_rate}"

meal_with_tax = (subtotal * tax_rate) + subtotal
p "Meal total with tax #{meal_with_tax}"
# total_value = meal_with_tax * tip_percent/100
p "What percentage tip would you like to leave?"
p "A) 15%"
p "B) 18%"
p "C) 20%"
p "Custom: i.e. .17 or .21"
option = gets.chomp!
if option.upcase == 'A'
    tip_percent = 15
elsif option.upcase == 'B'
    tip_percent = 18
elsif option.upcase == 'C'
    tip_percent = 20
else 
    tip_percent = option.to_f
end
p "You chose to tip #{tip_percent}%"
tip_percent = tip_percent / 100.0
tip_value = tip_percent * meal_with_tax

# total = meal_with_tax + tip_value

total = meal_with_tax + tip_value
p "Total bill: $#{total}"

p "How many people are splitting?"
num_of_people = gets.chomp!
num_of_people = num_of_people.to_i

your_total = total / num_of_people

p "**********************************************"
p "Your individual total is: $#{your_total}"
p "**********************************************"