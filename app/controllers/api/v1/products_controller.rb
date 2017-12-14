module Api::V1
  class ProductsController < ApplicationController
    before_action :set_product, only: [:show]

    def index
      @product = Product.all
      json_response(@product)
    end

    def show
      json_response(@product)
    end

    private

    def product
      params.permit(:name, :image, :description)
    end

    def set_product
      @product = Product.find(params[:id])
    end
  end
end
