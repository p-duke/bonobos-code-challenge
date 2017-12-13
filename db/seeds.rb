require 'csv'

product_csv_file = Rails.root.join('db', 'products.csv')
CSV.foreach(product_csv_file, headers: false,  quote_char: "|", col_sep: "|") do |row|
  header = ["product_id", "product_name", "product_image", "product_description"]
  data = row[0].gsub(/\"/, "").split(',', 4).map(&:strip)
  !(header - data).empty? ? row_data = Hash[header.zip(data)] : next
  Product.create(name: row_data["product_name"], image: row_data["product_image"], description: row_data["product_description"])
end

inventory_csv_file = Rails.root.join('db', 'inventory.csv')
CSV.foreach(inventory_csv_file, headers: true) do |row|
  Inventory.create!(product_id: row["product_id"].to_i, waist: row[" waist"].to_i, length: row[" length"].to_i, style: row[" style"].strip, count: row[" count"].to_i)
end

