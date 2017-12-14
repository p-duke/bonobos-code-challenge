FactoryGirl.define do
  factory :inventory do
    product_id { nil }
    waist { 28 }
    length { 36 }
    style { "jet blues" }
    count { 72 }
  end
end
