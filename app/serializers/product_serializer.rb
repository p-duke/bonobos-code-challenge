class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description
  has_many :inventories
end
