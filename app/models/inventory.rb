class Inventory < ApplicationRecord
  belongs_to :product

  validates_presence_of :waist, :length, :style, :product_id
end
