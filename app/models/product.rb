class Product < ApplicationRecord
  has_many :inventories, dependent: :destroy

  validates_presence_of :name, :image, :description
end
