100.times do
  Menu.create(
    dish: Faker::Food.dish,
    description: Faker::HarryPotter.quote,
    price: Faker::Commerce.price.to_f,
  )
end