class Inventory < ApplicationRecord
  belongs_to :product

  validates_presence_of :waist, :length, :style, :count, :product_id
end
