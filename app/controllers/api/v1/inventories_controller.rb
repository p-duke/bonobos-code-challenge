module Api::V1
  class InventoriesController < ApplicationController
    before_action :set_product
    before_action :set_inventory_item, only: [:show]

    def index
      json_response(@product.inventories)
    end

    def show
      json_response(@inventory)
    end

    private

    def inventory_params
      params.permit(:product_id, :waist, :length, :style, :count)
    end

    def set_product
      @product = Product.find(params[:product_id])
    end

    def set_inventory_item
      @inventory = @product.inventories.find_by!(id: params[:id]) if @product
    end
  end
end
